"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scissors,
  Ruler,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function OurWorksPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Palm Jebel Ali Beachfront Villa",
      location: "Palm Jebel Ali, Dubai",
      image: "/curtains-wave-palm-jebel-ali.jpg",
      category: "curtains",
      treatment: "Floor-to-Ceiling Wave Pleat Sheers & Somfy Motorized Blackouts",
      tag: "Villas",
      highlights: "Triple ceiling recess track, whisper quiet automation, 100% UV solar reduction.",
    },
    {
      title: "Palm Jumeirah Signature Villa",
      location: "Palm Jumeirah, Dubai",
      image: "/card-wave-curtains.jpg",
      category: "motorized",
      treatment: "Smart Somfy Double Wave Tracks & Linen Voiles",
      tag: "Luxury Drapes",
      highlights: "Integration with Apple HomeKit and custom ambient LED pelmet lighting.",
    },
    {
      title: "Downtown Dubai Penthouse",
      location: "Downtown Dubai, UAE",
      image: "/card-zebra-blinds.jpg",
      category: "blinds",
      treatment: "Dual Zebra Cassette Shades & Motorized Roller Screens",
      tag: "Penthouses",
      highlights: "Zero light glare on panoramic glass overlooking the Burj Khalifa.",
    },
    {
      title: "Dubai Hills Estate Mansion",
      location: "Dubai Hills Estate",
      image: "/card-blackout-curtains.jpg",
      category: "curtains",
      treatment: "Triple Pinch Pleat Belgian Linen & Acoustic Blackouts",
      tag: "Custom Tailoring",
      highlights: "6-meter drop double height living room with motorized heavy duty track.",
    },
    {
      title: "Emirates Hills Residence",
      location: "Emirates Hills, Dubai",
      image: "/card-wooden-blinds.jpg",
      category: "blinds",
      treatment: "50mm Basswood Venetian Blinds with Custom Tape Trim",
      tag: "Wooden Venetian",
      highlights: "Warm walnut hardwood finish perfectly matched to bespoke parquet floors.",
    },
    {
      title: "DIFC Executive Headquarters",
      location: "DIFC, Dubai",
      image: "/card-commercial-office.jpg",
      category: "commercial",
      treatment: "Commercial Fire-Rated Solar Screen Roller Blinds",
      tag: "Corporate",
      highlights: "Dubai Civil Defense certified flame retardant solar screens for 40 windows.",
    },
  ];

  const featureServices = [
    {
      title: "Custom Tailoring",
      icon: Scissors,
    },
    {
      title: "Measuring & Fitting",
      icon: Ruler,
    },
    {
      title: "Smart Motorization",
      icon: Cpu,
    },
    {
      title: "5-Year Guarantee",
      icon: ShieldCheck,
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero */}
      <PageHero
        title="Our Works & Villa Installations"
        subtitle="Explore Real Window Transformations Across Dubai & the UAE"
        badge="Easy Blinds & Curtains • Project Portfolio"
        description="Browse our portfolio of completed luxury villa, penthouse, and corporate window treatment installations across Palm Jebel Ali, Palm Jumeirah, Dubai Hills, and Downtown Dubai."
        breadcrumbs={[{ label: "Our Works" }]}
      />

      {/* 2. Portfolio Showcase & Filters */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        {/* Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 flex-wrap select-none">
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between space-y-4"
              >
                {/* Project Image Card */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E6DFD5] shadow-xs group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-[#C5A880] text-[11px] font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 px-1 text-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-950 group-hover:text-[#9E7A4A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E7A4A] font-medium">
                    {item.treatment}
                  </p>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    {item.highlights}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Feature Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-16 border-t border-[#F0EBE1]">
          {featureServices.map((feat, i) => {
            const IconComp = feat.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="w-16 h-16 rounded-full border border-[#C5A880]/60 bg-[#FAF8F5] text-[#9E7A4A] flex items-center justify-center shadow-2xs">
                  <IconComp className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-stone-900">
                  {feat.title}
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Window Transformations Tailored to Your Dubai Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3 border-t border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Bespoke Drapery Craftsmanship in Dubai &amp; Palm Jebel Ali
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Every project featured in our portfolio represents our commitment to precision laser measurement, hand-sewn pleats, Somfy motor integration, and flawless white-glove installation across the United Arab Emirates.
        </p>
      </section>

      {/* 4. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE same day appointment"
        subtitle="Our mobile design van visits your Palm Jebel Ali villa or Dubai residence with 1,000+ luxury fabrics & free laser measuring."
        defaultType="Curtains"
      />

      {/* 5. Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
}

