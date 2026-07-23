import { useRef } from "react";
import { AmbientSceneShell } from "@/components/AmbientSceneShell";
import { useAmbientCanvas, INK_SOFT, BLUE } from "@/components/ambient/useAmbientCanvas";

/**
 * ABOUT header — "optimization landscape" scene.
 *
 * 3D wireframe loss surface (fine ink mesh) with gentle undulating hills and
 * one clear basin, slowly oscillating a few degrees. A small blue sphere rolls
 * down the gradient into the minimum, settles, fades, and restarts from a new
 * random position. Quiet metaphor for iterative improvement.
 */
export function LandscapeScene({ anchorId }: { anchorId: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  const stateRef = useRef({
    ball: { x: 0.2, y: 0.2, phase: "roll" as "roll" | "settle" | "fade" | "spawn", timer: 0, alpha: 1 },
  });

  // Loss surface: sum of a broad basin near the center + a couple of soft humps.
  const surface = (u: number, v: number) => {
    // u,v in [-1,1]
    const basinX = 0.15, basinY = 0.05;
    const dx = u - basinX, dy = v - basinY;
    const basin = (dx * dx + dy * dy) * 1.1;
    const hump1 = 0.35 * Math.exp(-(((u + 0.55) ** 2) / 0.22 + ((v + 0.4) ** 2) / 0.28));
    const hump2 = 0.28 * Math.exp(-(((u - 0.6) ** 2) / 0.30 + ((v - 0.5) ** 2) / 0.24));
    const ripple = 0.05 * Math.sin(u * 3.1) * Math.cos(v * 2.7);
    return basin + hump1 + hump2 + ripple;
  };

  const gradient = (u: number, v: number) => {
    const h = 0.02;
    return {
      gx: (surface(u + h, v) - surface(u - h, v)) / (2 * h),
      gy: (surface(u, v + h) - surface(u, v - h)) / (2 * h),
    };
  };

  useAmbientCanvas(hostRef, (ctx, now, dt, mx, my, w, h) => {
    const cx = w / 2, cy = h * 0.55;
    // subtle back-and-forth rotation, plus mouse parallax
    const yaw = Math.sin(now * 0.18) * 0.12 + mx * 0.15;
    const pitch = 0.85 + my * 0.05; // vertical squash
    const scaleX = Math.min(w, h * 1.6) * 0.42;
    const scaleY = Math.min(w, h * 1.6) * 0.22;
    const zScale = scaleY * 1.1;

    const project = (u: number, v: number) => {
      // rotate around vertical axis
      const cos = Math.cos(yaw), sin = Math.sin(yaw);
      const ru = u * cos - v * sin;
      const rv = u * sin + v * cos;
      const z = surface(u, v);
      const px = cx + ru * scaleX;
      const py = cy + rv * scaleY * pitch - z * zScale;
      return { px, py, depth: rv };
    };

    // Draw mesh
    const N = 22;
    const step = 2 / N;
    ctx.lineWidth = 0.8;
    // rows (constant v)
    for (let j = 0; j <= N; j++) {
      const v = -1 + j * step;
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        const u = -1 + i * step;
        const p = project(u, v);
        const alpha = 0.18 + (p.depth + 1) * 0.14;
        ctx.strokeStyle = `rgba(${INK_SOFT}, ${alpha.toFixed(3)})`;
        if (i === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      }
      ctx.stroke();
    }
    // cols (constant u)
    for (let i = 0; i <= N; i++) {
      const u = -1 + i * step;
      ctx.beginPath();
      for (let j = 0; j <= N; j++) {
        const v = -1 + j * step;
        const p = project(u, v);
        const alpha = 0.18 + (p.depth + 1) * 0.14;
        ctx.strokeStyle = `rgba(${INK_SOFT}, ${alpha.toFixed(3)})`;
        if (j === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      }
      ctx.stroke();
    }

    // Ball descent
    const s = stateRef.current.ball;
    if (dt > 0) {
      if (s.phase === "spawn") {
        s.x = -0.85 + Math.random() * 1.7;
        s.y = -0.85 + Math.random() * 1.7;
        // avoid spawning inside basin
        if (s.x * s.x + s.y * s.y < 0.25) { s.x *= 1.6; s.y *= 1.6; }
        s.phase = "roll";
        s.timer = 0;
        s.alpha = 1;
      } else if (s.phase === "roll") {
        const { gx, gy } = gradient(s.x, s.y);
        const speed = 0.28;
        s.x -= gx * dt * speed;
        s.y -= gy * dt * speed;
        s.x = Math.max(-1, Math.min(1, s.x));
        s.y = Math.max(-1, Math.min(1, s.y));
        if (gx * gx + gy * gy < 0.005) { s.phase = "settle"; s.timer = 0; }
      } else if (s.phase === "settle") {
        s.timer += dt;
        if (s.timer > 1.6) { s.phase = "fade"; s.timer = 0; }
      } else if (s.phase === "fade") {
        s.timer += dt;
        s.alpha = Math.max(0, 1 - s.timer / 0.8);
        if (s.alpha <= 0) s.phase = "spawn";
      }
    }
    if (s.alpha > 0.02) {
      const p = project(s.x, s.y);
      ctx.fillStyle = `rgba(${BLUE}, ${(0.9 * s.alpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(p.px, p.py, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(${BLUE}, ${(0.22 * s.alpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(p.px, p.py, 9, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return (
    <AmbientSceneShell anchorId={anchorId}>
      <div
        ref={hostRef}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 25% 35%, color-mix(in oklab, var(--primary) 8%, transparent) 0%, transparent 60%), radial-gradient(45% 40% at 80% 65%, color-mix(in oklab, var(--primary) 6%, transparent) 0%, transparent 65%)",
        }}
      />
    </AmbientSceneShell>
  );
}
