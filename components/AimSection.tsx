"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AimSection() {
  const { t } = useTranslation("common");
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const videoPaths = [
    "/gallery/ozAd.mp4",
    // "/gallery/duruva.mp4",
  ];

  const currentVideo = videoPaths[currentIndex % videoPaths.length] ?? "";

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % videoPaths.length);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
    videoRef.current.play().catch(() => {});
  }, [currentVideo]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setIsMuted(true);
    window.addEventListener("oz-gallery-play", handler);
    return () => window.removeEventListener("oz-gallery-play", handler);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 234, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 234, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Static Background Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, 
              rgba(30, 41, 59, 0.2) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(30, 41, 59, 0.2) 100%
            )
          `,
        }}
      />

      {/* Top Subtle Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      {/* Bottom Subtle Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Blue Wavy Texture on Right - Enhanced */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-l from-cyan-500/30 to-transparent" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50' stroke='%2300ffff' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-y',
        }} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Title - Top Left with Futuristic Styling (secret link to short survey) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind title - hidden on mobile */}
            <div className="hidden sm:block absolute -left-6 md:-left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-500/40 via-cyan-500/40 to-transparent blur-md" />
            
            <Link href="/short-survey" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 rounded-lg">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-left relative px-2 sm:px-0"
              >
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{t("aim.title")}</span>{" "}
                <span className="relative inline-block">
                  {/* Holographic gradient effect */}
                  <motion.span
                    className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent relative z-10"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    {t("aim.aim")}
                  </motion.span>
                  
                  {/* Animated underline with glow */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_20px_rgba(94,234,212,0.8)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1.5 bg-teal-400/50 rounded-full blur-sm"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </span>
                
                {/* Side accent line - hidden on mobile */}
                <motion.div
                  className="hidden sm:block absolute -right-6 md:-right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ transformOrigin: "top" }}
                />
              </motion.h2>
            </Link>
          </motion.div>

          {/* Landscape Video - Center with Futuristic Holographic Border */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video group"
          >
            {/* Outer Glow Layers */}
            <motion.div
              className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-teal-500/40 via-cyan-500/40 to-purple-500/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Animated Border Glow */}
            <motion.div
              className="absolute -inset-1 rounded-2xl sm:rounded-3xl"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(94,234,212,0.5), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200%", "-200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Glass Border with Enhanced Glassmorphism */}
            <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-md shadow-[0_8px_32px_0_rgba(94,234,212,0.2)] group-hover:border-teal-400/40 group-hover:shadow-[0_8px_32px_0_rgba(94,234,212,0.4)] transition-all duration-500">
              {/* Mute toggle */}
              <button
                onClick={() => setIsMuted((m) => !m)}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="absolute bottom-3 right-3 z-30 h-10 w-10 rounded-full bg-black/50 border border-white/25 text-white backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:bg-black/65 transition"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>

              {/* Inner Multi-layer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-transparent to-cyan-500/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-teal-500/10 pointer-events-none" />
              
              {/* Animated corner accents - hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block absolute top-0 left-0 w-12 h-12 md:w-16 md:h-20 border-t-2 border-l-2 border-teal-400/50 rounded-tl-2xl md:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="hidden sm:block absolute top-0 right-0 w-12 h-12 md:w-16 md:h-20 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="hidden sm:block absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-20 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl md:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="hidden sm:block absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-20 border-b-2 border-r-2 border-teal-400/50 rounded-br-2xl md:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {currentVideo && (
                <video
                  ref={videoRef}
                  src={currentVideo}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onEnded={handleEnded}
                  className="w-full h-full object-cover relative z-10 rounded-2xl sm:rounded-3xl"
                />
              )}
              
              {/* Enhanced Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none z-20 rounded-2xl sm:rounded-3xl" />
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Text Content - Below Image with Enhanced Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-4 sm:mx-6 md:mx-8 lg:ml-12 xl:ml-24 group"
          >
            {/* Enhanced Glass Morphism Background */}
            <div className="absolute -inset-4 sm:-inset-6 bg-black/40 rounded-2xl sm:rounded-3xl" />
            
            <div className="relative space-y-4 sm:space-y-6 text-white text-left p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0.7 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light text-white/90"
                >
                  {t("aim.description1")}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light text-white"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="relative inline-block font-semibold">
                    <motion.span
                      className="relative z-10 bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      {t("aim.description2")}
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                  {t("aim.description3")}
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white/75 font-light"
              >
                {t("aim.description4")}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
