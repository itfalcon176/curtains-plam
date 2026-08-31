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
  Cpu,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function AboutUsPage() {
  const brandPillars = [
    {
      title: "Our Dubai Flagship Atelier",
      image: "/card-about-atelier.jpg",
      href: "/contact",
      desc: "Visit our luxury showroom in Dubai featuring hands-on displays of 1,000+ European velvets, sheer waves, and live motorized track demonstrations.",
    },
    {
      title: "Complimentary Mobile Design Van",
      image: "/card-about-van.jpg",
      href: "/book-a-free-appointment",
      desc: "Our fully equipped design van brings fabric swatches, timber blinds, and certified laser measuring technicians directly to your villa in Palm Jebel Ali.",
    },
    {
      title: "Master Artisanal Craftsmanship",
      image: "/card-about-craftsmanship.jpg",
      href: "/our-works",
      desc: "Tailored wave pleats, double pinch headers, and precision steam-ironing executed by in-house drapery artisans with over a decade of UAE experience.",
    },
    {
      title: "Certified Smart Motorization",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/motorised-curtains",
      desc: "Somfy, Tuya, and Zigbee automated curtain rails integrated seamlessly with Control4, Crestron, Google Home, and Apple HomeKit.",
    },
    {
      title: "Palm Jebel Ali & Villa Expertise",
      image: "/curtains-wave-palm-jebel-ali.jpg",
      href: "/curtains",
      desc: "Specialized in double-height sea view glazing, 100% blackout thermal linings, and UV protection engineered for coastal UAE villas.",
    },
    {
      title: "Turnkey Commercial Fitouts",
      image: "/card-commercial-office.jpg",
      href: "/office-blinds-and-curtains",
      desc: "Civil Defense fire-retardant hospitality drapery, DHA-compliant hospital cubicle tracks, and anti-glare corporate office blinds across Dubai.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Villas & Penthouses Fitted in UAE" },
    { value: "100%", label: "Guaranteed Laser Precision Measurement" },
    { value: "1,000+", label: "Luxury Fabric & Technical Swatch Options" },
    { value: "5-Year", label: "Extended Warranty & Service Guarantee" },
  ];

  const featureServices = [
    {
      title: "Bespoke Tailoring",
      icon: Scissors,
    },
    {
      title: "Laser Measurement",
      icon: Ruler,
    },
    {
      title: "Somfy Motorization",
      icon: Cpu,
    },
    {
      title: "5-Year Guarantee",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* SEO Canonical & Meta Information Header Structure */}
      <meta name="description" content="Learn about Easy Blinds and Curtains, Dubai's premier atelier for luxury drapery, motorized smart blinds, flooring, and bespoke furniture in Palm Jebel Ali & UAE." />

      {/* 1. Minimal Elegant Hero Title & Intro Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-4 flex-wrap">
          <Link href="/" className="hover:text-[#9E7A4A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#9E7A4A] font-medium">About Us</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-semibold tracking-wider uppercase mx-auto">
            <Award className="w-4 h-4" />
            <span>Dubai’s Leading Window Couture Atelier</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            About Easy Blinds &amp; Curtains
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Looking for Dubai’s premier window couture and smart automation specialists? Learn more about Easy Blinds and Curtains.
            </p>
            <p>
              For over a decade, Easy Blinds and Curtains has been Palm Jebel Ali and Dubai’s trusted atelier for bespoke curtains, motorized blinds, luxury flooring, and handcrafted furniture. We combine artisanal tailoring with Somfy smart home technology to elevate villas, penthouses, and commercial developments throughout the United Arab Emirates.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Explore Our Pillars & Heritage Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            Our Heritage &amp; Core Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {brandPillars.map((item, idx) => (
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

      {/* 3. Proven Stats & UAE Heritage Showcase */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white border-t border-b border-stone-800">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                Excellence in Numbers
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-normal">
                Trusted by 10,000+ Dubai Villa Owners &amp; Designers
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mx-auto leading-relaxed">
                From Palm Jebel Ali beachfront mansions to DIFC corporate penthouses, our commitment to millimeter precision and thermal luxury remains unmatched.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center"
                >
                  <div className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-300 font-medium leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Easy Blinds and Curtains? Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                Why Choose Easy Blinds &amp; Curtains?
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 text-left sm:text-center leading-relaxed">
                <p>
                  <strong className="text-stone-900">Direct In-House Manufacturing:</strong> We cut out middlemen, delivering factory-direct pricing with bespoke European tailoring standards.
                </p>
                <p>
                  <strong className="text-stone-900">Complimentary 24-Hour Van Visit:</strong> Our design van visits your residence in Palm Jebel Ali or Dubai with 1,000+ luxury fabric swatches and laser tools.
                </p>
                <p>
                  <strong className="text-stone-900">Certified Smart Automation:</strong> Official installers of Somfy, Tuya, and Zigbee quiet motorized rails with smartphone app control.
                </p>
                <p>
                  <strong className="text-stone-900">White-Glove Steam Fitting:</strong> Every curtain order is steam ironed on-site upon installation for crisp, perfect fold presentation.
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

      {/* 5. Window Couture Tailored to Your Dubai & Palm Jebel Ali Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Window Couture Tailored to Your Dubai &amp; Palm Jebel Ali Lifestyle
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds and Curtains, we understand the intense sunlight, architectural height, and luxury expectations of Dubai residences. Our drapes and blinds are engineered to provide maximum thermal insulation, acoustic comfort, and timeless beauty under UAE desert conditions.
        </p>
      </section>

      {/* 6. Visit Us Today */}
      <section className="pb-16 max-w-4xl mx-auto px-4 text-center space-y-3 border-b border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Visit Us Today
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Visit our Dubai showroom in Barsha Heights or schedule a free mobile van appointment to explore our full collection of curtains, blinds, flooring, and custom furniture. Call us today to speak with our design specialists.
        </p>
      </section>

      {/* 7. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE same day consultation in Dubai"
        subtitle="Our mobile design van visits your Palm Jebel Ali villa or Dubai residence with 1,000+ luxury swatches & free laser measuring."
        defaultType="Curtains"
      />

      {/* 8. Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
}

