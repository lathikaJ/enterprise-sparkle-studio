import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lilo Technologies" },
      { name: "description", content: "Speak with a Lilo Technologies principal architect about your enterprise security, cloud, or AI initiative." },
      { property: "og:title", content: "Contact — Lilo Technologies" },
      { property: "og:description", content: "Speak with a principal architect about your initiative." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you're headed."
        description="Share a few details about your initiative and a principal architect will respond within one business day."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24">
        {sent ? (
          <div className="border border-border bg-card p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold">Thank you — message received.</h2>
            <p className="text-muted">A member of our team will be in touch shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Work email" name="email" type="email" />
              <Field label="Company" name="company" />
              <Field label="Role" name="role" />
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">Initiative</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-border bg-background p-4 text-sm focus:border-primary focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="self-start bg-foreground px-8 py-4 font-semibold text-background transition-colors hover:bg-primary"
            >
              Submit briefing request
            </button>
          </form>
        )}
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="w-full border border-border bg-background p-3 text-sm focus:border-primary focus:outline-none"
      />
    </label>
  );
}