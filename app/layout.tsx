import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajjad Sajid Shaik · Junior DevOps Engineer",
  description:
    "Junior DevOps Engineer · M.S. Computer Science at Cleveland State University · Seeking DevOps internships and full-time roles Fall 2026 · AWS, Docker, Kubernetes, Terraform, GitHub Actions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
}
