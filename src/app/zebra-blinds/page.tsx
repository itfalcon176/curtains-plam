"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Grid,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sun,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function ZebraBlindsPage() {
  const benefits = [
    {
      title: "Dual Day-and-Night Light Control",
      desc: "Align the transparent and opaque bands to let in gentle sunlight, or stagger them for complete daytime privacy and glare protection.",
    },
    {
      title: "Matching Powder-Coated Cassettes",
      desc: "Each zebra blind is housed in a streamlined luxury aluminium cassette that conceals the roller mechanism for a clean architectural finish.",
    },
    {
      title: "Smart Motorization Ready",
      desc: "Easily automated with rechargeable wire-free Somfy or Tuya motors with remote control and smartphone app scheduling.",
    },
    {
      title: "100% Custom Laser Sizing",
      desc: "Handcrafted in our Dubai factory to fit any window recess, patio door, or balcony glass with zero edge rubbing.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Zebra & Day-Night Blinds in Dubai"
        subtitle="Modern Dual-Layer Horizontal Striped Window Coverings"
        badge="Easy Blinds & Curtains • Trending Shades"
        description="Experience the versatile elegance of Zebra blinds (Day-Night shades). Seamlessly transition from soft ambient sunlight to total privacy with precision dual-band fabric technology."
        breadcrumbs={[
          { label: "Blinds", href: "/blinds" },
          { label: "Zebra Blinds" },
        ]}
      />

      {/* 2. Benefits Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Grid className="w-3.5 h-3.5" />
            <span>Dual Band Precision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            The Perfect Balance of Sunlight and Privacy
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Ideal for contemporary Dubai apartments, townhouses, and open-plan living rooms.
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
        title="Ready to Install Zebra Blinds in Your Home?"
        subtitle="Book Free Laser Measurement & Fabric Swatch Presentation in Dubai"
      />
    </div>
  );
}
