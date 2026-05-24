"use client";

import { motion } from "motion/react";

const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

const CONTACTS = [
  {
    label:    "Email",
    value:    "csesajjadshaik@gmail.com",
    href:     "mailto:csesajjadshaik@gmail.com",
    external: false,
  },
  {
    label:    "LinkedIn",
    value:    "linkedin.com/in/sajjad-sajid-shaik",
    href:     "https://linkedin.com/in/sajjad-sajid-shaik",
    external: true,
  },
  {
    label:    "GitHub",
    value:    "github.com/Triple-S-Sajjad",
    href:     "https://github.com/Triple-S-Sajjad",
    external: true,
  },
];

const AVAILABILITY = [
  { label: "Internships",   value: "Immediately Available"     },
  { label: "Full-Time",     value: "Fall 2026"                 },
  { label: "Location",      value: "Cleveland, OH · Remote OK" },
  { label: "Authorization", value: "CPT · OPT Eligible"        },
];

// ── Contact link block ───────────────────────────────────────────────────────
function ContactBlock({
  label,
  value,
  href,
  external,
}: {
  label:    string;
  value:    string;
  href:     string;
  external: boolean;
}) {
  return (
    <div style={{
      borderLeft: "2px solid rgba(226,232,240,0.1)",
      paddingLeft: "20px",
      marginBottom: "32px",
    }}>
      <p style={{
        fontFamily: mono,
        fontSize: "9px",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "var(--muted)",
        margin: "0 0 8px 0",
      }}>
        {label}
      </p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{
          fontFamily: mono,
          fontSize: "14px",
          color: "rgba(241,245,249,0.7)",
          transition: "color 0.2s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--em)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(241,245,249,0.7)";
        }}
      >
        {value}
      </a>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
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
          06 / Contact
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
            GET IN TOUCH
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "13px",
            color: "var(--muted)",
            margin: "12px 0 0 0",
            lineHeight: 1.6,
          }}
        >
          Open to DevOps internships and full-time roles from Fall 2026
        </motion.p>

      </section>

      {/* ════════════════════════════════════ TWO-COLUMN BODY */}
      <section style={{ padding: "0 88px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}>

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 32px 0",
            }}>
              Reach Me At
            </p>

            {CONTACTS.map((c) => (
              <ContactBlock key={c.label} {...c} />
            ))}

            {/* Divider */}
            <div style={{
              height: "1px",
              background: "rgba(226,232,240,0.08)",
              margin: "32px 0",
            }} />

            {/* Response time */}
            <p style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 8px 0",
            }}>
              Response Time
            </p>
            <p style={{
              fontFamily: mono,
              fontSize: "13px",
              color: "var(--em)",
              margin: 0,
            }}>
              Usually within 24 hours
            </p>
          </motion.div>

          {/* ── Right: availability card ── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              border: "1px solid rgba(226,232,240,0.1)",
              background: "rgba(226,232,240,0.03)",
              padding: "40px",
              borderRadius: "2px",
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
              Availability
            </p>

            {AVAILABILITY.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: i < AVAILABILITY.length - 1
                    ? "1px solid rgba(226,232,240,0.06)"
                    : "none",
                }}
              >
                <span style={{
                  fontFamily: mono,
                  fontSize: "9px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  {row.label}
                </span>
                <span style={{
                  fontFamily: mono,
                  fontSize: "14px",
                  color: "var(--em)",
                }}>
                  {row.value}
                </span>
              </div>
            ))}

            {/* CTA button */}
            <a
              href="mailto:csesajjadshaik@gmail.com"
              style={{
                fontFamily: mono,
                display: "block",
                width: "100%",
                marginTop: "28px",
                padding: "14px 28px",
                border: "1px solid var(--em)",
                color: "var(--em)",
                background: "transparent",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textAlign: "center",
                borderRadius: "2px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(226,232,240,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Send an Email →
            </a>
          </motion.aside>

        </div>
      </section>

      {/* ════════════════════════════════════ BOTTOM NOTE */}
      <section style={{
        padding: "60px 88px",
        textAlign: "center",
        borderTop: "1px solid rgba(226,232,240,0.06)",
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: mono,
            fontSize: "12px",
            color: "var(--muted)",
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          F-1 Student Visa · CPT authorized · OPT eligible upon graduation December 2026
        </motion.p>
      </section>

    </main>
  );
}
