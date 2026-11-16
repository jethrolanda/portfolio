import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm font-semibold " +
  "transition-[background-color,border-color,color,transform] duration-[var(--dur)] ease-[var(--ease)] " +
  "active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg border border-accent hover:brightness-110",
  secondary:
    "bg-surface text-fg border border-line hover:border-accent hover:text-accent",
  ghost: "text-fg border border-transparent hover:text-accent"
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  icon?: ReactNode;
};

// Plain <a> on purpose: handles in-page anchors, files and external links.
// External links (target=_blank) automatically get a safe rel.
export function ButtonLink({
  variant = "secondary",
  icon,
  className = "",
  children,
  target,
  rel,
  ...rest
}: Props) {
  const safeRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
  return (
    <a
      target={target}
      rel={safeRel}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon}
    </a>
  );
}
