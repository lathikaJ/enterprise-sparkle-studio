import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Cybersecurity", to: "/solutions" },
      { label: "Cloud Architecture", to: "/solutions" },
      { label: "AI Frameworks", to: "/solutions" },
      { label: "Data Strategy", to: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/company" },
      { label: "Careers", to: "/company" },
      { label: "Newsroom", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", to: "/insights" },
      { label: "Industries", to: "/industries" },
      { label: "Case Studies", to: "/insights" },
      { label: "Documentation", to: "/insights" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 pb-10 pt-20">
      <div className="mx-auto mb-20 grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-5">
        <div className="col-span-2">
          <div className="mb-6 font-display text-2xl font-bold tracking-tighter">
            LILO<span className="text-primary">.</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Architecting enterprise resilience through technical precision and autonomous systems engineering.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-foreground">{col.title}</h5>
            <ul className="space-y-4 text-sm text-muted">
              {col.links.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-10 font-mono text-[10px] uppercase tracking-widest text-muted md:flex-row">
        <div className="flex flex-wrap gap-8">
          <span>© 2026 Lilo Technologies Inc.</span>
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Legal Notices</a>
        </div>
        <div>Built by Systems Architecture Division</div>
      </div>
    </footer>
  );
}