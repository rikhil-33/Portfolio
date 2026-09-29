"use client";

import Link from "next/link";
import { GlassFilter } from "./liquid-glass-button";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Projects",     href: "#projects" },
  { label: "Timeline",     href: "#timeline" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  return (
    <>
      <GlassFilter />
      <nav className="navbar-capsule" aria-label="Primary navigation">
        <span aria-hidden className="navbar-glass-bg" />
        <span aria-hidden className="navbar-glass-distort" style={{ backdropFilter: 'url("#container-glass")' }} />
        <div className="navbar-logo">Rikhil</div>
        <ul className="navbar-links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="navbar-link">{label}</Link>
            </li>
          ))}
        </ul>
        <a href="/resume.pdf" download className="navbar-cta" aria-label="Download resume">
          Download
        </a>
      </nav>
    </>
  );
}
