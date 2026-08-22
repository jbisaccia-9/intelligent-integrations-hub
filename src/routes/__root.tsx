import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { initAnalytics, trackPageView } from "@/lib/analytics";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "bmSyihR2WpFpgK4ttF2inQTyUF2WGaibFB4KSNsdH7c" },
      { title: "Joseph Bisaccia — Lead AI Engineer" },
      { name: "description", content: "Lead AI Engineer building secure, compliant, enterprise AI systems — governance, security, infrastructure, RAG, and agentic workflows." },
      { name: "author", content: "Joseph Bisaccia" },
      { property: "og:site_name", content: "Joseph Bisaccia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Joseph Bisaccia — Lead AI Engineer" },
      { name: "twitter:title", content: "Joseph Bisaccia — Lead AI Engineer" },
      { property: "og:description", content: "Enterprise AI governance, security, and infrastructure." },
      { name: "twitter:description", content: "Enterprise AI governance, security, and infrastructure." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://getaiintegrations.com/#organization",
              name: "Intelligent Integrations",
              url: "https://getaiintegrations.com/",
              logo: "https://getaiintegrations.com/favicon.svg",
              email: "jbisaccia@ai-intelligentintegrations.com",
              founder: { "@id": "https://getaiintegrations.com/#person" },
              sameAs: [
                "https://github.com/jbisaccia-9",
                "https://www.linkedin.com/in/joseph-bisaccia-ai/",
              ],
            },
            {
              "@type": "Person",
              "@id": "https://getaiintegrations.com/#person",
              name: "Joseph Bisaccia",
              url: "https://getaiintegrations.com/",
              jobTitle: "AI Engineering Leader",
              email: "jbisaccia@ai-intelligentintegrations.com",
              worksFor: { "@id": "https://getaiintegrations.com/#organization" },
              knowsAbout: [
                "Enterprise AI Governance",
                "AI Security",
                "Retrieval-Augmented Generation",
                "Agentic Workflows",
                "LLM Evaluation",
              ],
              sameAs: [
                "https://github.com/jbisaccia-9",
                "https://www.linkedin.com/in/joseph-bisaccia-ai/",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://getaiintegrations.com/#website",
              url: "https://getaiintegrations.com/",
              name: "Joseph Bisaccia — AI Engineering Leader",
              publisher: { "@id": "https://getaiintegrations.com/#organization" },
              inLanguage: "en-US",
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
