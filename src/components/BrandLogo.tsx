import type { SVGProps } from "react";

/**
 * Neural-node mark: 5 nodes connected by fine ink lines,
 * angling upward/forward. One node + one edge in accent blue.
 * Uses currentColor for ink and var(--primary) for accent so
 * the mark inherits palette tokens.
 */
export function BrandMark({
  className,
  title = "Intelligent Integrations",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      {/* badge container — deep ink */}
      <rect x="2" y="2" width="36" height="36" rx="9" fill="var(--foreground)" />
      {/* connector line between dots — turns "ii" into linked nodes */}
      <line
        x1="16.5"
        y1="14"
        x2="23.5"
        y2="14"
        stroke="var(--background)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* "ii" stems */}
      <g
        stroke="var(--background)"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <line x1="16.5" y1="20" x2="16.5" y2="30" />
        <line x1="23.5" y1="20" x2="23.5" y2="30" />
      </g>
      {/* left dot — ivory */}
      <circle cx="16.5" cy="14" r="2.2" fill="var(--background)" />
      {/* right dot — accent blue with soft glow */}
      <circle cx="23.5" cy="14" r="5" fill="var(--primary)" opacity="0.22" />
      <circle cx="23.5" cy="14" r="2.2" fill="var(--primary)" />
    </svg>
  );
}

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-foreground ${className ?? ""}`}>
      <BrandMark className={`h-7 w-7 shrink-0 ${markClassName ?? ""}`} />
      <span
        className={`font-display text-[1.35rem] leading-none tracking-[-0.01em] text-foreground ${wordmarkClassName ?? ""}`}
      >
        Intelligent Integrations
      </span>
    </span>
  );
}
