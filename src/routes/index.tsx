import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
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

function PortfolioReel() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Portfolio reel</p>
            <h2 className="mt-3 text-2xl md:text-3xl">A short tour of the work.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A brief walkthrough of production AI systems — governance, retrieval, and agentic workflows in the wild.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
          <video
            controls
            preload="metadata"
            playsInline
            poster={portfolioPoster.url}
            className="block h-auto w-full"
          >
            <source src={portfolioVideo.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Joseph Bisaccia · AI Engineering Leader
        </p>
        <h1 className="max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
          I build AI systems &mdash; and the organizations that trust them.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          I lead enterprise AI adoption end to end: secure infrastructure, agentic workflows,
          and the training programs that turn skeptical teams into confident AI operators.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Request Advisory Session
          </Link>
        </div>
        <div className="mt-12 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-3">
          <Meta label="Focus" value="Enterprise AI Governance, Security, Infrastructure" />
          <Meta label="Currently" value="Lead AI Engineer, Behavior Frontiers &mdash; leading company-wide AI enablement" />
          <Meta label="Open to" value="Advisory engagements &amp; speaking opportunities" />
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-foreground" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
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
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Leadership &amp; enablement</p>
            <h2 className="mt-3 text-2xl md:text-3xl">
              Building the systems &mdash; and bringing the organization along.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Enterprise AI succeeds when engineering depth meets deliberate change management.
              A snapshot of current work.
            </p>
          </div>
          <div>
            <div className="grid gap-6 border-y border-border py-8 sm:grid-cols-3">
              <Stat number="65" label="Managers trained in Copilot program" />
              <Stat number="250+" label="Practitioners in expanding rollout" />
              <Stat number="5" label="Custom department GPTs in deployment" />
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {LEADERSHIP.map((item) => (
                <article key={item.title} className="bg-background p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{item.kicker}</p>
                  <h3 className="mt-2 text-lg leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl leading-none tracking-tight text-primary md:text-6xl">{number}</p>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Perspective() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Perspective</p>
            <h2 className="mt-3 text-2xl md:text-3xl">A note on what actually matters.</h2>
          </div>
          <div className="max-w-3xl space-y-6 border-l border-border pl-8 font-display text-xl leading-[1.5] tracking-tight text-foreground/90 md:text-2xl md:leading-[1.45]">
            <p>
              Enterprise AI success is an organizational challenge, not an engineering one. The
              model is the easy part. The hard part is governance, trust, and adoption &mdash; the
              slow work of building something a regulated organization can actually stand behind.
            </p>
            <p>
              The leaders who win the next decade won&rsquo;t just ship models. They&rsquo;ll build
              secure systems <em>and</em> bring entire organizations along &mdash; training the
              skeptics, designing the guardrails, and turning AI from a pilot deck into
              infrastructure.
            </p>
            <p>
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
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Expertise</p>
            <h2 className="mt-3 text-2xl md:text-3xl">
              Production AI systems for regulated and enterprise environments.
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {EXPERTISE.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-border/70 pb-3 text-sm">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Featured projects</p>
            <h2 className="mt-3 text-2xl md:text-3xl">Selected engineering case studies.</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80">
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {FEATURED_PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              hash={p.slug}
              className="group flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-surface"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{p.context}</p>
              <h3 className="text-lg leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: p.summary }} />
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read case study <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubBand() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Open work</p>
            <h2 className="mt-3 text-2xl md:text-3xl">Architecture, implementation, and decisions in the open.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Production-ready AI projects, architecture decisions, and engineering documentation
              &mdash; published on GitHub.
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between gap-4 rounded-md border border-border bg-background px-5 py-4 text-sm transition-colors hover:bg-surface-elevated"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">github.com</p>
              <p className="mt-1 font-medium">jbisaccia-9</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <h2 className="max-w-3xl text-3xl leading-tight md:text-4xl">
            Building the AI systems &mdash; and the organizations &mdash; that the next decade will run on.
          </h2>
          <div className="flex flex-col gap-2 md:items-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
              Request Advisory Session <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/resume.pdf" className="text-sm text-muted-foreground hover:text-foreground">
              Download resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
