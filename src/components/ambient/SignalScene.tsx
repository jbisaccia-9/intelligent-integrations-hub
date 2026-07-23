import { useRef } from "react";
import { AmbientSceneShell } from "@/components/AmbientSceneShell";
import { useAmbientCanvas, INK, INK_SOFT, BLUE } from "@/components/ambient/useAmbientCanvas";

/**
 * CONTACT header — "signal transmission" scene.
 *
 * Two endpoint nodes (left and right) with blue packets streaming along gently
 * curved paths between them, occasional acknowledgment pulses returning, and
 * a soft expanding ring at each arrival. Handshake / connection metaphor.
 */
export function SignalScene({ anchorId }: { anchorId: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  type Packet = { t: number; speed: number; ack: boolean; alive: boolean; curve: number };
  type Ring = { x: number; y: number; t: number; alive: boolean };

  const stateRef = useRef({
    packets: Array.from({ length: 14 }, () => ({ t: 0, speed: 0, ack: false, alive: false, curve: 0 } as Packet)),
    rings: Array.from({ length: 10 }, () => ({ x: 0, y: 0, t: 0, alive: false } as Ring)),
  });

  useAmbientCanvas(hostRef, (ctx, now, dt, mx, my, w, h) => {
    const s = stateRef.current;
    const ax = w * 0.18 + mx * 6;
    const ay = h * 0.50 + my * 4;
    const bx = w * 0.82 + mx * 6;
    const by = h * 0.50 + my * 4;

    // curved-path helpers
    const pathPoint = (t: number, curveAmp: number, ack: boolean) => {
      const x0 = ack ? bx : ax;
      const y0 = ack ? by : ay;
      const x1 = ack ? ax : bx;
      const y1 = ack ? by : ay;
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2 + curveAmp;
      // quadratic bezier
      const it = 1 - t;
      const px = it * it * x0 + 2 * it * t * cx + t * t * x1;
      const py = it * it * y0 + 2 * it * t * cy + t * t * y1;
      return { px, py };
    };

    // draw a small family of guide arcs (fine ink) so paths read as channels
    const guideAmps = [-h * 0.18, -h * 0.06, h * 0.06, h * 0.18];
    ctx.lineWidth = 0.8;
    for (const amp of guideAmps) {
      ctx.strokeStyle = `rgba(${INK_SOFT}, 0.18)`;
      ctx.beginPath();
      const steps = 40;
      for (let i = 0; i <= steps; i++) {
        const p = pathPoint(i / steps, amp, false);
        if (i === 0) ctx.moveTo(p.px, p.py);
        else ctx.lineTo(p.px, p.py);
      }
      ctx.stroke();
    }

    // spawn packets
    if (dt > 0) {
      for (const p of s.packets) {
        if (!p.alive && Math.random() < dt * 1.1) {
          p.t = 0;
          p.speed = 0.24 + Math.random() * 0.22;
          p.ack = false;
          p.alive = true;
          p.curve = guideAmps[Math.floor(Math.random() * guideAmps.length)];
        }
      }
    }

    // advance packets
    for (const p of s.packets) {
      if (!p.alive) continue;
      p.t += p.speed * dt;
      if (p.t >= 1) {
        // arrival: spawn ring at destination
        const dest = p.ack ? { x: ax, y: ay } : { x: bx, y: by };
        for (const r of s.rings) {
          if (!r.alive) { r.x = dest.x; r.y = dest.y; r.t = 0; r.alive = true; break; }
        }
        if (!p.ack && Math.random() < 0.4) {
          // send an ack back on same channel
          p.t = 0;
          p.ack = true;
          p.speed = 0.28 + Math.random() * 0.22;
        } else {
          p.alive = false;
          continue;
        }
      }
      const pt = pathPoint(p.t, p.curve, p.ack);
      ctx.fillStyle = p.ack
        ? `rgba(${INK}, 0.65)`
        : `rgba(${BLUE}, 0.9)`;
      ctx.beginPath();
      ctx.arc(pt.px, pt.py, p.ack ? 2 : 2.6, 0, Math.PI * 2);
      ctx.fill();
      if (!p.ack) {
        ctx.fillStyle = `rgba(${BLUE}, 0.18)`;
        ctx.beginPath();
        ctx.arc(pt.px, pt.py, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // rings
    for (const r of s.rings) {
      if (!r.alive) continue;
      r.t += dt;
      const life = 1.1;
      if (r.t >= life) { r.alive = false; continue; }
      const k = r.t / life;
      const radius = 6 + k * 34;
      const alpha = (1 - k) * 0.55;
      ctx.strokeStyle = `rgba(${BLUE}, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // endpoints
    const drawEndpoint = (x: number, y: number, label: string) => {
      ctx.fillStyle = `rgba(255, 253, 246, 0.9)`;
      ctx.strokeStyle = `rgba(${INK}, 0.75)`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = `rgba(${BLUE}, 0.85)`;
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = `rgba(${INK}, 0.55)`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(label, x, y + 14);
    };
    drawEndpoint(ax, ay, "you");
    drawEndpoint(bx, by, "joseph");
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
