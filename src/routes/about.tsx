import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, GITHUB_URL, LINKEDIN_URL } from "@/components/SiteLayout";
import { PageAmbientScene } from "@/components/PageAmbientScene";
import portrait from "@/assets/joseph-bisaccia-portrait.png.asset.json";

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
      <section className="relative overflow-hidden border-b border-black/8">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-16">
            <div className="order-2 md:order-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">About</p>
              <h1
                className="mt-8 font-display leading-[1.02] tracking-tight"
                style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
              >
                Building AI systems enterprises can trust.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground">
                I&rsquo;m Joseph Bisaccia — a Lead AI Engineer working at the intersection of
                applied machine learning, security engineering, and technical program leadership.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">
                I design and operate enterprise AI systems where governance, compliance, and
                infrastructure are first-class concerns: HIPAA-aware agentic workflows, PHI-safe
                RAG over sensitive corpora, and evaluation harnesses that make model behavior
                auditable. My focus is quiet, durable AI &mdash; the kind regulated organizations can
                actually put in production.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-foreground/90">Lead AI Engineer</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Focus</dt>
                  <dd className="mt-1 text-foreground/90">Governance · Security · Infrastructure</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Domains</dt>
                  <dd className="mt-1 text-foreground/90">Healthcare · Regulated Enterprise</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Based</dt>
                  <dd className="mt-1 text-foreground/90">United States · Remote</dd>
                </div>
              </dl>
            </div>
            <div className="order-1 md:order-2">
              <figure className="relative">
                <div className="overflow-hidden rounded-md border border-border bg-surface shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-24px_rgba(15,30,60,0.25)]">
                  <img
                    src={portrait.url}
                    alt="Portrait of Joseph Bisaccia"
                    className="aspect-[4/5] w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>Joseph Bisaccia</span>
                  <span>Founder · Intelligent Integrations</span>
                </figcaption>
              </figure>
            </div>
          </div>
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
