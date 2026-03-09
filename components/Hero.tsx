"use client";

import { motion, useMotionValue, useSpring, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import VantaBackground from "@/components/VantaBackground";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

type HeroProps = {
  onOpenSurvey: () => void;
};

export default function Hero({ onOpenSurvey }: HeroProps) {
  const { t } = useTranslation("common");
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    damping: 60,
    stiffness: 100,
  });
  
  const [displayValue, setDisplayValue] = useState("0");

  const lastUpdateRef = useRef(0);
  const throttleDelay = 16;

  useEffect(() => {
    count.set(167);
  }, [count]);
  
  useMotionValueEvent(springCount, "change", (latest) => {
    const now = Date.now();
    if (now - lastUpdateRef.current >= throttleDelay) {
      if (latest >= 1000) {
        const kValue = latest / 1000;
        const rounded = Math.round(kValue * 10) / 10;
        setDisplayValue(
          rounded % 1 === 0 ? `${rounded}k` : `${rounded.toFixed(1)}k`
        );
      } else {
        setDisplayValue(Math.round(latest).toString());
      }
      lastUpdateRef.current = now;
    }
  });
  
  return (
    <>
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center text-white overflow-hidden">
      {/* Vanta Halo Background */}
      <VantaBackground />
      
      {/* Language Switcher - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 right-3 sm:top-8 sm:right-4 md:top-12 md:right-6 lg:top-16 lg:right-8 z-20"
      >
        <LanguageSwitcher />
      </motion.div>
      
      {/* Top Label - Positioned center top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 sm:top-12 md:top-16 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="https://www.ocglobaltech.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider sm:tracking-widest text-white uppercase px-4"
        >
          <div className="relative overflow-hidden rounded-full border border-white/40 bg-white/5 px-4 py-2 backdrop-blur-3xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_35%)]" />
            <div className="pointer-events-none absolute inset-[-1px] rounded-full border border-white/10" />
            <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-1">
              <span>OZONE</span>
              <span className="text-teal-300">✦</span>
              <span>OC GLOBAL TECHNOLOGY</span>
            </div>
          </div>
        </Link>
      </motion.div>

    

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-12 md:mt-14 flex flex-col items-center"
      >
        <div className="relative h-[300px] w-[300px] sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px] lg:h-[400px] lg:w-[400px] mx-auto translate-y-3 sm:translate-y-8 md:translate-y-9">
          {/* <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(94,234,212,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.2),transparent_60%)] blur-xl opacity-60 pointer-events-none" />
          <div className="absolute -inset-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]" /> */}
          <Image
            src="/ozlogo2.png"
            alt="OZONE Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 300px"
          />
        </div>
        
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white px-2"
      >
        {t("hero.title")} <br />
        {t("hero.streaming")}{" "}
        <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
          {t("hero.platform")}
        </span>
      </motion.h1>

      {/* Stats */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white px-4"
      >
        <motion.span
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent"
        >
          {displayValue}
        </motion.span>{" "}
        {t("hero.peopleInterested")}
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 mt-6 sm:mt-8 md:mt-10 rounded-full bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/50"
        onClick={onOpenSurvey}
      >
        {t("hero.preregister")}
      </motion.button>
    </section>
    </>
  );
}
