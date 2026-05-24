"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Globe from "./components/Globe";

// ── Shared token ─────────────────────────────────────────────────────────────
const mono = "var(--font-mono, 'JetBrains Mono', monospace)";

// ── Section separator (used on every section after the hero) ────────────────
const sectionSeparator = "1px solid rgba(226,232,240,0.06)";

// ─────────────────────────────────────────────────────────────────────────────
// HERO DATA
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT DATA
// ─────────────────────────────────────────────────────────────────────────────
type Education = {
  year: string; role: string; org: string;
  type: "education"; detail: string;
};
type Experience = {
  year: string; role: string; org: string;
  type: "experience"; bullets: string[];
};
type TimelineItem = Education | Experience;

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

const fadeUpInView = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-50px" } as const,
  transition:  { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS DATA
// ─────────────────────────────────────────────────────────────────────────────
type Skill = { name: string; pct: number; label: string };

const DEVOPS_SKILLS: Skill[] = [
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

const WEB_SKILLS: Skill[] = [
  { name: "Django",        pct: 60, label: "Comfortable"      },
  { name: "JavaScript",    pct: 55, label: "Comfortable"      },
  { name: "PHP",           pct: 45, label: "Prior Experience" },
  { name: "HTML/CSS",      pct: 65, label: "Comfortable"      },
  { name: "Flutter/Dart",  pct: 40, label: "Prior Experience" },
  { name: "SQL",           pct: 45, label: "Basic"            },
];

const TOOLS_SKILLS: Skill[] = [
  { name: "WSL/Ubuntu", pct: 70, label: "Comfortable" },
  { name: "VS Code",    pct: 80, label: "Comfortable" },
  { name: "Minikube",   pct: 50, label: "Learning"    },
  { name: "npm/Node",   pct: 55, label: "Comfortable" },
  { name: "Next.js",    pct: 45, label: "Learning"    },
];

const SKILL_CERTS = [
  { abbr: "AWS", name: "AWS Cloud Practitioner"           },
  { abbr: "TF",  name: "HashiCorp Terraform Associate"    },
  { abbr: "CKA", name: "Certified Kubernetes Administrator" },
];

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
      <p style={{
        fontFamily: mono,
        fontSize: "14px",
        color: "var(--em)",
        margin: "0 0 8px 0",
        lineHeight: 1,
      }}>
        {skill.name}
      </p>

      <div style={{
        height: "2px",
        background: "rgba(226,232,240,0.08)",
        position: "relative",
      }}>
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

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────────────────────────────────────
const DEVOPS_PROJECTS = [
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

const PRIOR_PROJECTS = [
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

function ProjectCard({
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
        <div style={{
          height: "2px",
          width: "40px",
          background: accentBg,
          marginBottom: "24px",
          flexShrink: 0,
        }} />

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

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────────────────────────────────────
const EXP_STACK = ["Python", "HTML", "CSS", "JavaScript", "Git", "Linux"];

const EXP_BULLETS = [
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

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATIONS DATA
// ─────────────────────────────────────────────────────────────────────────────
type Cert = {
  abbr:    string;
  title:   string;
  issuer:  string;
  desc?:   string;
  year?:   string;
};

const CERTS_IN_PROGRESS: Cert[] = [
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

const CERTS_COMPLETED: Cert[] = [
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

      <p style={{
        fontFamily: mono,
        fontSize: "12px",
        color: "var(--muted)",
        margin: "0 0 16px 0",
      }}>
        {cert.issuer}
      </p>

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

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT DATA
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden" style={{ background: "var(--bg)" }}>

      {/* ═════════════════════════════════════════════════════════════ HERO */}
      <section
        id="hero"
        className="relative overflow-x-hidden"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "62px",
          paddingLeft: "80px",
        }}
      >
        {/* Globe — right side, partially cropped, scrolls with hero */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[520px] md:h-[520px] pointer-events-none"
          style={{ right: "-80px", zIndex: 0 }}
        >
          <Globe />
        </div>

        {/* Hero content — left half */}
        <div
          className="relative w-full max-w-[52%] min-w-[320px]"
          style={{ zIndex: 1 }}
        >
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

          <motion.div
            {...fadeUp(0.35)}
            className="font-mono"
            style={{ fontSize: "28px", color: "var(--mint)", marginTop: "16px", letterSpacing: "0.04em", backgroundColor: "transparent" }}
          >
            DevOps Engineer
          </motion.div>

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

          <motion.div
            {...fadeUp(0.56)}
            className="font-mono"
            style={{ fontSize: "14px", color: "rgba(203,213,225,0.5)", marginTop: "12px", letterSpacing: "0.03em", backgroundColor: "transparent" }}
          >
            M.S. Computer Science · Cleveland State University
          </motion.div>

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
                href="#projects"
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

        {/* Scroll indicator */}
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
      </section>

      {/* ═════════════════════════════════════════════════════════════ ABOUT */}
      <section id="about" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 32px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "6fr 4fr",
            gap: "80px",
            alignItems: "start",
          }}>
            <div>
              <motion.p
                {...fadeUpInView(0)}
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

              <div style={{ overflow: "hidden", marginBottom: "40px" }}>
                <motion.h2
                  initial={{ y: 110, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
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
                </motion.h2>
              </div>

              <div style={{ maxWidth: "560px" }}>
                {[
                  "I grew up in Gulbarga, India, and am currently based in Cleveland, Ohio, pursuing my M.S. in Computer Science at Cleveland State University.",
                  "DevOps sits at the intersection of everything I love about engineering — code, infrastructure, automation, and cloud. The same skill set touches every layer of a modern system, and that breadth is exactly what I want to master.",
                  "Currently building hands-on projects across AWS, Kubernetes, and Terraform — focused on infrastructure automation, CI/CD pipelines, and cloud-native deployments.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
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

            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "60px 1fr" }}>
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

            <div style={{
              borderLeft: "1px solid rgba(226,232,240,0.1)",
              paddingLeft: "48px",
            }}>
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.role}
                  {...fadeUpInView(0)}
                  style={{
                    position: "relative",
                    marginBottom: idx < TIMELINE.length - 1 ? "60px" : 0,
                  }}
                >
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

                  <div style={{ position: "relative", zIndex: 1, paddingTop: "4px" }}>
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

                    <p style={{
                      fontFamily: mono,
                      fontSize: "13px",
                      color: "var(--muted)",
                      margin: "0 0 16px 0",
                    }}>
                      {item.org}
                    </p>

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
        </div>

        <div style={{
          background: "rgba(226,232,240,0.03)",
          borderTop: "1px solid rgba(226,232,240,0.08)",
          borderBottom: "1px solid rgba(226,232,240,0.08)",
          padding: "48px 88px",
        }}>
          <motion.p
            {...fadeUpInView(0)}
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
                {...fadeUpInView(i * 0.1)}
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
            {...fadeUpInView(0.4)}
            style={{ marginTop: "32px", textAlign: "center" }}
          >
            <Link
              href="#projects"
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
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════ SKILLS */}
      <section id="skills" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 60px" }}>
          <motion.p
            {...fadeUpInView(0)}
            style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 20px 0",
            }}
          >
            02 / Skills
          </motion.p>

          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: 110, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
            </motion.h2>
          </div>
        </div>

        <div style={{ padding: "0 88px 72px" }}>
          <SectionLabel>DevOps &amp; Cloud</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {DEVOPS_SKILLS.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </div>
        </div>

        <div style={{ padding: "0 88px 72px" }}>
          <SectionLabel>Web &amp; Backend</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {WEB_SKILLS.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.05} reduced />
            ))}
          </div>
        </div>

        <div style={{ padding: "0 88px 72px" }}>
          <SectionLabel>Tools &amp; Environment</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {TOOLS_SKILLS.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </div>
        </div>

        <div style={{
          background: "rgba(226,232,240,0.02)",
          borderTop: "1px solid rgba(226,232,240,0.08)",
          borderBottom: "1px solid rgba(226,232,240,0.08)",
          padding: "48px 88px",
        }}>
          <SectionLabel>Certifications in Progress</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "32px" }}>
            {SKILL_CERTS.map((cert, i) => (
              <motion.div
                key={cert.abbr}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
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

                <p style={{
                  fontFamily: mono,
                  fontSize: "13px",
                  color: "var(--em)",
                  margin: "0 0 4px 0",
                  lineHeight: 1.4,
                }}>
                  {cert.name}
                </p>

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
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════ PROJECTS */}
      <section id="projects" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 60px" }}>
          <motion.p
            {...fadeUpInView(0)}
            style={{
              fontFamily: mono,
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 20px 0",
            }}
          >
            03 / Projects
          </motion.p>

          <div style={{ overflow: "hidden", marginBottom: "16px" }}>
            <motion.h2
              initial={{ y: 110, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
        </div>

        <div style={{ padding: "0 88px 80px" }}>
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

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {DEVOPS_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} delay={i * 0.1} {...p} />
            ))}
          </div>
        </div>

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

        <div style={{ padding: "0 88px 80px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {PRIOR_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} delay={i * 0.05} reduced {...p} />
            ))}
          </div>
        </div>

        <div style={{
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
              href="#contact"
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
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════ EXPERIENCE */}
      <section id="experience" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 80px" }}>
          <motion.p
            {...fadeUpInView(0)}
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
            <motion.h2
              initial={{ y: 110, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
            </motion.h2>
          </div>
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "35fr 65fr",
            gap: "64px",
            alignItems: "start",
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
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
                {EXP_STACK.map((tech) => (
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
                {EXP_BULLETS.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
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
        </div>

        <div style={{ padding: "0 88px" }}>
          <div style={{
            height: "1px",
            background: "rgba(226,232,240,0.08)",
            marginBottom: "80px",
          }} />
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}>
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
              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--em)",
                margin: "0 0 24px 0",
              }}>
                Seeking DevOps Internships
              </h3>
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
        </div>

        <div style={{
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
              href="#contact"
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
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════ CERTIFICATIONS */}
      <section id="certifications" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 60px" }}>
          <motion.p
            {...fadeUpInView(0)}
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
            <motion.h2
              initial={{ y: 110, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
            </motion.h2>
          </div>
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <SectionLabel>In Progress</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {CERTS_IN_PROGRESS.map((cert, i) => (
              <CertCard key={cert.abbr} cert={cert} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <SectionLabel>Completed</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
            {CERTS_COMPLETED.map((cert, i) => (
              <CertCard key={cert.abbr} cert={cert} delay={i * 0.1} completed />
            ))}
          </div>
        </div>

        <div style={{
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
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════ CONTACT */}
      <section id="contact" style={{ borderTop: sectionSeparator }}>

        <div style={{ padding: "120px 88px 60px" }}>
          <motion.p
            {...fadeUpInView(0)}
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
            <motion.h2
              initial={{ y: 110, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
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
        </div>

        <div style={{ padding: "0 88px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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

              <div style={{
                height: "1px",
                background: "rgba(226,232,240,0.08)",
                margin: "32px 0",
              }} />

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

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
        </div>

        <div style={{
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
        </div>
      </section>

    </main>
  );
}
