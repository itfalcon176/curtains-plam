"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Building,
  HeartHandshake,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function AboutUsPage() {
  const stats = [
    { value: "10,000+", label: "Villas & Homes Fitted Across UAE" },
    { value: "100%", label: "Bespoke Custom Laser Measurements" },
    { value: "1,000+", label: "Luxury Fabric & Swatch Varieties" },
    { value: "24–48h", label: "Express Turnaround Guarantee" },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="About Easy Blinds and Curtains"
        subtitle="Over a Decade of Window Couture & Drapery Excellence in Dubai"
        badge="Easy Blinds & Curtains • Our Heritage"
        description="Crafting bespoke drapery, motorized smart blinds, and high-performance window coverings for luxury residences, penthouses, and premier commercial spaces throughout Dubai and the UAE."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 2. Brand Story Section */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Dubai’s Trusted Drapery Atelier</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal leading-tight">
              Where Precision Engineering Meets Timeless Textile Luxury
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At **Easy Blinds and Curtains**, we believe every window tells a story of light, comfort, and architectural elegance. Based in Dubai, our in-house master artisans and certified installation engineers have spent over 10 years perfecting custom window couture tailored to the unique sunlight and heat requirements of the United Arab Emirates.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We eliminate the stress of traditional curtains shopping. With our **Complimentary 24-Hour Mobile Van Service**, our design consultants bring more than 1,000 European velvet, Belgian linen, sheer, and blackout fabrics straight to your living room. We laser-measure your windows for a guaranteed 100% millimeter-flawless fit.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Direct Factory Manufacturing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Certified Somfy Motorization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Steam Ironed on Installation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>5-Year Extended Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Showcase */}
          <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-[#252629] space-y-8 shadow-2xl">
            <h3 className="font-serif text-2xl font-normal text-[#E6D7C3]">
              Trusted by Dubai Villa Owners & Interior Designers
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-bold">{stat.value}</div>
                  <div className="text-xs text-stone-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-between gap-4">
              <div className="text-xs text-stone-200">
                <span className="font-bold text-white block">Visit Our Dubai Showroom</span>
                <span>Barsha Heights, Dubai, UAE (Open Mon–Sun 9AM–9PM)</span>
              </div>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-[#C5A880] text-stone-950 text-xs font-bold whitespace-nowrap hover:bg-[#B4966E] transition-colors"
              >
                View Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner />
    </div>
  );
}
