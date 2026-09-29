import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { SiteLayout, EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/components/SiteLayout";
import { SignalScene } from "@/components/ambient/SignalScene";
import { DataStreamDivider, StatusLine, AttentionMatrix } from "@/components/ChapterMotifs";
import { trackFormSubmission } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Joseph Bisaccia" },
      {
        name: "description",
        content:
          "Connect with Joseph Bisaccia about lead and forward-deployed AI engineering roles, platform and governance leadership, collaborations, and speaking.",
      },
      { property: "og:title", content: "Contact — Joseph Bisaccia" },
      {
        property: "og:description",
        content:
          "Lead and forward-deployed AI engineering, enterprise AI governance, collaborations, and speaking.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://getaiintegrations.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://getaiintegrations.com/contact#webpage",
          url: "https://getaiintegrations.com/contact",
          name: "Contact — Joseph Bisaccia",
          description:
            "Connect with Joseph Bisaccia about lead and forward-deployed AI engineering, enterprise AI governance, collaborations, and speaking.",
          isPartOf: { "@id": "https://getaiintegrations.com/#website" },
          about: { "@id": "https://getaiintegrations.com/#person" },
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
                name: "Contact",
                item: "https://getaiintegrations.com/contact",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission("contact_form", { has_organization: Boolean(form.org) });
    const subject = encodeURIComponent(`Website conversation — ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <SiteLayout>
      <section
        id="contact-hero"
        className="relative isolate overflow-hidden border-b border-black/8"
      >
        <SignalScene anchorId="contact-hero" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Contact
          </p>
          <h1
            className="mt-8 max-w-4xl font-display leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
          >
            Start a conversation.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground md:text-lg">
            Open to senior and lead AI engineering, applied AI and forward-deployed roles, AI
            platform and governance leadership, strategic collaborations, and speaking. Share a bit
            of context and I&rsquo;ll respond directly.
          </p>
        </div>
      </section>
      <DataStreamDivider />

      <section className="relative isolate overflow-hidden">
        <AttentionMatrix />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10">
          <StatusLine text="system: online · accepting_connections" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-md border border-border bg-surface p-5 text-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Opportunities
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Senior and lead AI engineering, applied AI and forward-deployed roles, AI platform
                and governance leadership, strategic collaborations, speaking, and tightly scoped
                advisory work.
              </p>
            </div>

            <div className="rounded-md border border-border bg-surface p-5 text-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Direct
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary"
                >
                  <ArrowUpRight className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-lg border border-border bg-background p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" required>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </Field>
            </div>
            <Field label="Organization">
              <input
                maxLength={150}
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <Field label="What would you like to discuss?" required>
              <textarea
                required
                rows={7}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </Field>
            <div className="flex items-center justify-between gap-4">
              <StatusLine text="system: online · accepting_connections" />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Submitting opens your email client with the message pre-filled.
            </p>
          </form>
        </div>
        <DataStreamDivider />
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
