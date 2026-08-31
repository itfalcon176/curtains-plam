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
  Sofa,
} from "lucide-react";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function FurniturePage() {
  const furnitureRange = [
    {
      title: "Bespoke Sofas & Sectionals",
      image: "/card-custom-sofa.jpg",
      href: "/furniture",
      desc: "Custom-built luxury curved sectionals, modular sofas, and lounge armchairs tailored to exact dimensions with stain-resistant velvet, linen, or boucle.",
    },
    {
      title: "Custom Upholstered Headboards",
      image: "/card-sheer-curtains.jpg",
      href: "/furniture",
      desc: "Floor-to-ceiling wall-mounted upholstered panels, fluted bed frames, and luxury padded headboards designed to match your bedroom curtains.",
    },
    {
      title: "Luxury Furniture Reupholstery",
      image: "/card-fabric-swatches.jpg",
      href: "/furniture",
      desc: "Breathe new life into high-end dining chairs, vintage armchairs, and outdoor sofas with premium designer fabrics and high-resilience foam refilling.",
    },
    {
      title: "Custom Ottomans & Benches",
      image: "/card-wave-curtains.jpg",
      href: "/furniture",
      desc: "Handcrafted storage ottomans, plush footstools, and bespoke coffee table benches customized in coordinating drapery and upholstery fabrics.",
    },
    {
      title: "Outdoor Luxury Cushioning",
      image: "/card-wooden-blinds.jpg",
      href: "/furniture",
      desc: "All-weather quick-dry foam cushions and UV-resistant outdoor upholstery tailored for Palm Jebel Ali villa terraces and garden seating.",
    },
    {
      title: "Acoustic Wall Fabric Panels",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/furniture",
      desc: "Custom fabric acoustic wall paneling and sound-dampening upholstery for private home cinemas, executive suites, and luxury bedrooms.",
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
      title: "Fabric Swatch Selection",
      icon: Layers,
    },
    {
      title: "Repair & Restoration",
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
          <span className="text-[#9E7A4A] font-medium">Furniture</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            Furniture
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Looking for custom handcrafted furniture and luxury upholstery in Dubai or Palm Jebel Ali? Look no further than Easy Blinds and Curtains.
            </p>
            <p>
              Easy Blinds and Curtains offer bespoke handcrafted furniture and upholstery in Dubai. Whether you are looking for custom curved sectionals, fluted wall-mounted headboards, or complete furniture reupholstery, Easy Blinds and Curtains is designed to complement your drapery and interior decor seamlessly. From plush living room sofas to master bedroom suites, we craft tailored luxury for every home.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Explore Our Wide Range of Furniture Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            Explore Our Wide Range of Furniture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {furnitureRange.map((item, idx) => (
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

      {/* 3. Why Choose Our Furniture? Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                Why Choose Our Furniture &amp; Upholstery?
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 text-left sm:text-center leading-relaxed">
                <p>
                  <strong className="text-stone-900">Handcrafted in Dubai:</strong> Locally manufactured using solid hardwood frames, premium pocket springs, and high-resilience foam.
                </p>
                <p>
                  <strong className="text-stone-900">Tailored Dimensions:</strong> Built custom to fit your specific room layout and dimensions with zero compromise.
                </p>
                <p>
                  <strong className="text-stone-900">Stain-Resistant Designer Fabrics:</strong> Choose from thousands of luxury velvets, boucles, organic linens, and easy-clean performance textiles.
                </p>
                <p>
                  <strong className="text-stone-900">Master Upholstery Craftsmen:</strong> Deep tufting, fluted channeling, double stitching, and white-glove home installation.
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

      {/* 4. Furniture Tailored to Your Dubai & Palm Jebel Ali Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Furniture Tailored to Your Dubai &amp; Palm Jebel Ali Lifestyle
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds and Curtains, we pair custom furniture upholstery with your window drapery to create a unified, luxury interior aesthetic. Engineered for comfort, elegance, and long-lasting durability in UAE living spaces.
        </p>
      </section>

      {/* 5. Visit Us Today */}
      <section className="pb-16 max-w-4xl mx-auto px-4 text-center space-y-3 border-b border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Visit Us Today
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Visit our Dubai atelier or contact us today to explore custom furniture options. Request our mobile design van to review fabric catalogs and consult with our upholstery specialists directly at your home.
        </p>
      </section>

      {/* 6. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE furniture & upholstery consultation"
        subtitle="Our mobile design van visits your Dubai villa or residence with 1,000+ luxury fabric samples & free laser measuring."
        defaultType="Curtains"
      />

      {/* 7. What our customers say */}
      <CustomerReviews />
    </div>
  );
}

