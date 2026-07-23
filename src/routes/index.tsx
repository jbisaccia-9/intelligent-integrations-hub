import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { ConstellationScene } from "@/components/ConstellationScene";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useReveal } from "@/hooks/use-reveal";
import portfolioVideo from "@/assets/portfolio.mp4.asset.json";
import portfolioPoster from "@/assets/portfolio-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Bisaccia — AI Engineering Leader" },
      { name: "description", content: "Joseph Bisaccia is an AI Engineering Leader building secure enterprise AI systems and leading the organizational change that makes them work — governance, agentic workflows, and adoption at scale." },
      { property: "og:title", content: "Joseph Bisaccia — AI Engineering Leader" },
      { property: "og:description", content: "Enterprise AI systems and the organizations that trust them. Governance, agentic workflows, and company-wide AI enablement." },
      { property: "og:image", content: portfolioPoster.url },
      { name: "twitter:title", content: "Joseph Bisaccia — AI Engineering Leader" },
      { name: "twitter:description", content: "Enterprise AI systems and the organizations that trust them." },
      { name: "twitter:image", content: portfolioPoster.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

const FEATURED_PROJECTS = [
  {
    slug: "hipaa-clinical-copilot",
    title: "HIPAA-compliant clinical agent platform",
    context: "Behavior Frontiers · Healthcare",
    summary:
      "Gave clinical and operations teams a safe way to use LLMs over PHI — cutting documentation turnaround and setting the internal blueprint for regulated AI expansion.",
    stack: ["LangGraph", "OpenAI", "pgvector", "AWS"],
  },
  {
    slug: "enterprise-rag-platform",
    title: "Enterprise RAG platform",
    context: "Multi-tenant knowledge retrieval",
    summary:
      "Unified grounded knowledge access across departments with per-tenant isolation and citation-first synthesis — measurable answer quality, zero observed cross-tenant leakage.",
    stack: ["pgvector", "OpenSearch", "Bedrock", "Terraform"],
  },
  {
    slug: "agentic-ops-copilots",
    title: "Agentic operations copilots",
    context: "Sales, RevOps & back-office",
    summary:
      "Redirected significant operational hours to higher-leverage work via tool-using agents with structured evaluation harnesses keeping behavior within policy.",
    stack: ["LangChain", "Temporal", "OpenAI", "Anthropic"],
  },
];

const LEADERSHIP = [
  {
    kicker: "Company-wide rollout",
    title: "Microsoft Copilot enablement — Lead",
    body: "Designed and delivered the Copilot training program for mid-level managers. Expanding the rollout across the organization's behavioral therapy practice.",
  },
  {
    kicker: "Department-level AI",
    title: "Custom GPTs in deployment",
    body: "Currently deploying five department-scoped GPTs — each tuned to the workflows, sources, and guardrails of the team it serves.",
  },
  {
    kicker: "Executive & operations",
    title: "Agentic workflows for the back office",
    body: "Building agentic systems that assist executive-level reporting and scheduling, and streamline HR and billing operations.",
  },
  {
    kicker: "Community",
    title: "The Velocity Room",
    body: "Active member of an AI engineering collective — recurring meetups, technical exchange, and shared work with practicing AI engineers.",
  },
];

const STATS = [
  { target: 65, suffix: "", label: "Managers trained in Copilot program" },
  { target: 250, suffix: "+", label: "Practitioners in expanding rollout" },
  { target: 5, suffix: "", label: "Custom department GPTs in deployment" },
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
      // fully opaque when hero is centered; fades as hero scrolls off.
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.85 || vh)));
      const opacity = Math.max(0, 1 - progress * 1.15);
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
          Joseph Bisaccia &nbsp;/&nbsp; AI Engineering Leader
        </p>
        <h1
          className="mt-8 max-w-[16ch] font-display leading-[0.95] tracking-tight text-foreground accent-glow"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          I build AI systems <span className="italic text-primary">&mdash;</span>
          <br />
          and the organizations<br />
          that trust them.
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I lead enterprise AI adoption end to end: secure infrastructure, agentic workflows,
          and the training programs that turn skeptical teams into confident AI operators.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-black/12 bg-black/[0.02] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-black/[0.04]"
          >
            Request Advisory Session
          </Link>
        </div>
        <div className="mt-20 grid gap-8 border-t border-black/8 pt-8 text-sm text-muted-foreground sm:grid-cols-3">
          <Meta label="Focus" value="Enterprise AI Governance, Security, Infrastructure" />
          <Meta label="Currently" value="Lead AI Engineer, Behavior Frontiers &mdash; leading company-wide AI enablement" />
          <Meta label="Open to" value="Advisory engagements &amp; speaking opportunities" />
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
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-foreground/90" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CHAPTER SHELL                                                       */
/* ------------------------------------------------------------------ */

function ChapterHeading({
  n,
  kicker,
  title,
}: {
  n: string;
  kicker: string;
  title: string;
}) {
  const r = useReveal<HTMLDivElement>();
  return (
    <div ref={r.ref} className={r.className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Chapter {n} <span className="mx-2 text-black/25">/</span> {kicker}
      </p>
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
      className="relative border-b border-black/8 bg-surface"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, var(--surface) 40%, var(--surface) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <ChapterHeading n="01" kicker="The Systems" title="A short tour of the work." />
        <div ref={reel.ref} className={`mt-16 ${reel.className}`}>
          <div className="group relative overflow-hidden rounded-lg border border-black/10 bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] transition-colors hover:border-primary/30">
            <div aria-hidden className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Expertise</p>
              <h3 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
                Production AI systems for regulated and enterprise environments.
              </h3>
            </div>
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {EXPERTISE.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-black/8 pb-4 text-sm transition-colors hover:border-primary/40">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
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
      {/* Pinned, scrubbed stat scene (desktop). On mobile → simple stacked reveals. */}
      <div ref={wrapperRef} className="relative hidden md:block" style={{ height: "320vh" }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Chapter 02 <span className="mx-2 text-black/25">/</span> The Organization
            </p>
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
                      0{i + 1} / {STATS.length.toString().padStart(2, "0")}
                    </p>
                    <p
                      className="mt-6 font-display leading-none tracking-tight text-primary accent-glow tabular-nums"
                      style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
                    >
                      {displayValues[i]}
                      {s.suffix}
                    </p>
                    <p className="mt-8 max-w-2xl text-lg text-foreground/85 md:text-2xl">
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
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Chapter 02 / The Organization
        </p>
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
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{item.kicker}</p>
                <h3 className="relative mt-3 text-xl leading-snug">{item.title}</h3>
                <p className="relative mt-4 text-sm leading-relaxed text-foreground/80">{item.body}</p>
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
        for (const e of entries) if (e.isIntersecting) { run(); io.disconnect(); break; }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{v}</span>;
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
      className="relative overflow-hidden border-b border-black/8 bg-surface"
      style={{
        background:
          "linear-gradient(to bottom, var(--background) 0%, var(--surface) 40%, var(--surface) 100%)",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48" ref={containerRef}>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Chapter 03 <span className="mx-2 text-black/25">/</span> The Perspective
        </p>
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
            The hard part is governance, trust, and adoption &mdash; the slow work of
            building something a regulated organization can actually stand behind.
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
      const p =
        1 - Math.max(0, Math.min(1, (rect.top + rect.height / 2) / (vh + rect.height / 2)));
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
      className="relative border-b border-black/8"
      style={{
        background:
          "linear-gradient(to bottom, var(--surface) 0%, var(--background) 40%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div ref={headingReveal.ref} className={headingReveal.className}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Chapter 04 <span className="mx-2 text-black/25">/</span> The Work
              </p>
              <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
                Selected engineering case studies.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80">
              All projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-4">
          {FEATURED_PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/projects"
              hash={p.slug}
              ref={(el) => { cardRefs.current[i] = el as unknown as HTMLElement | null; }}
              className="group relative flex flex-col gap-4 rounded-lg border border-black/10 bg-surface p-7 transition-colors will-change-transform hover:border-primary/30 hover:bg-surface-elevated"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.context}</p>
              <h3 className="relative text-xl leading-snug">{p.title}</h3>
              <p className="relative text-sm text-muted-foreground">{p.summary}</p>
              <div className="relative mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="rounded border border-black/10 bg-black/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <span className="relative inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read case study <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div ref={githubReveal.ref} className={`mt-24 ${githubReveal.className}`}>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Open work</p>
              <h3 className="mt-4 text-3xl md:text-5xl leading-[1.05]">Architecture, implementation, and decisions in the open.</h3>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                Production-ready AI projects, architecture decisions, and engineering documentation
                &mdash; published on GitHub.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-md border border-black/10 bg-surface px-6 py-5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">github.com</p>
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
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
        <div ref={r.ref} className={r.className}>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Chapter 05 <span className="mx-2 text-black/25">/</span> Contact
          </p>
          <div className="mt-10 grid gap-12 md:grid-cols-[2fr_1fr] md:items-end">
            <h2 className="max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              Building the AI systems <span className="italic text-primary">&mdash;</span> and the organizations <span className="italic text-primary">&mdash;</span> that the next decade will run on.
            </h2>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                Request Advisory Session <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="/resume.pdf" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Download resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
