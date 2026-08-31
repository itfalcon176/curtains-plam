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
  Sparkles,
} from "lucide-react";

import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function CurtainsPage() {
  const curtainsRange = [
    {
      title: "Blackout Curtains",
      image: "/card-blackout-curtains.jpg",
      href: "/blackout-curtains",
      desc: "Perfect for bedrooms and media rooms, these curtains block out maximum light while providing privacy and sound insulation for a peaceful sleep experience.",
    },
    {
      title: "Roman Curtains",
      image: "/card-wave-curtains.jpg",
      href: "/curtains",
      desc: "Known for their clean, modern appearance, Roman curtains fold up into neat pleats when raised, offering both functional light control and contemporary style.",
    },
    {
      title: "Sheer Curtains",
      image: "/card-sheer-curtains.jpg",
      href: "/sheers-curtains",
      desc: "Ideal for living rooms and spaces where natural light is welcomed, sheer curtains offer a delicate touch and soften intense sunlight.",
    },
    {
      title: "Panel Curtains",
      image: "/card-roller-blinds.jpg",
      href: "/curtains",
      desc: "Great for large windows and sliding doors, panel curtains slide smoothly on a track to cover wide spaces.",
    },
    {
      title: "Thermal Curtains",
      image: "/card-fabric-swatches.jpg",
      href: "/curtains",
      desc: "These heavy-duty curtains provide thermal insulation, helping to keep your home cool in summer and warm in winter.",
    },
    {
      title: "Motorized Curtains",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/motorised-curtains",
      desc: "Combine convenience and luxury with motorized curtains that can be controlled with the touch of a button.",
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
      title: "Curtains Alteration",
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
          <span className="text-[#9E7A4A] font-medium">Curtains</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            Curtains
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Looking for curtains to add a touch of elegance to your home in Dubai? Look no further than Easy Blinds and Curtains.
            </p>
            <p>
              Easy Blinds and Curtains offer a variety of curtains in Dubai. Whether you are looking for curtains for a bedroom, living room, or nursery, Easy Blinds and Curtains is designed to meet every need and aesthetic preference. From the rich feel of blackout curtains to the sheer drape of roman curtains and the lightness of wave curtains, we have something for everyone.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Explore Our Wide Range of Curtains Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            Explore Our Wide Range of Curtains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {curtainsRange.map((item, idx) => (
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

      {/* 3. Why Choose Our Curtains? Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                Why Choose Our Curtains?
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 text-left sm:text-center leading-relaxed">
                <p>
                  <strong className="text-stone-900">Variety of Styles:</strong> Explore a wide range of colors, patterns, and fabrics to complement your interior decor.
                </p>
                <p>
                  <strong className="text-stone-900">Customization:</strong> We tailor our curtains to fit your exact window dimensions, ensuring a perfect fit every time.
                </p>
                <p>
                  <strong className="text-stone-900">Quality Materials:</strong> Our curtains are crafted from high-quality fabrics that are durable, easy to maintain, and resistant to fading.
                </p>
                <p>
                  <strong className="text-stone-900">Expert Installation:</strong> Our professional team ensures hassle-free installation so you can enjoy your new curtains effortlessly.
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

      {/* 4. Curtains Tailored to Your Dubai Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Curtains Tailored to Your Dubai Lifestyle
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds, we understand the unique climate and architectural demands of Dubai properties. That’s why our curtains are engineered not only for beauty, but for long-lasting performance under intense sunlight and desert conditions.
        </p>
      </section>

      {/* 5. Visit Us Today */}
      <section className="pb-16 max-w-4xl mx-auto px-4 text-center space-y-3 border-b border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Visit Us Today
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Visit our showroom or contact us today to explore our full collection of curtains in Dubai. Whether you need blackout curtains or sheer drapes, our team is ready to help you select the perfect curtains for your home and schedule a free appointment today.
        </p>
      </section>

      {/* 6. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE same day appointment"
        subtitle="Our mobile design van visits your Dubai villa or residence with 1,000+ luxury fabrics & free laser measuring."
        defaultType="Curtains"
      />

      {/* 7. What our customers say (Google Reviews Rating) */}
      <CustomerReviews />
    </div>
  );
}
