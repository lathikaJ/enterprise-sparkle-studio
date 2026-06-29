import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Lilo Technologies" },
      { name: "description", content: "Complete IT support, custom software development, secure remote assistance, and network infrastructure setup by Lilo Technologies." },
      { property: "og:title", content: "Solutions — Lilo Technologies" },
      { property: "og:description", content: "IT support, remote troubleshooting, custom software, and network infrastructure." },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  { tag: "01 / SUPPORT", title: "IT Support & Troubleshooting", body: "Proactive diagnostics, hardware/software computer troubleshooting, system recovery, and optimization." },
  { tag: "02 / REMOTE", title: "Secure Remote Assistance", body: "Instant online remote support for home or office workers. We connect securely to resolve issues directly in front of you." },
  { tag: "03 / SOFTWARE", title: "Custom Software Development", body: "Creating tailored, user-friendly software applications with feature-rich modules and modern backend frameworks." },
  { tag: "04 / INFRASTRUCTURE", title: "Complete Network Setup", body: "Comprehensive IT infrastructure setup ranging from single workstations to complete corporate office networks." },
  { tag: "05 / EMAIL SUITES", title: "Console & Email Automation", body: "Setting up and supporting advanced 2nd Generation Email-Console systems to streamline communication workflows." },
  { tag: "06 / MAINTENANCE", title: "Proactive Security & Audits", body: "Continuous system health monitoring, data backups, software updates, and threat checks to minimize business downtime." },
];

function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Capabilities"
        title="A complete IT operating system for your business."
        description="From single workstations to enterprise-wide infrastructure, Lilo Technologies delivers unified, cost-efficient IT solutions and custom-built software."
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
          <h2 className="mb-6 text-3xl font-bold">Need a tailored IT solution?</h2>
          <p className="mb-8 text-muted">Our expert support team and software engineers scope requirements in days, not months.</p>
          <Link to="/contact" className="inline-block bg-foreground px-8 py-4 font-semibold text-background hover:bg-primary">
            Get in Touch With Us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}