"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Waves,
  Wrench,
  CheckCircle2,
  Calendar,
  Clock,
  Plus,
  Minus,
  HeartHandshake,
} from "lucide-react";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function CarePackagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const careServices = [
    {
      title: "Deep Steam Sanitization",
      image: "/card-care-steam.jpg",
      href: "/care-package",
      desc: "In-situ 180°C eco steam extraction eliminating dust mites, fine UAE sand, and airborne allergens while restoring natural fabric drape.",
    },
    {
      title: "Delicate Fabric Dry Cleaning",
      image: "/card-care-dryclean.jpg",
      href: "/care-package",
      desc: "Professional unhooking, solvent-free eco dry cleaning, spot stain extraction, and white-glove re-hanging for luxury silks and velvets.",
    },
    {
      title: "Smart Motor & Track Calibration",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/motorised-curtains",
      desc: "Somfy, Tuya, and Zigbee motorized track diagnostics, limit switch re-programming, belt tensioning, and smart app remote re-pairing.",
    },
    {
      title: "UV & Solar Shield Defense",
      image: "/card-fabric-swatches.jpg",
      href: "/care-package",
      desc: "Protective nano-coatings applied to sheer and blackout linings to prevent sun yellowing and fabric degradation under Dubai sunlight.",
    },
    {
      title: "Hardware & Track Servicing",
      image: "/card-wooden-blinds.jpg",
      href: "/care-package",
      desc: "Precision track lubrication, pulley runner replacement, cord tensioning, and bracket tightening for quiet, effortless daily glide.",
    },
    {
      title: "Lifetime Warranty Active Renewal",
      image: "/card-about-craftsmanship.jpg",
      href: "/care-package",
      desc: "Every annual care visit automatically renews your Easy Blinds lifetime product warranty and emergency repair coverage.",
    },
  ];

  const pricingPlans = [
    {
      title: "Essential Residence Plan",
      price: "450",
      period: "per year",
      badge: "Apartments & Townhouses",
      featured: false,
      features: [
        "Annual In-Situ Steam Sanitization",
        "Track Lubrication & Belt Adjustment",
        "Somfy / Tuya Motor Diagnostic Check",
        "Dust & Sand Extraction Treatment",
        "Lifetime Product Warranty Renewal",
        "15% Discount on Replacement Parts",
      ],
    },
    {
      title: "Luxury Villa Care Plan",
      price: "890",
      period: "per year",
      badge: "Palm Jebel Ali & Large Villas",
      featured: true,
      features: [
        "Bi-Annual In-Situ Steam Sanitization",
        "Full Off-Site Dry Cleaning Service",
        "Unlimited Smart Motor Calibration",
        "Priority 24-Hour Emergency Callouts",
        "Free Fabric Stain Removal Treatments",
        "Lifetime Product Warranty Renewal",
        "25% Discount on New Fabric Upgrades",
      ],
    },
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Book Annual Visit",
      desc: "Choose a date convenient for you. Our mobile care van arrives equipped with specialized steam tools.",
    },
    {
      step: "02",
      title: "Inspection & Steaming",
      desc: "Our technician audits fabric health, checks tracks, and performs in-situ deep steam sanitization.",
    },
    {
      step: "03",
      title: "Off-Site Cleaning (Optional)",
      desc: "Delicate drapery needing deep dry cleaning is unhooked and safely processed at our Dubai atelier.",
    },
    {
      step: "04",
      title: "Re-fitting & Calibration",
      desc: "Drapes are re-hung, steam ironed on-site, and motorized tracks re-synced with your smart home app.",
    },
  ];

  const featureServices = [
    {
      title: "In-Situ Steaming",
      icon: Waves,
    },
    {
      title: "Smart Calibration",
      icon: Cpu,
    },
    {
      title: "Eco Dry Cleaning",
      icon: Sparkles,
    },
    {
      title: "Lifetime Warranty",
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      q: "How often should curtains and blinds be serviced in Dubai?",
      a: "Due to fine UAE desert dust, humidity fluctuations, and strong sun exposure, we recommend professional steam cleaning and track servicing at least once a year to keep fabrics fresh and motor tracks gliding smoothly.",
    },
    {
      q: "Will steam cleaning damage delicate fabrics like sheer or silk?",
      a: "No. Our technicians use temperature-controlled eco-steam equipment specifically calibrated for delicate sheer, Belgian linen, and luxury velvet drapes, preserving pleats and fabric texture without water damage.",
    },
    {
      q: "What is included in the Smart Motor & Track Calibration?",
      a: "We inspect your motorized rails (Somfy, Tuya, Zigbee), re-tension drive belts, test limit switches, update app firmware, and re-pair smart remotes or home automation hubs (Control4, Alexa, Apple HomeKit).",
    },
    {
      q: "Is the Care Package available in Palm Jebel Ali and across Dubai?",
      a: "Yes! Our specialized mobile care van visits all residential and commercial areas across Palm Jebel Ali, Dubai Marina, Emirates Hills, Downtown Dubai, and the greater UAE.",
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
          <span className="text-[#9E7A4A] font-medium">Care Package</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-semibold tracking-wider uppercase mx-auto">
            <HeartHandshake className="w-4 h-4" />
            <span>Lifetime Quality &amp; Fabric Protection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            Care Package
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Looking for professional curtain cleaning, steam sanitization, and smart motor maintenance in Dubai or Palm Jebel Ali? Learn more about Easy Blinds and Curtains Care Package.
            </p>
            <p>
              Easy Blinds and Curtains offers a comprehensive annual care and maintenance package across Dubai. Keep your luxury drapery, sheer waves, and motorized blinds performing like new year after year with our certified in-home technicians and eco-steam equipment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. What's Included in Your Annual Service Plan Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            What’s Included in Your Care Package
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {careServices.map((item, idx) => (
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

      {/* 3. Transparent Annual Pricing Plans (Modern Card Layout) */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white border-t border-b border-stone-800">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
              Transparent Membership Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-normal">
              Select Your Annual Care Plan
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Zero hidden fees. Complete peace of mind for your window drapery and smart motor investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 sm:p-10 border flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-[#1C1D20] to-[#121315] border-[#C5A880] shadow-2xl ring-1 ring-[#C5A880]/30"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#C5A880]">
                      {plan.badge}
                    </span>
                    {plan.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C5A880] text-stone-950">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      {plan.title}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-sm text-stone-400">AED</span>
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C5A880]">
                        {plan.price}
                      </span>
                      <span className="text-xs text-stone-400 font-light">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/book-a-free-appointment"
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-md ${
                      plan.featured
                        ? "bg-[#C5A880] hover:bg-[#B4966E] text-stone-950"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Subscribe to Care Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                How Your Annual Service Works
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
                Effortless 4-step process handled entirely by our certified Dubai maintenance team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorksSteps.map((step, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5] space-y-3 relative group hover:border-[#C5A880] transition-colors"
                >
                  <span className="font-serif text-3xl font-bold text-[#C5A880]/40 group-hover:text-[#C5A880] transition-colors block">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Feature Service Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#F0EBE1]">
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

      {/* 5. Care Package Tailored to Your Dubai & Palm Jebel Ali Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Care Package Tailored to Your Dubai &amp; Palm Jebel Ali Lifestyle
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds and Curtains, we know how desert sand, coastal humidity in Palm Jebel Ali, and intense sunlight affect window drapery. Our specialized care package protects your investment and ensures your home remains pristine and effortless.
        </p>
      </section>

      {/* 6. Frequently Asked Questions (Accordion) */}
      <section className="py-16 max-w-4xl mx-auto px-4 border-t border-b border-[#E6DFD5]">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Got questions about our annual Care Package? We’ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E6DFD5] bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-stone-950">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-stone-700">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#F5F0E8]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book your annual care package service"
        subtitle="Our mobile care van visits your Dubai villa or apartment with 100% eco steam equipment & certified technicians."
        defaultType="Curtains"
      />

      {/* 8. Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
}

