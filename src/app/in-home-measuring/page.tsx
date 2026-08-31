"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import {
  Ruler,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  Scissors,
  Layers,
  Wrench,
} from "lucide-react";

export default function InHomeMeasuringPage() {
  const benefits = [
    {
      title: "1,000+ Fabric Swatches at Your Doorstep",
      image: "/card-about-van.jpg",
      href: "/book-a-free-appointment",
      desc: "Our mobile design van brings luxurious velvets, pure linens, organic cottons, blackout linings, and sheer voiles directly to your living room.",
    },
    {
      title: "Laser Precision Measurement",
      image: "/card-about-craftsmanship.jpg",
      href: "/book-a-free-appointment",
      desc: "Certified technicians use advanced laser distance meters to measure height, ceiling recesses, and wall clearances to exact millimeter accuracy.",
    },
    {
      title: "100% Guaranteed Perfect Fit",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/book-a-free-appointment",
      desc: "We take full responsibility for all measurements. If anything does not fit with absolute perfection, we adjust or remake it completely free of charge.",
    },
    {
      title: "Instant On-Site Transparent Pricing",
      image: "/card-fabric-swatches.jpg",
      href: "/book-a-free-appointment",
      desc: "No hidden extras. You receive an itemized quote including fabrics, tracks, tailoring, motorization, steam ironing, and installation.",
    },
    {
      title: "Natural Daylight Fabric Matching",
      image: "/curtains-wave-palm-jebel-ali.jpg",
      href: "/book-a-free-appointment",
      desc: "Compare fabric textures and colors against your actual furniture, flooring, and natural window daylight instead of artificial showroom lights.",
    },
    {
      title: "Certified Smart Motor Consultation",
      image: "/card-commercial-office.jpg",
      href: "/motorised-curtains",
      desc: "Test live Somfy, Tuya, and Zigbee motorized rails and consult on smart home hub integration for your home automation setup.",
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
      title: "Subfloor & Tracks",
      icon: Layers,
    },
    {
      title: "Repair & Maintenance",
      icon: Wrench,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero */}
      <PageHero
        title="Complimentary In-Home Laser Measuring"
        subtitle="Zero Risk, Zero Guesswork • Mobile Fabric Van Service Across UAE"
        badge="Easy Blinds & Curtains • Free In-Home Service"
        description="Book our mobile showroom van to your villa, apartment, or office anywhere in Dubai. Explore luxury fabrics in your home’s natural daylight while certified technicians laser-measure your windows."
        breadcrumbs={[{ label: "In-Home Measuring" }]}
      />

      {/* 2. Benefits Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            The Ultimate Luxury Window Shopping Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((item, idx) => (
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

      {/* 3. Laser Measuring Tailored to Your Dubai & Palm Jebel Ali Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3 border-t border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Laser Measurement Tailored to Your Dubai &amp; Palm Jebel Ali Villa
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Our specialized mobile design van visits your property anywhere in Palm Jebel Ali, Palm Jumeirah, Dubai Marina, and greater Dubai. Experience zero-risk custom window shopping in the comfort of your living room.
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

