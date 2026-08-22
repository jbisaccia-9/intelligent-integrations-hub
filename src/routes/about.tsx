import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, GITHUB_URL, LINKEDIN_URL } from "@/components/SiteLayout";
import { LandscapeScene } from "@/components/ambient/LandscapeScene";
import { DataStreamDivider, GradientDescent, AttentionMatrix } from "@/components/ChapterMotifs";
import portrait from "@/assets/joseph-bisaccia-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Joseph Bisaccia" },
      { name: "description", content: "Joseph Bisaccia is a Lead AI Engineer helping organizations deploy AI responsibly at scale — governance, compliance, infrastructure, and agentic workflows." },
      { property: "og:title", content: "About — Joseph Bisaccia" },
      { property: "og:description", content: "Lead AI Engineer helping organizations deploy AI responsibly at scale." },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/about" }],
  }),
  component: AboutPage,
});

const ROLES = [
  {
    period: "Jul 2026 — Present",
    title: "Lead AI Engineer",
    org: "Behavior Frontiers",
    desc: "Founding AI engineering resource for a national network of autism and behavioral health centers. Building HIPAA-compliant AI infrastructure, RAG pipelines, agentic workflows, and LLM automation for clinical and operational teams, and leading the training and change management behind adoption.",
  },
  {
    period: "2024 — Jul 2026",
    title: "AI Engineer & Technical Project Manager",
    org: "Capital Energy",
    desc: "Built a customer-facing RAG chatbot with agentic logic (40% faster response times) and an outbound lead reactivation agent on Voiceflow, Twilio, and ElevenLabs. Led the CRM migration to Core 365 and designed Make and Zapier automation pipelines — 40% less manual work, 30% faster setup.",
  },
  {
    period: "2024 — Present",
    title: "AI Model Training & Prompt Engineering Specialist",
    org: "Handshake AI · Outlier AI · Mercor",
    desc: "Contract work for frontier AI platforms: expert data annotation and dataset curation for LLM training, evaluation of outputs against reward metrics, and RLHF and preference-data workflows.",
  },
  {
    period: "2022 — 2025",
    title: "Instructional Designer & AP Computer Science Teacher",
    org: "Gilbert Public Schools",
    desc: "Designed computer science curriculum and taught AP Computer Science, alongside instructional design and technology training work for staff.",
  },
  {
    period: "2017 — 2022",
    title: "Instructional Designer & Technology Trainer",
    org: "Higley Unified School District",
    desc: "Led district-wide technology training and instructional design programs — the foundation of the adoption and change-management work I now apply to enterprise AI rollouts.",
  },
];

const EDUCATION = [
  { period: "2026 — 2027", title: "M.S., Artificial Intelligence Engineering", org: "Quantic School of Business & Technology" },
  { period: "2020 — 2022", title: "M.Ed., Education", org: "Arizona State University" },
  { period: "2010 — 2013", title: "B.A.", org: "Arizona State University" },
];

const CERTIFICATIONS = [
  "IBM / Coursera — Retrieval Augmented Generation (RAG)",
  "IBM / Coursera — Agentic AI",
  "PMI — Certified Associate in Project Management (CAPM)",
  "Anthropic — Claude Code 101",
];

const CAPABILITIES = [
  "Production AI systems from architecture through operations",
  "RAG and retrieval infrastructure over sensitive corpora",
  "Agentic workflow development with structured evaluation",
  "HIPAA-aware and security-first design for LLM applications",
  "LLM evaluation, reward metrics, and hallucination mitigation",
  "Automation and systems integration across CRM and operations tooling",
  "Technical project management across engineering and business teams",
  "Training, enablement, and change management for AI adoption",
];


function AboutPage() {
  return (
    <SiteLayout>
      <section id="about-hero" className="relative isolate overflow-hidden border-b border-black/8">
        <LandscapeScene anchorId="about-hero" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
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
                Today I lead AI engineering at Behavior Frontiers, where I&rsquo;m the founding AI
                resource for a national behavioral health network &mdash; HIPAA-compliant
                infrastructure, RAG pipelines, and agentic workflows for clinical and operational
                teams. Before that I built customer-facing RAG assistants and automation programs
                in the solar industry, and I continue contract model-training and evaluation work
                for frontier AI platforms. A decade of instructional design and technology training
                sits underneath all of it: the systems only matter if people adopt them.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-foreground/90">Lead AI Engineer</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Focus</dt>
                  <dd className="mt-1 text-foreground/90">Governance · Security · Infrastructure</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Domains</dt>
                  <dd className="mt-1 text-foreground/90">Healthcare · Regulated Enterprise</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Based</dt>
                  <dd className="mt-1 text-foreground/90">Gilbert, Arizona · Remote</dd>
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
                <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span>Joseph Bisaccia</span>
                  <span>Founder · Intelligent Integrations</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <DataStreamDivider />

      <section className="relative isolate overflow-hidden border-b border-border">
        <GradientDescent />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Experience</p>
              <h2 className="mt-3 text-2xl md:text-3xl">Selected roles.</h2>
            </div>
            <ol className="relative space-y-10 border-l border-border pl-8">
              {ROLES.map((r, i) => (
                <li key={r.title} className="relative">
                  <span className="absolute -left-[33px] top-2 h-2 w-2 rounded-full bg-primary" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    <span className="text-primary/70">[{String(i).padStart(2, "0")}]</span> {r.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">{r.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-border">
        <AttentionMatrix />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Capabilities</p>
              <h2 className="mt-3 text-2xl md:text-3xl">What I bring to engagements.</h2>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {CAPABILITIES.map((c, i) => (
                <li key={c} className="flex items-start gap-3 border-b border-border/70 pb-3 text-sm">
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] tracking-[0.22em] text-primary/70 tabular-nums">
                    [{String(i).padStart(2, "0")}]
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Education &amp; credentials</p>
              <h2 className="mt-3 text-2xl md:text-3xl">Formal grounding.</h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <ul className="space-y-6">
                {EDUCATION.map((e) => (
                  <li key={e.title}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{e.period}</p>
                    <p className="mt-1 text-sm font-semibold">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                <li className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Certifications</li>
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="border-b border-border/70 pb-3 text-sm">{c}</li>
                ))}
              </ul>
            </div>
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
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
