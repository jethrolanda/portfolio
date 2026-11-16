import Image from "next/image";
import { FEATURED } from "@/data/projects";
import { ButtonLink } from "./ui/ButtonLink";
import { ArrowUpRightIcon } from "./ui/icons";
import { TagList } from "./ui/Tag";

export function FeaturedProject() {
  return (
    <article className="mb-8 grid overflow-hidden rounded-[var(--radius)] border border-accent/40 bg-surface lg:grid-cols-2">
      {/* Transparent PNG: sits directly on the card, so it works in both themes.
          Scaled up because the artwork has wide empty margins. */}
      <div className="flex items-center justify-center p-6 sm:p-8">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={FEATURED.image}
            alt={FEATURED.imageAlt}
            width={1200}
            height={675}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-full w-full scale-125 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
            Featured
          </p>
          <h3 className="text-h2 font-bold">{FEATURED.name}</h3>
          <p className="mt-3 text-muted">{FEATURED.summary}</p>
        </div>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent">
          {FEATURED.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="mt-auto space-y-4">
          <TagList tags={FEATURED.tags} />
          <div className="flex flex-wrap items-center gap-4 border-t border-line pt-5">
            <ButtonLink
              href={FEATURED.url}
              target="_blank"
              variant="primary"
              aria-label="Visit the Wholesale Suite website (opens in a new tab)"
              icon={<ArrowUpRightIcon width={16} height={16} />}
            >
              Visit Website
            </ButtonLink>
            <p className="font-mono text-xs text-muted">{FEATURED.note}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
