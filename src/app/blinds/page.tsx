"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  SlidersHorizontal,
  Moon,
  Sun,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TreePine,
  Maximize2,
  Sparkles,
} from "lucide-react";

export default function BlindsPage() {
  const blindCategories = [
    {
      title: "Roller & Solar Screen Blinds",
      slug: "/roller-blinds",
      badge: "Sleek Minimalist Standard",
      description: "Clean architectural rollers with high-performance solar screen fabrics that reject 95%+ UAE heat while preserving exterior views.",
      features: ["Solar Heat Rejection", "Smooth Chain or Motor Drive", "Zero Glare on TV & Screens", "Wipe-Clean Fabric"],
    },
    {
      title: "Zebra / Day-Night Blinds",
      slug: "/zebra-blinds",
      badge: "Trending Dual Light Control",
      description: "Alternating sheer and solid fabric stripes allowing you to switch seamlessly between luminous daylight diffusion and full privacy.",
      features: ["Dual Privacy Adjustment", "Modern Horizon Aesthetic", "Enclosed Metal Cassette", "Child-Safe Cordless"],
    },
    {
      title: "Wooden Venetian Blinds",
      slug: "/wooden-venetian-blinds",
      badge: "Authentic Basswood Luxury",
      description: "Handcrafted from sustainably harvested 50mm premium hardwoods with UV-resistant scratch coatings and custom tape ribbons.",
      features: ["Genuine 50mm Hardwood Slats", "Rich Grain Stains & White", "Precision 180° Tilt", "Moisture Resistant Finish"],
    },
    {
      title: "Motorized Smart Blinds",
      slug: "/motorised-blinds",
      badge: "App & Voice Automation",
      description: "Automate every blind across your villa with Somfy and Tuya rechargeable wire-free motors with solar charging capability.",
      features: ["Somfy Wire-Free Motors", "Solar Panel Recharge Option", "Apple HomeKit & Alexa", "5-Year Guarantee"],
    },
    {
      title: "Vertical Louver Blinds",
      slug: "/blinds",
      badge: "Ideal for Large Glass Vistas",
      description: "Rotating 180-degree fabric louvers engineered for floor-to-ceiling panoramic glass balconies and luxury office terraces.",
      features: ["Smooth Sliding Track", "Flame Retardant Options", "Floor-to-Ceiling Drop", "Slim Stack Profile"],
    },
    {
      title: "Duplex Cassette Shades",
      slug: "/blinds",
      badge: "Premium Enclosed Finish",
      description: "Dual roller tubes inside a sleek matching powder-coated aluminium cassette for the ultimate contemporary finish.",
      features: ["Twin Fabric Functionality", "Concealed Mechanism", "Acoustic Noise Dampening", "Architectural Grade"],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Custom Blinds & Motorized Shades in Dubai"
        subtitle="Engineered for UAE Sun Protection, Privacy & Clean Modern Living"
        badge="Easy Blinds & Curtains • Blinds Collection"
        description="Discover custom-sized roller blinds, zebra day-night shades, handcrafted wooden venetians, and smart motorized systems tailored to exact millimeter precision in Dubai."
        breadcrumbs={[{ label: "Blinds" }]}
      />

      {/* 2. Collection Showcase Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Complete Window Shades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Tailored Blinds for Every Room in Dubai
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Engineered with UV-reflective solar backings, child-safe cordless gear, and smart home motors to withstand Dubai’s climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blindCategories.map((item, index) => (
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
                  {item.description}
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

              <div className="pt-8 mt-6 border-t border-[#F0EBE1] flex items-center justify-between">
                <Link
                  href={item.slug}
                  className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 hover:text-[#C5A880] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/book-a-free-appointment"
                  className="px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-[#C5A880] hover:text-white text-stone-700 text-[11px] font-bold transition-all"
                >
                  Free Sample
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Upgrade Your Windows with Custom Blinds"
        subtitle="Complimentary Laser Measuring & Sample Consultation Across UAE"
      />
    </div>
  );
}
