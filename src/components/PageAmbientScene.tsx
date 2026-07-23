import { useEffect, useRef } from "react";
import { ConstellationScene } from "./ConstellationScene";

/**
 * Ambient neural-network backdrop for interior pages (Projects, About,
 * Contact). Sits fixed behind the page header and dissolves as the user
 * scrolls into content — same motif and scroll-fade behavior as the homepage
 * hero, but subtler (fewer nodes, slower pulses, lower opacity ceiling).
 *
 * Scroll fade is written to the `--constellation-opacity` CSS variable and
 * damped inside `ConstellationScene`, so fast scrolling doesn't cause the
 * scene to snap — it eases out serenely.
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
      // Fade begins as the anchor leaves the top of the viewport and completes
      // well before the anchor is fully offscreen. Damping in the scene
      // smooths any residual snap.
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
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden " + className
      }
    >
      <ConstellationScene
        className="absolute inset-0 h-full w-full"
        subtle
        density={0.85}
        respondToPointer={false}
      />
      {/* Soft ivory wash so text sits comfortably on top of the scene. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 70% at 50% 40%, transparent 0%, color-mix(in oklab, var(--background) 55%, transparent) 60%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
