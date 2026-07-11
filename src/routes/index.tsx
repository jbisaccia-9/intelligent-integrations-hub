import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Bisaccia — Lead AI Engineer" },
      { name: "description", content: "Joseph Bisaccia is a Lead AI Engineer building secure, compliant, enterprise AI systems — governance, security, infrastructure, RAG, and agentic workflows." },
      { property: "og:title", content: "Joseph Bisaccia — Lead AI Engineer" },
      { property: "og:description", content: "Enterprise AI governance, security, and infrastructure. RAG platforms, agentic workflows, and intelligent automations." },
      { name: "twitter:title", content: "Joseph Bisaccia — Lead AI Engineer" },
      { name: "twitter:description", content: "Enterprise AI governance, security, and infrastructure." },
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
  "Workflow Automation",
  "Technical Program Leadership",
  "Enterprise AI Adoption",
  "LLM Evaluation",
];

const FEATURED_PROJECTS = [
  {
    slug: "hipaa-clinical-copilot",
    title: "HIPAA-compliant clinical agent platform",
    context: "Behavior Frontiers · Healthcare",
    summary:
      "Agentic workflow suite that assists clinical and operations teams over PHI-safe knowledge bases, with audit-ready evaluation and human-in-the-loop review.",
    stack: ["Python", "TypeScript", "LangGraph", "OpenAI", "Postgres/pgvector", "AWS"],
  },
  {
    slug: "enterprise-rag-platform",
    title: "Enterprise RAG platform",
    context: "Multi-tenant knowledge retrieval",
    summary:
      "Governed retrieval layer over private document corpora with per-tenant isolation, hybrid search, and policy-aware answer synthesis.",
    stack: ["pgvector", "OpenSearch", "OpenAI", "Bedrock", "Terraform"],
  },
  {
    slug: "agentic-ops-copilots",
    title: "Agentic operations copilots",
    context: "Sales, RevOps &amp; back-office",
    summary:
      "Tool-using agents that automate long-tail operational work — CRM hygiene, document drafting, and inbox triage — with structured evaluation harnesses.",
    stack: ["LangChain", "Temporal", "TypeScript", "OpenAI", "Anthropic"],
  },
];

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Expertise />
      <FeaturedProjects />
      <GithubBand />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Joseph Bisaccia · Lead AI Engineer
        </p>
        <h1 className="max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
          Enterprise AI that organizations trust.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I design and implement secure, compliant AI systems — enterprise infrastructure,
          retrieval-augmented generation platforms, agentic workflows, and intelligent
          automations that solve real business problems.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
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
            Schedule a Consultation
          </Link>
        </div>
        <div className="mt-14 grid gap-6 border-t border-border pt-10 text-sm text-muted-foreground sm:grid-cols-3">
          <Meta label="Focus" value="Enterprise AI Governance, Security, Infrastructure" />
          <Meta label="Currently" value="Lead AI Engineer, Behavior Frontiers" />
          <Meta label="Open to" value="Select consulting engagements &amp; advisory work" />
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

function Expertise() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
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
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
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
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Open work</p>
            <h2 className="mt-3 text-2xl md:text-3xl">Architecture, implementation, and decisions in the open.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explore production-ready AI projects, architecture decisions, and engineering
              documentation on GitHub.
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
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <h2 className="max-w-3xl text-3xl leading-tight md:text-4xl">
            Building secure, compliant, enterprise AI systems that organizations trust.
          </h2>
          <div className="flex flex-col gap-2 md:items-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
              Start a conversation <ArrowRight className="h-4 w-4" />
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
