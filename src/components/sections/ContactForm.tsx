"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { localePath, type Dict, type Locale } from "@/i18n";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-fg placeholder:text-fg-muted/55 transition-colors duration-200 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/35";
const labelClass = "mb-1.5 block text-sm font-medium text-fg/90";

export function ContactForm({ t, locale }: { t: Dict["contact"]; locale: Locale }) {
  const f = t.fields;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl glass-strong p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-sunset text-ink-deep">
          <CheckCircle2 size={28} />
        </span>
        <p className="max-w-sm text-lg text-fg">{t.success}</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-ember transition-colors hover:text-gold"
        >
          {t.successMore}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl glass-strong p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">{f.name.label}</label>
          <input id="name" name="name" required placeholder={f.name.placeholder} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">{f.email.label}</label>
          <input id="email" name="email" type="email" required placeholder={f.email.placeholder} className={inputClass} />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">{f.message.label}</label>
        <textarea id="message" name="message" required rows={5} placeholder={f.message.placeholder} className={`${inputClass} resize-none`} />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="customer">{f.customer.label}</label>
        <select id="customer" name="customer" defaultValue="" required className={`${inputClass} appearance-none`}>
          <option value="" disabled>{f.customer.placeholder}</option>
          {f.customer.options.map((o) => (
            <option key={o} value={o} className="bg-ink text-fg">{o}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-flame">{t.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sunset px-7 py-3.5 font-semibold text-ink-deep shadow-[0_14px_40px_-12px_rgba(239,121,29,0.7)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />}
        {t.submit}
      </button>

      {/* DSGVO-Transparenzhinweis (Art. 13) — keine Einwilligungs-Checkbox nötig (Art. 6 lit. b/f) */}
      <p className="mt-4 text-center text-xs leading-relaxed text-fg-muted/80">
        {t.dsgvoPre}
        <a href={localePath(locale, "/datenschutz")} className="underline underline-offset-2 transition-colors hover:text-fg">
          {t.dsgvoLinkLabel}
        </a>
        {t.dsgvoPost}
      </p>
    </form>
  );
}
