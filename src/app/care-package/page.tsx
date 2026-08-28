"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  Waves,
  Cpu,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function CarePackagePage() {
  const packages = [
    {
      title: "Essential Refresh & Steam",
      price: "From AED 299",
      badge: "Popular Quick Maintenance",
      description: "In-situ high-temperature steam sanitization and pleat rejuvenation to eliminate dust mites, allergens, and wrinkles.",
      features: [
        "In-situ High Temp Steam Sanitization",
        "Dust & Allergen Deep Extraction",
        "Pleat Re-training & Alignment",
        "Track & Pulley Lubrication",
      ],
    },
    {
      title: "Deep Ultrasonic Dry Clean",
      price: "From AED 599",
      badge: "Comprehensive Care",
      description: "Complete unhooking, specialized delicate solvent dry-cleaning, stain treatment, and same-week re-installation with steam pressing.",
      features: [
        "Professional Unhook & Take-down",
        "Fabric-Specific Eco Dry Cleaning",
        "Spot & Sun-Stain Treatment",
        "Re-hanging & Precision Steam Finish",
      ],
    },
    {
      title: "Smart Motor Track Re-Calibration",
      price: "From AED 450",
      badge: "Automation Health Check",
      description: "Full diagnostic inspection of motorized tracks, Somfy motor limits, belt tension, remote pairing, and smart home hub syncing.",
      features: [
        "Somfy / Tuya Motor Diagnostic",
        "Track Belt & Carrier Tensioning",
        "Limit Switch Re-programming",
        "Smart App & Remote Re-pairing",
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Curtains & Blinds Care Packages in Dubai"
        subtitle="Professional Cleaning, Steam Sanitization & Motor Track Maintenance"
        badge="Easy Blinds & Curtains • Care & Maintenance"
        description="Protect your luxury drapery investment. Our specialized technicians provide on-site steam sanitation, deep dry-cleaning, stain extraction, and smart track servicing across Dubai."
        breadcrumbs={[{ label: "Care Package" }]}
      />

      {/* 2. Packages Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Preserve Your Drapery Beauty</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Specialized Care Plans for Dubai Homes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Dubai’s fine dust and desert climate require periodic care. Keep your fabrics fresh, vibrant, and smoothly motorized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
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
                  {pkg.badge}
                </span>

                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {pkg.title}
                </h3>

                <div className="text-xl font-bold text-[#9E7A4A] font-mono">
                  {pkg.price}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="pt-2 space-y-2">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#F0EBE1]">
                <Link
                  href="/book-a-free-appointment"
                  className="w-full py-3 rounded-full bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-sm"
                >
                  Book Care Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Need Your Curtains Cleaned or Serviced?"
        subtitle="Book a Certified Technician Visit Anywhere in Dubai"
      />
    </div>
  );
}
