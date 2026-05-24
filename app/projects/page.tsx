"use client";

import { motion } from "motion/react";
import Link from "next/link";

// ── Shared token ─────────────────────────────────────────────────────────────
const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

// ── Data ─────────────────────────────────────────────────────────────────────
const DEVOPS = [
  {
    num:    "01",
    title:  "k8s-flask-app",
    tags:   ["Kubernetes", "Minikube", "Flask", "Docker"],
    desc:   "Containerized a Flask application and deployed it on a local Kubernetes cluster using Minikube. Wrote deployment and service manifests, configured NodePort exposure, and managed pod replicas and scheduling.",
    github: "https://github.com/Triple-S-Sajjad/k8s-flask-app",
  },
  {
    num:    "02",
    title:  "terraform-aws-infra",
    tags:   ["Terraform", "AWS", "HCL", "IaC"],
    desc:   "Provisioned AWS infrastructure using Terraform. Managed cloud resources as code with variables and outputs, practicing the full infrastructure lifecycle — init, plan, apply, destroy.",
    github: "https://github.com/Triple-S-Sajjad/terraform-aws-infra",
  },
  {
    num:    "03",
    title:  "docker-dev-stack",
    tags:   ["Docker", "Docker Compose", "Python"],
    desc:   "Built a multi-container development environment using Docker Compose. Wrote multi-stage Dockerfiles, configured container networking, managed environment variables, and implemented database health checks.",
    github: "https://github.com/Triple-S-Sajjad/docker-dev-stack",
  },
] as const;

const PRIOR = [
  {
    title:  "E-commerce Web App",
    tags:   ["Python", "Django", "Backend"],
    desc:   "Full-stack e-commerce application with Django backend. Implemented product workflows, data handling, and backend logic.",
    github: undefined,
  },
  {
    title:  "Alumni Management System",
    tags:   ["PHP", "JavaScript", "HTML/CSS"],
    desc:   "Group project — web-based alumni management platform with PHP backend and CRUD operations.",
    github: undefined,
  },
  {
    title:  "QuickSort Student Sorter",
    tags:   ["Python", "Algorithms"],
    desc:   "QuickSort implementation to sort student records by score.",
    github: "https://github.com/Triple-S-Sajjad/QuickSort-Student-Sorter",
  },
] as const;

// ── Card component ────────────────────────────────────────────────────────────
// Two-motion-div pattern: outer handles entrance, inner handles hover lift.
// This prevents the entrance delay from bleeding into hover transitions.
function Card({
  delay,
  num,
  title,
  tags,
  desc,
  github,
  reduced = false,
}: {
  delay:    number;
  num?:     string;
  title:    string;
  tags:     readonly string[];
  desc:     string;
  github?:  string;
  reduced?: boolean;
}) {
  const bg         = reduced ? "rgba(226,232,240,0.02)" : "rgba(226,232,240,0.03)";
  const borderBase = reduced ? "rgba(226,232,240,0.07)" : "rgba(226,232,240,0.1)";
  const pad        = reduced ? "24px" : "32px";
  const accentBg   = reduced ? "rgba(226,232,240,0.3)"  : "var(--em)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: "100%" }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "100%",
          background: bg,
          border: `1px solid ${borderBase}`,
          borderRadius: "2px",
          padding: pad,
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.2s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,232,240,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = borderBase;
        }}
      >

        {/* Top accent line */}
        <div style={{
          height: "2px",
          width: "40px",
          background: accentBg,
          marginBottom: "24px",
          flexShrink: 0,
        }} />

        {/* Number */}
        {num && (
          <p style={{
            fontFamily: mono,
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "var(--muted)",
            margin: "0 0 16px 0",
          }}>
            {num}
          </p>
        )}

        {/* Title */}
        <h3 style={{
          fontFamily: mono,
          fontSize: "20px",
          fontWeight: 600,
          color: "var(--em)",
          lineHeight: 1.2,
          margin: "0 0 12px 0",
        }}>
          {title}
        </h3>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: mono,
                fontSize: "10px",
                border: "1px solid rgba(226,232,240,0.15)",
                padding: "3px 10px",
                color: "var(--muted)",
                letterSpacing: "0.1em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description — flex:1 pushes footer to bottom */}
        <p style={{
          fontFamily: mono,
          fontSize: "13px",
          color: "rgba(241,245,249,0.6)",
          lineHeight: 1.7,
          margin: "0 0 24px 0",
          flex: 1,
        }}>
          {desc}
        </p>

        {/* Footer — GitHub link or muted divider */}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: mono,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              borderTop: "1px solid rgba(226,232,240,0.08)",
              paddingTop: "16px",
              display: "block",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--em)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
            }}
          >
            → View on GitHub
          </a>
        ) : (
          <div style={{
            borderTop: "1px solid rgba(226,232,240,0.08)",
            paddingTop: "16px",
          }}>
            <span style={{
              fontFamily: mono,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(148,163,184,0.25)",
            }}>
              Private
            </span>
          </div>
        )}

      </motion.div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: "62px", background: "var(--bg)" }}>

      {/* ════════════════════════════════════ HEADER */}
      <section style={{ padding: "120px 88px 60px" }}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: "0 0 20px 0",
          }}
        >
          02 / Projects
        </motion.p>

        <div style={{ overflow: "hidden", marginBottom: "16px" }}>
          <motion.h1
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(64px, 8vw, 96px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--em)",
              margin: 0,
            }}
          >
            WHAT I BUILD
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: "12px 0 0 0",
          }}
        >
          Infrastructure · Automation · Cloud
        </motion.p>

      </section>

      {/* ════════════════════════════════════ DEVOPS & CLOUD */}
      <section style={{ padding: "0 88px 80px" }}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: "0 0 24px 0",
          }}
        >
          DevOps &amp; Cloud
        </motion.p>

        {/* 3-column grid — 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
          {DEVOPS.map((p, i) => (
            <Card key={p.title} delay={i * 0.1} {...p} />
          ))}
        </div>

      </section>

      {/* ════════════════════════════════════ PRIOR WORK DIVIDER */}
      <div style={{ padding: "0 88px" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            margin: "0 0 40px 0",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(226,232,240,0.08)" }} />
          <span style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            whiteSpace: "nowrap",
          }}>
            Prior Work
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(226,232,240,0.08)" }} />
        </motion.div>
      </div>

      {/* ════════════════════════════════════ PRIOR WORK CARDS */}
      <section style={{ padding: "0 88px 80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
          {PRIOR.map((p, i) => (
            <Card key={p.title} delay={i * 0.05} reduced {...p} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ BOTTOM CTA */}
      <section style={{
        padding: "80px 88px",
        borderTop: "1px solid rgba(226,232,240,0.06)",
        textAlign: "center",
      }}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "13px",
            color: "var(--muted)",
            margin: "0 0 16px 0",
          }}
        >
          Interested in working together?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "24px",
              color: "var(--em)",
              letterSpacing: "0.02em",
              display: "inline-block",
              transition: "letter-spacing 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.letterSpacing = "0.07em";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.letterSpacing = "0.02em";
            }}
          >
            GET IN TOUCH →
          </Link>
        </motion.div>

      </section>

    </main>
  );
}
