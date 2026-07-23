import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
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
    links: [
      { rel: "canonical", href: "/" },
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
    context: "Sales, RevOps &amp; back-office",
    summary:
      "Redirected significant operational hours to higher-leverage work via tool-using agents with structured evaluation harnesses keeping behavior within policy.",
    stack: ["LangChain", "Temporal", "OpenAI", "Anthropic"],
  },
];

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <PortfolioReel />
      <Leadership />
      <Perspective />
      <Expertise />
      <FeaturedProjects />
      <GithubBand />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/8">
      <div aria-hidden className="ambient-glow" />
      <div aria-hidden className="grain" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-28 md:py-32">
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
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
          >
            Request Advisory Session
          </Link>
        </div>
        <div className="mt-20 grid gap-8 border-t border-white/8 pt-8 text-sm text-muted-foreground sm:grid-cols-3">
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

function PortfolioReel() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-white/8 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={r.ref} className={r.className}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Portfolio reel</p>
              <h2 className="mt-4 text-3xl md:text-5xl">A short tour of the work.</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A brief walkthrough of production AI systems — governance, retrieval, and agentic workflows in the wild.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] transition-colors hover:border-primary/30">
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
      </div>
    </section>
  );
}

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

function Leadership() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={r.ref} className={r.className}>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Leadership &amp; enablement</p>
              <h2 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
                Building the systems &mdash; and bringing the organization along.
              </h2>
              <p className="mt-6 max-w-md text-sm text-muted-foreground">
                Enterprise AI succeeds when engineering depth meets deliberate change management.
                A snapshot of current work.
              </p>
            </div>
            <div>
              <div className="grid gap-10 border-y border-white/8 py-14 sm:grid-cols-3">
                <Stat target={65} suffix="" label="Managers trained in Copilot program" />
                <Stat target={250} suffix="+" label="Practitioners in expanding rollout" />
                <Stat target={5} suffix="" label="Custom department GPTs in deployment" />
              </div>
              <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] sm:grid-cols-2">
                {LEADERSHIP.map((item) => (
                  <article
                    key={item.title}
                    className="group relative bg-surface p-7 transition-colors hover:bg-surface-elevated"
                  >
                    <div aria-hidden className="pointer-events-none absolute inset-0 rounded-none bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{item.kicker}</p>
                    <h3 className="relative mt-3 text-xl leading-snug">{item.title}</h3>
                    <p className="relative mt-4 text-sm leading-relaxed text-foreground/80">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const c = useCountUp(target);
  return (
    <div>
      <p
        className="font-display leading-none tracking-tight text-primary accent-glow"
        style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
      >
        <span ref={c.ref}>{c.value}</span>
        {suffix}
      </p>
      <p className="mt-4 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Perspective() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-surface">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div ref={r.ref} className={r.className}>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Perspective</p>
          <blockquote
            className="mt-10 max-w-5xl font-display italic leading-[1.08] tracking-tight text-foreground"
            style={{ fontSize: "clamp(2rem, 5.2vw, 4.75rem)" }}
          >
            &ldquo;Enterprise AI success is an organizational challenge, not an engineering one.
            The model is the easy part.&rdquo;
          </blockquote>
          <div className="mt-14 grid max-w-4xl gap-6 border-l border-white/15 pl-8 text-lg leading-[1.65] text-foreground/85 md:text-xl">
            <p>
              The hard part is governance, trust, and adoption &mdash; the slow work of
              building something a regulated organization can actually stand behind.
            </p>
            <p>
              The leaders who win the next decade won&rsquo;t just ship models. They&rsquo;ll build
              secure systems <em>and</em> bring entire organizations along &mdash; training the
              skeptics, designing the guardrails, and turning AI from a pilot deck into
              infrastructure.
            </p>
            <p className="text-muted-foreground">
              I work at exactly that intersection: hands-on engineering depth, paired with the
              organizational enablement that makes the engineering matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={r.ref} className={r.className}>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Expertise</p>
              <h2 className="mt-4 text-3xl md:text-5xl leading-[1.05]">
                Production AI systems for regulated and enterprise environments.
              </h2>
            </div>
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {EXPERTISE.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-white/8 pb-4 text-sm transition-colors hover:border-primary/40">
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

function FeaturedProjects() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-white/8 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={r.ref} className={r.className}>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Featured projects</p>
              <h2 className="mt-4 text-3xl md:text-5xl">Selected engineering case studies.</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80">
              All projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] md:grid-cols-3">
            {FEATURED_PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to="/projects"
                hash={p.slug}
                className="group relative flex flex-col gap-4 bg-surface p-7 transition-all hover:bg-surface-elevated"
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.context}</p>
                <h3 className="relative text-xl leading-snug">{p.title}</h3>
                <p className="relative text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: p.summary }} />
                <div className="relative mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
}

function GithubBand() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={r.ref} className={r.className}>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Open work</p>
              <h2 className="mt-4 text-3xl md:text-5xl leading-[1.05]">Architecture, implementation, and decisions in the open.</h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                Production-ready AI projects, architecture decisions, and engineering documentation
                &mdash; published on GitHub.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-md border border-white/10 bg-surface px-6 py-5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated"
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

function CTA() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div ref={r.ref} className={r.className}>
          <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:items-end">
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
