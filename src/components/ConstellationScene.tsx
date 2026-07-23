import { useEffect, useRef } from "react";

/**
 * Stylized 3D feed-forward neural network for the light editorial theme.
 *
 * - Distinct vertical layer planes (input → hidden → hidden → output).
 * - Nodes rendered as soft ink dots; edges as fine gray-blue lines.
 * - Bright blue pulses travel from input → output in continuous waves.
 * - Nodes brighten momentarily when a pulse arrives at their end.
 * - Slow mouse parallax, scroll-scrubbed fade (via `--constellation-opacity`
 *   CSS variable set on the host element by the page).
 * - Lazy-loaded, offscreen-paused, prefers-reduced-motion aware, mobile-capped.
 */
export function ConstellationScene({
  className = "",
  density = 1,
  respondToPointer = true,
  subtle = false,
}: {
  className?: string;
  density?: number;
  respondToPointer?: boolean;
  /** Ambient variant for interior pages: fewer nodes, slower pulses, lower opacity. */
  subtle?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof window === "undefined") return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

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

      const isMobile = window.innerWidth < 768;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, width() / height(), 0.1, 200);
      camera.position.set(0, 0, 46);
      camera.lookAt(0, 0, 0);

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

      // ---- palette (blueprint / engraving on ivory) ----
      const INK = new THREE.Color(0x1a2440);           // deep ink for nodes
      const INK_SOFT = new THREE.Color(0x6a7796);      // muted gray-blue for edges
      const BLUE = new THREE.Color(0x2f4fbf);          // logo blue for pulses / activation

      // ---- layer geometry ----
      // Layer sizes across the network. Scaled by density.
      const effectiveDensity = density * (subtle ? 0.75 : 1);
      const layerSizes = (
        isMobile
          ? [4, 6, 6, 4]
          : subtle
            ? [4, 6, 6, 4]
            : [5, 8, 8, 5]
      ).map((n) => Math.max(3, Math.round(n * effectiveDensity)));
      const layerCount = layerSizes.length;

      const spanX = isMobile ? 26 : 34;
      const spanY = isMobile ? 16 : 20;
      const layerX = (i: number) =>
        layerCount === 1 ? 0 : -spanX / 2 + (i / (layerCount - 1)) * spanX;

      type Node = { x: number; y: number; z: number; base: number; act: number };
      const layers: Node[][] = layerSizes.map((count, li) => {
        const arr: Node[] = [];
        for (let i = 0; i < count; i++) {
          const t = count === 1 ? 0.5 : i / (count - 1);
          const y = -spanY / 2 + t * spanY;
          // gentle organic jitter so layer planes feel hand-drawn
          const jitterX = (Math.sin(li * 3.1 + i * 1.7) * 0.6);
          const jitterY = (Math.cos(li * 2.3 + i * 2.1) * 0.4);
          const jitterZ = (Math.sin(li * 1.9 + i * 0.9) * 1.4);
          arr.push({
            x: layerX(li) + jitterX,
            y: y + jitterY,
            z: jitterZ,
            base: 0,
            act: 0, // activation brightness 0..1, decays each frame
          });
        }
        return arr;
      });

      // ---- nodes as PointsMaterial with a soft round sprite ----
      const totalNodes = layers.reduce((n, l) => n + l.length, 0);
      const nodePositions = new Float32Array(totalNodes * 3);
      const nodeColors = new Float32Array(totalNodes * 3);
      const nodeSizes = new Float32Array(totalNodes);
      const nodeIndex: Array<{ li: number; ni: number }> = [];
      {
        let k = 0;
        for (let li = 0; li < layers.length; li++) {
          for (let ni = 0; ni < layers[li].length; ni++) {
            const n = layers[li][ni];
            nodePositions[k * 3 + 0] = n.x;
            nodePositions[k * 3 + 1] = n.y;
            nodePositions[k * 3 + 2] = n.z;
            nodeColors[k * 3 + 0] = INK.r;
            nodeColors[k * 3 + 1] = INK.g;
            nodeColors[k * 3 + 2] = INK.b;
            nodeSizes[k] = 1;
            nodeIndex.push({ li, ni });
            k++;
          }
        }
      }
      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
      nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

      const dotCanvas = document.createElement("canvas");
      dotCanvas.width = dotCanvas.height = 64;
      const dctx = dotCanvas.getContext("2d")!;
      const dgrad = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      dgrad.addColorStop(0.0, "rgba(255,255,255,1)");
      dgrad.addColorStop(0.35, "rgba(255,255,255,0.85)");
      dgrad.addColorStop(1.0, "rgba(255,255,255,0)");
      dctx.fillStyle = dgrad;
      dctx.fillRect(0, 0, 64, 64);
      const dotTex = new THREE.CanvasTexture(dotCanvas);

      const nodeMat = new THREE.PointsMaterial({
        size: subtle ? 1.5 : 1.15,
        map: dotTex,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        opacity: subtle ? 1 : 0.9,
      });
      const nodePoints = new THREE.Points(nodeGeo, nodeMat);
      scene.add(nodePoints);

      // ---- edges: connect every node in layer L to every node in layer L+1 ----
      type Edge = { a: Node; b: Node; ai: number; bi: number };
      const edges: Edge[] = [];
      {
        let offset = 0;
        const layerOffsets: number[] = [];
        for (let li = 0; li < layers.length; li++) {
          layerOffsets.push(offset);
          offset += layers[li].length;
        }
        for (let li = 0; li < layers.length - 1; li++) {
          const a = layers[li];
          const b = layers[li + 1];
          for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
              edges.push({
                a: a[i],
                b: b[j],
                ai: layerOffsets[li] + i,
                bi: layerOffsets[li + 1] + j,
              });
            }
          }
        }
      }

      const edgePositions = new Float32Array(edges.length * 2 * 3);
      for (let e = 0; e < edges.length; e++) {
        const { a, b } = edges[e];
        edgePositions[e * 6 + 0] = a.x;
        edgePositions[e * 6 + 1] = a.y;
        edgePositions[e * 6 + 2] = a.z;
        edgePositions[e * 6 + 3] = b.x;
        edgePositions[e * 6 + 4] = b.y;
        edgePositions[e * 6 + 5] = b.z;
      }
      const edgeGeo = new THREE.BufferGeometry();
      edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
      const edgeMat = new THREE.LineBasicMaterial({
        color: INK_SOFT,
        transparent: true,
        opacity: subtle ? 0.32 : 0.18,
        depthWrite: false,
      });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      scene.add(edgeLines);

      // ---- pulses: bright blue dots traveling along edges ----
      // Reuse a fixed pool sized per edge count.
      const maxPulses = Math.min(edges.length, isMobile ? 24 : subtle ? 36 : 70);
      type Pulse = { e: number; t: number; speed: number; alive: boolean };
      const pulses: Pulse[] = Array.from({ length: maxPulses }, () => ({
        e: 0, t: 0, speed: 0, alive: false,
      }));
      // Meditative pacing — halved from earlier revisions. Interior (subtle)
      // pages match the homepage cadence so all four pages feel unified.
      const pulseSpeedScale = 0.5;
      const spawnRatePerSec = 0.7; // was 1.4
      const spawnPulse = (p: Pulse) => {
        p.e = Math.floor(Math.random() * edges.length);
        p.t = 0;
        p.speed = (0.22 + Math.random() * 0.35) * pulseSpeedScale;
        p.alive = true;
      };
      // Stagger initial pulses so waves feel continuous.
      for (let i = 0; i < pulses.length; i++) {
        if (Math.random() < 0.6) {
          spawnPulse(pulses[i]);
          pulses[i].t = Math.random();
        }
      }

      const pulsePositions = new Float32Array(maxPulses * 3);
      const pulseGeo = new THREE.BufferGeometry();
      const pulseAttr = new THREE.BufferAttribute(pulsePositions, 3);
      pulseAttr.setUsage(THREE.DynamicDrawUsage);
      pulseGeo.setAttribute("position", pulseAttr);

      const pulseCanvas = document.createElement("canvas");
      pulseCanvas.width = pulseCanvas.height = 64;
      const pctx = pulseCanvas.getContext("2d")!;
      const pgrad = pctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      pgrad.addColorStop(0.0, "rgba(80,120,255,1)");
      pgrad.addColorStop(0.35, "rgba(60,90,220,0.75)");
      pgrad.addColorStop(1.0, "rgba(60,90,220,0)");
      pctx.fillStyle = pgrad;
      pctx.fillRect(0, 0, 64, 64);
      const pulseTex = new THREE.CanvasTexture(pulseCanvas);

      const pulseMat = new THREE.PointsMaterial({
        size: subtle ? 1.8 : 1.4,
        map: pulseTex,
        color: BLUE,
        transparent: true,
        depthWrite: false,
        opacity: 1,
      });
      const pulsePoints = new THREE.Points(pulseGeo, pulseMat);
      scene.add(pulsePoints);

      // ---- interaction ----
      let tmx = 0, tmy = 0, mx = 0, my = 0;
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
      let last = performance.now();
      const nodeColorAttr = nodeGeo.getAttribute("color") as import("three").BufferAttribute;
      // Interior "subtle" pages match the homepage's calibrated brightness —
      // no ceiling dimming; only node/edge density differs.
      const opacityCeiling = 1;
      let currentOpacity = opacityCeiling;
      // Lower = slower/gentler easing of scroll-linked dissolve.
      const OPACITY_LERP = 1.6;

      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (!visible) return;

        // scroll-scrubbed opacity from CSS var, damped so the scene lags
        // gently behind fast scrolling rather than tracking it 1:1.
        const cs = getComputedStyle(host);
        const raw = parseFloat(cs.getPropertyValue("--constellation-opacity") || "1");
        const target = (isNaN(raw) ? 1 : Math.max(0, Math.min(1, raw))) * opacityCeiling;
        currentOpacity += (target - currentOpacity) * Math.min(1, dt * OPACITY_LERP);
        host.style.opacity = currentOpacity.toFixed(3);

        // ease camera parallax
        mx += (tmx - mx) * 0.04;
        my += (tmy - my) * 0.04;
        camera.position.x = mx * 3;
        camera.position.y = -my * 2;
        camera.lookAt(0, 0, 0);

        // decay node activations (halved decay rate → glow lingers longer)
        for (const layer of layers) {
          for (const n of layer) {
            n.act *= Math.max(0, 1 - dt * 1.1);
          }
        }

        // advance pulses
        for (let i = 0; i < pulses.length; i++) {
          const p = pulses[i];
          if (!p.alive) {
            if (Math.random() < dt * spawnRatePerSec) spawnPulse(p);
            pulsePositions[i * 3 + 0] = 9999;
            pulsePositions[i * 3 + 1] = 9999;
            pulsePositions[i * 3 + 2] = 9999;
            continue;
          }
          p.t += p.speed * dt;
          const edge = edges[p.e];
          if (p.t >= 1) {
            // activation ripple at destination node
            edge.b.act = Math.min(1.4, edge.b.act + 0.9);
            p.alive = false;
            pulsePositions[i * 3 + 0] = 9999;
            pulsePositions[i * 3 + 1] = 9999;
            pulsePositions[i * 3 + 2] = 9999;
            continue;
          }
          const t = p.t;
          pulsePositions[i * 3 + 0] = edge.a.x + (edge.b.x - edge.a.x) * t;
          pulsePositions[i * 3 + 1] = edge.a.y + (edge.b.y - edge.a.y) * t;
          pulsePositions[i * 3 + 2] = edge.a.z + (edge.b.z - edge.a.z) * t;
        }
        pulseAttr.needsUpdate = true;

        // write node colors: ink base + blue tint by activation
        const colArr = nodeColorAttr.array as Float32Array;
        for (let k = 0; k < nodeIndex.length; k++) {
          const { li, ni } = nodeIndex[k];
          const a = Math.min(1, layers[li][ni].act);
          const r = INK.r + (BLUE.r - INK.r) * a;
          const g = INK.g + (BLUE.g - INK.g) * a;
          const b = INK.b + (BLUE.b - INK.b) * a;
          colArr[k * 3 + 0] = r;
          colArr[k * 3 + 1] = g;
          colArr[k * 3 + 2] = b;
        }
        nodeColorAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        if (respondToPointer) window.removeEventListener("pointermove", onMove);
        nodeGeo.dispose();
        nodeMat.dispose();
        edgeGeo.dispose();
        edgeMat.dispose();
        pulseGeo.dispose();
        pulseMat.dispose();
        dotTex.dispose();
        pulseTex.dispose();
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
  }, [density, respondToPointer, subtle]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className={className}
      style={{
        // Static blueprint fallback for reduced-motion / no-WebGL — ivory wash
        // with a faint gray-blue tint, echoing the neural layout.
        backgroundImage:
          "radial-gradient(55% 45% at 25% 35%, color-mix(in oklab, var(--primary) 8%, transparent) 0%, transparent 60%), radial-gradient(45% 40% at 80% 65%, color-mix(in oklab, var(--primary) 6%, transparent) 0%, transparent 65%)",
      }}
    />
  );
}
