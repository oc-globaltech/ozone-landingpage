"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function ShortSurveyPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const socialLinks = [
    {
      href: "https://www.tiktok.com/@__0zone__?_r=1&_t=ZS-92rwGtCppay",
      icon: "/tiktok.png",
      alt: "TikTok",
    },
    {
      href: "https://www.instagram.com/ozoneocgt?igsh=MjdsaTg2c2Jlenpn",
      icon: "/insta.png",
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com/share/1CF6fuuhf4/",
      icon: "/fb.png",
      alt: "Facebook",
    },
  ];
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phoneCode: "+60",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = useMemo(() => [
    t("shortSurvey.roles.creator"),
    t("shortSurvey.roles.viewer"),
    t("shortSurvey.roles.influencer"),
    t("shortSurvey.roles.other"),
  ], [t]);

  const countryCodes = useMemo(() => [
    { code: "+60", label: t("shortSurvey.countryCodes.malaysia") },
    { code: "+65", label: t("shortSurvey.countryCodes.singapore") },
    { code: "+62", label: t("shortSurvey.countryCodes.indonesia") },
    { code: "+91", label: t("shortSurvey.countryCodes.india") },
    { code: "+86", label: t("shortSurvey.countryCodes.china") },
    { code: "+63", label: t("shortSurvey.countryCodes.philippines") },
    { code: "+84", label: t("shortSurvey.countryCodes.vietnam") },
    { code: "+81", label: t("shortSurvey.countryCodes.japan") },
    { code: "+82", label: t("shortSurvey.countryCodes.southKorea") },
    { code: "+1", label: t("shortSurvey.countryCodes.usaCanada") },
  ], [t]);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.role || !form.email) {
      setError(t("shortSurvey.messages.errorRequired"));
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "surveyLeads"), {
        ...form,
        phoneFull: form.phone ? `${form.phoneCode} ${form.phone}` : "",
        createdAt: serverTimestamp(),
      });
      setSuccess(t("shortSurvey.messages.success"));
      setTimeout(() => router.push("/"), 800);
    } catch (err) {
      setError(t("shortSurvey.messages.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white flex items-center justify-center px-4 py-10 relative">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 right-3 sm:top-8 sm:right-4 md:top-12 md:right-6 lg:top-16 lg:right-8 z-20"
      >
        <LanguageSwitcher />
      </motion.div>

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.5)] p-6 sm:p-8 space-y-6">
        <button
          onClick={() => router.push("/")}
          aria-label="Close and go back"
          className="absolute top-3 right-3 h-9 w-9 rounded-full border border-white/10 bg-black/10 text-white/45 hover:border-teal-200/60 hover:text-teal-30 transition flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.05)]"
        >
          ×
        </button>
        <div className="space-y-3 text-center">
          <div className="mx-auto h-17 w-17 relative">
            <Image src="/ozlogo2.png" alt="Ozone logo" fill className="object-contain" priority />
          </div>
          <span className="px-2 text-3xl sm:text-4xl font-extrabold tracking-[0.22em] uppercase bg-gradient-to-b from-cyan-200 via-teal-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(34,211,238,0.35)]">
            ozone
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold">{t("shortSurvey.title")}</h1>
          <p className="text-sm text-white/70">
            {t("shortSurvey.description")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-white/80">{t("shortSurvey.fields.name")} *</label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">{t("shortSurvey.fields.role")} *</label>
            <select
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.role}
              onChange={(e) => handleChange("role", e.target.value)}
              required
            >
              <option value="" disabled>
                {t("shortSurvey.fields.selectRole")}
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">{t("shortSurvey.fields.email")} *</label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/80">{t("shortSurvey.fields.phone")}</label>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-3">
              <select
                className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                value={form.phoneCode}
                onChange={(e) => handleChange("phoneCode", e.target.value)}
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t("shortSurvey.fields.phoneNumber")}
              />
            </div>
          </div>

          {error && <p className="text-sm text-rose-300">{error}</p>}
          {success && <p className="text-sm text-teal-200">{success}</p>}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-black shadow-lg shadow-teal-500/30 transition hover:shadow-teal-500/50 disabled:opacity-50"
            >
              {loading ? t("shortSurvey.messages.submitting") : t("shortSurvey.messages.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>

    {/* Mobile: social block below survey */}
    <div className="sm:hidden w-full max-w-lg mx-auto px-4 pb-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-white leading-tight">
          {t("shortSurvey.social.follow")}
        </p>
        <div className="flex items-center gap-2.5">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 rounded-full overflow-hidden border border-white/60"
              aria-label={link.alt}
            >
              <Image
                src={link.icon}
                alt={link.alt}
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Desktop: floating bottom-right social block */}
    <div className="hidden sm:flex fixed bottom-5 right-4 z-30">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-white max-w-[240px] leading-tight">
          {t("shortSurvey.social.follow")}
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 rounded-full overflow-hidden border border-white/100"
              aria-label={link.alt}
            >
              <Image
                src={link.icon}
                alt={link.alt}
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
