"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Moon,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Scissors,
  ArrowRight,
  Flame,
  VolumeX,
} from "lucide-react";

export default function BlackoutCurtainsPage() {
  const benefits = [
    {
      title: "100% Light-Blocking Guarantee",
      desc: "Multi-layered silicon-coated and high-density triple-weave fabrics ensure 0% light penetration, ideal for peaceful sleep in Dubai bedrooms and private cinema rooms.",
    },
    {
      title: "Thermal Heat Barrier (Cuts UAE Heat)",
      desc: "Reflects exterior solar radiation and thermal heat transfer through glass windows, reducing bedroom temperatures and lowering air conditioning power bills by up to 40%.",
    },
    {
      title: "Acoustic Noise Dampening",
      desc: "Heavyweight drapes absorb outside urban traffic and construction noises, creating a tranquil acoustic sanctuary.",
    },
    {
      title: "Custom Tailored Pleat Headings",
      desc: "Available in Wave Pleat (S-Fold), Triple Pinch Pleat, Double Pinch Pleat, Eyelet rings, and motorized ceiling recessed tracks.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Blackout Curtains in Dubai"
        subtitle="100% Light Blocking, Thermal Heat Insulation & Custom Tailoring"
        badge="Easy Blinds & Curtains • Top Seller"
        description="Escape the intense UAE summer sunshine and bright city night lights. Our custom blackout curtains combine world-class blackout linings with luxury designer fabrics."
        breadcrumbs={[
          { label: "Curtains", href: "/curtains" },
          { label: "Blackout Curtains" },
        ]}
      />

      {/* 2. Key Features */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Moon className="w-3.5 h-3.5" />
            <span>Superior Sleep & Privacy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Engineered for Dubai’s Climate & Light Conditions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Every blackout drape is custom laser-measured and crafted in our Dubai workshop for zero light leak at the edges.
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

        <div className="mt-14 text-center">
          <Link
            href="/book-a-free-appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
          >
            <span>Request Free Blackout Swatches at Home</span>
          </Link>
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Ready to Upgrade to 100% Blackout Drapes?"
        subtitle="Book Free Laser Measurement & Fabric Van Visit Across UAE"
      />
    </div>
  );
}
