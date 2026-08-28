"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Ruler,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function InHomeMeasuringPage() {
  const benefits = [
    {
      title: "1,000+ Fabric Swatches at Your Doorstep",
      desc: "Our customized mobile design van brings luxurious velvets, pure linens, organic cottons, blackout linings, and sheer voiles directly to your living room lighting.",
    },
    {
      title: "Laser Precision Measurement",
      desc: "Certified technicians use advanced laser distance meters to measure height, ceiling recesses, and wall clearances to exact millimeter accuracy.",
    },
    {
      title: "100% Guaranteed Perfect Fit",
      desc: "We take full responsibility for all measurements. If anything does not fit with absolute perfection, we adjust or remake it completely free of charge.",
    },
    {
      title: "Instant On-the-Spot Transparent Pricing",
      desc: "No hidden extras. You receive an itemized quote including fabrics, tracks, tailoring, motorization, steam ironing, and installation.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Complimentary In-Home Laser Measuring"
        subtitle="Zero Risk, Zero Guesswork • Mobile Fabric Van Service Across UAE"
        badge="Easy Blinds & Curtains • Free In-Home Service"
        description="Book our mobile showroom van to your villa, apartment, or office anywhere in Dubai. Explore luxury fabrics in your home’s natural daylight while certified technicians laser-measure your windows."
        breadcrumbs={[{ label: "In-Home Measuring" }]}
      />

      {/* 2. Benefits Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5" />
            <span>Why Book In-Home Measurement?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            The Ultimate Luxury Window Shopping Experience
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Never guess how a fabric looks under artificial showroom lighting. See textures, colors, and pleats against your own furniture and flooring.
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
            <Calendar className="w-4 h-4" />
            <span>Schedule Free Van Visit Now</span>
          </Link>
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Schedule Your Free In-Home Consultation Today"
        subtitle="Available 7 Days a Week Across All Dubai & UAE Communities"
      />
    </div>
  );
}
