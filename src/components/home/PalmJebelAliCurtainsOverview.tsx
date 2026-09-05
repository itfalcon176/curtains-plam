"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Layers,
  Cpu,
  Clock,
  ChevronRight,
} from "lucide-react";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";

export const commercialSectors = [
  {
    title: "Office Blinds & Curtains",
    subtitle: "Acoustic & Glare Control",
    icon: "/icons/offices-blinds.jpg",
    href: "/office-blinds-and-curtains",
  },
  {
    title: "Hospital & Clinic Blinds",
    subtitle: "Antimicrobial & Flame Retardant",
    icon: "/icons/hospital-blinds.jpg",
    href: "/office-blinds-and-curtains",
  },
  {
    title: "School & Nursery Blinds",
    subtitle: "Child-Safe Cordless Systems",
    icon: "/icons/school-blinds.jpg",
    href: "/office-blinds-and-curtains",
  },
  {
    title: "Hotel & Resort Blinds",
    subtitle: "5-Star Motorized Luxury",
    icon: "/icons/hotel-blinds.jpg",
    href: "/office-blinds-and-curtains",
  },
  {
    title: "Government Projects",
    subtitle: "Civil Defense Approved",
    icon: "/icons/public-building-blinds.jpg",
    href: "/office-blinds-and-curtains",
  },
  {
    title: "Gym & Fitness Curtains",
    subtitle: "Moisture & UV Resistant",
    icon: "/icons/arcticons-gymrun-e1730220416327.png",
    href: "/office-blinds-and-curtains",
  },
];

export const PalmJebelAliCurtainsOverview: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#FAF8F5] select-none border-b border-[#E6DFD5] overflow-hidden">
        {/* Subtle Ambient Radial Luxury Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A880]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (7 Cols): Editorial Narrative + Luxury Sector Cards */}
            <div className="lg:col-span-7 space-y-7">
              {/* Luxury Top Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] border border-[#C5A880]/30 shadow-2xs whitespace-nowrap max-w-full">
                <Crown className="w-3.5 h-3.5 text-[#9E7A4A] shrink-0" />
                <span className="whitespace-nowrap">Palm Jebel Ali Bespoke Craftsmanship</span>
              </div>

              {/* Baskervville Serif Headline */}
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-950 font-normal uppercase tracking-wide leading-[1.18]">
                  Our Window Curtains &amp;{" "}
                  <span className="block text-[#9E7A4A]">Blinds in Palm Jebel Ali</span>
                </h2>
                <div className="h-0.5 w-16 bg-[#C5A880] rounded-full" />
              </div>

              {/* Narrative Story */}
              <div className="space-y-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  We have a wide variety of premium fabrics and bespoke curtain designs tailored specifically for <strong className="font-semibold text-stone-900">Palm Jebel Ali villas and Dubai waterfront residences</strong>. We offer 100% thermal blackout curtains, architectural wave curtains, motorized sheer voiles, pencil pleats, pinch pleats, velvet drapes, Somfy motorized blinds, and commercial acoustic solutions. Easy Blinds &amp; Curtains offers specialized installation across Dubai within 24–48 hours.
                </p>

                <p>
                  You can bring the finest luxury fabrics in the world directly to your doorstep with our <strong className="font-semibold text-stone-900">Complimentary Mobile Showroom Van</strong>. Explore 1,000+ textures, patterns, and colors in your villa’s natural ambient light with free laser precision measurement.
                </p>
              </div>

              {/* Luxury Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E6DFD5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">24h Express</div>
                    <div className="text-[10px] text-stone-500">Free In-Home Fitting</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E6DFD5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">Smart Somfy</div>
                    <div className="text-[10px] text-stone-500">Alexa &amp; App Control</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E6DFD5] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">5-Yr Warranty</div>
                    <div className="text-[10px] text-stone-500">100% Laser Fit</div>
                  </div>
                </div>
              </div>

              {/* 6 Premium Sector Micro-Cards Grid */}
              <div className="pt-3">
                <div className="text-[11px] font-bold text-[#9E7A4A] uppercase tracking-[0.2em] mb-3">
                  Tailored Commercial &amp; Residential Projects:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {commercialSectors.map((sector, idx) => (
                    <Link
                      key={idx}
                      href={sector.href}
                      className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-stone-950 border border-[#E6DFD5] hover:border-stone-950 shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] group-hover:bg-white/10 flex items-center justify-center p-2 shrink-0 transition-colors border border-[#E6DFD5]/60 group-hover:border-white/10">
                        <Image
                          src={sector.icon}
                          alt={sector.title}
                          width={36}
                          height={36}
                          className="max-h-7 max-w-7 object-contain group-hover:brightness-125 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-stone-900 group-hover:text-white leading-tight truncate">
                          {sector.title}
                        </div>
                        <div className="text-[10px] text-stone-500 group-hover:text-[#C5A880] truncate mt-0.5 font-light">
                          {sector.subtitle}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Modern Action Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-[#C5A880] via-[#D4B992] to-[#B58E52] hover:from-[#D4B992] hover:to-[#A8875B] text-stone-950 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl shadow-[#C5A880]/20 rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5"
                >
                  <Calendar className="w-4 h-4 text-stone-950 shrink-0" />
                  <span>Book A Free Appointment</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>

            {/* Right Column (5 Cols): High-Definition Sunlit Villa Image with Gold Accents */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[520px] sm:h-[620px] lg:h-[680px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E6DFD5] group"
              >
                <Image
                  src="/card-sheer-curtains.jpg"
                  alt="Palm Jebel Ali Waterfront Villa Living with Curtains"
                  fill
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/10 to-stone-950/20" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-stone-950/80 backdrop-blur-xl border border-white/20 text-white text-[11px] sm:text-xs font-bold shadow-xl whitespace-nowrap">
                  <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#C5A880] shrink-0" />
                  <span>1,000+ Luxury Fabrics Mobile Van</span>
                </div>

                {/* Bottom Floating Luxury Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl bg-stone-950/85 backdrop-blur-2xl border border-white/20 text-white shadow-2xl space-y-3">
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2 text-[#E6D7C3] text-xs font-bold uppercase tracking-wider min-w-0">
                      <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>Palm Jebel Ali Express Fitting</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 text-[#E6D7C3] text-[10px] sm:text-xs font-bold whitespace-nowrap shrink-0">
                      24–48h
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    Laser-measured, custom handcrafted in Dubai, and fitted with certified Somfy smart motors and a 5-year guarantee.
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E6D7C3]">
                    <span>✓ Free In-Home Consultation</span>
                    <span>✓ 100% Perfect Laser Fit</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
