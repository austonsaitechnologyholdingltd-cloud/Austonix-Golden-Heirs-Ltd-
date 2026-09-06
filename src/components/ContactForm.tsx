"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage(data.message || "Inquiry received. Our team will contact you shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="text-xl font-semibold text-zinc-50 mb-2">Business and enterprise inquiry</h3>
      <p className="text-sm text-muted mb-6">
        Share your context and engagement goals. Austonix will respond with the appropriate next step.
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
            placeholder="jane@company.com"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-muted mb-1.5">Organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
            placeholder="Company or institution name"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted mb-1.5">How can we help?</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition resize-y"
            placeholder="Tell us about your goals, challenges, or the capability you need..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending inquiry..." : "Submit business inquiry"}
        </button>

        {message && (
          <p role="status" className={`text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    </motion.form>
  );
}