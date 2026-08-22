import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout, GITHUB_URL } from "@/components/SiteLayout";
import { ArchitectureScene } from "@/components/ambient/ArchitectureScene";
import { DataStreamDivider, TokenStream, CircuitBackdrop, TerminalHeader } from "@/components/ChapterMotifs";

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
    slug: "hipaa-clinical-ai-function",
    title: "Enterprise AI function for a national behavioral health network",
    context: "Behavior Frontiers · Jul 2026 – Present",
    problem:
      "A national network of autism and behavioral health centers had no in-house AI engineering capability and no compliant path to apply LLMs to clinical and operational work.",
    solution:
      "Serving as the founding AI engineering resource: building HIPAA-compliant AI infrastructure, RAG pipelines, agentic workflows, and LLM-powered automation for clinical and operational teams.",
    architecture:
      "Retrieval pipelines over internal documentation, agentic workflows for repeatable operational tasks, and LLM automation integrated with existing enterprise systems.",
    technologies: ["Python", "LangChain", "RAG", "Agentic workflows", "API integration"],
    security:
      "HIPAA-compliant infrastructure design, PHI-aware data handling, and secure enterprise AI architecture patterns for a regulated clinical environment.",
    governance:
      "Governance-oriented implementation priorities set with clinical, operations, and department stakeholders; LLM evaluation and hallucination-mitigation practices applied to deployed workflows.",
    impact:
      "Established the organization's AI function and the training and change-management program that lets distributed teams adopt AI tools responsibly. Work is in progress; outcome metrics are not yet published.",
  },
  {
    slug: "solar-rag-chatbot",
    title: "Customer-facing RAG chatbot with agentic logic",
    context: "Capital Energy · 2024 – Jul 2026",
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
    context: "Capital Energy · 2024 – Jul 2026",
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
    impact:
      "Automated prospect engagement at scale and accelerated sales pipeline growth.",
  },
  {
    slug: "crm-migration-automation",
    title: "CRM migration and operational automation program",
    context: "Capital Energy · Technical project management",
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
    impact:
      "Reduced manual operational work by 40% and setup time by 30%.",
  },
  {
    slug: "frontier-model-training",
    title: "Model training, evaluation, and RLHF contract work",
    context: "Handshake AI · Outlier AI · Mercor · 2024 – Present",
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


function ProjectsPage() {
  return (
    <SiteLayout>
      <section id="projects-hero" className="relative isolate overflow-hidden border-b border-black/8">
        <ArchitectureScene anchorId="projects-hero" />
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
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
      <DataStreamDivider />

      <section className="relative isolate overflow-hidden">
        <TokenStream />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="space-y-16">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i + 1} />
            ))}
          </div>

          <DataStreamDivider className="mt-20" />

          <div className="relative isolate mt-10 overflow-hidden rounded-lg border border-border bg-surface p-6">
            <CircuitBackdrop />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
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
    <article id={project.slug} className="group scroll-mt-24 overflow-hidden rounded-lg border border-black/10 bg-surface transition-colors hover:border-primary/30">
      <TerminalHeader path={project.slug} />
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-6 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
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
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Technologies</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="rounded border border-border bg-surface px-2 py-1 font-mono text-[10px] text-foreground/80">
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
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
