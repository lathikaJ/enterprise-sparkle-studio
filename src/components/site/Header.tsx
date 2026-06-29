import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/company", label: "Company" },
] as const;

export function SiteHeader() {
  return (
    <>
      <div className="bg-foreground px-6 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex gap-6">
            <span>Status: Systems Operational</span>
            <span className="hidden sm:inline">Global Presence: 14 Nodes</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">Support</a>
            <a href="#" className="transition-colors hover:text-primary">Client Portal</a>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-12">
            <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-foreground">
              LILO<span className="text-primary">.</span>
            </Link>
            <div className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden border border-border px-5 py-2 text-sm font-semibold transition-colors hover:bg-foreground/5 sm:inline-block"
            >
              Talk to Expert
            </Link>
            <Link
              to="/contact"
              className="bg-foreground px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}