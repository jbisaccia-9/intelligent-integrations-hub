import { useRef } from "react";
import { AmbientSceneShell } from "@/components/AmbientSceneShell";
import { useAmbientCanvas, INK, INK_SOFT, BLUE } from "@/components/ambient/useAmbientCanvas";

/**
 * PROJECTS header — "system architecture" scene.
 *
 * A living distributed-system diagram: tiered service nodes (clients →
 * gateway → services → data stores) connected by fine ink edges with blue
 * request/response packets traveling along them. Nodes briefly highlight
 * when a packet arrives.
 */
export function ArchitectureScene({ anchorId }: { anchorId: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  type Node = { x: number; y: number; r: number; label: string; kind: "rect" | "circle"; act: number };
  type Edge = { a: number; b: number };
  type Packet = { e: number; t: number; speed: number; reverse: boolean; alive: boolean };

  const stateRef = useRef<{
    nodes: Node[]; edges: Edge[]; packets: Packet[]; sized: number;
  }>({ nodes: [], edges: [], packets: [], sized: 0 });

  const layout = (w: number, h: number) => {
    const s = stateRef.current;
    if (s.sized === w * 10000 + h) return;
    s.sized = w * 10000 + h;
    // Tiers with normalized x positions.
    const tiers: Array<{ x: number; ys: number[]; kind: "rect" | "circle"; labels: string[] }> = [
      { x: 0.10, ys: [0.32, 0.62], kind: "circle", labels: ["client", "client"] },
      { x: 0.36, ys: [0.47], kind: "rect", labels: ["gateway"] },
      { x: 0.62, ys: [0.25, 0.50, 0.75], kind: "rect", labels: ["svc-a", "svc-b", "svc-c"] },
      { x: 0.88, ys: [0.34, 0.66], kind: "rect", labels: ["store", "queue"] },
    ];
    const nodes: Node[] = [];
    const tierRanges: number[][] = [];
    for (const t of tiers) {
      const range: number[] = [];
      for (let i = 0; i < t.ys.length; i++) {
        range.push(nodes.length);
        nodes.push({
          x: t.x * w,
          y: t.ys[i] * h,
          r: t.kind === "circle" ? 5 : 6,
          label: t.labels[i],
          kind: t.kind,
          act: 0,
        });
      }
      tierRanges.push(range);
    }
    const edges: Edge[] = [];
    for (let i = 0; i < tierRanges.length - 1; i++) {
      for (const a of tierRanges[i]) {
        for (const b of tierRanges[i + 1]) edges.push({ a, b });
      }
    }
    s.nodes = nodes;
    s.edges = edges;
    s.packets = Array.from({ length: 22 }, () => ({ e: 0, t: 0, speed: 0, reverse: false, alive: false }));
  };

  useAmbientCanvas(hostRef, (ctx, now, dt, mx, my, w, h) => {
    layout(w, h);
    const s = stateRef.current;
    const px = mx * 6, py = my * 4;

    // decay activations
    for (const n of s.nodes) n.act *= Math.max(0, 1 - dt * 1.4);

    // spawn packets
    if (dt > 0) {
      for (const p of s.packets) {
        if (!p.alive && Math.random() < dt * 0.9) {
          p.e = Math.floor(Math.random() * s.edges.length);
          p.t = 0;
          p.speed = 0.18 + Math.random() * 0.25;
          p.reverse = Math.random() < 0.35;
          p.alive = true;
        }
      }
    }

    // edges
    ctx.lineWidth = 1;
    ctx.strokeStyle = `rgba(${INK_SOFT}, 0.35)`;
    for (const e of s.edges) {
      const a = s.nodes[e.a], b = s.nodes[e.b];
      ctx.beginPath();
      ctx.moveTo(a.x + px, a.y + py);
      ctx.lineTo(b.x + px, b.y + py);
      ctx.stroke();
    }

    // packets
    for (const p of s.packets) {
      if (!p.alive) continue;
      p.t += p.speed * dt;
      if (p.t >= 1) {
        const e = s.edges[p.e];
        const dest = p.reverse ? s.nodes[e.a] : s.nodes[e.b];
        dest.act = Math.min(1, dest.act + 0.9);
        p.alive = false;
        continue;
      }
      const e = s.edges[p.e];
      const a = p.reverse ? s.nodes[e.b] : s.nodes[e.a];
      const b = p.reverse ? s.nodes[e.a] : s.nodes[e.b];
      const t = p.t;
      const x = a.x + (b.x - a.x) * t + px;
      const y = a.y + (b.y - a.y) * t + py;
      ctx.fillStyle = `rgba(${BLUE}, 0.9)`;
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fill();
      // faint trailing glow
      ctx.fillStyle = `rgba(${BLUE}, 0.18)`;
      ctx.beginPath();
      ctx.arc(x, y, 5.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // nodes
    ctx.font = "9px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (const n of s.nodes) {
      const nx = n.x + px, ny = n.y + py;
      const act = Math.min(1, n.act);
      const stroke = `rgba(${INK}, ${0.55 + act * 0.35})`;
      const fill = act > 0.02
        ? `rgba(${BLUE}, ${0.10 + act * 0.35})`
        : `rgba(255, 253, 246, 0.85)`;
      ctx.strokeStyle = stroke;
      ctx.fillStyle = fill;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      if (n.kind === "circle") {
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
      } else {
        const rw = 20, rh = 12, rr = 3;
        const x = nx - rw / 2, y = ny - rh / 2;
        ctx.moveTo(x + rr, y);
        ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
        ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
        ctx.arcTo(x, y + rh, x, y, rr);
        ctx.arcTo(x, y, x + rw, y, rr);
        ctx.closePath();
      }
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = `rgba(${INK}, 0.5)`;
      ctx.fillText(n.label, nx, ny + (n.kind === "circle" ? n.r + 4 : 10));
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
