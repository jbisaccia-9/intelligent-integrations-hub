import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { ArchitectureScene } from "@/components/ambient/ArchitectureScene";
import {
  DataStreamDivider,
  TokenStream,
  CircuitBackdrop,
  TerminalHeader,
} from "@/components/ChapterMotifs";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Joseph Bisaccia" },
      {
        name: "description",
        content:
          "Explore five selected gates from Joseph Bisaccia’s 12 public Python and JavaScript repositories, alongside aggregate enterprise AI leadership outcomes.",
      },
      { property: "og:title", content: "Projects — Joseph Bisaccia" },
      {
        property: "og:description",
        content:
          "Five selected public AI gates and aggregate forward-deployed enterprise AI leadership outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://getaiintegrations.com/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://getaiintegrations.com/projects#webpage",
          url: "https://getaiintegrations.com/projects",
          name: "Projects — Joseph Bisaccia",
          description:
            "Five selected public gates from 12 Python and JavaScript repositories, plus aggregate enterprise AI leadership outcomes.",
          isPartOf: { "@id": "https://getaiintegrations.com/#website" },
          about: { "@id": "https://getaiintegrations.com/#person" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: ["verify-gate", "mcp-gate", "target-gate", "rag-gate", "roi-gate"].map(
              (name, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "SoftwareSourceCode",
                  name,
                  codeRepository: `https://github.com/jbisaccia-9/${name}`,
                  author: { "@id": "https://getaiintegrations.com/#person" },
                },
              }),
            ),
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://getaiintegrations.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://getaiintegrations.com/projects",
              },
            ],
          },
        }),
      },
    ],
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
    slug: "hipaa-clinical-ai-function",
    title: "Enterprise AI function for a national behavioral health network",
    context: "Behavior Frontiers · Jul 2026 – Present",
    problem:
      "A national behavioral health network needed secure enterprise AI delivery and organization-wide adoption in a regulated setting.",
    solution:
      "Led a 72-seat Microsoft Copilot rollout and deployed 10 AI workflows in regulated clinical and operational contexts, with governance and value measurement.",
    architecture:
      "Secure, governed enterprise AI delivery with adoption and value measured at the program level; private implementation details are not disclosed.",
    technologies: ["Enterprise AI", "Agentic workflows", "Governance", "Adoption"],
    security: "Regulated delivery grounded in appropriate access boundaries and privacy review.",
    governance:
      "Evaluation, rollout oversight, and conservative value measurement support sustainable billable-hour growth, denial prevention, and service capacity without disclosing private workflows.",
    impact:
      "Reached 66 active users across 72 Microsoft Copilot seats (92%) and 8,021 prompts in 30 days; conservative modeling estimates $52,654 in annualized net value after license costs.",
  },
  {
    slug: "solar-rag-chatbot",
    title: "Customer-facing RAG chatbot with agentic logic",
    context: "Capital Energy · Sep 2025 – Jul 2026",
    problem:
      "Inbound solar inquiries arrived faster than the team could answer them, slowing response times and pushing routine questions onto sales staff.",
    solution:
      "Designed and deployed a customer-facing RAG chatbot with agentic logic that answers inbound solar queries directly and hands off when human help is needed.",
    architecture:
      "Retrieval over the company's product and process documentation, agentic routing for multi-step questions, and integration with existing customer channels.",
    technologies: ["RAG", "Prompt engineering", "Agentic logic", "API integration"],
    security:
      "Scoped credentials for integrated systems and constrained retrieval sources to approved company content.",
    governance:
      "Prompt iteration guided by output review and response-quality evaluation before broader rollout.",
    impact:
      "Reduced response times by 40% and increased self-service adoption for inbound queries.",
  },
  {
    slug: "lead-reactivation-agent",
    title: "Outbound lead reactivation agent",
    context: "Capital Energy · Sep 2025 – Jul 2026",
    problem:
      "A large backlog of dormant prospects sat untouched because manual outreach did not scale with the sales team's capacity.",
    solution:
      "Built an outbound reactivation agent using Voiceflow, Twilio, and ElevenLabs to automate prospect engagement and route interested leads back to sales.",
    architecture:
      "Conversation flows in Voiceflow, telephony and messaging via Twilio, synthesized voice via ElevenLabs, with outcomes written back to the CRM.",
    technologies: ["Voiceflow", "Twilio", "ElevenLabs", "CRM administration"],
    security:
      "Scoped API credentials per integrated service and controlled contact lists for outreach.",
    governance:
      "Human handoff for qualified conversations and review of agent transcripts to tune behavior.",
    impact: "Automated prospect engagement at scale and accelerated sales pipeline growth.",
  },
  {
    slug: "crm-migration-automation",
    title: "CRM migration and operational automation program",
    context: "Capital Energy · Sep 2025 – Jul 2026",
    problem:
      "Fragmented systems and manual handoffs made operational work slow to run and slow to set up for new campaigns and teams.",
    solution:
      "Led the CRM migration to Core 365 as technical project manager — data migration, workflow redesign, and system integration — and designed Make and Zapier automation pipelines across operations.",
    architecture:
      "Migrated CRM data model and redesigned workflows, with Make and Zapier pipelines connecting CRM, communications, and internal tooling.",
    technologies: ["Core 365", "Make", "Zapier", "CRM administration", "API integration"],
    security:
      "Controlled data migration with scoped access during cutover and per-connection credential management.",
    governance:
      "Staged migration plan with stakeholder sign-off, workflow documentation, and post-cutover support.",
    impact: "Reduced manual operational work by 40% and setup time by 30%.",
  },
  {
    slug: "frontier-model-training",
    title: "Model training, evaluation, and RLHF contract work",
    context: "Handshake AI · Outlier AI · Mercor · Nov 2024 – Present",
    problem:
      "Frontier AI platforms need expert human judgment to curate training data and evaluate model behavior on technical and conversational tasks.",
    solution:
      "Ongoing contract work performing expert data annotation and dataset curation for LLM training pipelines, evaluating outputs against reward metrics, and contributing to RLHF and preference-data workflows.",
    architecture:
      "Platform-provided annotation and evaluation environments with rubric-based scoring and preference comparison tasks.",
    technologies: ["LLM evaluation", "RLHF", "Preference data", "Prompt engineering"],
    security:
      "Work performed under each platform's confidentiality and data-handling requirements; project specifics are not disclosed.",
    governance:
      "Rubric-driven scoring focused on response quality, alignment, consistency, and hallucination mitigation.",
    impact:
      "Directly informs how I design evaluation and hallucination-mitigation practices for enterprise deployments.",
  },
];

const CAPABILITIES: { title: string; body: string }[] = [
  {
    title: "RAG and retrieval infrastructure",
    body: "Ingestion, chunking, and retrieval over private corpora with citation-first synthesis and access-aware sourcing.",
  },
  {
    title: "Agentic workflow development",
    body: "Tool-using agents scoped to defined business processes, with human handoff at the points that need judgment.",
  },
  {
    title: "LLM evaluation & hallucination mitigation",
    body: "Rubric and reward-metric evaluation of model outputs, applied before rollout and revisited as prompts and models change.",
  },
  {
    title: "Governed, compliant AI architecture",
    body: "Secure enterprise AI patterns for healthcare and other regulated industries, including HIPAA-aware infrastructure design.",
  },
  {
    title: "Automation & systems integration",
    body: "Make, Zapier, and API-level integration across CRM, communications, and internal tooling.",
  },
  {
    title: "Adoption, training & change management",
    body: "Stakeholder engagement and training enablement so distributed teams actually use what gets built.",
  },
];

type Gate = {
  name: string;
  repo: string;
  tagline: string;
  gate: string;
  evidence: string;
  caveat: string;
  tags: string[];
};

const GATES: Gate[] = [
  {
    name: "verify-gate",
    repo: "https://github.com/jbisaccia-9/verify-gate",
    tagline: "Document-verification gate with explicit human approval before release.",
    gate: "Source facts, disclosure, file fidelity, eligibility, and byte-bound human approval must all clear.",
    evidence: "21 tests; 9/9 valid packets passed, while 6/6 counterexamples were refused.",
    caveat:
      "Synthetic fixtures and non-production harness; not evidence of an employer deployment.",
    tags: ["Verification", "Human approval", "Release gate"],
  },
  {
    name: "mcp-gate",
    repo: "https://github.com/jbisaccia-9/mcp-gate",
    tagline: "MCP file-access server with an enforced roots boundary below the prompt layer.",
    gate: "Canonicalize and resolve paths before the authorized-root check.",
    evidence:
      "11 tests; boundary mode blocked all 4 escape attacks that leaked through prompt-only control.",
    caveat: "Synthetic fixture/reference harness, not an employer deployment.",
    tags: ["MCP", "Tool security", "Authorization"],
  },
  {
    name: "target-gate",
    repo: "https://github.com/jbisaccia-9/target-gate",
    tagline:
      "Healthcare provider-targeting pipeline where delivery is blocked until data-quality gates pass.",
    gate: "Checksum, freshness, dedupe, field coverage, market coverage, and brief grounding must pass.",
    evidence:
      "CI enforces ≥80% field coverage and rejects a deliberately hallucinated provider brief.",
    caveat:
      "CI and demos use fixture snapshots; adapters are production-shaped, not a deployment claim.",
    tags: ["Pipelines", "Data quality", "Azure"],
  },
  {
    name: "rag-gate",
    repo: "https://github.com/jbisaccia-9/rag-gate",
    tagline:
      "Retrieval quality gate for RAG systems — the index only serves once retrieval is good enough.",
    gate: "Serves only at recall@3 ≥ 0.90.",
    evidence:
      "Recall@3 1.00 and MRR 0.958 on the current 12-query labeled set; an earlier 0.83 baseline was correctly blocked.",
    caveat: "Small, hand-labeled evaluation set; live NVIDIA embedding path requires API access.",
    tags: ["RAG", "Retrieval eval", "CI gate"],
  },
  {
    name: "roi-gate",
    repo: "https://github.com/jbisaccia-9/roi-gate",
    tagline: "Conservative adoption and value model that refuses unsupported ROI claims.",
    gate: "Realization discount, all-seat costs, license cost, excluded roles, and zero benefit for inactive users.",
    evidence:
      "7 tests; the conservative model passed and all 5 vendor-deck assumptions were refused.",
    caveat: "Synthetic adoption data and methodology, not an employer deployment.",
    tags: ["ROI", "Adoption", "Evaluation"],
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section
        id="projects-hero"
        className="relative isolate overflow-hidden border-b border-black/8"
      >
        <ArchitectureScene anchorId="projects-hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Projects
          </p>
          <h1
            className="mt-8 max-w-4xl font-display leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            Gates, harnesses, and delivered systems.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
            Twelve public Python and JavaScript gate repositories, with five selected projects
            featured here, alongside aggregate outcomes from forward-deployed enterprise AI
            leadership. Public tests use synthetic fixtures; private employer work stays private.
          </p>
        </div>
      </section>
      <DataStreamDivider />

      <section className="relative isolate overflow-hidden">
        <TokenStream />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Open-source evaluation &amp; governance harnesses
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl">
            Nothing ships until it passes a gate &mdash; and the gate itself must be earned.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            Five selected projects from 12 public Python and JavaScript gate repositories. These are
            tested, CI-checked harnesses using synthetic fixtures, not employer or client production
            deployments; each repository documents its limits.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {GATES.map((g, i) => (
              <a
                key={g.name}
                href={g.repo}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col bg-background p-6 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] text-primary/70 tabular-nums">
                      [{String(i).padStart(2, "0")}]
                    </p>
                    <h3 className="mt-2 font-mono text-base text-foreground">
                      jbisaccia-9/<span className="text-primary">{g.name}</span>
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{g.tagline}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      Gate
                    </dt>
                    <dd className="mt-0.5 text-foreground/85">{g.gate}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      Evidence
                    </dt>
                    <dd className="mt-0.5 text-foreground/85">{g.evidence}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      Limits
                    </dt>
                    <dd className="mt-0.5 text-muted-foreground">{g.caveat}</dd>
                  </div>
                </dl>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-black/10 bg-black/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <DataStreamDivider className="mt-20" />

          <p className="mt-20 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Professional engagements
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl">
            Delivered inside employer and client environments.
          </h2>

          <div className="mt-10 space-y-16">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i + 1} />
            ))}
          </div>

          <DataStreamDivider className="mt-20" />

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Representative capabilities
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl">Where I lead and build.</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Capability areas rather than delivered case studies &mdash; shaped by applied AI
              engineering and enterprise delivery.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {CAPABILITIES.map((c, i) => (
                <div key={c.title} className="bg-background p-6">
                  <p className="font-mono text-[10px] tracking-[0.22em] text-primary/70 tabular-nums">
                    [{String(i).padStart(2, "0")}]
                  </p>
                  <h3 className="mt-2 text-lg leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate mt-16 overflow-hidden rounded-lg border border-border bg-surface p-6">
            <CircuitBackdrop />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">
                  Explore the complete public portfolio on GitHub
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clone, run the tests, and read the limits each repository documents. Client and
                  employer work stays private.
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
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80"
            >
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
    <article
      id={project.slug}
      className="group scroll-mt-24 overflow-hidden rounded-lg border border-black/10 bg-surface transition-colors hover:border-primary/30"
    >
      <TerminalHeader path={project.slug} />
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-6 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {String(index).padStart(2, "0")} · {project.context}
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
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Technologies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-surface px-2 py-1 font-mono text-[10px] text-foreground/80"
            >
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
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <p
        className="mt-2 text-sm leading-relaxed text-foreground/90"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
