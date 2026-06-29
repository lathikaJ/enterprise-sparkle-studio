import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Lilo Technologies" },
      { name: "description", content: "Lilo Technologies is an enterprise technology consultancy building resilient cloud, security, and AI systems for the world's most demanding organizations." },
      { property: "og:title", content: "Company — Lilo Technologies" },
      { property: "og:description", content: "Enterprise technology consultancy for cloud, security, and AI." },
    ],
  }),
  component: CompanyPage,
});

const principles = [
  { n: "01", t: "Engineering over Theatre", b: "We ship systems that survive contact with production, not slide decks." },
  { n: "02", t: "Sovereignty by Default", b: "Customer data, models, and infrastructure stay under customer control." },
  { n: "03", t: "Long-horizon Partnerships", b: "Our engagements measure success in years, not sprints." },
];

function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="A consultancy built like a product company."
        description="Lilo Technologies was founded by infrastructure operators who watched too many transformation programs collapse under their own weight. We build differently."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {principles.map((p) => (
            <article key={p.n} className="bg-background p-10">
              <div className="mb-8 font-mono text-[10px] text-primary">{p.n}</div>
              <h2 className="mb-4 text-xl font-bold">{p.t}</h2>
              <p className="text-sm leading-relaxed text-muted">{p.b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Global presence, local accountability.</h2>
            <p className="text-muted">
              Practices in San Francisco, London, Singapore, and São Paulo, with delivery teams embedded across 14 secure operating regions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 font-mono text-sm">
            {[
              ["Founded", "2014"],
              ["Engineers", "1,200+"],
              ["Regions", "14"],
              ["Clients", "500+"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="mb-2 text-[10px] uppercase tracking-widest text-muted">{k}</div>
                <div className="font-display text-3xl font-bold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}