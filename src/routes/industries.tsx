import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Lilo Technologies" },
      { name: "description", content: "Industry-specific IT support and software solutions for corporate offices, retail, clinics, schools, professional services, and non-profits." },
      { property: "og:title", content: "Industries — Lilo Technologies" },
      { property: "og:description", content: "IT support and software solutions by industry vertical." },
    ],
  }),
  component: IndustriesPage,
});

const verticals = [
  { name: "Corporate Offices", body: "Setting up secure networks, local servers, active directory management, and employee workstation configurations.", metric: "100% remote readiness" },
  { name: "Retail & Point-of-Sale", body: "Configuring and maintaining reliable POS terminals, receipt printers, backup networks, and store computers.", metric: "Zero checkout downtime" },
  { name: "Medical & Dental Clinics", body: "HIPAA-compliant system setups, patient record databases, and secure remote clinician access.", metric: "100% data compliance" },
  { name: "Schools & Education", body: "Classroom computer lab setup, content filtering, student network segmentation, and digital learning tools.", metric: "Safe browsing enabled" },
  { name: "Professional Services", body: "Deploying secure, encrypted remote support workflows for law, accounting, and consulting firms.", metric: "< 2 hr resolution SLA" },
  { name: "Non-profit Organizations", body: "Cost-effective infrastructure audits, software licensing support, and reliable cloud-based hosting.", metric: "Flexible billing rates" },
];

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Verticals"
        title="Built for the realities of your industry."
        description="Lilo Technologies pairs experienced support technicians with software developers, so the systems we build and maintain speak the language of your daily operations."
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