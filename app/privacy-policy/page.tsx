"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

type PrivacySection = {
  title: string;
  items: string[];
};

export default function PrivacyPolicyPage() {
  const { t } = useTranslation("common");
  const sections = t("privacyPolicy.sections", {
    returnObjects: true,
  }) as PrivacySection[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Ozone
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                {t("privacyPolicy.title")}
              </h1>
              <p className="mt-2 text-sm text-white/70">
                {t("privacyPolicy.effectiveDateLabel")}: {t("privacyPolicy.effectiveDate")}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-300/70 hover:text-teal-100"
            >
              {t("privacyPolicy.backHome")}
            </Link>
          </div>

          <p className="mb-8 text-sm leading-7 text-white/80 sm:text-base">
            {t("privacyPolicy.intro")}
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold text-teal-100">{section.title}</h2>
                <ul className="space-y-2 text-sm leading-7 text-white/80 sm:text-base">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-teal-300/25 bg-teal-300/10 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-teal-100">
              {t("privacyPolicy.contact.title")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">
              {t("privacyPolicy.contact.description")}
            </p>
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="mt-2 inline-block text-sm font-semibold text-cyan-200 underline underline-offset-2 hover:text-cyan-100 sm:text-base"
            >
              marketing.admin@ocglobaltech.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
