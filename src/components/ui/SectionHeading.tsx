export function SectionHeading({
  kicker,
  title,
  id
}: {
  kicker: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="mb-2 font-mono text-sm text-accent">{kicker}</p>
      <h2 id={id} className="text-h2 font-bold">
        {title}
      </h2>
    </div>
  );
}
