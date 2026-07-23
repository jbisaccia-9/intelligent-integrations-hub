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
      {/* input -> hidden edges */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        opacity={0.5}
      >
        <line x1="7" y1="14" x2="20" y2="9" />
        <line x1="7" y1="14" x2="20" y2="20" />
        <line x1="7" y1="14" x2="20" y2="31" />
        <line x1="7" y1="26" x2="20" y2="9" />
        <line x1="7" y1="26" x2="20" y2="20" />
        <line x1="7" y1="26" x2="20" y2="31" />
      </g>
      {/* hidden -> output edges (slightly stronger) */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        opacity={0.65}
      >
        <line x1="20" y1="9" x2="33" y2="20" />
        <line x1="20" y1="20" x2="33" y2="20" />
        <line x1="20" y1="31" x2="33" y2="20" />
      </g>
      {/* ink nodes */}
      <g fill="currentColor">
        <circle cx="7" cy="14" r="2.2" />
        <circle cx="7" cy="26" r="2.2" />
        <circle cx="20" cy="9" r="2.2" />
        <circle cx="20" cy="20" r="2.2" />
        <circle cx="20" cy="31" r="2.2" />
      </g>
      {/* accent output node with soft glow */}
      <circle cx="33" cy="20" r="5.5" fill="var(--primary)" opacity={0.15} />
      <circle cx="33" cy="20" r="3" fill="var(--primary)" />
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
