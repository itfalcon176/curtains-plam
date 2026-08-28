"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  SlidersHorizontal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sun,
  Maximize2,
  ArrowRight,
} from "lucide-react";

export default function RollerBlindsPage() {
  const benefits = [
    {
      title: "Solar Heat Rejection Fabrics",
      desc: "High-performance solar screen mesh blocks up to 97% of UV radiation and desert heat while keeping exterior panoramic views crystal clear.",
    },
    {
      title: "100% Blackout Roller Options",
      desc: "Complete light blockage for media rooms, conference suites, and bedrooms with enclosed side-channels for zero edge light gaps.",
    },
    {
      title: "Smooth Chain or Motorized Drives",
      desc: "Precision stainless steel child-safe chain controls or rechargeable battery-powered wire-free Somfy motors.",
    },
    {
      title: "Wipe-Clean & Moisture Resistant",
      desc: "Stain-resistant and waterproof technical fabrics ideal for modern kitchens, luxury bathrooms, and commercial offices in Dubai.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Custom Roller Blinds in Dubai"
        subtitle="Minimalist Modern Shades with Solar Heat Shielding & Blackout"
        badge="Easy Blinds & Curtains • Roller Blinds"
        description="Sleek, durable, and engineered for UAE light management. Custom manufactured to your exact window dimensions with premium components and fast installation."
        breadcrumbs={[
          { label: "Blinds", href: "/blinds" },
          { label: "Roller Blinds" },
        ]}
      />

      {/* 2. Benefits Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Clean Architectural Design</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Precision Roller Blinds Built for UAE Living
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Choose from over 300 solar screen textures, opacity levels (1%, 3%, 5%), and blackout colors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFEAE1] text-[#9E7A4A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-13">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Upgrade to Custom Roller Blinds Today"
        subtitle="Book Free Laser Measurement & Material Swatch Presentation Across UAE"
      />
    </div>
  );
}
