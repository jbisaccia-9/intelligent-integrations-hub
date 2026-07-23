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
      {/* hexagon frame */}
      <path
        d="M20 5 L33 12.5 L33 27.5 L20 35 L7 27.5 L7 12.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* three struts to alternating vertices */}
      <g stroke="currentColor" strokeWidth="1.4" opacity="0.6">
        <line x1="20" y1="20" x2="20" y2="5" />
        <line x1="20" y1="20" x2="33" y2="27.5" />
        <line x1="20" y1="20" x2="7" y2="27.5" />
      </g>
      {/* center node */}
      <circle cx="20" cy="20" r="3.2" fill="var(--primary)" />
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
