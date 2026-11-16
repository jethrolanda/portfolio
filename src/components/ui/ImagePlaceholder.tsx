// Theme-aware preview placeholder. Built from CSS variables (not an image file),
// so it follows the light/dark toggle. Fixed 16:9 box, so no layout shift when a
// real screenshot replaces it.
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} screenshot coming soon`}
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-line bg-surface-2 p-[8%]"
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-bg shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <span className="h-2.5 w-2/5 rounded bg-line" />
          <span className="h-2 w-3/5 rounded bg-surface-2" />
          <span className="h-2 w-1/2 rounded bg-surface-2" />
          <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
            <span className="rounded bg-surface-2" />
            <span className="rounded bg-surface-2" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-[3%] font-mono text-[0.7rem] text-muted">
        {label} · preview coming soon
      </span>
    </div>
  );
}
