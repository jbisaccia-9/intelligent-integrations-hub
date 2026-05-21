import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Brain, Cpu, LineChart, Mail, MapPin, Linkedin, Check, Sparkles, Workflow, Database, Send } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intelligent Integrations — AI Model Training & SMB AI Integrations" },
      { name: "description", content: "Independent AI contracting LLC by Joseph Bisaccia. AI model training for major labs and custom AI integrations for small businesses." },
      { property: "og:title", content: "Intelligent Integrations" },
      { property: "og:description", content: "AI model training and bespoke AI integrations for small businesses." },
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

const LINKEDIN_URL = "https://www.linkedin.com/in/joseph-bisaccia-20662384/";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=1a1f2e&color=e8c87a&margin=10&data=${encodeURIComponent(LINKEDIN_URL)}`;

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl">Intelligent Integrations</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
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
            AI that <em className="text-gradient-gold not-italic">actually integrates</em> into the way your business already works.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I train frontier models for major AI labs and build practical AI systems for small businesses — from automation to custom GPTs to data pipelines.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
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
  const items = ["Handshake AI", "Outlier AI", "Frontier Model Training", "RLHF", "Custom GPTs", "Workflow Automation", "Data Pipelines"];
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

function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Model Training",
      desc: "Contract work for top-tier AI labs via Handshake AI and Outlier AI — RLHF, evaluation, red-teaming, and domain-expert annotation for frontier LLMs.",
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
      icon: Cpu,
      title: "Strategy & Audit",
      desc: "Where will AI actually move the needle for your business? I audit your stack and ship a prioritized roadmap — no hype, just leverage.",
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
          Two sides of the same craft: training the models the world's largest labs depend on, and translating that frontier expertise into tools that small businesses can actually use.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
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
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
          <video
            src="/portfolio-video.mp4"
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black"
          />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
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
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">03 — Pricing</p>
        <h2 className="font-display text-4xl md:text-6xl">Transparent tiers for small business AI.</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Every engagement starts with a free 30-minute call. Pricing below is for SMB integration work — model training contracts are quoted separately.
        </p>
      </div>
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
              <span className="absolute -top-3 left-8 rounded-full bg-gradient-gold px-3 py-1 text-xs font-medium text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="font-display text-3xl">{t.name}</h3>
            <p className="mt-2 min-h-12 text-sm text-muted-foreground">{t.blurb}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl text-gradient-gold">{t.price}</span>
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
                  ? "bg-gradient-gold text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:bg-surface-elevated"
              }`}
            >
              {t.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
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
    window.location.href = `mailto:hello@intelligentintegrations.ai?subject=${subject}&body=${body}`;
    setState("sent");
  };

  return (
    <section id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">04 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl">Let's build something useful.</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Tell me a little about your business and what you're trying to solve. I respond to every inquiry within 24 hours.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-4 w-4" /> Joseph Bisaccia on LinkedIn
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" /> hello@intelligentintegrations.ai
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Remote · United States
            </div>
          </div>
          <div className="mt-10 inline-flex items-center gap-5 rounded-xl border border-border bg-surface p-5">
            <img src={QR_URL} alt="QR code to LinkedIn profile" width={120} height={120} className="rounded-md" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Scan to connect</p>
              <p className="mt-2 font-display text-xl">linkedin.com/in/joseph-bisaccia</p>
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
          <Field label="Company">
            <input maxLength={150} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
          </Field>
          <Field label="How can I help?" required>
            <textarea required rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-md border border-border bg-input px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" />
          </Field>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]">
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
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded bg-gradient-gold">
            <Sparkles className="h-3 w-3 text-primary-foreground" strokeWidth={2.5} />
          </div>
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
