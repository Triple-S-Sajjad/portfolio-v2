"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINKS = [
  { href: "#hero",           id: "hero",           label: "home"       },
  { href: "#about",          id: "about",          label: "about"      },
  { href: "#skills",         id: "skills",         label: "skills"     },
  { href: "#projects",       id: "projects",       label: "projects"   },
  { href: "#experience",     id: "experience",     label: "experience" },
  { href: "#certifications", id: "certifications", label: "certs"      },
  { href: "#contact",        id: "contact",        label: "contact"    },
];

export default function Nav() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const sections = LINKS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Track intersection ratio for each section; pick the one most in view.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let topId = "hero";
        let topRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }

        if (topRatio > 0) setActive(topId);
      },
      {
        // Offset for fixed nav (h-14 = 56px) so the section under the nav counts.
        rootMargin: "-56px 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid var(--glass-border)",
      } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo — scrolls back to hero */}
        <Link
          href="#hero"
          className="font-mono text-sm tracking-wider transition-opacity hover:opacity-80"
          style={{ color: "var(--em)" }}
        >
          sshaik
          <span style={{ color: "var(--mint)" }}>@devops</span>
          <span style={{ color: "rgba(203,213,225,0.35)" }}>:~$</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, id, label }) => {
            const isActive = active === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: isActive ? "var(--em)" : "var(--dim)" }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={{ background: "var(--em)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
