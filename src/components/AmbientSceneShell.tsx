import { useEffect, useRef, type ReactNode } from "react";

/**
 * Shared shell for interior-page ambient scenes. Manages the scroll-scrubbed
 * `--constellation-opacity` CSS variable (read by the scene's own damping loop)
 * and lays down the same ivory feather wash used site-wide so headline text
 * stays legible on top of the animated scene.
 *
 * Each interior page passes its own distinct scene as `children`. The neural
 * network is homepage-only.
 */
export function AmbientSceneShell({
  anchorId,
  className = "",
  children,
}: {
  anchorId: string;
  className?: string;
  children: ReactNode;
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
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 22% 28%, color-mix(in oklab, var(--background) 22%, transparent) 0%, transparent 65%), linear-gradient(to bottom, transparent 70%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
