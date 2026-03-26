"use client";

import { FormEvent, useState } from "react";

const CONTACT_FIELDS = [
  ["name", "Your name", "text"],
  ["email", "Email address", "email"],
  ["company", "Company name", "text"],
  ["website", "Website URL", "url"]
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const form = new FormData(event.currentTarget);
      const payload = Object.fromEntries(form.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      event.currentTarget.reset();
      setStatus(result.message ?? "Thanks. Your message has been sent.");
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rounded-[2rem] border border-[rgba(36,22,79,0.08)] bg-white p-8 shadow-[0_18px_42px_rgba(32,24,70,0.05)] md:p-12">
      <form className="grid gap-5" onSubmit={handleSubmit}>
        {CONTACT_FIELDS.map(([name, label, type]) => (
          <label key={name} className="grid gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b6786]">
              {label}
            </span>
            <input
              required={name === "name" || name === "email"}
              type={type}
              name={name}
              className="rounded-[1rem] border border-[rgba(36,22,79,0.10)] bg-[#fffdfa] px-4 py-3.5 text-[#24164f] outline-none ring-0 transition focus:border-[#ffb300] focus:bg-white"
            />
          </label>
        ))}

        <label className="grid gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b6786]">
            Project details
          </span>
          <textarea
            required
            name="message"
            rows={6}
            className="rounded-[1rem] border border-[rgba(36,22,79,0.10)] bg-[#fffdfa] px-4 py-3.5 text-[#24164f] outline-none ring-0 transition focus:border-[#ffb300] focus:bg-white"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-full bg-[#ffb300] px-6 py-3.5 text-[15px] font-semibold text-[#24164f] shadow-[0_12px_24px_rgba(255,179,0,0.18)] transition hover:bg-[#f3aa00] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send enquiry"}
        </button>

        {status ? <p className="text-sm text-[#6b6786]">{status}</p> : null}
      </form>
    </section>
  );
}
