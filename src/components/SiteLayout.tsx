import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const GITHUB_URL = "https://github.com/jbisaccia-9";
export const LINKEDIN_URL = "https://www.linkedin.com/in/joseph-bisaccia-ai/";
export const EMAIL = "jbisaccia@ai-intelligentintegrations.com";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

import logo from "@/assets/logo.png.asset.json";

function Wordmark() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Intelligent Integrations — Home">
      <img
        src={logo.url}
        alt="Intelligent Integrations"
        className="h-8 w-auto md:h-9"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}


function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a href="/resume.pdf" className="transition-colors hover:text-foreground">
            Resume
          </a>
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-md border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20 sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl leading-tight">Joseph Bisaccia</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            AI Engineering Leader &middot; Enterprise AI Governance, Security &amp; Infrastructure.
          </p>
        </div>
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Site</p>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 transition-colors hover:text-primary">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Elsewhere</p>
          <ul className="space-y-2.5 text-sm">
            <li><a className="text-foreground/80 transition-colors hover:text-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="text-foreground/80 transition-colors hover:text-primary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="text-foreground/80 transition-colors hover:text-primary" href="/resume.pdf">Resume</a></li>
            <li><a className="text-foreground/80 transition-colors hover:text-primary" href={`mailto:${EMAIL}`}>Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Joseph Bisaccia. All rights reserved.</span>
          <span className="font-mono">Building secure, compliant, enterprise AI systems.</span>
        </div>
      </div>
    </footer>
  );
}
