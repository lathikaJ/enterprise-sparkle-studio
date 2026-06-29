import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import caseNeobank from "@/assets/case-neobank.jpg";
import caseAerogen from "@/assets/case-aerogen.jpg";
import heroLattice from "@/assets/hero-lattice.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Case Studies — Lilo Technologies" },
      { name: "description", content: "Engineering write-ups, product announcements, and case studies on custom software development and remote IT support from Lilo Technologies." },
      { property: "og:title", content: "Insights & Case Studies — Lilo Technologies" },
      { property: "og:description", content: "Case studies on custom software and remote IT support." },
    ],
  }),
  component: InsightsPage,
});

const items = [
  { img: caseNeobank, kind: "Case Study", title: "Deploying our 2nd Generation Email-Console Software.", body: "Releasing a robust, feature-rich admin dashboard and email routing queue for enterprise communications." },
  { img: caseAerogen, kind: "Case Study", title: "Establishing secure remote support for remote workers.", body: "Proactive remote monitoring, troubleshooting, and infrastructure setups for home and office staff." },
  { img: heroLattice, kind: "Field Note", title: "The Evolution of Remote Troubleshooting and Virtual Support.", body: "Field notes on deploying secure, encrypted remote connections to resolve workstation errors on-demand directly in front of the client's eyes." },
];

function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Solutions in Action & Technical Updates"
        description="Product announcements, engineering write-ups, and case studies from the Lilo Technologies support and software team."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.title} className="group cursor-pointer">
              <div className="mb-6 aspect-video w-full overflow-hidden bg-foreground/5 grayscale transition-all duration-700 group-hover:grayscale-0">
                <img src={i.img} alt={i.title} loading="lazy" width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">{i.kind}</div>
              <h2 className="mb-2 text-xl font-bold leading-tight">{i.title}</h2>
              <p className="text-sm text-muted">{i.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}