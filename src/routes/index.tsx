import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import heroLattice from "@/assets/hero-lattice.jpg";
import caseNeobank from "@/assets/case-neobank.jpg";
import caseAerogen from "@/assets/case-aerogen.jpg";
import heroWorkspace from "@/assets/hero-workspace.png";
import { ShieldCheck, Cpu, Mail } from "lucide-react";

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

const slides = [
  {
    id: "support",
    badge: "Proactive Remote IT Support",
    title: "IT issues don't wait.",
    highlight: "Neither do we.",
    description: "Proactive maintenance, instant remote troubleshooting, and secure custom software to keep your business running smoothly.",
    image: heroWorkspace,
    primaryCtaText: "Start Support",
    primaryCtaLink: "/contact",
    secondaryCtaText: "IT Solutions",
    secondaryCtaLink: "/solutions",
    cardTitle: "SYSTEM CRASH PREVENTED!",
    cardDesc: "Secure remote database patch and memory leak fix successfully applied.",
    cardFooter: "Secure remote support active",
    cardFooterColor: "bg-emerald-600 dark:bg-emerald-500",
    cardIconName: "cpu",
    startX: 220,
    startY: 180,
    controlX: 280,
    controlY: 180,
    endX: 340,
    endY: 195,
  },
  {
    id: "security",
    badge: "Real-Time Threat Defense",
    title: "Threats never sleep.",
    highlight: "Neither does our shield.",
    description: "Continuous network defense, automatic malware isolation, and secure setup for in-office and remote teams.",
    image: heroLattice,
    primaryCtaText: "Get Free Audit",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Security Tech",
    secondaryCtaLink: "/solutions",
    cardTitle: "MALWARE ATTACK BLOCKED!",
    cardDesc: "Suspicious ransomware script intercepted and quarantined on workstation 04.",
    cardFooter: "Real-time threat shielded",
    cardFooterColor: "bg-red-600 dark:bg-red-500",
    cardIconName: "shield",
    startX: 200,
    startY: 160,
    controlX: 270,
    controlY: 150,
    endX: 340,
    endY: 195,
  },
  {
    id: "software",
    badge: "Enterprise Email & Console",
    title: "Manual steps slow you down.",
    highlight: "Lilo speeds you up.",
    description: "Automate email-queues, manage workflows with unified consoles, and deploy custom feature modules.",
    image: caseNeobank,
    primaryCtaText: "Book Demo",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Our Software",
    secondaryCtaLink: "/solutions",
    cardTitle: "QUEUE BOT ACTIVE!",
    cardDesc: "2nd Gen Email-Console successfully processed and sorted 1,420 incoming messages.",
    cardFooter: "Email-Console operational",
    cardFooterColor: "bg-blue-600 dark:bg-blue-500",
    cardIconName: "mail",
    startX: 250,
    startY: 220,
    controlX: 300,
    controlY: 200,
    endX: 340,
    endY: 195,
  }
];

function getCardIcon(name: string) {
  switch (name) {
    case "cpu":
      return <Cpu className="h-5 w-5 text-slate-500 dark:text-slate-400" />;
    case "shield":
      return <ShieldCheck className="h-5 w-5 text-slate-500 dark:text-slate-400" />;
    case "mail":
      return <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400" />;
    default:
      return <Cpu className="h-5 w-5 text-slate-500 dark:text-slate-400" />;
  }
}

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  const slide = slides[activeSlide];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden border-b border-border">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 dark:from-background dark:via-background/90 dark:to-background/40"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                  <span className="flex size-2 animate-pulse rounded-full bg-primary" />
                  {slide.badge}
                </div>
                
                <h1 className="mb-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl text-foreground">
                  {slide.title} <span className="text-primary block">{slide.highlight}</span>
                </h1>
                
                <p className="mb-10 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground min-h-[84px]">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    to={slide.primaryCtaLink}
                    className="rounded-full bg-primary hover:bg-primary/95 px-8 py-4 font-semibold text-primary-foreground transition-all shadow-lg hover:shadow-primary/20 text-sm hover:scale-[1.02] active:scale-95"
                  >
                    {slide.primaryCtaText}
                  </Link>
                  <Link
                    to={slide.secondaryCtaLink}
                    className="rounded-full border border-border hover:bg-foreground/5 px-8 py-4 font-semibold text-foreground transition-all text-sm hover:scale-[1.02] active:scale-95 bg-background/50 backdrop-blur-md"
                  >
                    {slide.secondaryCtaText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="mt-10 flex gap-3 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="relative h-2 rounded-full overflow-hidden bg-border hover:bg-muted-foreground/30 transition-all duration-300 w-12"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {activeSlide === i && (
                    <motion.div
                      key={`progress-${i}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute inset-0 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Micro Stats/Trust Bar */}
            <div className="mt-12 flex items-center gap-8 md:gap-12 border-t border-border/50 pt-8">
              {stats.slice(0, 3).map((s, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">
                    {s.value}<span className="text-foreground">{s.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Bottom Features Banner */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground select-none">
          Proactive Maintenance / Secure Remote Troubleshooting / Custom Software — All In One
        </div>
      </div>

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

