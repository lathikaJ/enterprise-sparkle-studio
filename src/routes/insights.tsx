import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import caseNeobank from "@/assets/case-neobank.jpg";
import caseAerogen from "@/assets/case-aerogen.jpg";
import heroLattice from "@/assets/hero-lattice.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Case Studies — Lilo Technologies" },
      { name: "description", content: "Field notes, research, and case studies on enterprise security, cloud architecture, and applied AI from Lilo Technologies." },
      { property: "og:title", content: "Insights & Case Studies — Lilo Technologies" },
      { property: "og:description", content: "Enterprise field notes on security, cloud, and applied AI." },
    ],
  }),
  component: InsightsPage,
});

const items = [
  { img: caseNeobank, kind: "Case Study", title: "Reducing latency by 40% for NeoBank's core ledger.", body: "A global migration to distributed architecture that saved $14M annually in cloud waste." },
  { img: caseAerogen, kind: "Case Study", title: "Autonomous supply chain forecasting for AeroGen Global.", body: "Edge-AI deployments that predict shortages 14 days before they manifest." },
  { img: heroLattice, kind: "Field Note", title: "The zero-trust ledger: rebuilding trust in distributed systems.", body: "How modern cryptographic primitives are changing the perimeter conversation for regulated institutions." },
];

function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Field notes from the world's most demanding systems."
        description="Research, engineering write-ups, and engagement post-mortems from the Lilo Technologies practice."
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