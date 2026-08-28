"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Compass,
  Cpu,
  Scissors,
  Palette,
  FileCode,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { HeroBanner } from "@/components/home/HeroBanner";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between">
      {/* 1. Immersive Full-Screen Luxury Hero Banner */}
      <HeroBanner />

      {/* 2. Quick Value Proposition & Curated Categories Showcase */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dubai’s Premier Window Treatments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Precision Tailored for UAE Architecture
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            From floor-to-ceiling panoramic glass to private sanctuary bedrooms, explore our comprehensive collection of custom fabrics and smart motorization.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Curtains Card */}
          <div className="group bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEAE1] text-[#9E7A4A] flex items-center justify-center">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Custom Luxury Curtains
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Blackout, sheer linen, wave pleat, double &amp; triple pinch pleat tailoring crafted with European &amp; Turkish fabrics.
              </p>
            </div>
            <Link
              href="/curtains"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7A4A] group-hover:text-stone-950 transition-colors"
            >
              <span>Explore Curtains</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Blinds Card */}
          <div className="group bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1B1C1F] text-[#C5A880] flex items-center justify-center">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Engineered Blinds &amp; Shades
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Roller, zebra dual shades, natural wood venetian, and vertical louvers engineered for superior solar heat reflection.
              </p>
            </div>
            <Link
              href="/blinds"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7A4A] group-hover:text-stone-950 transition-colors"
            >
              <span>Explore Blinds</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Motorization Card */}
          <div className="group bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Somfy &amp; Smart Automation
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Whisper-quiet motorized tracks integrated with Alexa, Google Assistant, Apple Home, and automated solar timers.
              </p>
            </div>
            <Link
              href="/smart-curtains-solutions"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7A4A] group-hover:text-stone-950 transition-colors"
            >
              <span>Smart Home Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Free Measurement Callout Box */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C1D20] to-[#2E2F34] text-white shadow-xl relative overflow-hidden border border-stone-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880] text-[11px] font-bold uppercase tracking-wider">
                <span>Free Service Across Dubai &amp; UAE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book a Free In-Home Fabric &amp; Measurement Visit
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                Our design van brings over 1,000 fabrics, tracks, and sample pleats directly to your villa, apartment, or commercial office.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#B69768] text-stone-950 font-bold rounded-full text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Van Visit</span>
              </button>

              <a
                href="https://wa.me/971508349761"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="w-full border-t border-[#E6DFD5] bg-[#F3EFEA]/90 py-6 text-center text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-950">PALM &amp; DRAPE DUBAI</span>
            <span className="text-stone-400">•</span>
            <span>Bespoke Luxury Curtains &amp; Blinds</span>
          </div>

          <div className="flex items-center gap-6 text-stone-500 text-[11px]">
            <Link href="/about-us" className="hover:text-stone-950">About Us</Link>
            <Link href="/faqs" className="hover:text-stone-950">FAQs</Link>
            <Link href="/care-package" className="hover:text-stone-950">Care Package</Link>
            <Link href="/contact" className="hover:text-stone-950">Showroom &amp; Contact</Link>
          </div>

          <div className="text-stone-400 text-[11px]">
            © 2026 Palm &amp; Drape. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Interactive Modal */}
      <BookAppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
