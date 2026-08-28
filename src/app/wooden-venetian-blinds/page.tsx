"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  TreePine,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sun,
  Sliders,
  ArrowRight,
} from "lucide-react";

export default function WoodenVenetianBlindsPage() {
  const benefits = [
    {
      title: "Authentic 50mm Hardwood Basswood",
      desc: "Crafted from sustainably sourced natural basswood with fine wood grain stains, pure whites, and contemporary warm walnut finishes.",
    },
    {
      title: "180-Degree Precision Slat Tilting",
      desc: "Effortlessly tilt the horizontal slats to direct sunlight up toward the ceiling for glare-free room lighting while maintaining total privacy.",
    },
    {
      title: "Custom Decorative Fabric Tape Ribbons",
      desc: "Upgrade with contrasting or matching herringbone cotton tape trims to conceal cord rout holes and add a bespoke designer aesthetic.",
    },
    {
      title: "Faux Wood Moisture-Proof Options",
      desc: "High-grade polymer composite faux wood slats that resist warping, steam, and humidity in luxury Dubai master bathrooms and kitchens.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Wooden Venetian Blinds in Dubai"
        subtitle="Handcrafted 50mm Hardwood & Faux Wood Slat Treatments"
        badge="Easy Blinds & Curtains • Natural Wood"
        description="Add warmth, texture, and architectural structure to your windows with custom-crafted wooden venetian blinds. Hand-stained in Dubai with UV-protective coatings."
        breadcrumbs={[
          { label: "Blinds", href: "/blinds" },
          { label: "Wooden Venetian Blinds" },
        ]}
      />

      {/* 2. Benefits Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <TreePine className="w-3.5 h-3.5" />
            <span>Natural Timber Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Timeless Warmth & Structural Light Control
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Engineered with UV scratch-resistant sealants to withstand UAE sunlight without fading or cracking.
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
        title="Ready to Transform Your Home with Wooden Venetian Blinds?"
        subtitle="Book Free Laser Measurement & Real Wood Swatch Presentation in Dubai"
      />
    </div>
  );
}
