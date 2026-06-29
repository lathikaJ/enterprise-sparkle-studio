import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import heroLattice from "@/assets/hero-lattice.jpg";
import caseNeobank from "@/assets/case-neobank.jpg";
import caseAerogen from "@/assets/case-aerogen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lilo Technologies — Home" },
      { name: "description", content: "Proactive IT support, secure remote computer maintenance, and custom-centric software development by Lilo Technologies." },
      { property: "og:title", content: "Lilo Technologies — Home" },
      { property: "og:description", content: "Proactive IT support, remote computer maintenance, and custom software development." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "15+", suffix: " Yrs", label: "Combined IT Experience" },
  { value: "2", suffix: " Hrs", label: "Max Response Time" },
  { value: "99.9", suffix: "%", label: "Service Uptime Guarantee" },
  { value: "100", suffix: "%", label: "Secure Remote Setup" },
];

const capabilities = [
  {
    tag: "01 / SUPPORT",
    title: "IT Support & Maintenance",
    body: "Proactive computer support and maintenance tailored to your specific organizational needs, ensuring minimal disruption.",
  },
  {
    tag: "02 / SOFTWARE",
    title: "Customer Centric Software",
    body: "Developing innovative and user-friendly software applications with feature-rich modules and state-of-the-art technology.",
  },
  {
    tag: "03 / INFRASTRUCTURE",
    title: "Complete IT Infrastructure",
    body: "Solutions that scale with you, ranging from a single workstation or laptop to complex corporate networks.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-32">
        <div className="animate-reveal">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
            <span className="flex size-2 animate-pulse rounded-full bg-primary" />
            Latest: Lilo Technologies released its 2nd Generation Email-Console software
          </div>
          <h1 className="mb-8 text-balance text-5xl font-bold leading-[0.95] tracking-tight lg:text-7xl">
            IT Support & Customer Centric <span className="text-muted">Software.</span>
          </h1>
          <p className="mb-10 max-w-[48ch] text-lg leading-relaxed text-muted">
            Lilo Technologies is significantly focused on providing proactive IT support and developing customer-centric software applications for our clients. We keep your business moving forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/solutions"
              className="rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Our IT Solutions
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-border px-8 py-4 font-semibold transition-colors hover:bg-foreground/5"
            >
              Contact Support
            </Link>
          </div>
        </div>
        <div className="animate-reveal" style={{ animationDelay: "200ms" }}>
          <div className="aspect-square w-full overflow-hidden rounded-sm shadow-2xl ring-1 ring-foreground/10">
            <img
              src={heroLattice}
              alt="Lilo Technologies data infrastructure lattice"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-6 py-12 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 md:px-8">
              <div className="mb-1 font-display text-3xl font-bold">
                {s.value}
                <span className="text-primary">{s.suffix}</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-xl">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Core Services / 001</h2>
          <h3 className="text-4xl font-bold">IT solutions tailored to optimize your resources.</h3>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article key={c.title} className="group bg-background p-10 transition-colors hover:bg-accent">
              <div className="mb-8 font-mono text-[10px] text-muted">{c.tag}</div>
              <h4 className="mb-4 text-xl font-bold">{c.title}</h4>
              <p className="mb-8 text-sm leading-relaxed text-muted">{c.body}</p>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-primary"
              >
                Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Industry Bento */}
      <section className="bg-foreground px-6 py-24 text-background">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Live Support / 002</h2>
            <h3 className="text-4xl font-bold">Instant Online IT Troubleshooting</h3>
          </div>
          <div className="grid h-auto grid-cols-12 grid-rows-[auto_auto] gap-4 lg:h-[600px] lg:grid-rows-2">
            <div className="group relative col-span-12 overflow-hidden border border-white/10 bg-white/[0.04] p-8 lg:col-span-8">
              <div className="relative z-10">
                <h4 className="mb-2 text-2xl font-bold">Instant Live Remote Support</h4>
                <p className="max-w-sm text-sm text-background/60">
                  Get ready to experience instant relief from all computer problems. Chat with our technician and tell us your issue. Our expert technicians can connect to your PC over the Internet and resolve the issue right in front of your eyes.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-32 w-64 bg-primary/30 blur-3xl transition-all group-hover:bg-primary/50" />
            </div>
            <div className="group col-span-12 row-span-1 flex flex-col justify-between border border-white/10 bg-white/[0.04] p-8 lg:col-span-4 lg:row-span-2">
              <div>
                <h4 className="mb-2 text-2xl font-bold">Secure Connections</h4>
                <p className="text-sm text-background/60">
                  Our team provides secure remote support for you and your staff whether working from home or office, protecting your privacy and network integrity.
                </p>
              </div>
              <div className="mt-8 grid size-12 place-items-center border border-white/20 transition-colors group-hover:border-primary group-hover:text-primary">
                →
              </div>
            </div>
            <div className="col-span-12 border border-white/10 bg-white/[0.04] p-8 md:col-span-6 lg:col-span-4">
              <h4 className="mb-2 text-xl font-bold">Any PC or Workstation</h4>
              <p className="text-sm text-background/60">
                We troubleshoot system crashes, sluggishness, virus infections, and network connectivity issues on the spot.
              </p>
            </div>
            <div className="col-span-12 border border-white/10 bg-white/[0.04] p-8 md:col-span-6 lg:col-span-4">
              <h4 className="mb-2 text-xl font-bold">48-Hour Response</h4>
              <p className="text-sm text-background/60">
                Need details on custom software or infrastructure setups? Message our planning team and receive a complete response within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-baseline justify-between border-b border-border pb-8">
          <h3 className="text-3xl font-bold">Software & Solutions in Action.</h3>
          <Link to="/insights" className="border-b-2 border-primary text-sm font-bold">
            All Case Studies
          </Link>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {[
            {
              img: caseNeobank,
              ref: "EmailConsole_v2",
              title: "Deploying our 2nd Generation Email-Console software.",
              body: "Releasing a robust, feature-rich admin dashboard and email routing queue for enterprise communications.",
            },
            {
              img: caseAerogen,
              ref: "RemoteWorker_Secure",
              title: "Establishing secure remote support for remote workers.",
              body: "Proactive remote monitoring, troubleshooting, and infrastructure setups for home and office staff.",
            },
          ].map((cs) => (
            <article key={cs.ref} className="group cursor-pointer">
              <div className="mb-6 aspect-video w-full overflow-hidden bg-foreground/5 grayscale transition-all duration-700 group-hover:grayscale-0">
                <img src={cs.img} alt={cs.title} loading="lazy" width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Project_Ref: {cs.ref}</div>
              <h4 className="mb-2 text-xl font-bold">{cs.title}</h4>
              <p className="text-sm text-muted">{cs.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-primary-foreground lg:text-6xl">
            Get instant relief from computer problems.
          </h2>
          <p className="mb-12 text-lg text-primary-foreground/80">
            We provide a complete IT Solution for our clients from one computer to a whole IT infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-foreground px-10 py-5 text-lg font-bold text-background transition-all hover:bg-background hover:text-foreground"
          >
            Get in Touch With Us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

