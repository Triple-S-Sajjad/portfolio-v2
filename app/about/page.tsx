"use client";

import { motion } from "motion/react";
import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────
type Education = {
  year: string; role: string; org: string;
  type: "education"; detail: string;
};
type Experience = {
  year: string; role: string; org: string;
  type: "experience"; bullets: string[];
};
type TimelineItem = Education | Experience;

// ── Data ─────────────────────────────────────────────────────────────────────
const CARD_FIELDS = [
  { label: "Location",  value: "Cleveland, Ohio"                  },
  { label: "Degree",    value: "M.S. Computer Science"            },
  { label: "School",    value: "Cleveland State University"        },
  { label: "Status",    value: "Open to DevOps Roles · Fall 2026" },
  { label: "Focus",     value: "Cloud Infrastructure & Automation" },
  { label: "Languages", value: "English · Urdu · Hindi"           },
];

const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — 2026",
    role: "M.S. Computer Science",
    org:  "Cleveland State University",
    type: "education",
    detail:
      "Relevant coursework: Cloud Computing, Distributed Systems, " +
      "Network Security, Software Engineering",
  },
  {
    year: "2022",
    role: "Web Developer Intern",
    org:  "CoreCellent Technologies · Hybrid",
    type: "experience",
    bullets: [
      "Built and tested features using Python, HTML, CSS, and JavaScript",
      "Collaborated using Git in a Linux-based development environment",
      "Documented system functionality and feature behavior",
    ],
  },
];

const BUILDING = [
  "AWS Cloud Practitioner cert",
  "Kubernetes on production clusters",
  "CI/CD pipeline automation",
];

// ── Shared style token ───────────────────────────────────────────────────────
const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

// ── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-50px" } as const,
  transition:  { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main style={{ paddingTop: "62px", background: "var(--bg)" }}>

      {/* ════════════════════════════════════ SECTION 1 · HERO INTRO */}
      <section style={{ padding: "120px 88px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "6fr 4fr",
          gap: "80px",
          alignItems: "start",
        }}>

          {/* ── Left 60% ── */}
          <div>

            {/* Eyebrow */}
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
              01 / About
            </motion.p>

            {/* Heading */}
            <div style={{ overflow: "hidden", marginBottom: "40px" }}>
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
                WHO I AM
              </motion.h1>
            </div>

            {/* Bio paragraphs — stagger on load */}
            <div style={{ maxWidth: "560px" }}>
              {[
                "I grew up in Gulbarga, India, and am currently based in Cleveland, Ohio, pursuing my M.S. in Computer Science at Cleveland State University.",
                "DevOps sits at the intersection of everything I love about engineering — code, infrastructure, automation, and cloud. The same skill set touches every layer of a modern system, and that breadth is exactly what I want to master.",
                "Currently building hands-on projects across AWS, Kubernetes, and Terraform — focused on infrastructure automation, CI/CD pipelines, and cloud-native deployments.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontFamily: mono,
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "rgba(241,245,249,0.7)",
                    margin: 0,
                    marginBottom: i < 2 ? "20px" : 0,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* ── Right 40% · sticky card ── */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "sticky",
              top: "100px",
              border: "1px solid rgba(226,232,240,0.1)",
              background: "rgba(226,232,240,0.03)",
              borderRadius: "2px",
              padding: "32px",
            }}
          >
            {CARD_FIELDS.map(({ label, value }, i) => (
              <div key={label}>
                <p style={{
                  fontFamily: mono,
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  margin: "0 0 8px 0",
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: mono,
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--em)",
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {value}
                </p>
                {i < CARD_FIELDS.length - 1 && (
                  <div style={{
                    height: "1px",
                    background: "rgba(226,232,240,0.08)",
                    margin: "20px 0",
                  }} />
                )}
              </div>
            ))}
          </motion.aside>

        </div>
      </section>

      {/* ════════════════════════════════════ SECTION 2 · TIMELINE */}
      <section style={{ padding: "0 88px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr" }}>

          {/* Sticky rotated side label */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "sticky",
              top: "40%",
              display: "flex",
              justifyContent: "center",
            }}>
              <span style={{
                fontFamily: mono,
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--muted)",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}>
                Background
              </span>
            </div>
          </div>

          {/* Timeline content */}
          <div style={{
            borderLeft: "1px solid rgba(226,232,240,0.1)",
            paddingLeft: "48px",
          }}>
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.role}
                {...fadeUp(0)}
                style={{
                  position: "relative",
                  marginBottom: idx < TIMELINE.length - 1 ? "60px" : 0,
                }}
              >
                {/* Border dot */}
                <div style={{
                  position: "absolute",
                  left: "-51px",
                  top: "14px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--em)",
                  zIndex: 1,
                }} />

                {/* Decorative year */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: 0,
                    fontFamily: "var(--serif)",
                    fontSize: "48px",
                    color: "rgba(226,232,240,0.08)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                    zIndex: 0,
                  }}
                >
                  {item.year}
                </div>

                {/* Item content */}
                <div style={{ position: "relative", zIndex: 1, paddingTop: "4px" }}>

                  {/* Type label */}
                  <p style={{
                    fontFamily: mono,
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    margin: "0 0 12px 0",
                  }}>
                    {item.type}
                  </p>

                  {/* Role title */}
                  <h3 style={{
                    fontFamily: mono,
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "var(--em)",
                    lineHeight: 1.2,
                    margin: "0 0 6px 0",
                  }}>
                    {item.role}
                  </h3>

                  {/* Org */}
                  <p style={{
                    fontFamily: mono,
                    fontSize: "13px",
                    color: "var(--muted)",
                    margin: "0 0 16px 0",
                  }}>
                    {item.org}
                  </p>

                  {/* Education: coursework */}
                  {item.type === "education" && (
                    <p style={{
                      fontFamily: mono,
                      fontSize: "13px",
                      color: "rgba(241,245,249,0.6)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {item.detail}
                    </p>
                  )}

                  {/* Experience: bullets */}
                  {item.type === "experience" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {item.bullets.map((b) => (
                        <div key={b} style={{
                          display: "flex",
                          gap: "10px",
                          fontFamily: mono,
                          fontSize: "13px",
                          color: "rgba(241,245,249,0.6)",
                          lineHeight: 1.7,
                        }}>
                          <span style={{ color: "var(--muted)", flexShrink: 0 }}>·</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════ SECTION 3 · CURRENTLY BUILDING */}
      <section style={{
        background: "rgba(226,232,240,0.03)",
        borderTop: "1px solid rgba(226,232,240,0.08)",
        borderBottom: "1px solid rgba(226,232,240,0.08)",
        padding: "48px 88px",
      }}>

        <motion.p
          {...fadeUp(0)}
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: "0 0 32px 0",
          }}
        >
          Currently Building
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {BUILDING.map((item, i) => (
            <motion.div
              key={item}
              {...fadeUp(i * 0.1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingLeft:  i === 0 ? "0"    : "32px",
                paddingRight: i === 2 ? "0"    : "32px",
                borderRight: i < 2
                  ? "1px solid rgba(226,232,240,0.08)"
                  : "none",
              }}
            >
              <span style={{ fontFamily: mono, fontSize: "14px", color: "var(--mint)", flexShrink: 0 }}>
                →
              </span>
              <span style={{ fontFamily: mono, fontSize: "14px", color: "var(--em)" }}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.4)}
          style={{ marginTop: "32px", textAlign: "center" }}
        >
          <Link
            href="/projects"
            style={{
              fontFamily: mono,
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              display: "inline-block",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--em)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
            }}
          >
            See what I&apos;m building →
          </Link>
        </motion.div>

      </section>

    </main>
  );
}
