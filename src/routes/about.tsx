import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, GITHUB_URL, LINKEDIN_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Joseph Bisaccia" },
      { name: "description", content: "Joseph Bisaccia is a Lead AI Engineer helping organizations deploy AI responsibly at scale — governance, compliance, infrastructure, and agentic workflows." },
      { property: "og:title", content: "About — Joseph Bisaccia" },
      { property: "og:description", content: "Lead AI Engineer helping organizations deploy AI responsibly at scale." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const ROLES = [
  {
    period: "2025 — Present",
    title: "Lead AI Engineer",
    org: "Behavior Frontiers",
    desc: "Leading enterprise AI engineering across clinical and operations teams. Architecting HIPAA-compliant agentic workflows, PHI-safe RAG systems, and audit-ready evaluation harnesses for regulated healthcare.",
  },
  {
    period: "2024 — Present",
    title: "Independent AI Engineer",
    org: "Intelligent Integrations · Handshake AI · Outlier AI · Mercor",
    desc: "Production LLM systems for enterprise clients and contract model-training work for frontier AI labs. Agentic workflows, RAG platforms, and evaluation infrastructure.",
  },
  {
    period: "2022 — 2024",
    title: "AI Implementation Lead",
    org: "Capital Energy",
    desc: "Led enterprise AI adoption across sales and operations — production deployments of custom assistants, automations, and data pipelines with measurable operational impact.",
  },
];

const CAPABILITIES = [
  "Production AI systems from architecture through operations",
  "Enterprise AI governance, policy, and compliance frameworks",
  "Security-first design for LLM applications and agentic systems",
  "RAG and retrieval infrastructure over sensitive corpora",
  "Agentic workflow development with structured evaluation",
  "Technical program leadership across engineering and business teams",
  "Change management and cross-functional AI adoption",
  "LLM evaluation, benchmarking, and continuous quality monitoring",
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Helping organizations deploy AI responsibly at scale.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            I&rsquo;m Joseph Bisaccia, a Lead AI Engineer focused on the systems, governance, and
            infrastructure enterprises need to trust AI in production. My work sits at the
            intersection of applied machine learning, security engineering, and technical program
            leadership — building AI that meets the standards of regulated and enterprise
            environments.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Experience</p>
              <h2 className="mt-3 text-2xl md:text-3xl">Selected roles.</h2>
            </div>
            <ol className="relative space-y-10 border-l border-border pl-8">
              {ROLES.map((r) => (
                <li key={r.title} className="relative">
                  <span className="absolute -left-[33px] top-2 h-2 w-2 rounded-full bg-primary" />
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{r.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">{r.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Capabilities</p>
              <h2 className="mt-3 text-2xl md:text-3xl">What I bring to engagements.</h2>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-start gap-3 border-b border-border/70 pb-3 text-sm">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3 md:py-24">
          <ExternalLink href={GITHUB_URL} label="GitHub" value="jbisaccia-9" />
          <ExternalLink href={LINKEDIN_URL} label="LinkedIn" value="joseph-bisaccia-ai" />
          <ExternalLink href="/resume.pdf" label="Resume" value="Download PDF" internal />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
            Discuss an engagement <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function ExternalLink({ href, label, value, internal }: { href: string; label: string; value: string; internal?: boolean }) {
  return (
    <a
      href={href}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noreferrer"}
      className="group flex items-center justify-between rounded-md border border-border bg-surface px-5 py-4 transition-colors hover:bg-surface-elevated"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
