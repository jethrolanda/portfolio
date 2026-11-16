export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}
