import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Lilo Technologies" },
      { name: "description", content: "Learn about Lilo Technologies, our mission, vision, core values, and our dedication to providing high-quality IT support and software solutions." },
      { property: "og:title", content: "Company — Lilo Technologies" },
      { property: "og:description", content: "Our mission, vision, and values at Lilo Technologies." },
    ],
  }),
  component: CompanyPage,
});

const principles = [
  { n: "01", t: "Respect & Transparency", b: "We value our clients' thoughts and maintain clear communication, understanding your specific organizational and business needs." },
  { n: "02", t: "Ownership & Collaboration", b: "We take full responsibility for support and software systems, proactively working in conjunction with clients to meet expectations." },
  { n: "03", t: "Results & Team Work", b: "Our team of expert professionals works together to provide excellent IT services, optimizing resources and maximizing returns." },
];

function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="A centre of excellence in customer centric technologies."
        description="Founded in 2012 by passionate individuals driven by their advocacy for technology, Lilo Technologies is well poised to deliver high-quality IT support and custom software solutions."
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
          <div className="space-y-8">
            <div>
              <h2 className="mb-3 text-[10px] font-mono uppercase tracking-widest text-primary">Our Mission</h2>
              <p className="text-lg leading-relaxed text-foreground">
                To evolve as a centre of excellence in customer centric technologies which would provide high quality IT and software services at a competitive price point.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-[10px] font-mono uppercase tracking-widest text-primary">Our Vision</h2>
              <p className="text-base leading-relaxed text-muted">
                To be a global provider at the cutting edge in analytical design and rational development of Software Solutions, by being a value-added technology partner in delivering cost-efficient, high-quality IT support and software solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-3xl font-bold">Driven by ingrained corporate ethos.</h2>
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              {[
                ["Founded", "2012"],
                ["Combined Exp.", "15+ Years"],
                ["SLA Uptime", "99.9%"],
                ["Satisfaction", "100%"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="mb-2 text-[10px] uppercase tracking-widest text-muted">{k}</div>
                  <div className="font-display text-3xl font-bold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}