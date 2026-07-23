import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "chapter-01", label: "Systems" },
  { id: "chapter-02", label: "Organization" },
  { id: "chapter-03", label: "Perspective" },
  { id: "chapter-04", label: "Work" },
  { id: "chapter-05", label: "Contact" },
];

/** Fixed left-edge chapter rail. Highlights the section currently in view. */
export function ScrollProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (e): e is HTMLElement => !!e,
    );
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          const idx = els.findIndex((el) => el === visible.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-4">
        {CHAPTERS.map((c, i) => {
          const on = i === active;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <span
                  className={
                    "inline-block h-px transition-all duration-500 " +
                    (on
                      ? "w-10 bg-primary"
                      : "w-4 bg-black/25 group-hover:w-6 group-hover:bg-black/50")
                  }
                />
                <span
                  className={
                    "tabular-nums transition-colors " +
                    (on ? "text-foreground" : "")
                  }
                >
                  0{i + 1}
                </span>
                <span
                  className={
                    "transition-opacity duration-500 " +
                    (on ? "opacity-100" : "opacity-0 group-hover:opacity-70")
                  }
                >
                  {c.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
