"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { db } from "@/firebase/firebase";

type ContactCard = {
  title: string;
  content: string;
};

type SocialItem = {
  name: string;
  href: string;
};

export default function ContactUsPage() {
  const { t, i18n } = useTranslation("common");
  const cards = t("contactUs.cards", { returnObjects: true }) as ContactCard[];
  const socials = t("contactUs.socials", { returnObjects: true }) as SocialItem[];
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!form.name || !form.email || !form.subject || !form.message) {
      setSubmitStatus("error");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        language: i18n.language,
        createdAt: serverTimestamp(),
      });
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                {t("contactUs.badge")}
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{t("contactUs.title")}</h1>
              <p className="mt-2 text-sm text-white/75">{t("contactUs.subtitle")}</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-300/70 hover:text-teal-100"
            >
              {t("contactUs.backHome")}
            </Link>
          </div>

          <p className="mb-8 text-sm leading-7 text-white/85 sm:text-base">{t("contactUs.intro")}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <section
                key={card.title}
                className="rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5"
              >
                <h2 className="text-base font-semibold text-teal-100 sm:text-lg">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/80">{card.content}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-teal-100">{t("contactUs.formTitle")}</h2>
            <p className="mt-1 text-sm text-white/75">{t("contactUs.formSubtitle")}</p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/80">
                    {t("contactUs.form.name")}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder={t("contactUs.form.namePlaceholder")}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/80">
                    {t("contactUs.form.email")}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder={t("contactUs.form.emailPlaceholder")}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  {t("contactUs.form.subject")}
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => onChange("subject", e.target.value)}
                  placeholder={t("contactUs.form.subjectPlaceholder")}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">
                  {t("contactUs.form.message")}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  placeholder={t("contactUs.form.messagePlaceholder")}
                  className="min-h-[120px] w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                  required
                />
              </div>

              {submitStatus === "success" && (
                <p className="text-sm text-emerald-300">{t("contactUs.form.success")}</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-rose-300">{t("contactUs.form.error")}</p>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-black shadow-lg shadow-teal-500/30 transition hover:shadow-teal-500/50 disabled:opacity-50"
                >
                  {loading ? t("contactUs.form.sending") : t("contactUs.form.submit")}
                </button>
              </div>
            </form>
          </section>

          <section className="mt-8 rounded-2xl border border-teal-300/25 bg-teal-300/10 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-teal-100">{t("contactUs.emailTitle")}</h2>
            <p className="mt-2 text-sm leading-7 text-white/85">{t("contactUs.emailDescription")}</p>
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="mt-3 inline-block text-sm font-semibold text-cyan-200 underline underline-offset-2 hover:text-cyan-100 sm:text-base"
            >
              marketing.admin@ocglobaltech.com
            </a>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-teal-100">{t("contactUs.socialTitle")}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 transition hover:border-cyan-300/70 hover:text-cyan-100"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
