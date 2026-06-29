import type { ReactNode } from "react";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
      <h1 className="mb-8 max-w-4xl text-balance text-5xl font-bold leading-[0.95] tracking-tight lg:text-6xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
    </section>
  );
}