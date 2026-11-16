import { PROJECTS } from "@/data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./ui/SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-y border-t border-line"
    >
      <div className="container-page">
        <SectionHeading
          kicker="01 / Projects"
          title="Selected work"
          id="projects-title"
        />
        <FeaturedProject />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
