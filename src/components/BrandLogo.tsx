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
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      >
        {/* edges — ascending network */}
        <line x1="6" y1="30" x2="16" y2="22" />
        <line x1="16" y1="22" x2="24" y2="26" />
        <line x1="16" y1="22" x2="28" y2="14" />
        <line x1="24" y1="26" x2="34" y2="10" />
        <line x1="28" y1="14" x2="34" y2="10" />
      </g>
      {/* accent edge */}
      <line
        x1="16"
        y1="22"
        x2="28"
        y2="14"
        stroke="var(--primary)"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      {/* ink nodes */}
      <g fill="currentColor">
        <circle cx="6" cy="30" r="1.9" />
        <circle cx="16" cy="22" r="2.1" />
        <circle cx="24" cy="26" r="1.9" />
        <circle cx="28" cy="14" r="2.1" />
      </g>
      {/* accent apex node */}
      <circle cx="34" cy="10" r="2.4" fill="var(--primary)" />
      <circle cx="34" cy="10" r="4.2" fill="var(--primary)" opacity={0.14} />
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
