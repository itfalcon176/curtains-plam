"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Building2,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Briefcase,
  Hospital,
  GraduationCap,
  Hotel,
  Landmark,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

export default function CommercialPage() {
  const sectors = [
    {
      title: "Executive Towers & Corporate Offices",
      desc: "Solar heat-reflective sunscreen rollers and acoustic drapery designed to eliminate monitor glare and lower cooling costs.",
      badge: "High Durability",
    },
    {
      title: "Hotels & Luxury Hospitality Suites",
      desc: "5-star luxury double-height motorized drapery, blackout linings, and sheer waves tailored to bespoke interior design standards.",
      badge: "5-Star Standard",
    },
    {
      title: "Hospitals & Medical Centers",
      desc: "Antimicrobial, hygiene-certified, flame-retardant cubicle curtain tracks and wipeable medical blinds conforming to Dubai Health Authority standards.",
      badge: "DHA Certified",
    },
    {
      title: "Schools & Educational Auditoriums",
      desc: "Child-safe, heavy-duty cordless blackout roller blinds and stage acoustic drapery engineered for rigorous daily school use.",
      badge: "Child-Safe",
    },
    {
      title: "Government & Sovereign Projects",
      desc: "Full Dubai Civil Defense certified flame-retardant installations with dedicated project managers and compliant trade invoicing.",
      badge: "Civil Defense Compliant",
    },
    {
      title: "Gyms, Spas & Wellness Resorts",
      desc: "Moisture-resistant, wipeable blinds and heavy acoustic room partition curtains providing privacy and sound dampening.",
      badge: "Moisture Proof",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Commercial Blinds & Curtains in Dubai"
        subtitle="Turnkey Contract Window Coverings for Offices, Hotels & Institutions"
        badge="Easy Blinds & Curtains • Commercial Division"
        description="Providing turnkey commercial window treatment solutions across the UAE. Certified flame-retardant fabrics, Somfy automated building controls, and dedicated trade account management."
        breadcrumbs={[{ label: "Commercial" }]}
      />

      {/* 2. Commercial Sectors */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>UAE Corporate Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Engineered for Commercial Durability & Safety
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From single floor fitouts in DIFC to full hotel towers in Dubai Marina, we deliver on time and strictly on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((item, index) => (
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
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EBE1]">
                <Link
                  href="/book-a-free-appointment"
                  className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 hover:text-[#C5A880] uppercase tracking-wider transition-colors"
                >
                  <span>Request Trade Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Have a Commercial Fitout or Tender in Dubai?"
        subtitle="Speak with Our Dedicated Commercial Project Director for Trade Pricing"
      />
    </div>
  );
}
