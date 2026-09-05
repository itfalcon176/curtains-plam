"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Tag,
  Percent,
} from "lucide-react";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

export interface CategoryCardItem {
  id: string;
  title: string;
  badge: string;
  discount: string;
  desc: string;
  image: string;
  href: string;
  tagline: string;
}

export const categoryCardsData: CategoryCardItem[] = [
  {
    id: "curtains",
    title: "Curtains",
    badge: "Wave & Ripplefold",
    discount: "Up to 25% Off",
    desc: "Handcrafted wave pleats and ripplefold drapes tailored from 1,000+ luxury European fabrics with express 48-hour fitting.",
    image: "/card-wave-curtains.jpg",
    href: "/curtains",
    tagline: "Wave Pleats • Triple Pinch • Eyelets",
  },
  {
    id: "blinds",
    title: "Blinds",
    badge: "Made-To-Measure",
    discount: "Up to 25% Off",
    desc: "Made-to-measure window blinds designed for Dubai villas and apartments, available in blackout and sun-filtering finishes.",
    image: "/card-motorised-blinds.jpg",
    href: "/blinds",
    tagline: "Roller • Zebra • Roman • Vertical",
  },
  {
    id: "blackout-curtains",
    title: "Blackout Curtains",
    badge: "100% Light Blocking",
    discount: "Up to 25% Off",
    desc: "Engineered for Dubai's intense sunny climate. Triple-weave thermal blackout ensuring 100% darkness and heat reduction.",
    image: "/card-blackout-curtains.jpg",
    href: "/blackout-curtains",
    tagline: "Thermal Insulated • Room Darkening",
  },
  {
    id: "sheer-curtains",
    title: "Sheer Curtains",
    badge: "Airy Voiles",
    discount: "Up to 25% Off",
    desc: "Airy European voiles and organic linen sheers that soften daylight and provide daytime privacy while framing views.",
    image: "/card-sheer-curtains.jpg",
    href: "/sheers-curtains",
    tagline: "European Voiles • Organic Linens",
  },
  {
    id: "roller-blinds",
    title: "Roller Blinds",
    badge: "Sunscreen & Blockout",
    discount: "Up to 25% Off",
    desc: "Modern minimalist sunscreen and blackout roller shades, engineered for effortless glare control and clean luxury.",
    image: "/card-roller-blinds.jpg",
    href: "/roller-blinds",
    tagline: "UV Sunscreen • Dual Day/Night",
  },
  {
    id: "zebra-blinds",
    title: "Zebra Blinds",
    badge: "Day & Night Vision",
    discount: "Up to 25% Off",
    desc: "Dual-layer alternating sheer and solid fabric stripes for precision daylight and privacy control with a gentle pull.",
    image: "/card-zebra-blinds.jpg",
    href: "/zebra-blinds",
    tagline: "Dual Striped Precision Shades",
  },
  {
    id: "motorised-blinds",
    title: "Motorised Blinds",
    badge: "Smart Somfy & Alexa",
    discount: "Up to 25% Off",
    desc: "Whisper-quiet motorized tracks and rechargeable battery systems. Controlled by remote, smartphone, or Alexa voice.",
    image: "/blinds-motorized-palm-jebel-ali.jpg",
    href: "/motorised-curtains",
    tagline: "Somfy Certified • Smart Home",
  },
  {
    id: "wooden-venetian-blinds",
    title: "Wooden Venetian Blinds",
    badge: "Natural Basswood",
    discount: "Up to 25% Off",
    desc: "Crafted from authentic hardwood and durable fauxwood slats with decorative luxury tapes for timeless architectural warmth.",
    image: "/card-wooden-blinds.jpg",
    href: "/wooden-venetian-blinds",
    tagline: "50mm Basswood • Custom Tapes",
  },
];

export const CategoryShopCards: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#FAF8F5] select-none border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] border border-[#C5A880]/30 whitespace-nowrap max-w-full">
              <Crown className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Easy Blinds &amp; Curtains • Dubai Collections</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-950 font-normal uppercase tracking-wide leading-tight">
              Buy Curtains in Dubai — Free 24-Hour Installation
            </h2>

            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-px w-12 bg-[#C5A880]" />
              <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.25em] text-stone-600">
                Shop By Category
              </span>
              <div className="h-px w-12 bg-[#C5A880]" />
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed pt-1">
              Discover Dubai’s most exquisite custom-made window treatments. Handcrafted with precision, measured with laser accuracy, and fitted within 24–48 hours across Palm Jebel Ali &amp; all UAE Emirates.
            </p>
          </div>

          {/* 8 Ultra-Luxury Cohesive Cards Grid (4 Columns Desktop, 2 Tablet, 1 Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
            {categoryCardsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E6DFD5] shadow-xs hover:shadow-2xl hover:border-[#C5A880] transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* 1. Card Image Area with Zoom & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wide">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* 2. Cohesive Luxury Card Body (Ultra-Premium Warm Minimalist Touch) */}
                <div className="p-6 text-center flex flex-col justify-between flex-1 bg-white group-hover:bg-[#FAF8F5] transition-colors duration-300 border-t border-[#F0EBE1]">
                  <div className="space-y-3">
                    {/* Category Title in Baskervville Serif */}
                    <h3 className="font-serif text-2xl font-bold text-stone-950 tracking-wide leading-tight group-hover:text-[#9E7A4A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Refined Gold Discount Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider border border-[#C5A880]/30 shadow-2xs">
                      <Tag className="w-3 h-3 text-[#9E7A4A]" />
                      <span>{item.discount}</span>
                    </div>

                    {/* Short Descriptive Text */}
                    <p className="text-xs text-stone-600 font-normal leading-relaxed pt-1 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Modern Luxury Pill Action Button */}
                  <div className="pt-6 mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 bg-[#FAF8F5] group-hover:bg-stone-950 text-stone-900 group-hover:text-white border border-[#E6DFD5] group-hover:border-stone-950 shadow-xs group-hover:shadow-md"
                    >
                      <span>Shop Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A880]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Free Consultation Callout Bar */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-stone-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15 shadow-xl">
            <div className="space-y-1.5 text-center md:text-left w-full md:w-auto">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#C5A880] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Complimentary 24h In-Home Measurement</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                Not sure which style fits your space?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                Our Mobile Showroom Van brings 1,000+ fabric swatches, smart motor demos, and laser measurement directly to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#A8875B] hover:from-[#D4B992] hover:to-[#B4966E] text-stone-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer hover:scale-102 inline-flex items-center justify-center text-center"
              >
                Book Free Consultation
              </button>

              <a
                href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20view%20fabric%20swatches%20at%20my%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all inline-flex items-center justify-center gap-2 text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
