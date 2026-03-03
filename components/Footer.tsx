"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  const marqueeItems = Array.from({ length: 14 }, (_, index) => `ozone-${index + 1}`);

  return (
    <footer className="relative w-full bg-black">
      {/* Marquee strip above footer */}
      <div className="relative overflow-hidden border-t border-b border-white/10 bg-[#0f0f10] py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        <motion.div
          className="flex min-w-[200%] gap-8 sm:gap-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold lowercase tracking-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          {marqueeItems.map((item) => (
            <span key={item} className="whitespace-nowrap">
              ozone
            </span>
          ))}
          {marqueeItems.map((item) => (
            <span key={`dup-${item}`} className="whitespace-nowrap">
              ozone
            </span>
          ))}
        </motion.div>
      </div>

      {/* Top Dark Strip */}
      <div className="h-1 bg-black" />

      {/* Central Gradient Strip */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-4 sm:px-6">
            {/* Email */}
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="block text-center text-sm font-semibold text-white hover:underline transition-all duration-200 sm:text-base"
            >
              marketing.admin@ocglobaltech.com
            </a>

            {/* Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:text-base">
              <Link
                href="/privacy-policy"
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100 transition-all duration-200"
              >
                {t("footer.privacyPolicy")}
              </Link>
              <Link
                href="/terms-conditions"
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100 transition-all duration-200"
              >
                {t("footer.termsConditions")}
              </Link>
              <Link
                href="/cookie-policy"
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100 transition-all duration-200"
              >
                {t("footer.cookiePolicy")}
              </Link>
              <Link
                href="/about-us"
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100 transition-all duration-200"
              >
                {t("footer.aboutUs")}
              </Link>
              <Link
                href="/contact-us"
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100 transition-all duration-200"
              >
                {t("footer.contactUs")}
              </Link>
            </div>

            {/* Copyright */}
            <p className="mt-4 border-t border-white/20 pt-4 text-center text-xs font-semibold text-white/95 sm:text-sm">
              {t("footer.builtBy")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Dark Strip */}
      <div className="h-1 bg-black" />
    </footer>
  );
}
