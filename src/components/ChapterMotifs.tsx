import type { CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/* Small computer-science / AI visual motifs used across the homepage.        */
/* All motifs are quiet, ink-and-blue, cheap to render, and paused under      */
/* prefers-reduced-motion (handled in styles.css).                            */
/* -------------------------------------------------------------------------- */

/** Chapter label styled as a code comment: `// 01 — SYSTEMS`. */
export function ChapterLabel({
  n,
  name,
  className = "",
}: {
  n: string;
  name: string;
  className?: string;
}) {
  return (
    <p
      className={
        "font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground " +
        className
      }
    >
      <span className="text-primary/80">{"//"}</span>{" "}
      <span className="tabular-nums text-foreground/80">{n}</span>
      <span className="mx-2 text-black/25">—</span>
      <span>{name}</span>
    </p>
  );
}

/** Thin ink hairline with a few tiny blue "packets" traveling slowly along it. */
export function DataStreamDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "relative mx-auto h-px w-full overflow-hidden bg-black/10 " + className
      }
    >
      <span className="ds-packet" style={{ animationDelay: "0s" }} />
      <span className="ds-packet" style={{ animationDelay: "2.6s" }} />
      <span className="ds-packet" style={{ animationDelay: "5.3s" }} />
    </div>
  );
}

/** Mono status line + soft blue pulse dot. */
export function StatusLine({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-primary">
        <span className="absolute inset-0 rounded-full bg-primary opacity-70 status-ping" />
      </span>
      <span>{text}</span>
    </p>
  );
}

/* ----- Chapter 01: circuit trace pattern ------------------------------- */

const CIRCUIT_PATHS = [
  "M0 120 L340 120 L380 160 L720 160 L760 200 L1200 200",
  "M0 340 L200 340 L240 300 L560 300 L600 340 L1200 340",
  "M0 560 L280 560 L320 600 L680 600 L720 560 L1200 560",
  "M0 700 L440 700 L480 660 L1200 660",
];

const CIRCUIT_NODES: Array<[number, number]> = [
  [340, 120], [380, 160], [720, 160], [760, 200],
  [200, 340], [240, 300], [560, 300], [600, 340],
  [280, 560], [320, 600], [680, 600], [720, 560],
  [440, 700], [480, 660],
];

export function CircuitBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden hidden md:block"
      style={{
        maskImage:
          "radial-gradient(120% 90% at 50% 50%, transparent 0%, transparent 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9) 100%)",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 50% 50%, transparent 0%, transparent 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" strokeWidth="0.5" fill="none" className="text-foreground/10">
          {CIRCUIT_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g fill="currentColor" className="text-foreground/15">
          {CIRCUIT_NODES.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.6" />
          ))}
        </g>
        <g fill="var(--primary)" opacity="0.55">
          {CIRCUIT_PATHS.slice(0, 3).map((d, i) => (
            <circle
              key={i}
              r="2.2"
              className="circuit-pulse"
              style={{
                offsetPath: `path('${d}')`,
                animationDuration: `${16 + i * 4}s`,
                animationDelay: `${i * 2.3}s`,
              } as CSSProperties}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ----- Chapter 02: attention-matrix grid ------------------------------ */

export function AttentionMatrix() {
  const cols = 22;
  const rows = 12;
  const cells = cols * rows;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 hidden items-center justify-center overflow-hidden md:flex"
    >
      <div
        className="grid gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 14px)`,
          gridTemplateRows: `repeat(${rows}, 14px)`,
        }}
      >
        {Array.from({ length: cells }).map((_, i) => (
          <span
            key={i}
            className="attn-cell"
            style={{ animationDelay: `${(i * 179) % 9000}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ----- Chapter 03: gradient-descent contours + descending dot --------- */

export function GradientDescent() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden hidden md:block"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.7" className="text-foreground/20">
          {Array.from({ length: 9 }).map((_, i) => (
            <ellipse
              key={i}
              cx="880"
              cy="560"
              rx={140 + i * 95}
              ry={70 + i * 55}
              transform="rotate(-14 880 560)"
            />
          ))}
        </g>
        <circle r="4.5" fill="var(--primary)" className="gd-dot" />
      </svg>
    </div>
  );
}

/* ----- Chapter 04: sparse token-stream columns ----------------------- */

const TOKENS = [
  "def", "async", "await", "class", "import", "return", "yield",
  "const", "let", "→", "λ", "0x1F", "grad", "loss", "attn",
  "softmax", "0.42", "1e-4", "≈", "await ai.chat", "embed",
  "policy", "guardrail", "eval",
];

export function TokenStream() {
  const cols = 10;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 hidden overflow-hidden md:block"
    >
      {Array.from({ length: cols }).map((_, ci) => (
        <div
          key={ci}
          className="token-col"
          style={{
            left: `${(ci + 0.5) * (100 / cols)}%`,
            animationDelay: `-${(ci * 3.1) % 20}s`,
            animationDuration: `${28 + (ci % 4) * 6}s`,
          }}
        >
          {Array.from({ length: 16 }).map((_, ti) => (
            <span key={ti}>
              {TOKENS[(ci * 7 + ti * 3) % TOKENS.length]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ----- Chapter 04: terminal-style header strip for project cards ----- */

export function TerminalHeader({ path }: { path: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.03] px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
      <span className="inline-flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
      </span>
      <span className="truncate">
        <span className="text-foreground/60">~/projects/</span>
        <span className="text-foreground/90">{path}</span>
      </span>
      <span className="ml-auto text-primary opacity-0 group-hover:opacity-100 cursor-blink">
        ▍
      </span>
    </div>
  );
}
