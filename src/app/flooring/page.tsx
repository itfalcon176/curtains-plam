"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  TreePine,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function FlooringPage() {
  const flooringTypes = [
    {
      title: "Luxury SPC Rigid Vinyl Flooring",
      badge: "100% Waterproof",
      desc: "High-density limestone core SPC flooring offering authentic oak wood texture, scratch resistance, and acoustic backing for Dubai villas.",
      features: ["100% Waterproof & Termite Proof", "Built-In IXPE Acoustic Underlay", "Click-Lock Fast Installation", "Commercial Wear Layer"],
    },
    {
      title: "Engineered European Hardwood",
      badge: "Timeless Prestige",
      desc: "Multi-ply hardwood planks with genuine European oak top layers, designed specifically to withstand UAE indoor humidity fluctuations.",
      features: ["Genuine European Oak Wear Layer", "Herringbone & Chevron Patterns", "UV Matt Lacquer Finish", "25-Year Residential Warranty"],
    },
    {
      title: "Outdoor Composite Decking",
      badge: "Weather Resistant",
      desc: "Ultra-durable anti-slip WPC composite decking for villa swimming pool surrounds, garden terraces, and luxury penthouse balconies.",
      features: ["Anti-Fade UV Resistant", "Splinter-Free Barefoot Safe", "Zero Paint/Stain Maintenance", "High Heat Resistance"],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Luxury Flooring & Parquet in Dubai"
        subtitle="Premium SPC Vinyl, Engineered Hardwood & Outdoor Decking"
        badge="Easy Blinds & Curtains • Flooring Division"
        description="Transform your floors with our curated collection of waterproof luxury SPC flooring, French herringbone parquet, and weather-resistant outdoor decking installed by certified craftsmen."
        breadcrumbs={[{ label: "Flooring" }]}
      />

      {/* 2. Products */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Flooring Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Bespoke Flooring Options for Dubai Living
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Engineered to coordinate harmoniously with your curtains, drapery headings, and interior tones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flooringTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EFEAE1] text-[#9E7A4A] text-[11px] font-bold tracking-wide">
                  {item.badge}
                </span>

                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2 space-y-2">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EBE1]">
                <Link
                  href="/book-a-free-appointment"
                  className="w-full py-3 rounded-full bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-sm"
                >
                  Request Flooring Samples
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Ready to Upgrade Your Flooring & Curtains Together?"
        subtitle="Book Free On-Site Measurement & Sample Presentation in Dubai"
      />
    </div>
  );
}
