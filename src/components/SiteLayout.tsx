import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";

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

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-primary">
          <span
            aria-hidden
            className="grid h-7 w-7 shrink-0 place-items-center rounded-[6px] bg-primary text-[13px] font-semibold text-primary-foreground"
          >
            II
          </span>
          <span className="text-[15px] tracking-[-0.01em]">Intelligent Integrations</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
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
          className="hidden rounded-md border border-border bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-foreground/90 sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold">Joseph Bisaccia</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Lead AI Engineer · Enterprise AI Governance, Security &amp; Infrastructure.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Site</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li><a className="text-foreground/80 hover:text-foreground" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="text-foreground/80 hover:text-foreground" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="text-foreground/80 hover:text-foreground" href="/resume.pdf">Resume</a></li>
            <li><a className="text-foreground/80 hover:text-foreground" href={`mailto:${EMAIL}`}>Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Joseph Bisaccia. All rights reserved.</span>
          <span className="font-mono">Building secure, compliant, enterprise AI systems.</span>
        </div>
      </div>
    </footer>
  );
}
