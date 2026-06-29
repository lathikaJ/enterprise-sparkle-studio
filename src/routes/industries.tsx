import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Lilo Technologies" },
      { name: "description", content: "Industry-specific technology solutions for financial services, public sector, healthcare, and retail enterprises." },
      { property: "og:title", content: "Industries — Lilo Technologies" },
      { property: "og:description", content: "Vertical expertise for finance, public sector, healthcare, and retail." },
    ],
  }),
  component: IndustriesPage,
});

const verticals = [
  { name: "Financial Services", body: "Low-latency trading infrastructure, regulatory data platforms, and resilient core banking modernization.", metric: "40% latency reduction" },
  { name: "Public Sector", body: "Citizen identity, mission-critical workloads, and FedRAMP-aligned cloud architectures for federal and state agencies.", metric: "12 federal programs" },
  { name: "Healthcare & Life Sciences", body: "HIPAA-compliant data lakes, clinical trial analytics, and connected device telemetry at population scale.", metric: "200M patient records" },
  { name: "Retail & Commerce", body: "Omnichannel supply chain visibility, personalization engines, and edge-deployed POS resilience.", metric: "+24% conversion lift" },
  { name: "Energy & Utilities", body: "Grid-scale telemetry pipelines and predictive maintenance platforms for distributed physical assets.", metric: "99.99% grid uptime" },
  { name: "Telecommunications", body: "5G core observability, OSS/BSS modernization, and AI-driven network optimization.", metric: "30% OPEX savings" },
];

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Verticals"
        title="Built for the realities of your industry."
        description="Lilo Technologies pairs domain specialists with platform engineers, so the systems we ship speak the language of your regulators, operators, and customers."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {verticals.map((v) => (
            <article key={v.name} className="bg-background p-10">
              <h2 className="mb-3 text-2xl font-bold">{v.name}</h2>
              <p className="mb-6 text-sm leading-relaxed text-muted">{v.body}</p>
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{v.metric}</div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}