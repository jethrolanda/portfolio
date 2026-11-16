import Image from "next/image";
import type { Project } from "@/data/projects";
import { ButtonLink } from "./ui/ButtonLink";
import { ArrowUpRightIcon, ChevronDownIcon, GitHubIcon } from "./ui/icons";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { TagList } from "./ui/Tag";

// Server component. Details use native <details>, so there is no client JS and
// keyboard / screen-reader behaviour comes for free.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface transition-[border-color,transform] duration-[var(--dur)] ease-[var(--ease)] hover:-translate-y-0.5 hover:border-accent/60">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} screenshot`}
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="aspect-video w-full border-b border-line object-cover"
        />
      ) : (
        <ImagePlaceholder label={project.name} />
      )}

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-h3 font-semibold">{project.name}</h3>
          <p className="mt-2 text-muted">{project.summary}</p>
        </div>

        <details className="group/details">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
            <span className="group-open/details:hidden">Show details</span>
            <span className="hidden group-open/details:inline">
              Hide details
            </span>
            <ChevronDownIcon
              width={16}
              height={16}
              className="transition-transform duration-[var(--dur)] group-open/details:rotate-180"
            />
          </summary>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </details>

        <div className="mt-auto space-y-5">
          <TagList tags={project.tags} />
          {(project.demo || project.github) && (
            <div className="flex flex-wrap gap-3 border-t border-line pt-5">
              {project.demo && (
                <ButtonLink
                  href={project.demo}
                  target="_blank"
                  variant="primary"
                  aria-label={`${project.name} live demo (opens in a new tab)`}
                  icon={<ArrowUpRightIcon width={16} height={16} />}
                >
                  Live Demo
                </ButtonLink>
              )}
              {project.github && (
                <ButtonLink
                  href={project.github}
                  target="_blank"
                  aria-label={`${project.name} source on GitHub (opens in a new tab)`}
                  icon={<GitHubIcon width={16} height={16} />}
                >
                  GitHub
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
