import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lilo Technologies" },
      { name: "description", content: "Get in touch with Lilo Technologies. Submit your details and business needs and receive a response within 48 hours." },
      { property: "og:title", content: "Contact — Lilo Technologies" },
      { property: "og:description", content: "Submit your details and business needs to Lilo Technologies." },
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
        title="Tell us how we can help."
        description="Thank you for your interest in Lilo Technologies. Please provide the following information about your business needs to help us serve you better. You should receive a response within 48 hours."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24">
        {sent ? (
          <div className="border border-border bg-card p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold">Thank you — message received.</h2>
            <p className="text-muted">A member of our team will review your business needs and get back to you shortly.</p>
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
              <Field label="E-mail" name="email" type="email" />
              <Field label="Country" name="country" />
              <Field label="City" name="city" />
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">Business Needs</span>
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
              Submit Message
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