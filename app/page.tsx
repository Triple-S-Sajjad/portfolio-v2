"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Globe from "./components/Globe";

const STACK = [
  "AWS", "Docker", "Kubernetes", "Terraform",
  "GitHub Actions", "Python", "Linux", "Bash",
];

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/Triple-S-Sajjad",        external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/sajjad-sajid-shaik", external: true  },
  { label: "Email",    href: "mailto:csesajjadshaik@gmail.com",            external: false },
];

const STATS = [
  { value: "07",         label: "Projects"       },
  { value: "AWS",        label: "Cloud Platform" },
  { value: "Fall 2026",  label: "Available From" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function HomePage() {
  return (
    <main
      className="relative overflow-x-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '62px',
        paddingLeft: '80px',
        zIndex: 1,
      }}
    >

      {/* ── Globe — right side, partially cropped ──────────────────────── */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[520px] md:h-[520px] pointer-events-none"
        style={{ right: "-80px", zIndex: 0 }}
      >
        <Globe />
      </div>

      {/* ── Hero content — left half ───────────────────────────────────── */}
      <div
        className="relative w-full max-w-[52%] min-w-[320px]"
        style={{ zIndex: 1 }}
      >

        {/* Status pill */}
        <motion.div
          {...fadeUp(0.08)}
          className="mb-8"
          style={{ display: "inline-flex", width: "auto" }}
        >
          <span
            className="items-center gap-2 font-mono text-xs tracking-widest uppercase"
            style={{
              display: "inline-flex",
              width: "auto",
              whiteSpace: "nowrap",
              border: "1px solid rgba(226,232,240,0.3)",
              background: "rgba(226,232,240,0.06)",
              padding: "8px 20px",
              borderRadius: "999px",
              color: "var(--mint)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "#e2e8f0" }}
            />
            Open to DevOps Roles · Fall 2026
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono font-bold tracking-tight leading-[0.92]"
            style={{ fontSize: "clamp(3.8rem, 6.5vw, 6.5rem)", color: "var(--em)" }}
          >
            SAJJAD
            <br />
            SHAIK
          </motion.h1>
        </div>

        {/* Role */}
        <motion.div
          {...fadeUp(0.35)}
          className="font-mono"
          style={{ fontSize: "28px", color: "var(--mint)", marginTop: "16px", letterSpacing: "0.04em", backgroundColor: "transparent" }}
        >
          DevOps Engineer
        </motion.div>

        {/* Pitch */}
        <motion.div
          {...fadeUp(0.44)}
          className="font-mono"
          style={{
            fontSize: "16px",
            color: "rgba(241,245,249,0.6)",
            marginTop: "8px",
            maxWidth: "480px",
            lineHeight: 1.6,
            backgroundColor: "transparent",
          }}
        >
          I build and automate cloud infrastructure that ships faster and breaks less.
        </motion.div>

        {/* Achievement badge */}
        <motion.div
          {...fadeUp(0.50)}
          style={{
            display: "inline-flex",
            borderLeft: "2px solid #e2e8f0",
            paddingLeft: "12px",
            fontSize: "12px",
            color: "rgba(241,245,249,0.5)",
            marginTop: "8px",
            fontFamily: "monospace",
            backgroundColor: "transparent",
          }}
        >
          → Reduced deployment time by 40% using CI/CD pipelines
        </motion.div>

        {/* University */}
        <motion.div
          {...fadeUp(0.56)}
          className="font-mono"
          style={{ fontSize: "14px", color: "rgba(203,213,225,0.5)", marginTop: "12px", letterSpacing: "0.03em", backgroundColor: "transparent" }}
        >
          M.S. Computer Science · Cleveland State University
        </motion.div>

        {/* Stack pills — single row */}
        <motion.div
          {...fadeUp(0.68)}
          className="flex gap-2"
          style={{ marginTop: "32px" }}
        >
          {STACK.map((tech) => (
            <span
              key={tech}
              className="font-mono whitespace-nowrap"
              style={{
                border: "1px solid rgba(226,232,240,0.15)",
                background: "rgba(226,232,240,0.03)",
                padding: "4px 10px",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "var(--mint)",
                borderRadius: "3px",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.78)}
          className="flex flex-wrap items-center gap-4"
          style={{ marginTop: "40px" }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href="/projects"
              className="font-mono inline-block"
              style={{
                border: "1px solid #e2e8f0",
                color: "#e2e8f0",
                background: "rgba(226,232,240,0.08)",
                padding: "14px 36px",
                fontSize: "13px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                borderRadius: "2px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(226,232,240,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(226,232,240,0.08)";
              }}
            >
              View My Work
            </Link>
          </motion.span>

          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <a
              href="/resume.pdf"
              download
              className="font-mono inline-block"
              style={{
                border: "1px solid rgba(226,232,240,0.25)",
                color: "rgba(203,213,225,0.65)",
                background: "transparent",
                padding: "14px 36px",
                fontSize: "13px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                borderRadius: "2px",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(226,232,240,0.05)";
                (e.currentTarget as HTMLElement).style.color = "#e2e8f0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "rgba(203,213,225,0.65)";
              }}
            >
              Download Resume
            </a>
          </motion.span>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.9)}
          className="flex items-center gap-1"
          style={{ marginTop: "28px" }}
        >
          {SOCIAL.map(({ label, href, external }, i) => (
            <span key={href} className="flex items-center">
              <motion.a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-mono"
                style={{ fontSize: "14px", color: "var(--dim)", padding: "0 2px" }}
                whileHover={{ color: "#e2e8f0" }}
                whileTap={{ scale: 0.96 }}
              >
                {label}
              </motion.a>
              {i < SOCIAL.length - 1 && (
                <span
                  className="font-mono mx-3"
                  style={{ color: "rgba(203,213,225,0.18)", fontSize: "12px", userSelect: "none" }}
                >
                  /
                </span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(1.02)}
          className="flex items-center gap-8"
          style={{ marginTop: "40px" }}
        >
          {STATS.map(({ value, label }, i) => (
            <span key={label} className="flex items-center gap-8">
              <span className="flex flex-col gap-1">
                <span
                  className="font-mono font-bold leading-none"
                  style={{ fontSize: "26px", color: "var(--em)" }}
                >
                  {value}
                </span>
                <span
                  className="font-mono tracking-widest uppercase"
                  style={{ fontSize: "10px", color: "var(--dim)" }}
                >
                  {label}
                </span>
              </span>
              {i < STATS.length - 1 && (
                <span
                  style={{
                    display: "block",
                    width: "1px",
                    height: "32px",
                    background: "rgba(226,232,240,0.15)",
                    alignSelf: "center",
                  }}
                />
              )}
            </span>
          ))}
        </motion.div>

      </div>

      {/* ── Scroll indicator — bottom center ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono tracking-[0.25em] uppercase"
          style={{ fontSize: "9px", color: "rgba(203,213,225,0.22)" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path
              d="M1 1L6 6L11 1"
              stroke="rgba(203,213,225,0.22)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

    </main>
  );
}
