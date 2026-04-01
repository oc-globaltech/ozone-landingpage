"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type BottomSectionProps = {
  onOpenSurvey: () => void;
};

export default function BottomSection({ onOpenSurvey }: BottomSectionProps) {
  const { t } = useTranslation("common");

  const videoThumbnails = [
    {
      id: 1,
      title: t("gallery.videos.popeyes.title"),
      thumbnail: "/gallery/popeyes.png",
      description: t("gallery.videos.popeyes.description"),
      genre: t("gallery.videos.popeyes.genres", { returnObjects: true }) as string[],
      videoUrl: "/gallery/popeyesvid.mp4",
    },
 
    // {
    //   id:2,
    //   title: t("gallery.videos.duruva.title"),
    //   thumbnail: "/gallery/duruva1.png",
    //   description: t("gallery.videos.duruva.description"),
    //   genre: t("gallery.videos.duruva.genres", { returnObjects: true }) as string[],
    //   videoUrl: "/gallery/DURUVA ORIGINAL.mp4",
    // },
    {
      id: 1,
      title: t("gallery.videos.ramlee.title"),
      thumbnail: "/gallery/ramlee.png",
      description: t("gallery.videos.ramlee.description"),
      genre: t("gallery.videos.ramlee.genres", { returnObjects: true }) as string[],
      videoUrl: "/gallery/DOREMI.mp4",
    },
    {
      id: 2,
      title: t("gallery.videos.nold.title"),
      thumbnail: "/gallery/nold.png",
      description: t("gallery.videos.nold.description"),
      genre: t("gallery.videos.nold.genres", { returnObjects: true }) as string[],
      videoUrl: "/gallery/nold.mp4",
    },
    {
      id: 3,
      title: t("gallery.videos.veera.title"),
      thumbnail: "/gallery/evp.png",
      description: t("gallery.videos.veera.description"),
      genre: t("gallery.videos.veera.genres", { returnObjects: true }) as string[],
      videoUrl: "/gallery/evp.mov",
    },
    {
      id: 4,
      title: t("gallery.videos.sherlock.title"),
      thumbnail: "/gallery/sherlock.png",
      description: t("gallery.videos.sherlock.description"),
      genre: t("gallery.videos.sherlock.genres", { returnObjects: true }) as string[],
      videoUrl: "/gallery/Sherlock Jr.mp4",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [modalVideo, setModalVideo] = useState<typeof videoThumbnails[0] | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const openModal = (video: (typeof videoThumbnails)[0], play: boolean) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("oz-gallery-play"));
    }
    setModalVideo(video);
    setAutoPlay(play);
  };

  const closeModal = () => {
    setModalVideo(null);
    setAutoPlay(false);
  };

  return (
    <section 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, 
            #0a0a0f 0%, 
            #0f1419 15%, 
            #1a1a2e 30%, 
            #16213e 50%, 
            #1a1a2e 70%, 
            #0f1419 85%, 
            #0a0a0f 100%
          )
        `,
      }}
    >
      {/* Static Background Gradient Overlay */}
      {/* <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, 
              rgba(30, 41, 59, 0.3) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(30, 41, 59, 0.3) 100%
            )
          `,
        }}
      /> */}

      {/* Subtle Static Grid Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div> */}

      {/* Top Subtle Divider Line */}
      {/* <div className="absolute top-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div> */}

      {/* Bottom Subtle Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 pt-1.5 sm:pt-2 md:pt-2.5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {/* Title with Enhanced Futuristic Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind title */}
            <div className="absolute -left-6 md:-left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-500/40 via-cyan-500/40 to-transparent blur-md hidden sm:block" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-left relative px-2 sm:px-0">
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">{t("gallery.title")}</span>{" "}
              <span className="relative inline-block">
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
                  {t("gallery.gallery")}
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_15px_rgba(94,234,212,0.6)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                />
                {/* Pulsing glow under underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-2 bg-teal-400/30 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    width: { duration: 1.2, delay: 0.5 },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              </span>
              
              {/* Side accent line */}
              <motion.div
                className="absolute -right-6 md:-right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent hidden sm:block"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: "top" }}
              />
            </h2>
          </motion.div>

          {/* Video Thumbnails Grid - 2x3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {videoThumbnails.map((video, index) => (
            <div
              key={video.id}
                className="relative group aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openModal(video, false)}
            >
                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-400/25 via-cyan-400/20 to-teal-400/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Thumbnail */}
                <div className="relative w-full h-full z-0">
                  <Image
                    src={video.thumbnail}
                    alt={`Video thumbnail ${video.title}`}
                    fill
                    className="object-cover rounded-xl sm:rounded-2xl"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2.5 py-1 rounded-full border border-white/20 bg-white/15 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-[10px] sm:text-xs font-semibold text-white tracking-wide">
                    {t("gallery.play")}
                  </div>
                </div>

                {/* Hover Card */}
                {hoveredId === video.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute inset-2 sm:inset-3 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/8 shadow-[0_12px_36px_rgba(0,0,0,0.28)] p-3 sm:p-4 flex flex-col gap-2 z-20 overflow-hidden"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.12),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_45%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/4 to-transparent" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-white text-sm sm:text-base font-semibold">{video.title}</p>
                        <div className="flex flex-wrap gap-1">
                          {video.genre.map((g) => (
                            <span key={g} className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(video, true);
                        }}
                        className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 text-black font-semibold shadow-[0_8px_25px_rgba(94,234,212,0.35)] hover:scale-105 transition"
                      >
                        ►
                      </button>
                    </div>
                    <p className="relative text-xs sm:text-sm text-white/85">
                      {video.description}
                    </p>
                  </motion.div>
                )}
            </div>
          ))}
          </div>

          {/* Watch More Button - Enhanced Futuristic Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-10 py-5 md:px-14 md:py-6 rounded-full overflow-hidden"
              onClick={onOpenSurvey}
            >
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 rounded-full"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              
              {/* Static Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full opacity-90 blur-sm" />
              
              {/* Button Text with Glow */}
              <span className="relative z-10 text-white text-sm md:text-base font-semibold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(94,234,212,0.5)]">
                {t("gallery.watchMore")}
              </span>

              {/* Corner Accents (static) */}
              <div className="absolute top-1 left-4 w-2 h-2 bg-teal-300 rounded-full" />
              <div className="absolute top-1 right-4 w-2 h-2 bg-cyan-300 rounded-full" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 py-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="absolute inset-0" onClick={closeModal} />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl rounded-3xl border border-white/12 bg-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl overflow-hidden max-h-[90vh]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.12),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_35%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/6 to-transparent pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-3 sm:p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <video
                  key={modalVideo.videoUrl}
                  src={modalVideo.videoUrl}
                  controls
                  autoPlay={autoPlay}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">{modalVideo.title}</h3>
                  <button
                    onClick={closeModal}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white hover:border-teal-300/70 hover:text-teal-100 transition"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {modalVideo.genre.map((g) => (
                    <span key={g} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                      {g}
                    </span>
                  ))}
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">{modalVideo.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {/* <button
                    onClick={onOpenSurvey}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:border-teal-200/70 hover:shadow-[0_10px_40px_rgba(94,234,212,0.35)]"
                  >
                    Preregister
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
