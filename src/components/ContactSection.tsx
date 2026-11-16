import { SectionHeading } from "./ui/SectionHeading";
import { CopyEmailButton } from "./ui/CopyEmailButton";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon
} from "./ui/icons";

export const EMAIL = "jemaq_lan@hotmail.com";
export const GITHUB_URL = "https://github.com/jethrolanda";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jethro-landa/";

const LINKS = [
  { label: "GitHub", href: GITHUB_URL, icon: GitHubIcon },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedInIcon }
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-y border-t border-line"
    >
      <div className="container-page">
        <SectionHeading
          kicker="03 / Contact"
          title="Get in touch"
          id="contact-title"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="max-w-md text-lead text-muted">
              I&rsquo;m currently available for freelance projects and open to
              new opportunities. The fastest way to reach me is by email — I
              usually reply within a day.
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-success"
              />
              Available for new work
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-8">
              <p className="mb-3 font-mono text-xs text-muted">
                // drop me a line
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 break-all text-xl font-bold transition-colors duration-[var(--dur)] hover:text-accent sm:text-2xl"
              >
                <MailIcon width={24} height={24} className="shrink-0" />
                {EMAIL}
              </a>
              <div className="mt-5">
                <CopyEmailButton email={EMAIL} />
              </div>
            </div>

            <ul className="divide-y divide-line overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
              {LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="group flex items-center justify-between p-4 transition-colors duration-[var(--dur)] hover:bg-surface-2"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="text-muted" />
                      <span className="text-sm font-medium">{label}</span>
                    </span>
                    <ArrowUpRightIcon
                      width={16}
                      height={16}
                      className="text-muted transition-colors group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
