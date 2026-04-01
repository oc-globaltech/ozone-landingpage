"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation("common");
  const [hoveredMemberId, setHoveredMemberId] = useState<number | null>(null);
  
  const teamMembers = [
    { 
      id: 1, 
      image: "/lim.png",
      name: t("team.members.lim.name"),
      title: t("team.members.lim.title"),
      quote: t("team.members.lim.quote")
    },
    { 
      id: 2,
      image: "/maza.png",
      name: t("team.members.maza.name"),
      title: t("team.members.maza.title"),
      quote: t("team.members.maza.quote")
    },
  ];

  const quoteVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1, 
      y: 0,
      scale: 1, 
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    }
  }

  return (
    <section className="relative bg-black pt-12 sm:pt-16 md:pt-20 lg:pt-22 pb-16 sm:pb-20 md:pb-26 lg:pb-41 px-4 sm:px-6 md:px-8 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94,234,212,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94,234,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Glow - Reduced animation on mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{ 
          x: [0, 80, 0], 
          y: [0, 60, 0], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0">
          <span className="text-white">{t("team.title")} </span>
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            {t("team.team")}
          </span>
        </h2>

        {/* Team */}
        <div className="flex justify-center items-center flex-wrap relative">
          {/* Backdrop overlay for mobile to close hover */}
          {hoveredMemberId !== null && (
            <div
              className="fixed inset-0 bg-transparent z-30 md:hidden"
              onTouchStart={() => setHoveredMemberId(null)}
            />
          )}
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
              variants={{
                hover: {
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.3 },
                },
              }}
              className={`relative group w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full ${
                index > 0 ? "-ml-3 sm:-ml-4 md:-ml-6 lg:-ml-8" : ""
              } ${hoveredMemberId === member.id ? 'hovered' : ''}`}
              style={{ zIndex: teamMembers.length - index }}
              onTouchStart={() => {
                // For mobile: toggle hover state on touch
                if (window.innerWidth < 768) {
                  setHoveredMemberId(hoveredMemberId === member.id ? null : member.id);
                }
              }}
            >
              {/* Glow Ring */}
              <motion.div
                className={`absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-teal-400/30 blur-xl transition-opacity
                            ${hoveredMemberId === member.id ? 'opacity-100' : 'opacity-0'}
                            md:opacity-0 md:group-hover:opacity-100`}
                style={{ willChange: 'opacity' }}
                animate={hoveredMemberId === member.id ? { opacity: [0.5, 0.8, 0.5] } : { opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Avatar */}
              <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-lg transition-all
                              ${hoveredMemberId === member.id ? 'border-teal-400/50' : 'border-black'}
                              md:border-black md:group-hover:border-teal-400/50`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>

              {/* Info Panel */}
              <div className={`absolute top-full mt-4 sm:mt-6 left-1/2 -translate-x-1/2 w-56 sm:w-64 pointer-events-none
                              transition-all duration-300 ease-out
                              ${hoveredMemberId === member.id ? 'opacity-100 translate-y-0 scale-100 z-50' : 'opacity-0 translate-y-4 scale-95'}
                              md:opacity-0 md:translate-y-4 md:scale-95
                              md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:scale-100`}>
                <div className="relative bg-black/70 backdrop-blur-md border border-teal-400/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-[0_0_25px_rgba(94,234,212,0.3)] overflow-hidden">
                  
                  {/* Scan Line - Only animate when visible */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent"
                    style={{ willChange: 'transform' }}
                    animate={(hoveredMemberId === member.id || undefined) ? { y: ["-100%", "100%"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10 text-center space-y-3">
                    {/* Name */}
                    <div>
                      <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent block">
                        {member.name}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div>
                      <span className="text-xs sm:text-xs text-teal-400/70 block">
                        {member.title}
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="pt-2 border-t border-teal-400/20">
                      <p className="text-xs sm:text-sm text-teal-200 leading-relaxed">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


