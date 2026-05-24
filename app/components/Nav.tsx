"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const LINKS = [
  { href: "/",               label: "home"        },
  { href: "/about",          label: "about"       },
  { href: "/skills",         label: "skills"      },
  { href: "/projects",       label: "projects"    },
  { href: "/experience",     label: "experience"  },
  { href: "/certifications", label: "certs"       },
  { href: "/contact",        label: "contact"     },
];

export default function Nav() {
  const pathname = usePathname();

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
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm tracking-wider transition-opacity hover:opacity-80"
          style={{ color: "var(--em)" }}
        >
          sshaik
          <span style={{ color: "var(--mint)" }}>@devops</span>
          <span style={{ color: "rgba(203,213,225,0.35)" }}>:~$</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: active ? "var(--em)" : "var(--dim)" }}
                >
                  {label}
                  {active && (
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
