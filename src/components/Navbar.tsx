"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";

const LINKS = [
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  // Highlight the section crossing a band near the middle of the viewport.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    // Back at the very top (hero) means no section is active.
    const onScroll = () => {
      if (window.scrollY < 120) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-page flex h-[var(--nav-h)] items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="font-mono text-base font-medium tracking-tight transition-colors hover:text-accent"
        >
          <span aria-hidden="true" className="sm:hidden">
            jl<span className="text-accent">_</span>
          </span>
          <span className="sr-only sm:not-sr-only">
            jethro<span className="text-accent">_</span>landa
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-3 text-sm sm:gap-6">
            {LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-2 transition-colors duration-[var(--dur)] hover:text-fg ${
                      isActive ? "text-fg" : "text-muted"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-px h-0.5 rounded bg-accent transition-opacity duration-[var(--dur)] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
