import { useEffect, useRef } from "react";
import { ConstellationScene } from "./ConstellationScene";

/**
 * Ambient neural-network backdrop for interior pages (Projects, About,
 * Contact). Sits fixed behind the page header and dissolves as the user
 * scrolls into content.
 *
 * The wash on top of the WebGL scene is intentionally light — visitors
 * should see the living neural network clearly within the first second,
 * with just enough ivory feathering near the edges to keep headline text
 * legible.
 */
export function PageAmbientScene({
  anchorId,
  className = "",
}: {
  anchorId: string;
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const host = hostRef.current;
    if (!host) return;

    const tick = () => {
      raf = 0;
      const anchor = document.getElementById(anchorId);
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 1.4 || vh)));
      const opacity = Math.max(0, 1 - progress * 0.9);
      host.style.setProperty("--constellation-opacity", opacity.toFixed(3));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [anchorId]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className={
        "pointer-events-none absolute inset-0 z-0 overflow-hidden " + className
      }
    >
      <ConstellationScene
        className="absolute inset-0 h-full w-full"
        subtle
        density={0.95}
        respondToPointer={false}
      />
      {/* Very light ivory feather — just enough to keep headline text legible
          in the top-left, and a soft base gradient at the bottom so content
          below the hero fades cleanly into the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 65% at 22% 28%, color-mix(in oklab, var(--background) 45%, transparent) 0%, transparent 60%), linear-gradient(to bottom, transparent 65%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
