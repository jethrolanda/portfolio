"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-ink/60">
          &copy; {new Date().getFullYear()} WordPress Plugin Developer. All
          rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-ink/60 hover:text-wpblue transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="text-ink/60 hover:text-wpblue transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="#"
            className="text-ink/60 hover:text-wpblue transition-colors"
            aria-label="Email"
          >
            <EmailIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
}
