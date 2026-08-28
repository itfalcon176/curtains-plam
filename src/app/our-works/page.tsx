"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Sliders,
  Filter,
} from "lucide-react";

export default function OurWorksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Palm Jebel Ali Beachfront Villa",
      location: "Palm Jebel Ali, Dubai",
      category: "curtains",
      treatment: "Floor-to-Ceiling Wave Pleat Sheers & Somfy Motorized Blackouts",
      tag: "Villas",
      highlights: "Triple ceiling recess track, whisper quiet automation, 100% UV solar reduction.",
    },
    {
      title: "Palm Jumeirah Signature Villa",
      location: "Palm Jumeirah, Dubai",
      category: "motorized",
      treatment: "Smart Somfy Double Wave Tracks & Linen Voiles",
      tag: "Luxury Drapes",
      highlights: "Integration with Apple HomeKit and custom ambient LED pelmet lighting.",
    },
    {
      title: "Downtown Dubai Penthouse",
      location: "Downtown Dubai, UAE",
      category: "blinds",
      treatment: "Dual Zebra Cassette Shades & Motorized Roller Screens",
      tag: "Penthouses",
      highlights: "Zero light glare on panoramic glass overlooking the Burj Khalifa.",
    },
    {
      title: "Dubai Hills Estate Mansion",
      location: "Dubai Hills Estate",
      category: "curtains",
      treatment: "Triple Pinch Pleat Belgian Linen & Acoustic Blackouts",
      tag: "Custom Tailoring",
      highlights: "6-meter drop double height living room with motorized heavy duty track.",
    },
    {
      title: "Emirates Hills Residence",
      location: "Emirates Hills, Dubai",
      category: "blinds",
      treatment: "50mm Basswood Venetian Blinds with Custom Tape Trim",
      tag: "Wooden Venetian",
      highlights: "Warm walnut hardwood finish perfectly matched to bespoke parquet floors.",
    },
    {
      title: "DIFC Executive Headquarters",
      location: "DIFC, Dubai",
      category: "commercial",
      treatment: "Commercial Fire-Rated Solar Screen Roller Blinds",
      tag: "Corporate",
      highlights: "Dubai Civil Defense certified flame retardant solar screens for 40 windows.",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Our Works & Villa Installations"
        subtitle="Explore Real Window Transformations Across Dubai & the UAE"
        badge="Easy Blinds & Curtains • Project Portfolio"
        description="Browse our portfolio of completed luxury villa, penthouse, and corporate window treatment installations across Palm Jebel Ali, Palm Jumeirah, Dubai Hills, and Downtown Dubai."
        breadcrumbs={[{ label: "Our Works" }]}
      />

      {/* 2. Portfolio Showcase & Filters */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 flex-wrap select-none">
          {[
            { id: "all", label: "All Projects" },
            { id: "curtains", label: "Luxury Curtains" },
            { id: "blinds", label: "Custom Blinds" },
            { id: "motorized", label: "Smart Motorized" },
            { id: "commercial", label: "Commercial" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-stone-950 text-white shadow-md scale-105"
                  : "bg-white text-stone-700 border border-[#E6DFD5] hover:border-[#C5A880]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEAE1] text-[#9E7A4A] text-[11px] font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.location}</span>
                    </span>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]/60 text-xs text-stone-700 font-semibold space-y-1">
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Installed Treatment:</span>
                    <span>{item.treatment}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.highlights}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EBE1] flex items-center justify-between">
                  <Link
                    href="/book-a-free-appointment"
                    className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 hover:text-[#C5A880] uppercase tracking-wider transition-colors"
                  >
                    <span>Request Similar Fit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Want Similar Luxury Curtains for Your Villa?"
        subtitle="Book Our Mobile Van Loaded With 1,000+ Swatches for Free In-Home Consultation"
      />
    </div>
  );
}
