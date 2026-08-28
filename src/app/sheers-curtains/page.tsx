"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Scissors,
  ArrowRight,
  Eye,
} from "lucide-react";

export default function SheersCurtainsPage() {
  const benefits = [
    {
      title: "Soft Natural Daylight Diffusion",
      desc: "Transforms harsh desert glare into an ethereal luminous ambient glow while keeping your interiors sun-drenched and welcoming.",
    },
    {
      title: "Daytime Privacy with Outside Views",
      desc: "Prevents outsiders from seeing into your villa or apartment while allowing you to enjoy uninterrupted panoramic views of Dubai.",
    },
    {
      title: "Wave Pleat Architectural Drape",
      desc: "Perfect for modern floor-to-ceiling panoramic glass, sliding patio doors, and double-height living spaces.",
    },
    {
      title: "Dual Layer Compatibility",
      desc: "Can be installed seamlessly behind luxury blackout drapes on double motorized or manual curtain tracks.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Sheer & Voile Curtains in Dubai"
        subtitle="Airy Luminous Drapery for Graceful Sunlight Diffusion"
        badge="Easy Blinds & Curtains • Sheers Collection"
        description="Add effortless elegance to your living spaces with bespoke sheer voiles, Belgian textured linens, and featherlight drapes crafted in Dubai."
        breadcrumbs={[
          { label: "Curtains", href: "/curtains" },
          { label: "Sheer Curtains" },
        ]}
      />

      {/* 2. Benefits Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5" />
            <span>Luminous Daylight Flow</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Bespoke Sheer Voiles for Dubai Architecture
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From subtle pure whites to warm organic sands and soft greys, explore hundreds of sheer fabric textures.
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
        title="Ready to Elevate Your Living Room with Sheer Drapes?"
        subtitle="Book Free In-Home Laser Measuring & Fabric Van Consultation"
      />
    </div>
  );
}
