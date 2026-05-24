"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const RADIUS = 2.8;

// 12 AWS regions [lat, lon]
const REGIONS = [
  { lat:  39.0, lon:  -77.5 }, // 0  US East (N. Virginia)
  { lat:  45.5, lon: -122.0 }, // 1  US West (Oregon)
  { lat:  53.3, lon:   -6.3 }, // 2  EU West (Ireland)
  { lat:  50.1, lon:    8.7 }, // 3  EU Central (Frankfurt)
  { lat:   1.4, lon:  103.8 }, // 4  AP Southeast (Singapore)
  { lat:  35.7, lon:  139.7 }, // 5  AP Northeast (Tokyo)
  { lat:  19.1, lon:   72.9 }, // 6  AP South (Mumbai)
  { lat: -23.5, lon:  -46.6 }, // 7  SA East (São Paulo)
  { lat:  45.5, lon:  -73.6 }, // 8  CA Central (Montreal)
  { lat:  26.2, lon:   50.6 }, // 9  ME South (Bahrain)
  { lat: -33.9, lon:   18.4 }, // 10 AF South (Cape Town)
  { lat: -33.9, lon:  151.2 }, // 11 AU Sydney
];

const ARC_PAIRS: [number, number][] = [
  [0, 1],
  [1, 4],
  [4, 5],
  [0, 3],
  [3, 6],
  [6, 8],
  [2, 7],
  [5, 9],
];

function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const latR = lat * (Math.PI / 180);
  const lonR = lon * (Math.PI / 180);
  return new THREE.Vector3(
    r * Math.cos(latR) * Math.cos(lonR),
    r * Math.sin(latR),
    r * Math.cos(latR) * Math.sin(lonR)
  );
}

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── Scene / Camera ─────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 7.5;

    // ── Disposal registry ──────────────────────────────────────────────────
    const trash: (THREE.BufferGeometry | THREE.Material)[] = [];

    // ── Groups ─────────────────────────────────────────────────────────────
    // pivot: mouse parallax tilt
    // spinner: auto Y-rotation (child of pivot)
    const pivot = new THREE.Group();
    const spinner = new THREE.Group();
    pivot.add(spinner);
    scene.add(pivot);

    // ── Wireframe sphere ───────────────────────────────────────────────────
    const sphereGeo = new THREE.SphereGeometry(RADIUS, 30, 30);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xcbd5e1,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    trash.push(sphereGeo, sphereMat);
    spinner.add(new THREE.Mesh(sphereGeo, sphereMat));

    // ── Node positions (in spinner-local space) ────────────────────────────
    const nodeVecs = REGIONS.map(({ lat, lon }) => latLonToVec3(lat, lon, RADIUS));

    // ── Arc curves + tube meshes (in spinner so they rotate with the globe) ──
    const curves: THREE.CatmullRomCurve3[] = [];

    for (const [i, j] of ARC_PAIRS) {
      const a = nodeVecs[i];
      const b = nodeVecs[j];
      const dist = a.distanceTo(b);

      const pts: THREE.Vector3[] = [];
      for (let k = 0; k <= 20; k++) {
        const t = k / 20;
        const p = new THREE.Vector3().lerpVectors(a, b, t).normalize();
        const lift = 1 + Math.sin(Math.PI * t) * (dist / RADIUS) * 0.15;
        p.multiplyScalar(RADIUS * lift);
        pts.push(p);
      }

      const curve = new THREE.CatmullRomCurve3(pts);
      curves.push(curve);

      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.008, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0xcbd5e1,
        transparent: true,
        opacity: 0.2,
      });
      trash.push(tubeGeo, tubeMat);
      spinner.add(new THREE.Mesh(tubeGeo, tubeMat));
    }
    console.log("arc count:", curves.length);

    // ── Node meshes ────────────────────────────────────────────────────────
    const nodeGeo = new THREE.SphereGeometry(0.044, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
    trash.push(nodeGeo, nodeMat);

    const nodeMeshes: THREE.Mesh[] = nodeVecs.map((pos) => {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(pos);
      spinner.add(mesh);
      return mesh;
    });

    // ── Traveling dot (inside spinner so it rotates with globe) ───────────
    const dotGeo = new THREE.SphereGeometry(0.05, 10, 10);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    trash.push(dotGeo, dotMat);
    const travelDot = new THREE.Mesh(dotGeo, dotMat);
    spinner.add(travelDot);

    let arcT = 0;
    let arcIdx = 0;

    // ── Mouse parallax ─────────────────────────────────────────────────────
    let tgtX = 0, tgtY = 0, curX = 0, curY = 0;
    const onMouse = (e: MouseEvent) => {
      tgtX = (e.clientX / window.innerWidth  - 0.5) * 0.35;
      tgtY = (e.clientY / window.innerHeight - 0.5) * 0.25;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Animation loop ─────────────────────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Auto-rotate + mouse tilt
      spinner.rotation.y += 0.0008;
      curX += (tgtX - curX) * 0.035;
      curY += (tgtY - curY) * 0.035;
      pivot.rotation.x = -curY * 0.6;
      pivot.rotation.z = -curX * 0.3;

      // Node pulsing — staggered sine per node
      nodeMeshes.forEach((mesh, i) => {
        const s = 1 + 0.38 * Math.abs(Math.sin(elapsed * 1.4 + i * 0.72));
        mesh.scale.setScalar(s);
      });

      // Traveling dot along arc curves
      arcT += 0.004;
      if (arcT >= 1) {
        arcT = 0;
        arcIdx = (arcIdx + 1) % curves.length;
      }
      travelDot.position.copy(curves[arcIdx].getPoint(arcT));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouse);
      trash.forEach((o) => o.dispose());
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
