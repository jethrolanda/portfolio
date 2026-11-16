import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./ContactSection";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

const LINKS = [
  { label: "GitHub", href: GITHUB_URL, icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, icon: MailIcon, external: false }
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono text-sm text-muted">
          &copy; {new Date().getFullYear()} Jethro Landa
        </p>
        <ul className="flex items-center gap-2">
          {LINKS.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-muted transition-colors duration-[var(--dur)] hover:text-accent"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
