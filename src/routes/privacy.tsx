import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, EMAIL } from "@/components/SiteLayout";
import { DataStreamDivider, MOTIF_MONO_LABEL } from "@/components/ChapterMotifs";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Intelligent Integrations" },
      { name: "description", content: "Privacy policy for Intelligent Integrations covering getaiintegrations.com and our WhatsApp/SMS conversational AI messaging services." },
      { property: "og:title", content: "Privacy Policy — Intelligent Integrations" },
      { property: "og:description", content: "How Intelligent Integrations handles data across our website and messaging services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://getaiintegrations.com/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://getaiintegrations.com/privacy" }],
  }),
  component: PrivacyPage,
});

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <p className={MOTIF_MONO_LABEL}>
        <span className="text-primary/80">{"//"}</span>{" "}
        <span className="tabular-nums text-foreground/80">{n}</span>
        <span className="mx-2 text-black/25">—</span>
        <span>{title}</span>
      </p>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/80">{children}</div>
      <div className="mt-10">
        <DataStreamDivider />
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <header>
          <p className={MOTIF_MONO_LABEL}>Legal · Effective July 25, 2026</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            How Intelligent Integrations collects, uses, and protects information across our
            website and conversational AI messaging services.
          </p>
        </header>

        <div className="mt-14">
          <DataStreamDivider />
        </div>

        <Section n="01" title="Introduction">
          <p>
            Intelligent Integrations ("we," "us," "our") is operated by Joseph Bisaccia. This
            Privacy Policy covers getaiintegrations.com and our conversational AI messaging
            services provided via WhatsApp and SMS through Twilio.
          </p>
        </Section>

        <Section n="02" title="Information We Collect">
          <p>
            <strong className="text-foreground">Website.</strong> Contact form submissions (name,
            email, organization, and message content), and basic technical data (browser type,
            pages visited).
          </p>
          <p>
            <strong className="text-foreground">Messaging services.</strong> Your phone number and
            message content when you voluntarily message our WhatsApp or SMS number. Conversation
            history is retained only as needed to provide the service.
          </p>
        </Section>

        <Section n="03" title="How We Use Information">
          <p>
            We use information to respond to inquiries, provide and improve the conversational AI
            service, and maintain security. We do not sell personal information. We do not use
            messaging data for advertising. No mobile opt-in data or consent will be shared with
            third parties for marketing or promotional purposes.
          </p>
        </Section>

        <Section n="04" title="Message Processing">
          <p>
            Messages sent to our AI services are transmitted via Twilio Inc. (our communications
            provider) and processed by Anthropic's API to generate responses. These providers
            process data under their own privacy policies and data processing terms.
          </p>
        </Section>

        <Section n="05" title="Opt-In and Opt-Out">
          <p>
            You opt in by voluntarily initiating a conversation with our number. No unsolicited
            messages are sent. You may opt out at any time by replying <strong className="text-foreground">STOP</strong>
            {" "}(you'll receive one final confirmation message) or simply ceasing communication.
            Reply <strong className="text-foreground">HELP</strong> for assistance. Message and
            data rates may apply.
          </p>
        </Section>

        <Section n="06" title="Data Retention">
          <p>
            Contact submissions are retained as long as needed to respond. Conversation data is
            retained only as long as necessary for service operation. You may request deletion by
            emailing us at the address below.
          </p>
        </Section>

        <Section n="07" title="Security">
          <p>
            We use reasonable administrative and technical safeguards to protect information. No
            method of transmission over the internet is 100% secure.
          </p>
        </Section>

        <Section n="08" title="Children">
          <p>
            Our services are not directed to individuals under 18. WhatsApp's minimum age
            requirements also apply to messaging use.
          </p>
        </Section>

        <Section n="09" title="Changes">
          <p>
            We may update this policy from time to time. Continued use of the site or messaging
            services constitutes acceptance. Material changes will be reflected by updating the
            effective date above.
          </p>
        </Section>

        <Section n="10" title="Contact">
          <p>
            Questions about this policy? Email{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary underline-offset-4 hover:underline">
              {EMAIL}
            </a>
            .
          </p>
        </Section>
      </article>
    </SiteLayout>
  );
}
