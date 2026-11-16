import { ButtonLink } from "./ui/ButtonLink";
import { ArrowUpRightIcon, DownloadIcon } from "./ui/icons";

export const RESUME_PDF = "/Jethro-Landa-Resume.pdf";

const PROOF = [
  { value: "10+", label: "years of experience" },
  { value: "7", label: "years building WooCommerce plugins" }
];

const STATUS = [
  { key: "role", value: "Senior Web Developer" },
  { key: "focus", value: "WordPress, React & REST API" },
  { key: "location", value: "Remote" }
];

// Server component: no client JS, so the headline (LCP) paints immediately.
export function HeroSection() {
  return (
    <section id="top" className="pb-[var(--space-section)] pt-12 sm:pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 font-mono text-sm text-accent">Jethro Landa</p>
          <h1 className="text-display font-bold">
            Senior Web Developer:{" "}
            <span className="text-accent">WordPress &amp; React</span>
          </h1>
          <p className="mt-6 max-w-xl text-lead text-muted">
            I build custom plugins, WooCommerce extensions and API integrations
            for WordPress, and I&rsquo;m building with React and Next.js.
          </p>

          <dl className="mt-8 grid gap-4 border-y border-line py-6 sm:grid-cols-3">
            {PROOF.map((p) => (
              <div key={p.value} className="flex items-baseline gap-3 sm:block">
                <dt className="shrink-0 font-mono text-2xl font-bold text-fg">
                  {p.value}
                </dt>
                <dd className="text-sm leading-snug text-muted sm:mt-1">
                  {p.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href="#projects"
              variant="primary"
              icon={<ArrowUpRightIcon width={16} height={16} />}
            >
              View Projects
            </ButtonLink>
            <ButtonLink
              href={RESUME_PDF}
              download
              icon={<DownloadIcon width={16} height={16} />}
            >
              Download Resume (PDF)
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>

        <figure className="lg:col-span-5">
          <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface shadow-sm">
            <figcaption className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3 font-mono text-xs text-muted">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
              </span>
              current_status.json
            </figcaption>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-muted">{"{"}</span>
                {"\n"}
                {STATUS.map((row) => (
                  <span key={row.key}>
                    {"  "}
                    <span className="text-muted">
                      &quot;{row.key}&quot;:
                    </span>{" "}
                    <span className="text-accent">&quot;{row.value}&quot;</span>
                    <span className="text-muted">,</span>
                    {"\n"}
                  </span>
                ))}
                {"  "}
                <span className="text-muted">&quot;available&quot;:</span>{" "}
                <span className="text-success">true</span>
                {"\n"}
                <span className="text-muted">{"}"}</span>
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </section>
  );
}
