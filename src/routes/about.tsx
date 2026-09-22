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
      { name: "description", content: "Joseph Bisaccia is an AI engineering and enterprise AI leader connecting architecture, governance, adoption, and measurable value." },
      { property: "og:title", content: "About — Joseph Bisaccia" },
      { property: "og:description", content: "AI engineering leader connecting architecture, governance, adoption, and measurable enterprise value." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://getaiintegrations.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": "https://getaiintegrations.com/about#webpage",
          url: "https://getaiintegrations.com/about",
          name: "About — Joseph Bisaccia",
          description:
            "Joseph Bisaccia is an AI engineering and enterprise AI leader connecting architecture, governance, adoption, and measurable value.",
          isPartOf: { "@id": "https://getaiintegrations.com/#website" },
          mainEntity: { "@id": "https://getaiintegrations.com/#person" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://getaiintegrations.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://getaiintegrations.com/about" },
            ],
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const ROLES = [
  {
    period: "Jul 2026 — Present",
    title: "Lead AI Engineer",
    org: "Behavior Frontiers",
    desc: "Leading enterprise AI delivery, governance, enablement, and value measurement for a national behavioral health network. Reached 92% active use across a 72-seat Microsoft Copilot rollout in 30 days, deployed five agentic workflows, and built secure automation for clinical and site operations.",
  },
  {
    period: "Sep 2025 — Jul 2026",
    title: "AI Engineer / Technical Project Manager",
    org: "Capital Energy",
    desc: "Built a customer-facing RAG chatbot with agentic logic (40% faster response times) and an outbound lead reactivation agent on Voiceflow, Twilio, and ElevenLabs. Led the CRM migration to Core 365 and designed Make and Zapier automation pipelines — 40% less manual work, 30% faster setup.",
  },
  {
    period: "Nov 2024 — Present",
    title: "AI Prompt Engineer & Model Trainer",
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
  { period: "Expected 2027", title: "M.S., Artificial Intelligence Engineering", org: "Quantic School of Business & Technology" },
  { period: "2022", title: "M.Ed., Administrative Leadership", org: "Arizona State University" },
  { period: "2013", title: "B.A., Journalism & Mass Communication", org: "Arizona State University" },
];

const CERTIFICATIONS = [
  { issuer: "NVIDIA Deep Learning Institute", name: "Building RAG Agents with LLMs", year: "2026" },
  { issuer: "IBM", name: "RAG & Agentic AI Professional Certificate", year: "2026" },
  { issuer: "Anthropic", name: "Claude Code in Action", year: "2026" },
  { issuer: "Databricks", name: "Get Started with Generative AI", year: "2026" },
];


const CAPABILITY_PILLARS = [
  {
    n: "01",
    title: "Enterprise AI architecture",
    desc: "Secure, production-minded AI systems spanning RAG, agentic workflows, integrations, and operations.",
  },
  {
    n: "02",
    title: "Governance, security & evaluation",
    desc: "HIPAA-aware design, permission boundaries, measurable evaluation, hallucination mitigation, and release gates.",
  },
  {
    n: "03",
    title: "Automation & systems integration",
    desc: "CRM, operations, and back-office workflows connected through practical APIs and automation platforms.",
  },
  {
    n: "04",
    title: "Adoption & technical leadership",
    desc: "Technical program leadership, staff enablement, change management, and the training needed to make systems stick.",
  },
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
                 Today I lead AI engineering at Behavior Frontiers, connecting architecture,
                 governance, adoption, and financial outcomes for a national behavioral health
                 network. I led a 72-seat Microsoft Copilot deployment to 92% active use in 30 days,
                 alongside secure agentic workflows for clinical and operational teams. Before that
                 I built customer-facing RAG assistants and automation programs
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
              <h2 className="mt-3 text-2xl md:text-3xl">An operating model for applied AI.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-sm leading-relaxed text-foreground/85">
                The work follows a single thread: design the system, harden the guardrails, connect it to what the
                business already runs, and build the adoption muscle so it actually lasts.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CAPABILITY_PILLARS.map((p) => (
                  <div
                    key={p.title}
                    className="group rounded-md border border-border bg-surface p-5 transition-colors hover:bg-surface-elevated"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary/70">[{p.n}]</p>
                    <h3 className="mt-3 text-base font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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
            <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
              <ul className="space-y-6">
                {EDUCATION.map((e) => (
                  <li key={e.title}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{e.period}</p>
                    <p className="mt-1 text-sm font-semibold">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                  </li>
                ))}
              </ul>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Certifications</p>
                <ul className="mt-4 divide-y divide-border/70 border-t border-border/70">
                  {CERTIFICATIONS.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-4 py-3">
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{c.issuer}</p>
                        <p className="mt-0.5 text-sm leading-snug text-foreground/90">{c.name}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3 md:py-24">
          <ExternalLink href={GITHUB_URL} label="GitHub" value="jbisaccia-9" />
          <ExternalLink href={LINKEDIN_URL} label="LinkedIn" value="joseph-bisaccia-ai" />
          <ExternalLink href="/resume.pdf?v=2026-09-22-ai-leadership" label="Resume" value="Download PDF" internal />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
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
