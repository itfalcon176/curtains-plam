"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Scissors,
  Moon,
  Sun,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Maximize2,
} from "lucide-react";

export default function CurtainsPage() {
  const curtainCategories = [
    {
      title: "Blackout Curtains",
      slug: "/blackout-curtains",
      badge: "Best Seller for Dubai Bedrooms",
      description: "100% light-blocking fabrics with thermal acoustic lining to shield against intense UAE summer sunlight and city glare.",
      features: ["100% Total Room Darkening", "Thermal Heat Insulation", "Sound Absorption", "Custom Pleats"],
    },
    {
      title: "Sheer & Voile Curtains",
      slug: "/sheers-curtains",
      badge: "Luminous Daytime Elegance",
      description: "Softly diffuse natural sunlight into airy glow while preserving daylight privacy across open-concept Dubai living rooms.",
      features: ["Daylight Diffusion", "Soft Linen & Silk Voile", "UV Glare Reduction", "Floor-to-Ceiling Drop"],
    },
    {
      title: "Motorized Smart Curtains",
      slug: "/motorised-curtains",
      badge: "Voice & App Automation",
      description: "Whisper-quiet Somfy and Tuya motorized tracks compatible with Alexa, Apple HomeKit, Google Assistant, and Crestron.",
      features: ["Whisper-Quiet Somfy Motors", "Smartphone App Scheduling", "Sun Sensor Integration", "5-Year Guarantee"],
    },
    {
      title: "Wave Pleat Curtains",
      slug: "/wave-curtain",
      badge: "Contemporary Modern Fold",
      description: "Smooth continuous wave ripples that hang with sleek architectural precision for modern villas and penthouses.",
      features: ["Continuous Fluid S-Fold", "Slim Track Stacking", "Minimal Modern Look", "Perfect Ceiling Recesses"],
    },
    {
      title: "Pinch Pleat Tailored Drapes",
      slug: "/curtains",
      badge: "Classic Bespoke Tailoring",
      description: "Handcrafted double and triple pinch pleats providing timeless luxury fullness and structured drapery volume.",
      features: ["Double & Triple Gather", "Rich Velvet & Jacquard", "Handcrafted in Dubai", "Classic Luxury Drape"],
    },
    {
      title: "Roman Drapery Shades",
      slug: "/roman-curtains",
      badge: "Tailored Horizontal Folds",
      description: "Combines the warmth of luxury fabric drapery with the clean, structured compactness of a window shade.",
      features: ["Clean Horizontal Cascade", "Blackout & Dimout Linings", "Cordless Safety Controls", "Space-Saving Profile"],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Bespoke Luxury Curtains in Dubai"
        subtitle="Handcrafted Window Couture Tailored to Your Architecture"
        badge="Easy Blinds & Curtains • Curtains Collection"
        description="Experience the finest collection of luxury drapes, blackout curtains, luminous sheers, and smart motorized tracks in Dubai. Every curtain is precision-tailored in our UAE workshop with over 1,000 premium international fabrics."
        breadcrumbs={[{ label: "Curtains" }]}
      />

      {/* 2. Collection Showcase Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5" />
            <span>Curated Drapery Types</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Explore Dubai’s Most Sought-After Styles
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From modern wave tracks in Palm Jumeirah villas to acoustic blackout drapes in Downtown penthouses, discover the perfect heading and fabric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curtainCategories.map((item, index) => (
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

      {/* 3. 3-Step In-Home Measurement Process */}
      <section className="py-16 bg-[#F3EFEA]/80 border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl text-stone-950">How It Works in Dubai</h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">Zero measurement hassle, zero guesswork.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-[#E6DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A880] text-stone-950 font-bold flex items-center justify-center text-sm font-mono">1</div>
              <h4 className="font-bold text-stone-900 text-base">Book Free Van Visit</h4>
              <p className="text-xs text-stone-600 leading-relaxed">Schedule an in-home appointment online or via WhatsApp. Our design van arrives with 1,000+ fabrics.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E6DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A880] text-stone-950 font-bold flex items-center justify-center text-sm font-mono">2</div>
              <h4 className="font-bold text-stone-900 text-base">Laser Measurement & Quote</h4>
              <p className="text-xs text-stone-600 leading-relaxed">Certified specialists laser-measure each window and provide an instant, all-inclusive upfront quote.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E6DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A880] text-stone-950 font-bold flex items-center justify-center text-sm font-mono">3</div>
              <h4 className="font-bold text-stone-900 text-base">24–48h Custom Installation</h4>
              <p className="text-xs text-stone-600 leading-relaxed">Our in-house master tailors craft your drapery and install it with precision steam ironing included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Ready for Bespoke Drapery in Your Dubai Home?"
        subtitle="Book a Free In-Home Laser Measurement & Fabric Consultation Today"
      />
    </div>
  );
}
