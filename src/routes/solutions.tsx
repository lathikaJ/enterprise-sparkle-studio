import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Lilo Technologies" },
      { name: "description", content: "Cloud-native security, applied AI, modern infrastructure, and data engineering services from Lilo Technologies." },
      { property: "og:title", content: "Solutions — Lilo Technologies" },
      { property: "og:description", content: "Cloud-native security, applied AI, modern infrastructure, and data engineering services." },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  { tag: "01 / SECURITY", title: "Cloud Native Security", body: "Zero-trust perimeters, automated SOC pipelines, and continuous compliance for hybrid environments." },
  { tag: "02 / INTELLIGENCE", title: "Applied AI & Analytics", body: "Production-grade ML platforms with model governance and human-in-the-loop oversight built in." },
  { tag: "03 / ARCHITECTURE", title: "Modern Infrastructure", body: "Event-driven microservices, serverless edges, and platform engineering for elastic global scale." },
  { tag: "04 / DATA", title: "Data Engineering", body: "Unified lakehouse architectures and streaming pipelines purpose-built for regulated industries." },
  { tag: "05 / OPERATIONS", title: "Managed Services", body: "24/7 NOC and SRE coverage backed by an SLA your CFO can sign off on." },
  { tag: "06 / ADVISORY", title: "Strategic Advisory", body: "C-suite consulting that aligns technology roadmaps with multi-year business outcomes." },
];

function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Capabilities"
        title="A complete operating system for the resilient enterprise."
        description="From perimeter to platform, Lilo Technologies delivers a unified portfolio of consulting and managed services engineered for organizations that cannot afford downtime."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article key={s.title} className="group bg-background p-10 transition-colors hover:bg-accent">
              <div className="mb-8 font-mono text-[10px] text-muted">{s.tag}</div>
              <h2 className="mb-4 text-xl font-bold">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Need a tailored engagement?</h2>
          <p className="mb-8 text-muted">Our principal architects scope multi-quarter programs in days, not months.</p>
          <Link to="/contact" className="inline-block bg-foreground px-8 py-4 font-semibold text-background hover:bg-primary">
            Talk to an Architect
          </Link>
        </div>
      </section>
    </PageShell>
  );
}