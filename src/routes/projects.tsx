import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { PageAmbientScene } from "@/components/PageAmbientScene";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Joseph Bisaccia" },
      { name: "description", content: "Engineering case studies from Joseph Bisaccia — enterprise RAG platforms, HIPAA-compliant agentic workflows, and production AI infrastructure." },
      { property: "og:title", content: "Projects — Joseph Bisaccia" },
      { property: "og:description", content: "Engineering case studies for production AI systems: governance, security, and infrastructure." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  security: string;
  governance: string;
  impact: string;
  repo?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "hipaa-clinical-copilot",
    title: "HIPAA-compliant clinical agent platform",
    context: "Behavior Frontiers · Regulated healthcare",
    problem:
      "Clinical and operations teams spent hours navigating fragmented documentation, intake, and reporting workflows across PHI-heavy systems, with no safe path to apply LLMs.",
    solution:
      "An agentic workflow platform that assists staff over PHI-safe knowledge bases, drafts intake and documentation artifacts, and routes anything ambiguous to a human reviewer.",
    architecture:
      "Retrieval layer over segmented, tenant-scoped indexes; tool-using agents orchestrated with typed contracts; evaluation harness with golden sets, red-team suites, and continuous regression tracking.",
    technologies: ["Python", "TypeScript", "LangGraph", "OpenAI", "Anthropic", "Postgres / pgvector", "AWS", "Terraform"],
    security:
      "PHI isolation, encryption in transit and at rest, least-privilege IAM, prompt-injection defenses, secret scanning, and full audit logging of model inputs, tool calls, and outputs.",
    governance:
      "Policy-driven guardrails, human-in-the-loop review, model and prompt versioning, evaluation gates before rollout, and structured incident response for model behavior regressions.",
    impact:
      "Cut documentation turnaround for high-volume workflows, freed clinical time, and established an internal blueprint for safely extending LLMs to additional regulated workflows.",
  },
  {
    slug: "enterprise-rag-platform",
    title: "Enterprise RAG platform",
    context: "Multi-tenant knowledge retrieval",
    problem:
      "Teams across departments needed grounded answers over private document corpora, without leaking data across tenants or bypassing existing access controls.",
    solution:
      "A governed retrieval platform with per-tenant isolation, hybrid vector + keyword search, permission-aware chunking, and policy-checked answer synthesis.",
    architecture:
      "Ingestion pipeline with document normalization, chunking, and embedding; hybrid search over pgvector and OpenSearch; retrieval-time ACL enforcement; synthesis layer with citation-first prompting and refusal policies.",
    technologies: ["pgvector", "OpenSearch", "OpenAI", "Bedrock", "TypeScript", "Terraform", "AWS"],
    security:
      "Row-level tenant isolation, IAM-scoped access, encrypted embeddings, prompt-injection sanitization, and continuous evaluation against exfiltration probes.",
    governance:
      "Source citations on every answer, retrieval provenance logging, model routing policies, and evaluation dashboards for accuracy, refusal, and hallucination rates.",
    impact:
      "Unified knowledge access across departments with measurable answer quality and no observed cross-tenant leakage in production.",
  },
  {
    slug: "agentic-ops-copilots",
    title: "Agentic operations copilots",
    context: "Sales, RevOps &amp; back-office automation",
    problem:
      "High-volume, long-tail operational work (CRM hygiene, document drafting, inbox triage) consumed skilled time and resisted deterministic automation.",
    solution:
      "Tool-using agents that plan, act, and verify against enterprise systems, with structured evaluation harnesses ensuring behavior stays within policy as prompts and models evolve.",
    architecture:
      "Durable orchestration for long-running agent runs, typed tool interfaces to internal systems, retrieval for context, and offline evaluation against curated task suites.",
    technologies: ["LangChain", "Temporal", "TypeScript", "OpenAI", "Anthropic", "Postgres"],
    security:
      "Scoped tool credentials, per-agent policy allowlists, action-level audit trails, and human approvals gating destructive operations.",
    governance:
      "Deterministic evaluation gates in CI, model version pinning, prompt change review, and post-deployment behavior monitoring.",
    impact:
      "Redirected significant operational hours to higher-leverage work with measurable throughput gains and no material incident record.",
  },
  {
    slug: "voice-ai-front-desk",
    title: "Voice AI front-desk & intake agent",
    context: "Multi-location service operations",
    problem:
      "Front-desk staff were overwhelmed by inbound calls for scheduling, intake, and routine questions, causing missed calls and lost revenue outside business hours.",
    solution:
      "A production voice agent that answers calls, qualifies intent, books appointments, and escalates cleanly to a human — with structured call transcripts written back to the CRM.",
    architecture:
      "Low-latency speech pipeline (STT → LLM planner → tool calls → TTS), telephony via SIP/Twilio, deterministic booking tools, and a supervisor model that scores every call for QA.",
    technologies: ["Twilio", "Deepgram", "ElevenLabs", "OpenAI Realtime", "Node.js", "Postgres"],
    security:
      "Recording consent handling, PII redaction on transcripts, scoped API credentials per tenant, and rate-limited tool access to prevent misuse.",
    governance:
      "Per-call evaluation scoring, escalation logging, prompt and voice version pinning, and dashboards tracking answer rate, booking conversion, and containment.",
    impact:
      "Recovered a large share of previously missed calls and shifted routine intake off human staff without measurable drop in caller satisfaction.",
  },
  {
    slug: "n8n-integrations-suite",
    title: "AI-native integrations & workflow suite",
    context: "SMB automation · Intelligent Integrations",
    problem:
      "Growing teams were stitching CRMs, billing, email, and internal tools together with brittle Zaps that broke silently and had no visibility into failures.",
    solution:
      "A managed workflow layer built on n8n and typed adapters, augmented with LLM steps for classification, extraction, and drafting — with observability and replay built in.",
    architecture:
      "Self-hosted n8n on containerized infra, typed integration modules for Stripe / HubSpot / Gmail / Slack, LLM sub-workflows for enrichment and triage, and a run store for auditability.",
    technologies: ["n8n", "TypeScript", "Stripe", "HubSpot", "OpenAI", "Docker", "Postgres"],
    security:
      "Per-workflow credential scoping, secret rotation, webhook signature verification, and structured error alerts to on-call.",
    governance:
      "Versioned workflows, staged rollouts, run-level audit trail, and SLOs tracked per integration for reliability and cost.",
    impact:
      "Replaced a fragile Zap sprawl with a governed automation layer, cutting integration incidents and enabling AI-assisted steps inside existing business processes.",
  },
  {
    slug: "llm-evaluation-harness",
    title: "LLM evaluation & regression harness",
    context: "Cross-team model quality tooling",
    problem:
      "Prompt and model changes were shipping without a reliable way to catch regressions, and stakeholders had no shared view of model quality over time.",
    solution:
      "A reusable evaluation harness with golden datasets, rubric-graded judges, red-team suites, and CI gates that block regressions before they reach production.",
    architecture:
      "Dataset registry with versioned test suites, deterministic + LLM-judge scoring, side-by-side model comparison, CI integration, and a dashboard for accuracy, cost, and latency trends.",
    technologies: ["Python", "TypeScript", "OpenAI", "Anthropic", "GitHub Actions", "Postgres"],
    security:
      "Scrubbed evaluation datasets, isolated evaluation credentials, and controlled access to sensitive golden sets.",
    governance:
      "Signed-off evaluation gates before promotion, historical scorecards per prompt/model version, and clear ownership of failing suites.",
    impact:
      "Made model quality measurable and enforceable — teams ship prompt and model changes with confidence and a clear audit trail.",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-black/8">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Projects</p>
          <h1
            className="mt-8 max-w-4xl font-display leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            Case studies from production AI systems.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
            Each entry leads with the outcome and what it enabled for the organization,
            followed by the architecture, security, and governance decisions that made it
            possible.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="space-y-16">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i + 1} />
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-surface p-6">
            <div>
              <p className="text-sm font-medium">More engineering work on GitHub</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Architecture decisions, implementation details, and production-ready projects.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-elevated"
            >
              github.com/jbisaccia-9 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
              Discuss a similar engagement <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article id={project.slug} className="scroll-mt-24 overflow-hidden rounded-lg border border-black/10 bg-surface transition-colors hover:border-primary/30">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-6 md:p-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Case {String(index).padStart(2, "0")} · {project.context}
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl">{project.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-surface"
            >
              Repository <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-surface"
            >
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </header>
      <div className="grid gap-px bg-border md:grid-cols-2">
        <Field label="Outcome" value={project.impact} />
        <Field label="What it enabled" value={project.solution} />
        <Field label="Context" value={project.problem} />
        <Field label="Architecture" value={project.architecture} />
        <Field label="Security" value={project.security} />
        <Field label="Governance" value={project.governance} />
      </div>
      <div className="border-t border-border p-6 md:p-8">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Technologies</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="rounded border border-border bg-surface px-2 py-1 font-mono text-[11px] text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-6 md:p-8">
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
