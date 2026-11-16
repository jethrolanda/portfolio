import { EDUCATION, EXPERIENCE, SKILLS } from "@/data/resume";
import { RESUME_PDF } from "./HeroSection";
import { ButtonLink } from "./ui/ButtonLink";
import { DownloadIcon } from "./ui/icons";
import { SectionHeading } from "./ui/SectionHeading";
import { TagList } from "./ui/Tag";

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 border-b border-line pb-3 font-mono text-sm uppercase tracking-wider text-muted">
      {children}
    </h3>
  );
}

export function ResumeSection() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-title"
      className="section-y border-t border-line bg-surface"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="02 / Experience"
            title="Resume"
            id="resume-title"
          />
          <ButtonLink
            href={RESUME_PDF}
            download
            variant="primary"
            className="mb-10 sm:mb-12"
            icon={<DownloadIcon width={16} height={16} />}
          >
            Download Resume (PDF)
          </ButtonLink>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SubHeading>Work history</SubHeading>
            <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
              {EXPERIENCE.map((job) => (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-surface sm:-left-[2.4rem]"
                  />
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <h4 className="mt-1 text-h3 font-semibold">{job.role}</h4>
                  <p className="text-sm font-medium text-accent">
                    {job.company}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10 lg:col-span-5">
            <div>
              <SubHeading>Technical skills</SubHeading>
              <div className="space-y-6">
                {Object.entries(SKILLS).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="mb-3 text-sm font-semibold">{category}</h4>
                    <TagList tags={skills} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SubHeading>Education</SubHeading>
              <p className="font-semibold">{EDUCATION.degree}</p>
              <p className="text-sm text-muted">{EDUCATION.school}</p>
              <p className="font-mono text-xs text-muted">{EDUCATION.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
