"use client";

import { motion } from "motion/react";

const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

type Cert = {
  abbr:    string;
  title:   string;
  issuer:  string;
  desc?:   string;
  year?:   string;
};

const IN_PROGRESS: Cert[] = [
  {
    abbr:   "AWS",
    title:  "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    desc:   "Validates foundational understanding of AWS Cloud services, architecture, security, and pricing.",
  },
  {
    abbr:   "TF",
    title:  "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    desc:   "Demonstrates ability to write, plan, and apply Terraform configurations to manage infrastructure as code.",
  },
  {
    abbr:   "CKA",
    title:  "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    desc:   "Proves ability to design, install, configure, and manage production Kubernetes clusters.",
  },
];

const COMPLETED: Cert[] = [
  {
    abbr:   "PY",
    title:  "Python Programming Certification",
    issuer: "Internshala",
    year:   "2022",
  },
  {
    abbr:   "WD",
    title:  "Web Development Training",
    issuer: "Internshala",
    year:   "2022",
    desc:   "HTML, CSS, JavaScript fundamentals and responsive web design.",
  },
];

// ── Status pill ──────────────────────────────────────────────────────────────
function StatusPill({ label, completed = false }: { label: string; completed?: boolean }) {
  return (
    <span style={{
      display: "inline-block",
      fontFamily: mono,
      fontSize: "9px",
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: "var(--em)",
      background: completed ? "rgba(226,232,240,0.08)" : "rgba(226,232,240,0.06)",
      border: `1px solid ${completed ? "rgba(226,232,240,0.3)" : "rgba(226,232,240,0.2)"}`,
      padding: "4px 10px",
      borderRadius: "2px",
    }}>
      {label}
    </span>
  );
}

// ── Badge square ─────────────────────────────────────────────────────────────
function Badge({ abbr }: { abbr: string }) {
  return (
    <div style={{
      width: "40px",
      height: "40px",
      border: "1px solid rgba(226,232,240,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "2px",
      marginBottom: "20px",
    }}>
      <span style={{
        fontFamily: mono,
        fontSize: "11px",
        color: "var(--em)",
        letterSpacing: "0.05em",
      }}>
        {abbr}
      </span>
    </div>
  );
}

// ── Cert card ────────────────────────────────────────────────────────────────
function CertCard({
  cert,
  delay,
  completed = false,
}: {
  cert:       Cert;
  delay:      number;
  completed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        border: "1px solid rgba(226,232,240,0.1)",
        background: "rgba(226,232,240,0.03)",
        padding: completed ? "28px" : "32px",
        borderRadius: "2px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Badge abbr={cert.abbr} />

      {/* Title */}
      <h3 style={{
        fontFamily: mono,
        fontSize: "16px",
        fontWeight: 600,
        color: "var(--em)",
        lineHeight: 1.3,
        margin: "0 0 8px 0",
      }}>
        {cert.title}
      </h3>

      {/* Issuer */}
      <p style={{
        fontFamily: mono,
        fontSize: "12px",
        color: "var(--muted)",
        margin: "0 0 16px 0",
      }}>
        {cert.issuer}
      </p>

      {/* Status pill + optional year row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: cert.desc ? "16px" : 0,
      }}>
        <StatusPill
          label={completed ? "Completed" : "In Progress"}
          completed={completed}
        />
        {cert.year && (
          <span style={{
            fontFamily: mono,
            fontSize: "11px",
            color: "var(--muted)",
            letterSpacing: "0.15em",
          }}>
            {cert.year}
          </span>
        )}
      </div>

      {/* Description */}
      {cert.desc && (
        <p style={{
          fontFamily: mono,
          fontSize: "13px",
          color: "rgba(241,245,249,0.6)",
          lineHeight: 1.7,
          margin: 0,
        }}>
          {cert.desc}
        </p>
      )}
    </motion.div>
  );
}

// ── Section label ────────────────────────────────────────────────────────────
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
        margin: "0 0 28px 0",
      }}
    >
      {children}
    </motion.p>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CertificationsPage() {
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
          05 / Certifications
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
            CREDENTIALS
          </motion.h1>
        </div>

      </section>

      {/* ════════════════════════════════════ IN PROGRESS */}
      <section style={{ padding: "0 88px 80px" }}>
        <SectionLabel>In Progress</SectionLabel>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {IN_PROGRESS.map((cert, i) => (
            <CertCard key={cert.abbr} cert={cert} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ COMPLETED */}
      <section style={{ padding: "0 88px 80px" }}>
        <SectionLabel>Completed</SectionLabel>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "24px" }}
        >
          {COMPLETED.map((cert, i) => (
            <CertCard key={cert.abbr} cert={cert} delay={i * 0.1} completed />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════ BOTTOM STRIP */}
      <section style={{
        padding: "48px 88px",
        borderTop: "1px solid rgba(226,232,240,0.08)",
        textAlign: "center",
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--muted)",
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          More certifications planned: AWS Solutions Architect · Certified Cloud Security Professional
        </motion.p>
      </section>

    </main>
  );
}
