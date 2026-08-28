"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Sofa,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Scissors,
  ArrowRight,
} from "lucide-react";

export default function FurniturePage() {
  const furnitureServices = [
    {
      title: "Bespoke Sofas & Sectionals",
      badge: "Handcrafted in UAE",
      desc: "Custom-built luxury sofas, curved sectionals, and armchairs tailored to exact dimensions with high-resilience foam and stain-resistant velvet or linen.",
    },
    {
      title: "Custom Upholstered Headboards",
      badge: "Bedroom Luxury",
      desc: "Floor-to-ceiling wall-mounted upholstered panels and bespoke bed frames matching your bedroom curtains and blackout drapery.",
    },
    {
      title: "Luxury Furniture Reupholstery",
      badge: "Restoration & Re-styling",
      desc: "Breathe new life into high-end dining chairs, vintage armchairs, and outdoor sets with premium designer fabrics and deep cushion refilling.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Custom Furniture & Upholstery in Dubai"
        subtitle="Handcrafted Sofas, Fluted Headboards & Bespoke Living Solutions"
        badge="Easy Blinds & Curtains • Furniture Atelier"
        description="Complete your interior aesthetic with handcrafted furniture made in Dubai. Coordinate your sofa fabrics, custom cushions, and upholstered wall panels with your bespoke window drapery."
        breadcrumbs={[{ label: "Furniture" }]}
      />

      {/* 2. Services Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Sofa className="w-3.5 h-3.5" />
            <span>Handcrafted Upholstery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Bespoke Furniture Tailoring in Dubai
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Choose from thousands of stain-resistant velvets, boucle, chenille, and outdoor fabrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {furnitureServices.map((item, index) => (
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
                  className="w-full py-3 rounded-full bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-sm"
                >
                  Consult Upholstery Specialist
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Want Custom Furniture Matched to Your Drapery?"
        subtitle="Book Free Consultation with Our Master Upholsterers in Dubai"
      />
    </div>
  );
}
