import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Brain, Cpu, LineChart, Mail, MapPin, Linkedin, Check, Sparkles, Workflow, Database, Send, Megaphone } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intelligent Integrations — AI Solutions for Small Business Growth" },
      { name: "description", content: "Independent AI contracting LLC by Joseph Bisaccia. AI model training, custom integrations for small businesses, and ethical AI consulting for political campaigns." },
      { property: "og:title", content: "Intelligent Integrations" },
      { property: "og:description", content: "AI model training, bespoke SMB integrations, and ethical campaign technology." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Home,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/joseph-bisaccia-ai/";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=1a2540&color=7cc2f2&margin=10&data=${encodeURIComponent(LINKEDIN_URL)}`;

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Services />
      <Showcase />
      <Pricing />
      <CampaignPricing />
      <Contact />
      <Footer />
    </div>
  );
}

function BrandMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img src={logoAsset.url} alt="Intelligent Integrations" className={className} />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <BrandMark className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#campaigns" className="transition-colors hover:text-foreground">Campaigns</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md bg-gradient-blue px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Get in touch <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Independent AI contracting · accepting new engagements
          </div>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            AI that <em className="text-gradient-blue not-italic">actually integrates</em> into the way your business already works.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I train frontier models for major AI labs and build practical AI systems for small businesses and mission-driven campaigns — from automation to custom GPTs to data pipelines.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-gradient-blue px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
              See pricing <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated">
              Watch my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Handshake AI", "Outlier AI", "Mercor", "Frontier Model Training", "RLHF", "Custom GPTs", "Workflow Automation", "Data Pipelines"];
  return (
    <div className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="font-mono text-foreground/60">// Trusted by projects at</span>
          {items.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Mission</p>
        <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
          Intelligent Integrations is an independent AI contracting LLC founded by Joseph Bisaccia — bridging the gap between cutting-edge AI research and real-world business impact. We train frontier models for major AI labs through platforms like Handshake AI, Outlier AI, and Mercor, then bring that same deep expertise to small businesses and mission-driven campaigns who need practical AI integrations that actually work. From custom GPTs and workflow automation to retrieval-augmented generation and strategic AI roadmaps, we build systems that fit the way your organization already operates — no disruption, just leverage.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  const roles = [
    {
      period: "2025 — Now",
      title: "Lead AI Engineer",
      org: "Behavior Frontiers",
      desc: "Architecting HIPAA-compliant agentic workflows across clinical and operations teams — RAG over PHI-safe knowledge bases, automated intake and documentation copilots, and evaluation harnesses that keep LLM outputs auditable in a regulated healthcare environment.",
    },
    {
      period: "2024 — Now",
      title: "Senior AI Engineer & Technical PM",
      org: "Intelligent Integrations · Handshake AI · Outlier AI · Mercor",
      desc: "Building production LLM systems — agentic workflows, RAG pipelines, and evaluation harnesses. Contract model-training work for frontier AI labs and bespoke integrations for SMBs and campaigns.",
    },
    {
      period: "2022 — 2024",
      title: "AI Implementation PM & Customer Success",
      org: "Capital Energy",
      desc: "Led AI adoption across sales and operations — deployed custom GPTs, automations, and data pipelines that shortened sales cycles and gave reps real leverage on their book of business.",
    },
  ];
  return (
    <section id="experience" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">01.5 — Background</p>
            <h2 className="font-display text-4xl md:text-6xl">Built by an operator, not just a coder.</h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            I'm Joseph — a Senior AI Engineer and Technical PM finishing an MS in AI Engineering at Quantic. I ship production LLM systems for frontier AI labs and translate that same expertise into practical integrations for small businesses and mission-driven campaigns.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.title} className="bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{r.period}</p>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.org}</p>
              <p className="mt-3 text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {["Agentic AI", "RAG", "LangChain", "HIPAA-Compliant AI", "Prompt Engineering", "Evaluation & RLHF", "TypeScript / Python", "MS AI Engineering — Quantic"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-background px-3 py-1">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Model Training",
      desc: "Contract work for top-tier AI labs via Handshake AI, Outlier AI, and Mercor — RLHF, evaluation, red-teaming, and domain-expert annotation for frontier LLMs.",
    },
    {
      icon: Workflow,
      title: "SMB AI Integrations",
      desc: "Custom GPTs, automated workflows, and AI copilots dropped directly into your existing tools — Slack, Notion, Gmail, Shopify, and beyond.",
    },
    {
      icon: Database,
      title: "Data & RAG Systems",
      desc: "Retrieval-augmented generation built on your internal docs. Your team gets a private assistant that actually knows your business.",
    },
    {
      icon: Megaphone,
      title: "Campaign & Advocacy Tech",
      desc: "Ethical AI consulting for political campaigns and mission-driven orgs — peer-to-peer texting, voter data integration, volunteer automation, and field ops tooling.",
    },
    {
      icon: Cpu,
      title: "Strategy & Audit",
      desc: "Where will AI actually move the needle? I audit your stack and ship a prioritized roadmap — no hype, just leverage.",
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">01 — Services</p>
          <h2 className="font-display text-4xl md:text-6xl">What I do.</h2>
        </div>
        <p className="text-muted-foreground md:text-lg">
          Three sides of the same craft: training the models the world's largest labs depend on, translating that frontier expertise into tools small businesses can actually use, and equipping principled campaigns with the tech to win.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group relative bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-10">
            <s.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="work" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">02 — Selected work</p>
          <h2 className="font-display text-4xl md:text-6xl">A look at the work.</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A short walkthrough of recent AI projects — model training, evaluation, and integration work for labs and small business clients.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
            <video src="/portfolio-video.mp4" controls playsInline preload="metadata" className="aspect-video w-full bg-black" />
            <div className="border-t border-border p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Case 01</p>
              <p className="mt-2 font-display text-xl">Custom GPT & agent build</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
            <video src="/portfolio-video-2.mp4" controls playsInline preload="metadata" className="aspect-video w-full bg-black" />
            <div className="border-t border-border p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Case 02</p>
              <p className="mt-2 font-display text-xl">SMB data analysis + AI</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card md:max-w-md">
            <a
              href="https://github.com/jbisaccia-9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-surface/60 p-6 transition-colors hover:bg-surface"
            >
              <img
                src="https://github.com/jbisaccia-9.png"
                alt="GitHub avatar for jbisaccia-9"
                loading="lazy"
                className="h-20 w-20 rounded-full border border-border object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
                <p className="mt-1 font-display text-xl">jbisaccia-9</p>
                <p className="truncate text-sm text-muted-foreground">Joseph Bisaccia · public repositories</p>
              </div>
              <span aria-hidden className="text-xl text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">↗</span>
            </a>
            <div className="border-t border-border p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Case 03</p>
              <p className="mt-2 font-display text-xl">GitHub — code & repos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

function PricingGrid({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`relative flex flex-col rounded-2xl border p-8 md:p-10 ${
            t.featured
              ? "border-primary/50 bg-surface-elevated shadow-glow"
              : "border-border bg-surface"
          }`}
        >
          {t.featured && (
            <span className="absolute -top-3 left-8 rounded-full bg-gradient-blue px-3 py-1 text-xs font-medium text-primary-foreground">
              Most popular
            </span>
          )}
          <h3 className="font-display text-3xl">{t.name}</h3>
          <p className="mt-2 min-h-12 text-sm text-muted-foreground">{t.blurb}</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl text-gradient-blue">{t.price}</span>
            <span className="text-sm text-muted-foreground">{t.cadence}</span>
          </div>
          <ul className="mt-8 space-y-3 text-sm">
            {t.features.map((f) => (
              <li key={f} className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`mt-10 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
              t.featured
                ? "bg-gradient-blue text-primary-foreground"
                : "border border-border bg-background text-foreground hover:bg-surface-elevated"
            }`}
          >
            {t.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ))}
    </div>
  );
}

function Pricing() {
  const tiers: Tier[] = [
    {
      name: "Spark",
      price: "$1,500",
      cadence: "one-time",
      blurb: "For small teams who want a focused AI win without committing to a full build.",
      features: [
        "Discovery call & AI opportunity audit",
        "One custom GPT or assistant",
        "Single workflow automation",
        "2 weeks of email support",
      ],
      cta: "Start with Spark",
    },
    {
      name: "Integrate",
      price: "$4,500",
      cadence: "project",
      blurb: "The most popular tier — a full integration tailored to one core business function.",
      features: [
        "Everything in Spark",
        "Up to 3 custom workflows or assistants",
        "RAG over your internal documents",
        "Tool integrations (Slack, Notion, Gmail, etc.)",
        "Team training session",
        "30 days of support",
      ],
      cta: "Build with me",
      featured: true,
    },
    {
      name: "Operator",
      price: "$2,500",
      cadence: "per month",
      blurb: "Ongoing AI partnership — I act as your fractional AI lead.",
      features: [
        "Everything in Integrate",
        "Continuous build & iteration",
        "Monthly strategy sessions",
        "Priority response & async support",
        "Roadmap and quarterly reviews",
      ],
      cta: "Talk about retainer",
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">03 — SMB Pricing</p>
        <h2 className="font-display text-4xl md:text-6xl">Transparent tiers for small business AI.</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Every engagement starts with a free 30-minute call. Pricing below is for SMB integration work — model training contracts are quoted separately.
        </p>
      </div>
      <PricingGrid tiers={tiers} />
    </section>
  );
}

function CampaignPricing() {
  const tiers: Tier[] = [
    {
      name: "Field Kit",
      price: "$3,500",
      cadence: "one-time",
      blurb: "Stand up the essentials for a local campaign or advocacy push in two weeks.",
      features: [
        "Peer-to-peer texting setup & scripts",
        "Voter file / CRM integration (VAN, NGP, Action Network)",
        "Volunteer signup automations",
        "Compliance-aware messaging templates",
      ],
      cta: "Start the Field Kit",
    },
    {
      name: "Campaign OS",
      price: "$8,500",
      cadence: "project",
      blurb: "A full-stack tech operation for a serious campaign or organization.",
      features: [
        "Everything in Field Kit",
        "Custom data pipelines & dashboards",
        "AI-assisted constituent response drafting",
        "Multi-channel outreach (SMS, email, phone-bank)",
        "Staff & volunteer training",
        "Cycle-long async support",
      ],
      cta: "Build Campaign OS",
      featured: true,
    },
    {
      name: "Movement Retainer",
      price: "$3,500",
      cadence: "per month",
      blurb: "Ongoing fractional tech leadership for orgs running long-term programs.",
      features: [
        "Everything in Campaign OS",
        "Continuous automation & list hygiene",
        "Monthly strategy & analytics review",
        "Rapid-response message tooling",
        "Quarterly roadmap & data audits",
      ],
      cta: "Talk retainer",
    },
  ];

  return (
    <section id="campaigns" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">04 — Campaigns & Advocacy</p>
          <h2 className="font-display text-4xl md:text-6xl">Technology for a hopeful politics.</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Peer-to-peer texting, voter data integration, and outreach automation for candidates and organizations.
          </p>
          <div className="mt-6 inline-flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 px-5 py-4 text-sm text-foreground/90">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>
              <span className="font-medium">Values clause —</span> we only take on campaigns and organizations that advance a positive vision for the future and operate with demonstrable integrity and ethics. We reserve the right to decline any engagement at our discretion.
            </p>
          </div>
        </div>
        <PricingGrid tiers={tiers} />
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-display text-2xl">Negotiable pricing for compelling candidates</p>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Running a campaign with a bold, principled vision but a tight budget? Custom terms are available — negotiated directly with Joseph by appointment only.
              </p>
            </div>
          </div>
          <a
            href="mailto:jbisaccia@ai-intelligentintegrations.com?subject=Appointment%20Request%20%E2%80%94%20Negotiable%20Campaign%20Pricing&body=Hi%20Joseph%2C%0A%0AI%27d%20like%20to%20book%20an%20appointment%20to%20discuss%20negotiable%20pricing%20for%20my%20campaign%2Forganization.%0A%0AName%3A%0ARole%2FCampaign%3A%0AMission%20%2F%20vision%20in%20one%20sentence%3A%0AScope%20needed%20(texting%2C%20data%2C%20automations%2C%20etc.)%3A%0ATimeline%3A%0APreferred%20times%20to%20meet%20(next%207%20days)%3A%0A%0AThanks%2C"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gradient-blue px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book an appointment with Joseph <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:jbisaccia@ai-intelligentintegrations.com?subject=${subject}&body=${body}`;
    setState("sent");
  };

  return (
    <section id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">05 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl">Let's build something useful.</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Tell me a little about your business or campaign and what you're trying to solve. I respond to every inquiry within 24 hours.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-4 w-4" /> Joseph Bisaccia on LinkedIn
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" /> jbisaccia@ai-intelligentintegrations.com
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Remote · United States
            </div>
          </div>
          <div className="mt-10 inline-flex items-center gap-5 rounded-xl border border-border bg-surface p-5">
            <img src={QR_URL} alt="QR code to LinkedIn profile" width={120} height={120} className="rounded-md" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Scan to connect</p>
              <p className="mt-2 font-display text-xl">linkedin.com/in/joseph-bisaccia-ai</p>
              <p className="mt-1 text-xs text-muted-foreground">Or tap the link above.</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-8 shadow-card md:p-10 lg:col-span-3">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" required>
              <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
            </Field>
            <Field label="Email" required>
              <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
            </Field>
          </div>
          <Field label="Company or campaign">
            <input maxLength={150} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
          </Field>
          <Field label="How can I help?" required>
            <textarea required rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
          </Field>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-blue px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]">
            {state === "sent" ? "Opening email…" : (<>Send inquiry <Send className="h-4 w-4" /></>)}
          </button>
          <p className="text-center text-xs text-muted-foreground">Submitting opens your email client with the message pre-filled.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <BrandMark className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} Intelligent Integrations LLC</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <span className="font-mono text-xs">Joseph Bisaccia · Founder</span>
        </div>
      </div>
    </footer>
  );
}
