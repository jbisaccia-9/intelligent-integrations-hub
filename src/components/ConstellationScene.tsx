import { useEffect, useRef } from "react";

/**
 * Lightweight 3D particle constellation rendered with three.js.
 * - Lazy-loaded (dynamic import) so it never blocks SSR / first paint.
 * - Paused when offscreen (IntersectionObserver).
 * - Disabled entirely for prefers-reduced-motion.
 * - Capped particle count for mobile.
 *
 * The scene is meant to sit as a full-bleed backdrop behind the hero
 * (and, faintly, behind the closing CTA). It listens to a
 * `--constellation-opacity` CSS variable on itself for scroll-scrubbed
 * fade-out (set by GSAP on the parent).
 */
export function ConstellationScene({
  className = "",
  density = 1,
  respondToPointer = true,
}: {
  className?: string;
  density?: number;
  respondToPointer?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof window === "undefined") return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // No WebGL? Bail silently — CSS background still shows.
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
    if (!gl) return;

    let disposed = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const width = () => host.clientWidth || window.innerWidth;
      const height = () => host.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, width() / height(), 0.1, 200);
      camera.position.z = 40;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width(), height(), false);
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      host.appendChild(renderer.domElement);

      // ---- particles ----
      const isMobile = window.innerWidth < 768;
      const count = Math.round((isMobile ? 90 : 220) * density);
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      const R = 42;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * R * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * R * 1.2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * R;
        velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.008;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
      }

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      // Soft round sprite via canvas texture
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = spriteCanvas.height = 64;
      const sctx = spriteCanvas.getContext("2d")!;
      const grad = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0.0, "rgba(255, 214, 150, 1)");
      grad.addColorStop(0.4, "rgba(255, 190, 110, 0.55)");
      grad.addColorStop(1.0, "rgba(255, 170, 80, 0)");
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 64, 64);
      const sprite = new THREE.CanvasTexture(spriteCanvas);

      const pMat = new THREE.PointsMaterial({
        size: 0.55,
        map: sprite,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0xffd18a,
      });
      const points = new THREE.Points(pGeo, pMat);
      scene.add(points);

      // ---- connecting lines (rebuilt each frame within threshold) ----
      const maxLines = isMobile ? 140 : 380;
      const linePositions = new Float32Array(maxLines * 2 * 3);
      const lineGeo = new THREE.BufferGeometry();
      const lineAttr = new THREE.BufferAttribute(linePositions, 3);
      lineAttr.setUsage(THREE.DynamicDrawUsage);
      lineGeo.setAttribute("position", lineAttr);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xffb974,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const lineSegs = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lineSegs);

      // ---- interaction ----
      let mx = 0;
      let my = 0;
      let tmx = 0;
      let tmy = 0;
      const onMove = (e: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        tmx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        tmy = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      if (respondToPointer) {
        window.addEventListener("pointermove", onMove, { passive: true });
      }

      const onResize = () => {
        camera.aspect = width() / height();
        camera.updateProjectionMatrix();
        renderer.setSize(width(), height(), false);
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(host);

      // ---- offscreen pause ----
      let visible = true;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) visible = e.isIntersecting;
        },
        { threshold: 0.01 },
      );
      io.observe(host);

      // ---- render loop ----
      let raf = 0;
      const threshold = 6.5;
      const threshold2 = threshold * threshold;
      const posAttr = pGeo.getAttribute("position") as THREE.BufferAttribute;

      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;

        // read scrubbed opacity from CSS var each frame
        const cs = getComputedStyle(host);
        const o = parseFloat(cs.getPropertyValue("--constellation-opacity") || "1");
        const clamped = isNaN(o) ? 1 : Math.max(0, Math.min(1, o));
        host.style.opacity = String(clamped);

        // ease camera to pointer
        mx += (tmx - mx) * 0.03;
        my += (tmy - my) * 0.03;
        camera.position.x = mx * 4;
        camera.position.y = -my * 3;
        camera.lookAt(0, 0, 0);

        // drift particles
        const arr = posAttr.array as Float32Array;
        for (let i = 0; i < count; i++) {
          const ix = i * 3;
          arr[ix] += velocities[ix];
          arr[ix + 1] += velocities[ix + 1];
          arr[ix + 2] += velocities[ix + 2];
          if (arr[ix] > R || arr[ix] < -R) velocities[ix] *= -1;
          if (arr[ix + 1] > R * 0.6 || arr[ix + 1] < -R * 0.6) velocities[ix + 1] *= -1;
          if (arr[ix + 2] > R * 0.5 || arr[ix + 2] < -R * 0.5) velocities[ix + 2] *= -1;
        }
        posAttr.needsUpdate = true;

        // rebuild lines within neighbour threshold (single pass, capped)
        let li = 0;
        for (let i = 0; i < count && li < maxLines; i++) {
          const ax = arr[i * 3];
          const ay = arr[i * 3 + 1];
          const az = arr[i * 3 + 2];
          for (let j = i + 1; j < count && li < maxLines; j++) {
            const dx = ax - arr[j * 3];
            const dy = ay - arr[j * 3 + 1];
            const dz = az - arr[j * 3 + 2];
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < threshold2) {
              linePositions[li * 6 + 0] = ax;
              linePositions[li * 6 + 1] = ay;
              linePositions[li * 6 + 2] = az;
              linePositions[li * 6 + 3] = arr[j * 3];
              linePositions[li * 6 + 4] = arr[j * 3 + 1];
              linePositions[li * 6 + 5] = arr[j * 3 + 2];
              li++;
            }
          }
        }
        lineGeo.setDrawRange(0, li * 2);
        lineAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        if (respondToPointer) window.removeEventListener("pointermove", onMove);
        pGeo.dispose();
        pMat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
        sprite.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === host) {
          host.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [density, respondToPointer]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className={className}
      style={{
        // fallback backdrop for reduced-motion / no-WebGL
        backgroundImage:
          "radial-gradient(60% 50% at 20% 30%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 60%), radial-gradient(45% 40% at 80% 70%, color-mix(in oklab, oklch(0.55 0.15 250) 18%, transparent) 0%, transparent 65%)",
      }}
    />
  );
}
