"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const COOKIE_CONSENT_KEY = "cookieConsent";

export default function CookieBanner() {
  const { t } = useTranslation("common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[70] px-4 sm:bottom-6 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-black/75 p-4 text-white shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
          <div className="space-y-1 sm:pr-4">
            <p className="text-sm font-semibold text-teal-200">
              {t("cookieBanner.title")}
            </p>
            <p className="text-xs leading-6 text-white/85 sm:text-sm">
              {t("cookieBanner.description")}{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-cyan-200 underline underline-offset-2 hover:text-cyan-100"
              >
                {t("cookieBanner.learnMore")}
              </Link>
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-nowrap sm:items-center sm:justify-end">
            <Link
              href="/cookie-policy"
              className="whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white/90 transition hover:border-cyan-300/70 hover:text-cyan-100"
            >
              {t("cookieBanner.manage")}
            </Link>
            <button
              onClick={() => handleConsent("rejected")}
              className="whitespace-nowrap rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-rose-300/70 hover:text-rose-100"
            >
              {t("cookieBanner.reject")}
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-black shadow-lg shadow-teal-500/30 transition hover:shadow-teal-500/50"
            >
              {t("cookieBanner.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
