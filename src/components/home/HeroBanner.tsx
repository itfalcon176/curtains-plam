"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Crown,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Cpu,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";

export const HeroBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[calc(100svh-58px)] sm:h-[calc(100vh-62px)] min-h-[500px] max-h-[1080px] flex items-center overflow-hidden bg-stone-950 select-none">
        {/* Background Image with Priority & Fit Screen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/palm-jebel-ali-latest-launches-Curtains.jpg"
            alt="Palm Jebel Ali Luxury Curtains & Motorized Blinds"
            fill
            priority
            className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
            sizes="100vw"
          />

          {/* Luxury Multi-Layered Gradients for High Readability and Elegance */}
          {/* Left Dark Gradient for Headline Focus */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-transparent z-1" />

          {/* Bottom Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-stone-950/20 z-1" />

          {/* Subtle Warm Gold Radial Glow */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl z-1 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6 lg:py-8 flex flex-col justify-between h-full">
          {/* Top Pill / Badge */}
          <div className="pt-1 sm:pt-2">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A880]/40 text-[#E6D7C3] text-xs font-semibold tracking-wider shadow-lg"
            >
              <Crown className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="uppercase text-[10px] sm:text-[11px] font-bold tracking-widest text-[#E6D7C3]">
                Easy Blinds &amp; Curtains • Palm Jebel Ali Collection
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            </motion.div>
          </div>

          {/* Middle Main Content */}
          <div className="max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-4 my-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
            >
              Easy Blinds &amp; Curtains —{" "}
              <span className="text-[#E6D7C3] font-bold">
                Luxury Window Couture &amp; Smart Drapes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm lg:text-base text-stone-200 font-normal leading-relaxed max-w-xl drop-shadow-xs"
            >
              Easy Blinds &amp; Curtains creates custom bespoke blackout curtains, whisper-quiet Somfy motorized tracks, and designer sheer drapery delivered &amp; installed across Palm Jebel Ali &amp; Dubai within 24–48 hours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2"
            >
              {/* Primary Appointment Trigger */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group px-5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-[#C5A880] via-[#B69768] to-[#9E7A4A] hover:from-[#B69768] hover:to-[#8C6B3D] text-stone-950 font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#C5A880]/20 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-stone-950" />
                <span>Book Free In-Home Measurement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20inquire%20about%20custom%20curtains%20and%20blinds."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 hover:border-[#25D366]/60 hover:text-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Quote</span>
              </a>

              {/* Explore Curtains link */}
              <Link
                href="/curtains"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm text-stone-300 hover:text-[#C5A880] font-medium tracking-wide transition-colors"
              >
                <span>View Curtain Styles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom Floating Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2 sm:pt-3 border-t border-white/10"
          >
            <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">24h Installation</div>
                <div className="text-[9px] sm:text-[10px] text-stone-300">Free In-Home Visit</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Smart Motorized</div>
                <div className="text-[9px] sm:text-[10px] text-stone-300">Alexa &amp; Somfy Systems</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">100% Custom Fit</div>
                <div className="text-[9px] sm:text-[10px] text-stone-300">Laser Precision Guarantee</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">4.9/5 Rating</div>
                <div className="text-[9px] sm:text-[10px] text-stone-300">2,500+ UAE Homes</div>
              </div>
            </div>
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
