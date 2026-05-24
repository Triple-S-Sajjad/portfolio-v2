"use client";

import { motion } from "motion/react";

// ── Shared token ─────────────────────────────────────────────────────────────
const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

// ── Data ─────────────────────────────────────────────────────────────────────
type Skill = { name: string; pct: number; label: string };

const DEVOPS: Skill[] = [
  { name: "AWS",            pct: 45, label: "Learning"    },
  { name: "Docker",         pct: 65, label: "Practicing"  },
  { name: "Kubernetes",     pct: 50, label: "Learning"    },
  { name: "Terraform",      pct: 55, label: "Practicing"  },
  { name: "GitHub Actions", pct: 60, label: "Practicing"  },
  { name: "Linux",          pct: 65, label: "Comfortable" },
  { name: "Bash",           pct: 55, label: "Practicing"  },
  { name: "YAML",           pct: 70, label: "Comfortable" },
  { name: "Python",         pct: 65, label: "Comfortable" },
  { name: "Git",            pct: 75, label: "Comfortable" },
];

const WEB: Skill[] = [
  { name: "Django",        pct: 60, label: "Comfortable"      },
  { name: "JavaScript",    pct: 55, label: "Comfortable"      },
  { name: "PHP",           pct: 45, label: "Prior Experience" },
  { name: "HTML/CSS",      pct: 65, label: "Comfortable"      },
  { name: "Flutter/Dart",  pct: 40, label: "Prior Experience" },
  { name: "SQL",           pct: 45, label: "Basic"            },
];

const TOOLS: Skill[] = [
  { name: "WSL/Ubuntu", pct: 70, label: "Comfortable" },
  { name: "VS Code",    pct: 80, label: "Comfortable" },
  { name: "Minikube",   pct: 50, label: "Learning"    },
  { name: "npm/Node",   pct: 55, label: "Comfortable" },
  { name: "Next.js",    pct: 45, label: "Learning"    },
];

const CERTS = [
  { abbr: "AWS", name: "AWS Cloud Practitioner"           },
  { abbr: "TF",  name: "HashiCorp Terraform Associate"    },
  { abbr: "CKA", name: "Certified Kubernetes Administrator" },
];

// ── Skill card ────────────────────────────────────────────────────────────────
function SkillCard({
  skill,
  delay,
  reduced = false,
}: {
  skill:    Skill;
  delay:    number;
  reduced?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        border: "1px solid rgba(226,232,240,0.1)",
        background: reduced ? "rgba(226,232,240,0.02)" : "rgba(226,232,240,0.03)",
        padding: "24px",
        borderRadius: "2px",
      }}
    >
      {/* Skill name */}
      <p style={{
        fontFamily: mono,
        fontSize: "14px",
        color: "var(--em)",
        margin: "0 0 8px 0",
        lineHeight: 1,
      }}>
        {skill.name}
      </p>

      {/* Bar track */}
      <div style={{
        height: "2px",
        background: "rgba(226,232,240,0.08)",
        position: "relative",
      }}>
        {/* Animated fill */}
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.pct}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            background: "var(--em)",
          }}
        />
      </div>

      {/* Proficiency label */}
      <p style={{
        fontFamily: mono,
        fontSize: "10px",
        color: "var(--muted)",
        margin: "6px 0 0 0",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
      }}>
        {skill.label}
      </p>
    </motion.div>
  );
}

// ── Section label (slides in from left) ──────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        fontFamily: mono,
        fontSize: "9px",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "var(--muted)",
        margin: "0 0 32px 0",
      }}
    >
      {children}
    </motion.p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SkillsPage() {
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
          03 / Skills
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
            WHAT I KNOW
          </motion.h1>
        </div>

      </section>

      {/* ════════════════════════════════════ DEVOPS & CLOUD */}
      <section style={{ padding: "0 88px 72px" }}>
        <SectionLabel>DevOps &amp; Cloud</SectionLabel>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px" }}
        >
          {DEVOPS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ WEB & BACKEND */}
      <section style={{ padding: "0 88px 72px" }}>
        <SectionLabel>Web &amp; Backend</SectionLabel>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px" }}
        >
          {WEB.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} reduced />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ TOOLS & ENVIRONMENT */}
      <section style={{ padding: "0 88px 72px" }}>
        <SectionLabel>Tools &amp; Environment</SectionLabel>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "16px" }}
        >
          {TOOLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ CERTIFICATIONS IN PROGRESS */}
      <section style={{
        background: "rgba(226,232,240,0.02)",
        borderTop: "1px solid rgba(226,232,240,0.08)",
        borderBottom: "1px solid rgba(226,232,240,0.08)",
        padding: "48px 88px",
      }}>

        <SectionLabel>Certifications in Progress</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.abbr}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon square */}
              <div style={{
                width: "32px",
                height: "32px",
                border: "1px solid rgba(226,232,240,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                borderRadius: "2px",
              }}>
                <span style={{
                  fontFamily: mono,
                  fontSize: "10px",
                  color: "var(--muted)",
                  letterSpacing: "0.05em",
                }}>
                  {cert.abbr}
                </span>
              </div>

              {/* Cert name */}
              <p style={{
                fontFamily: mono,
                fontSize: "13px",
                color: "var(--em)",
                margin: "0 0 4px 0",
                lineHeight: 1.4,
              }}>
                {cert.name}
              </p>

              {/* Status */}
              <p style={{
                fontFamily: mono,
                fontSize: "10px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                margin: "0 0 10px 0",
              }}>
                In Progress
              </p>

              {/* Progress bar */}
              <div style={{
                width: "100%",
                height: "1px",
                background: "rgba(226,232,240,0.08)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "30%",
                  height: "100%",
                  background: "var(--em)",
                  opacity: 0.4,
                }} />
              </div>

            </motion.div>
          ))}
        </div>

      </section>

    </main>
  );
}
