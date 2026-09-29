import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { ConstellationScene } from "@/components/ConstellationScene";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  ChapterLabel,
  DataStreamDivider,
  StatusLine,
  CircuitBackdrop,
  AttentionMatrix,
  GradientDescent,
  TokenStream,
  TerminalHeader,
} from "@/components/ChapterMotifs";
import { useReveal } from "@/hooks/use-reveal";
import portfolioVideo from "@/assets/portfolio.mp4.asset.json";
import portfolioPoster from "@/assets/portfolio-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Bisaccia — AI Engineering & Enterprise AI Leader" },
      {
        name: "description",
        content:
          "Joseph Bisaccia is a Lead AI Engineer connecting secure regulated AI delivery with enterprise adoption, sustainable billable-hour growth, and measurable value.",
      },
      { property: "og:title", content: "Joseph Bisaccia — AI Engineering & Enterprise AI Leader" },
      {
        property: "og:description",
        content:
          "Secure enterprise AI delivery, adoption, and measurable value in regulated environments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://getaiintegrations.com/" },
      { property: "og:image", content: portfolioPoster.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joseph Bisaccia — AI Engineering & Enterprise AI Leader" },
      {
        name: "twitter:description",
        content: "Enterprise AI systems and the organizations that trust them.",
      },
      { name: "twitter:image", content: portfolioPoster.url },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://getaiintegrations.com/#webpage",
          url: "https://getaiintegrations.com/",
          name: "Joseph Bisaccia — AI Engineering Leader",
          description:
            "Joseph Bisaccia is a Lead AI Engineer connecting secure regulated AI delivery, enterprise adoption, and measurable value.",
          isPartOf: { "@id": "https://getaiintegrations.com/#website" },
          about: { "@id": "https://getaiintegrations.com/#person" },
          primaryImageOfPage: portfolioPoster.url,
        }),
      },
    ],
  }),
  component: Home,
});

const EXPERTISE = [
  "Enterprise AI Governance",
  "AI Security",
  "Enterprise AI Infrastructure",
  "HIPAA-Compliant AI Systems",
  "Agentic Workflow Development",
  "Retrieval-Augmented Generation (RAG)",
  "Company-Wide AI Enablement",
  "Technical Program Leadership",
  "Change Management & Adoption",
  "LLM Evaluation",
];

const FEATURED_GATES = [
  {
    name: "verify-gate",
    repo: "https://github.com/jbisaccia-9/verify-gate",
    summary:
      "Document verification gate: 9/9 valid synthetic packets passed; 6/6 counterexamples refused until checks and human approval cleared.",
    stack: ["Verification", "Human approval", "CI gate"],
  },
  {
    name: "fanout-gate",
    repo: "https://github.com/jbisaccia-9/fanout-gate",
    summary:
      "Private-message delivery gate: 22/22 valid synthetic messages delivered; all 22 duplicate retries and 6/6 failure modes refused.",
    stack: ["Delivery", "Idempotency", "CI gate"],
  },
  {
    name: "perm-gate",
    repo: "https://github.com/jbisaccia-9/perm-gate",
    summary:
      "Permission-layer enforcement measured against prompt-only guardrails; scoped access must produce zero leaks on synthetic tests.",
    stack: ["Authorization", "Guardrails", "Security"],
  },
  {
    name: "target-gate",
    repo: "https://github.com/jbisaccia-9/target-gate",
    summary:
      "Data-quality gate blocks delivery until identifier, freshness, dedupe, coverage, and grounding checks pass on fixtures.",
    stack: ["Pipelines", "Data quality", "CI gate"],
  },
];

const FEATURED_PROJECTS = [
  {
    slug: "hipaa-clinical-ai-function",
    title: "Founding the AI function in regulated healthcare",
    context: "Behavior Frontiers · Healthcare",
    summary:
      "Led a 72-seat Microsoft Copilot rollout to 92% active use and 8,021 prompts in 30 days; deployed five agentic workflows with governance and measured value.",
    stack: ["Enterprise AI", "Agentic workflows", "Governance", "Value"],
  },
  {
    slug: "solar-rag-chatbot",
    title: "Customer-facing RAG chatbot with agentic logic",
    context: "Capital Energy · Sep 2025–Jul 2026",
    summary:
      "Designed and deployed an inbound-query assistant that reduced response times by 40% and increased self-service adoption.",
    stack: ["RAG", "Agentic logic", "API integration"],
  },
  {
    slug: "lead-reactivation-agent",
    title: "Outbound lead reactivation agent",
    context: "Capital Energy · Sep 2025–Jul 2026",
    summary:
      "Voice and messaging agent built with Voiceflow, Twilio, and ElevenLabs to automate prospect engagement and accelerate pipeline.",
    stack: ["Voiceflow", "Twilio", "ElevenLabs"],
  },
];

const LEADERSHIP = [
  {
    kicker: "Founding AI resource",
    title: "Standing up an enterprise AI function",
    body: "Leading secure enterprise AI delivery across a national behavioral health network — governance, adoption, measured value, and five deployed agentic workflows in regulated clinical and operational contexts.",
  },
  {
    kicker: "Governance & security",
    title: "Compliance-oriented implementation",
    body: "Building governance and evaluation into regulated AI delivery so adoption and value can be measured without compromising trust.",
  },
  {
    kicker: "Training enablement",
    title: "Change management for distributed teams",
    body: "Led a 72-seat Microsoft Copilot deployment to 66 active users and 8,021 prompts in 30 days through focused enablement and daily measurement.",
  },
  {
    kicker: "Frontier model work",
    title: "Model training & evaluation",
    body: "Ongoing contract work with Handshake AI, Outlier AI, and Mercor: dataset curation, reward-metric evaluation, and RLHF preference workflows.",
  },
];

const STATS = [
  {
    target: 92,
    suffix: "%",
    label: "Active use across a 72-seat Microsoft Copilot rollout in 30 days",
  },
  {
    target: 8021,
    suffix: "",
    label: "Prompts measured across the 72-seat enterprise rollout in 30 days",
  },
  {
    target: 5,
    suffix: "",
    label: "Agentic workflows deployed in regulated clinical and operational contexts",
  },
];

const PERSPECTIVE_LINES = [
  "Enterprise AI success is an organizational",
  "challenge, not an engineering one.",
  "The model is the easy part.",
];

function Home() {
  useHeroScrollFade();
  return (
    <SiteLayout>
      <ScrollProgress />
      <Hero />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <ChapterFive />
    </SiteLayout>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function useHeroScrollFade() {
  // Scroll-scrubbed fade for the hero constellation. Reads the hero's
  // bounding rect vs. viewport and writes a CSS var on it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const el = () => document.getElementById("hero-scene");
    const tick = () => {
      raf = 0;
      const node = el();
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // fully opaque when hero is centered; fades gradually as hero scrolls
      // off. Damping in the scene itself smooths the actual applied opacity.
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 1.4 || vh)));
      const opacity = Math.max(0, 1 - progress * 0.9);
      node.style.setProperty("--constellation-opacity", opacity.toFixed(3));
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
  }, []);
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/8">
      <div id="hero-scene" className="absolute inset-0 -z-10">
        <ConstellationScene className="absolute inset-0 h-full w-full" />
        <div aria-hidden className="ambient-glow" />
        <div aria-hidden className="grain" />
        {/* dark vignette to keep text legible over the WebGL scene */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 45%, transparent 0%, color-mix(in oklab, var(--background) 55%, transparent) 55%, var(--background) 100%)",
          }}
        />
      </div>
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 py-28 md:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-primary/80">{"//"}</span> Joseph Bisaccia{" "}
          <span className="mx-1 text-black/25">·</span> AI Engineering &amp; Enterprise AI Leader
        </p>
        <h1
          className="mt-8 max-w-[16ch] font-display leading-[0.95] tracking-tight text-foreground accent-glow"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          I build AI systems <span className="italic text-primary">&mdash;</span>
          <br />
          and the organizations
          <br />
          that trust them.
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I connect secure AI delivery in regulated environments with enterprise adoption,
          sustainable billable-hour growth, and measurable value.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-black/12 bg-black/[0.02] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-black/[0.04]"
          >
            Connect With Joseph
          </Link>
        </div>
        <div className="mt-20 grid gap-8 border-t border-black/8 pt-8 text-sm text-muted-foreground sm:grid-cols-3">
          <Meta label="Focus" value="Enterprise AI Governance, Security, Infrastructure" />
          <Meta
            label="Currently"
            value="Lead AI Engineer, Behavior Frontiers &mdash; building the AI function from the ground up"
          />
          <Meta
            label="Open to"
            value="AI engineering leadership, strategic collaborations &amp; speaking"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="scroll-hint flex flex-col items-center gap-1 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-foreground/90" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER SHELL                                                       */
/* ------------------------------------------------------------------ */

function ChapterHeading({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  const r = useReveal<HTMLDivElement>();
  return (
    <div ref={r.ref} className={r.className}>
      <ChapterLabel n={n} name={kicker.toUpperCase()} />
      <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">{title}</h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER 01 — THE SYSTEMS                                            */
/* ------------------------------------------------------------------ */

function ChapterOne() {
  const reel = useReveal<HTMLDivElement>();
  const expertise = useReveal<HTMLDivElement>();
  return (
    <section
      id="chapter-01"
      className="relative isolate overflow-hidden border-b border-black/8 bg-surface"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, var(--surface) 40%, var(--surface) 100%)",
      }}
    >
      <CircuitBackdrop />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <ChapterHeading n="01" kicker="The Systems" title="A short tour of the work." />
        <div ref={reel.ref} className={`mt-16 ${reel.className}`}>
          <div className="group relative overflow-hidden rounded-lg border border-black/10 bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] transition-colors hover:border-primary/30">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />
            <video
              controls
              preload="metadata"
              playsInline
              poster={portfolioPoster.url}
              className="relative block h-auto w-full"
            >
              <source src={portfolioVideo.url} type="video/mp4" />
            </video>
          </div>
        </div>

        <div ref={expertise.ref} className={`mt-28 ${expertise.className}`}>
          <div
            className="relative rounded-lg border border-black/8 p-8 md:p-12"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--background) 92%, transparent) 0%, color-mix(in oklab, var(--surface) 96%, transparent) 100%)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.6) inset",
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_2fr]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Expertise
                </p>
                <h3 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
                  Production AI systems for regulated and enterprise environments.
                </h3>
              </div>
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {EXPERTISE.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-black/8 pb-4 text-sm transition-colors hover:border-primary/40"
                  >
                    <span className="mt-0.5 font-mono text-[10px] tabular-nums text-muted-foreground">
                      [{i.toString().padStart(2, "0")}]
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER 02 — THE ORGANIZATION (pinned, scrubbed stats)              */
/* ------------------------------------------------------------------ */

function ChapterTwo() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeStat, setActiveStat] = useState(0);
  const [displayValues, setDisplayValues] = useState<number[]>(STATS.map(() => 0));
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReduced(true);
      setDisplayValues(STATS.map((s) => s.target));
      setActiveStat(STATS.length - 1);
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let raf = 0;
    const tick = () => {
      raf = 0;
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const progress = scrollable > 0 ? scrolled / scrollable : 0;

      // Divide into equal segments per stat. Each stat counts up within its own segment.
      const seg = 1 / STATS.length;
      const values = STATS.map((s, i) => {
        const local = Math.max(0, Math.min(1, (progress - i * seg) / seg));
        // ease-out cubic
        const eased = 1 - Math.pow(1 - local, 3);
        return Math.round(eased * s.target);
      });
      setDisplayValues(values);

      const idx = Math.min(
        STATS.length - 1,
        Math.max(0, Math.floor(progress * STATS.length + 0.0001)),
      );
      setActiveStat(idx);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const leadershipReveal = useReveal<HTMLDivElement>();

  return (
    <section
      id="chapter-02"
      className="relative border-b border-black/8"
      style={{
        background:
          "linear-gradient(to bottom, var(--surface) 0%, var(--background) 50%, var(--background) 100%)",
      }}
    >
      <DataStreamDivider />
      {/* Pinned, scrubbed stat scene (desktop). On mobile → simple stacked reveals. */}
      <div ref={wrapperRef} className="relative hidden md:block" style={{ height: "320vh" }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden isolate">
          <AttentionMatrix />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            <ChapterLabel n="02" name="ORGANIZATION" />
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              Building the systems &mdash; and bringing the organization along.
            </h2>

            <div className="relative mt-16 h-[46vh]">
              {STATS.map((s, i) => {
                const on = i === activeStat;
                return (
                  <div
                    key={s.label}
                    className="absolute inset-0 flex flex-col items-start justify-center transition-all duration-700 ease-out"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on
                        ? "translateY(0) scale(1)"
                        : `translateY(${i < activeStat ? "-40px" : "40px"}) scale(0.94)`,
                      pointerEvents: on ? "auto" : "none",
                    }}
                    aria-hidden={!on}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      <span className="text-primary/80">{"//"}</span> 0{i + 1} /{" "}
                      {STATS.length.toString().padStart(2, "0")}
                    </p>
                    <p
                      className="mt-6 font-display leading-none tracking-tight text-primary accent-glow tabular-nums"
                      style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
                    >
                      {displayValues[i].toLocaleString("en-US")}
                      {s.suffix}
                    </p>
                    <p className="mt-8 max-w-2xl font-mono text-sm uppercase tracking-[0.14em] text-foreground/80 md:text-base">
                      <span className="mr-2 text-primary/70">&gt;</span>
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* progress ticks */}
            <div className="mt-10 flex items-center gap-2">
              {STATS.map((_, i) => (
                <span
                  key={i}
                  className={
                    "h-px transition-all duration-500 " +
                    (i <= activeStat ? "w-16 bg-primary" : "w-8 bg-black/15")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback: static, stacked, no pinning */}
      <div className="md:hidden mx-auto max-w-6xl px-6 py-24">
        <ChapterLabel n="02" name="ORGANIZATION" />
        <h2 className="mt-6 text-4xl leading-[1.05]">
          Building the systems &mdash; and bringing the organization along.
        </h2>
        <div className="mt-12 grid gap-14">
          {STATS.map((s, i) => (
            <div key={s.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                0{i + 1}
              </p>
              <p
                className="mt-3 font-display leading-none tracking-tight text-primary accent-glow"
                style={{ fontSize: "clamp(5rem, 24vw, 9rem)" }}
              >
                <MobileCount target={s.target} />
                {s.suffix}
              </p>
              <p className="mt-3 text-base text-foreground/85">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership tile grid — always visible below */}
      <div className="mx-auto max-w-6xl px-6 pb-28 md:pb-40">
        <div ref={leadershipReveal.ref} className={leadershipReveal.className}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Leadership &amp; enablement — a snapshot
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-black/10 bg-black/[0.04] sm:grid-cols-2">
            {LEADERSHIP.map((item) => (
              <article
                key={item.title}
                className="group relative bg-surface p-7 transition-colors hover:bg-surface-elevated"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {item.kicker}
                </p>
                <h3 className="relative mt-3 text-xl leading-snug">{item.title}</h3>
                <p className="relative mt-4 text-sm leading-relaxed text-foreground/80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {reduced ? null : null}
    </section>
  );
}

function MobileCount({ target }: { target: number }) {
  // Simple count-up for mobile stats (no scrubbing).
  const ref = useRef<HTMLSpanElement | null>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setV(target);
      return;
    }
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const dur = 1500;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setV(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            run();
            io.disconnect();
            break;
          }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{v.toLocaleString("en-US")}</span>;
}

/* ------------------------------------------------------------------ */
/* CHAPTER 03 — THE PERSPECTIVE (line-by-line masked reveals)          */
/* ------------------------------------------------------------------ */

function ChapterThree() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = containerRef.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
    if (reduce) {
      lines.forEach((l) => l.setAttribute("data-in", "1"));
      return;
    }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        // trigger when line's center crosses 72% of viewport height
        if (rect.top + rect.height * 0.5 < vh * 0.72) {
          line.setAttribute("data-in", "1");
        }
      });
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
  }, []);

  return (
    <section
      id="chapter-03"
      className="relative isolate overflow-hidden border-b border-black/8 bg-surface"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, var(--surface) 40%, var(--surface) 100%)",
      }}
    >
      <DataStreamDivider />
      <GradientDescent />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-48" ref={containerRef}>
        <ChapterLabel n="03" name="PERSPECTIVE" />
        <blockquote
          className="mt-12 max-w-5xl font-display italic leading-[1.08] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 5.6vw, 5rem)" }}
        >
          {PERSPECTIVE_LINES.map((line, i) => (
            <span key={i} className="block">
              <span className="mask-reveal" data-line style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="mask-reveal-inner" style={{ transitionDelay: `${i * 120}ms` }}>
                  {i === 0 ? "\u201C" : ""}
                  {line}
                  {i === PERSPECTIVE_LINES.length - 1 ? "\u201D" : ""}
                </span>
              </span>
            </span>
          ))}
        </blockquote>
        <div className="mt-16 grid max-w-4xl gap-6 border-l border-black/12 pl-8 text-lg leading-[1.65] text-foreground/85 md:text-xl">
          <ProseLine>
            The hard part is governance, trust, and adoption &mdash; the slow work of building
            something a regulated organization can actually stand behind.
          </ProseLine>
          <ProseLine>
            The leaders who win the next decade won&rsquo;t just ship models. They&rsquo;ll build
            secure systems <em>and</em> bring entire organizations along &mdash; training the
            skeptics, designing the guardrails, and turning AI from a pilot deck into
            infrastructure.
          </ProseLine>
          <ProseLine muted>
            I work at exactly that intersection: hands-on engineering depth, paired with the
            organizational enablement that makes the engineering matter.
          </ProseLine>
        </div>
      </div>
    </section>
  );
}

function ProseLine({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  const r = useReveal<HTMLParagraphElement>();
  return (
    <p ref={r.ref} className={`${r.className} ${muted ? "text-muted-foreground" : ""}`}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER 04 — THE WORK (parallax project cards)                      */
/* ------------------------------------------------------------------ */

function ChapterFour() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;
    // Different parallax speeds per card.
    const speeds = [0.08, -0.02, 0.14];
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      // progress: 0 as section enters viewport, 1 as it leaves
      const p = 1 - Math.max(0, Math.min(1, (rect.top + rect.height / 2) / (vh + rect.height / 2)));
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = speeds[i % speeds.length];
        el.style.transform = `translate3d(0, ${(-p * 120 * s).toFixed(1)}px, 0)`;
      });
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
  }, []);

  const headingReveal = useReveal<HTMLDivElement>();
  const githubReveal = useReveal<HTMLDivElement>();

  return (
    <section
      id="chapter-04"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-black/8"
      style={{
        background:
          "linear-gradient(to bottom, var(--surface) 0%, var(--background) 40%, var(--background) 100%)",
      }}
    >
      <DataStreamDivider />
      <TokenStream />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div ref={headingReveal.ref} className={headingReveal.className}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <ChapterLabel n="04" name="WORK" />
              <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
                Nothing ships until it passes a gate.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                Open-source evaluation and governance harnesses &mdash; runnable, tested, and
                CI-checked. Every dataset is synthetic and every repository documents its limits.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80"
            >
              All projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-4">
          {FEATURED_GATES.map((p, i) => (
            <a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              ref={(el) => {
                cardRefs.current[i] = el as unknown as HTMLElement | null;
              }}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-black/10 bg-surface transition-colors will-change-transform hover:border-primary/30 hover:bg-surface-elevated"
            >
              <TerminalHeader path={p.name} />
              <div className="relative flex flex-1 flex-col gap-4 p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  github.com/jbisaccia-9
                </p>
                <h3 className="relative font-mono text-xl leading-snug">
                  jbisaccia-9/<span className="text-primary">{p.name}</span>
                </h3>
                <p className="relative text-sm text-muted-foreground">{p.summary}</p>
                <div className="relative mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded border border-black/10 bg-black/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="relative inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View repository <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80"
          >
            View the full project portfolio <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Professional engagements
          </p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 md:grid-cols-3">
            {FEATURED_PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to="/projects"
                hash={p.slug}
                className="group flex flex-col gap-2 bg-surface p-6 transition-colors hover:bg-surface-elevated"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.context}
                </p>
                <h3 className="text-lg leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  See details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div ref={githubReveal.ref} className={`mt-24 ${githubReveal.className}`}>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Open source
              </p>
              <h3 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
                Top projects, public and runnable.
              </h3>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                Eleven public Python and JavaScript gate repositories, with selected projects
                featured here. Each demonstrates a measurable release threshold on synthetic
                fixtures; employer work stays private.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-md border border-black/10 bg-surface px-6 py-5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  github.com
                </p>
                <p className="mt-1 font-medium">jbisaccia-9</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER 05 — CONTACT (constellation returns faintly)                */
/* ------------------------------------------------------------------ */

function ChapterFive() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="chapter-05" className="relative overflow-hidden">
      <DataStreamDivider />
      <div className="absolute inset-0 -z-10">
        <ConstellationScene
          className="absolute inset-0 h-full w-full opacity-40"
          density={0.55}
          respondToPointer={false}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 70% at 60% 50%, transparent 0%, color-mix(in oklab, var(--background) 55%, transparent) 55%, var(--background) 100%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
        <div ref={r.ref} className={r.className}>
          <ChapterLabel n="05" name="CONTACT" />
          <div className="mt-10 grid gap-12 md:grid-cols-[2fr_1fr] md:items-end">
            <h2 className="max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              Building the AI systems <span className="italic text-primary">&mdash;</span> and the
              organizations <span className="italic text-primary">&mdash;</span> that the next
              decade will run on.
            </h2>
            <div className="flex flex-col gap-4 md:items-end">
              <StatusLine text="system: online · accepting_connections" />
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Connect With Joseph{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="/resume.pdf?v=2026-09-29-public-safe-v2"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Download resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
