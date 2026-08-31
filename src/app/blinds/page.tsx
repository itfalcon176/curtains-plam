"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Scissors,
  Ruler,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function BlindsPage() {
  const blindsRange = [
    {
      title: "Venetian Blinds",
      image: "/card-wooden-blinds.jpg",
      href: "/wooden-venetian-blinds",
      desc: "Crafted from wood, aluminum, or fauxwood slats, these offer precise control over light and privacy with adjustable tilt.",
    },
    {
      title: "Roller Blinds",
      image: "/card-roller-blinds.jpg",
      href: "/roller-blinds",
      desc: "Simple and sleek, roller blinds provide clean lines and are available in blackout or light-filtering fabrics.",
    },
    {
      title: "Roman Blinds",
      image: "/card-wave-curtains.jpg",
      href: "/blinds",
      desc: "Combine the beauty of fabric drapes with the functionality of a blind; when raised, they fold into an elegant pleat.",
    },
    {
      title: "Vertical Blinds",
      image: "/card-zebra-blinds.jpg",
      href: "/blinds",
      desc: "Ideal for patio doors and large windows, vertical blinds are excellent for controlling light and adding height to rooms.",
    },
    {
      title: "Blackout Blinds",
      image: "/card-blackout-curtains.jpg",
      href: "/blinds",
      desc: "Perfect for bedrooms, media rooms, and any space where you need to eliminate natural light completely.",
    },
    {
      title: "Motorized Blinds",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/motorised-curtains",
      desc: "Experience ultimate convenience with motorized blinds that can be adjusted with the simple touch of a button, perfect for hard-to-reach windows.",
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
      title: "Curtain Alteration",
      icon: Layers,
    },
    {
      title: "Repair & Maintenance",
      icon: Wrench,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Minimal Elegant Hero Title & Intro Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-4 flex-wrap">
          <Link href="/" className="hover:text-[#9E7A4A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#9E7A4A] font-medium">Blinds</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            Blinds
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              At Easy Blinds &amp; Curtains, explore our extensive range of window blinds designed to fit every interior style and light control preference.
            </p>
            <p>
              Enhance the functionality and style of your home with our versatile range of blinds at Easy Blinds and Curtains. Designed to meet everyday practical needs, our blinds offer effortless light control, privacy, and thermal insulation in any room. Whether for a modern living room or a serene bedroom, you'll find the perfect blinds for your style and budget.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Discover Our Extensive Range of Blinds Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            Discover Our Extensive Range of Blinds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blindsRange.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center space-y-4"
            >
              {/* Card Image */}
              <Link
                href={item.href}
                className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E6DFD5] shadow-xs group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Title & Description */}
              <div className="space-y-2 max-w-sm px-2">
                <Link href={item.href}>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-950 group-hover:text-[#9E7A4A] transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Our Blinds? Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                Why Choose Our Blinds?
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 text-left sm:text-center leading-relaxed">
                <p>
                  <strong className="text-stone-900">Customization:</strong> We tailor every blind to fit your exact window dimensions for a flawless look and maximum coverage.
                </p>
                <p>
                  <strong className="text-stone-900">Quality Materials:</strong> Built to withstand daily use, our blinds are made from durable, low-maintenance materials that last.
                </p>
                <p>
                  <strong className="text-stone-900">Expert Installation:</strong> Our professional team ensures your blinds are perfectly measured and installed for optimal performance and aesthetics.
                </p>
                <p>
                  <strong className="text-stone-900">Energy Efficiency:</strong> Many of our blinds provide additional insulation, helping to reduce energy costs by keeping your home cooler in summer and warmer in winter.
                </p>
              </div>
            </div>

            {/* 4 Feature Service Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#F0EBE1]">
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
          </div>
        </div>
      </section>

      {/* 4. Your Ideal Blinds Solution */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Your Ideal Blinds Solution
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds and Curtains, we believe that choosing the right blinds should be a smooth, enjoyable process. Our team is committed to helping you find window coverings that match your taste, functional requirements, and budget—all delivered with exceptional customer service.
        </p>
      </section>

      {/* 5. Get Started Today */}
      <section className="pb-16 max-w-4xl mx-auto px-4 text-center space-y-3 border-b border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Get Started Today
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Explore our full range of blinds or contact us to schedule a free consultation. Our experts are ready to help you discover window blinds that align with your style and functional requirements. Call us or book a free appointment today.
        </p>
      </section>

      {/* 6. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE same day appointment"
        subtitle="Our mobile design van visits your Dubai villa or residence with 1,000+ luxury fabric & blind samples & free laser measuring."
        defaultType="Blinds"
      />

      {/* 7. What our customers say (Google Reviews Rating) */}
      <CustomerReviews />
    </div>
  );
}
