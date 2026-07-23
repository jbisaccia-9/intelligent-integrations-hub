import { useEffect, useRef } from "react";

/**
 * Shared setup for the interior-page canvas scenes.
 *
 * Handles: DPR-aware sizing via ResizeObserver, IntersectionObserver pause,
 * pointer parallax, prefers-reduced-motion opt-out (single static frame), and
 * damped `--constellation-opacity` → host.style.opacity so scroll dissolve
 * matches the homepage neural network cadence.
 *
 * The draw callback receives elapsed time, deltaTime, pointer-eased xy in
 * [-1,1], and canvas w/h in CSS pixels. Reduced-motion callers get exactly one
 * call with dt=0 and static pointer for the fallback frame.
 */
export function useAmbientCanvas(
  hostRef: React.RefObject<HTMLDivElement | null>,
  draw: (
    ctx: CanvasRenderingContext2D,
    now: number,
    dt: number,
    mx: number,
    my: number,
    w: number,
    h: number,
  ) => void,
) {
  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof window === "undefined") return;
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    host.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      host.removeChild(canvas);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = host.clientWidth || 1;
    let h = host.clientHeight || 1;
    const resize = () => {
      w = host.clientWidth || 1;
      h = host.clientHeight || 1;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      draw(ctx, 0, 0, 0, 0, w, h);
      return () => {
        ro.disconnect();
        if (canvas.parentNode === host) host.removeChild(canvas);
      };
    }

    let tmx = 0, tmy = 0, mx = 0, my = 0;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      tmx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      tmy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => { for (const e of entries) visible = e.isIntersecting; },
      { threshold: 0.01 },
    );
    io.observe(host);

    let currentOpacity = 1;
    const OPACITY_LERP = 1.6;

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible) return;

      const cs = getComputedStyle(host);
      const raw = parseFloat(cs.getPropertyValue("--constellation-opacity") || "1");
      const target = isNaN(raw) ? 1 : Math.max(0, Math.min(1, raw));
      currentOpacity += (target - currentOpacity) * Math.min(1, dt * OPACITY_LERP);
      host.style.opacity = currentOpacity.toFixed(3);

      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      ctx.clearRect(0, 0, w, h);
      draw(ctx, now / 1000, dt, mx, my, w, h);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (canvas.parentNode === host) host.removeChild(canvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export const INK = "26, 36, 64";
export const INK_SOFT = "106, 119, 150";
export const BLUE = "47, 79, 191";
