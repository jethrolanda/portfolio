"use client";
import { MoonIcon, SunIcon } from "./icons";

// Icon visibility is driven by CSS from the <html data-theme> attribute that the
// inline script in layout.tsx sets before first paint, so there is no hydration
// mismatch and no flash.
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-line text-muted transition-colors duration-[var(--dur)] hover:border-accent hover:text-accent"
    >
      <SunIcon className="block [[data-theme=light]_&]:hidden" />
      <MoonIcon className="hidden [[data-theme=light]_&]:block" />
    </button>
  );
}
