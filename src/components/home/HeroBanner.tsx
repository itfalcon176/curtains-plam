"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";

export const HeroBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[100svh] min-h-[600px] max-h-[1050px] flex items-center overflow-hidden bg-stone-950 select-none pt-14 sm:pt-16">
        {/* 1. Clear Aerial Island Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Palm-Shaped Island Cityscape.png"
            alt="Easy Blinds & Curtains Palm Jebel Ali Luxury Living"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Minimal Natural Gradient for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15 z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 z-1" />
        </div>

        {/* 2. Direct Open Modern Typography (No Background Cards/Boxes) */}
        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full py-6 sm:py-8 flex flex-col justify-between h-full pt-4 sm:pt-6">
          {/* Top Space */}
          <div />

          {/* Middle Main Content */}
          <div className="max-w-2xl lg:max-w-3xl space-y-4 my-auto">
            {/* Gold Subtitle Tag with High Contrast */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-[#C5A880]/60 text-[#F3DEB8] text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] font-sans shadow-lg drop-shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse shrink-0" />
              <span>Easy Blinds &amp; Curtains • Palm Jebel Ali</span>
            </motion.div>

            {/* Main Headline in Baskervville Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal uppercase tracking-[0.04em] leading-[1.16] drop-shadow-xl"
            >
              A New Chapter in Dubai’s Palm Islands
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-base lg:text-lg text-stone-100 font-light leading-relaxed max-w-xl drop-shadow-md"
            >
              Live amidst pristine beaches, lush landscapes, and an opulent collection of waterfront residences with bespoke curtains and automated smart blinds in Dubai.
            </motion.p>

            {/* Ultra-Modern Luxury Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto"
            >
              {/* Primary Luxury Gold & White Button with White Border & White Arrow Badge */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#C5A880] hover:bg-white text-stone-950 font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.1em] sm:tracking-[0.16em] shadow-2xl shadow-[#C5A880]/30 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-white w-full sm:w-auto min-h-[52px] sm:min-h-[56px] text-center"
              >
                <span>Book Free In-Home Measurement</span>
                <span className="w-6 h-6 rounded-lg bg-white group-hover:bg-stone-950 text-stone-950 group-hover:text-white shadow-xs flex items-center justify-center transition-all group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Secondary Obsidian Frosted Glass WhatsApp Button */}
              <a
                href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20inquire%20about%20custom%20curtains%20and%20blinds."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-stone-950/70 hover:bg-stone-950 backdrop-blur-xl border border-white/25 hover:border-[#C5A880] text-white hover:text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em] shadow-xl hover:shadow-[#C5A880]/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto min-h-[52px] sm:min-h-[56px] text-center"
              >
                <WhatsAppIcon className="w-5 h-5 text-white group-hover:text-[#C5A880] group-hover:scale-110 transition-all duration-300 drop-shadow-md shrink-0" />
                <span>WhatsApp Inquiry</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom Iconic Mouse Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center pb-2 pt-4"
          >
            <div className="w-5 h-9 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
            </div>
            <span className="text-[10px] text-white/75 uppercase tracking-[0.2em] font-sans mt-2">
              Scroll to know more
            </span>
          </motion.div>
        </div>
      </section>

      {/* Interactive In-Home Booking Modal */}
      <BookAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
