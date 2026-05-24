"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 130;
const CONNECT_DIST = 3.4;

export default function ParticleNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Scene setup ──────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── Geometry ─────────────────────────────────────────────────────────────
    const group = new THREE.Group();
    scene.add(group);

    const posArr: number[] = [];
    const vecs: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 7;
      posArr.push(x, y, z);
      vecs.push(new THREE.Vector3(x, y, z));
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(posArr), 3)
    );
    const ptMat = new THREE.PointsMaterial({
      color: 0xe2e8f0,
      size: 0.055,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    group.add(new THREE.Points(ptGeo, ptMat));

    const linePos: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        if (vecs[i].distanceTo(vecs[j]) < CONNECT_DIST) {
          linePos.push(
            vecs[i].x, vecs[i].y, vecs[i].z,
            vecs[j].x, vecs[j].y, vecs[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePos), 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.14,
    });
    group.add(new THREE.LineSegments(lineGeo, lineMat));

    // ── Mouse parallax ───────────────────────────────────────────────────────
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouse = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.45;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Animation loop ───────────────────────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      currentX += (targetX - currentX) * 0.025;
      currentY += (targetY - currentY) * 0.025;

      group.rotation.y = t * 0.04 + currentX;
      group.rotation.x = currentY;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      ptGeo.dispose();
      ptMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
