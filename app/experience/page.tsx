"use client";

import { motion } from "motion/react";
import Link from "next/link";

const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

const STACK = ["Python", "HTML", "CSS", "JavaScript", "Git", "Linux"];

const BULLETS = [
  "Built and tested new features across the full stack using Python, HTML, CSS, and JavaScript",
  "Collaborated with a small team using Git for version control in a Linux-based dev environment",
  "Documented system functionality, feature behavior, and internal processes for the team",
  "Wrote and maintained backend logic for a web application with Django",
  "Participated in code reviews and contributed feedback on teammates' pull requests",
  "Worked in a hybrid setting, coordinating async with remote team members across time zones",
];

const LOOKING_STATS = [
  { value: "Fall 2026", label: "Availability"   },
  { value: "Full-Time", label: "Role Type"      },
  { value: "OPT / CPT", label: "Authorization"  },
];

export default function ExperiencePage() {
  return (
    <main style={{ paddingTop: "62px", background: "var(--bg)" }}>

      {/* ════════════════════════════════════ HEADER */}
      <section style={{ padding: "120px 88px 80px" }}>

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
          04 / Experience
        </motion.p>

        <div style={{ overflow: "hidden" }}>
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
            WHERE I&apos;VE WORKED
          </motion.h1>
        </div>

      </section>

      {/* ════════════════════════════════════ ROLE BLOCK */}
      <section style={{ padding: "0 88px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "35fr 65fr",
          gap: "64px",
          alignItems: "start",
        }}>

          {/* ── Left: company meta ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Company */}
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 12px 0",
            }}>
              Company
            </p>
            <p style={{
              fontFamily: mono,
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--em)",
              margin: "0 0 24px 0",
              lineHeight: 1.3,
            }}>
              CoreCellent Technologies
            </p>

            {/* Role */}
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 8px 0",
            }}>
              Role
            </p>
            <p style={{
              fontFamily: mono,
              fontSize: "15px",
              color: "var(--em)",
              margin: "0 0 24px 0",
            }}>
              Web Developer Intern
            </p>

            {/* Period */}
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 8px 0",
            }}>
              Period
            </p>
            <p style={{
              fontFamily: mono,
              fontSize: "14px",
              color: "var(--em)",
              margin: "0 0 24px 0",
            }}>
              March 2022 – June 2022
            </p>

            {/* Type badge */}
            <span style={{
              display: "inline-block",
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              border: "1px solid rgba(226,232,240,0.15)",
              padding: "5px 14px",
              borderRadius: "2px",
              marginBottom: "32px",
            }}>
              Hybrid
            </span>

            {/* Stack pills */}
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 12px 0",
            }}>
              Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STACK.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: mono,
                    fontSize: "10px",
                    border: "1px solid rgba(226,232,240,0.15)",
                    padding: "3px 10px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: responsibilities ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderLeft: "1px solid rgba(226,232,240,0.1)",
              paddingLeft: "48px",
            }}
          >
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 28px 0",
            }}>
              Responsibilities
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {BULLETS.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.4 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "flex", gap: "14px" }}
                >
                  <span style={{
                    fontFamily: mono,
                    fontSize: "13px",
                    color: "var(--muted)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    ·
                  </span>
                  <span style={{
                    fontFamily: mono,
                    fontSize: "14px",
                    color: "rgba(241,245,249,0.65)",
                    lineHeight: 1.75,
                  }}>
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════ DIVIDER */}
      <div style={{ padding: "0 88px" }}>
        <div style={{
          height: "1px",
          background: "rgba(226,232,240,0.08)",
          marginBottom: "80px",
        }} />
      </div>

      {/* ════════════════════════════════════ LOOKING AHEAD */}
      <section style={{ padding: "0 88px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}>

          {/* Left: heading + text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 20px 0",
            }}>
              Looking Ahead
            </p>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--em)",
              margin: "0 0 24px 0",
            }}>
              Seeking DevOps Internships
            </h2>
            <p style={{
              fontFamily: mono,
              fontSize: "14px",
              color: "rgba(241,245,249,0.6)",
              lineHeight: 1.8,
              margin: 0,
            }}>
              I&apos;m actively looking for DevOps, cloud, or infrastructure internship roles
              starting Fall 2026. I bring hands-on experience with Docker, Kubernetes, Terraform,
              and AWS — built through real projects, not just coursework.
            </p>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {LOOKING_STATS.map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  padding: "24px 0",
                  borderBottom: i < LOOKING_STATS.length - 1
                    ? "1px solid rgba(226,232,240,0.08)"
                    : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{
                  fontFamily: mono,
                  fontSize: "9px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  {label}
                </span>
                <span style={{
                  fontFamily: mono,
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--em)",
                }}>
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

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
