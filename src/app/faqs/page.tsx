"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Phone,
  Scissors,
  Ruler,
  Cpu,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast is your installation turnaround in Dubai?",
      a: "For standard orders, we manufacture, steam iron, and install your custom curtains or blinds within 24 to 48 hours following your in-home fabric selection. For specialty double-height motorized tracks or custom imported European jacquards, our team delivers within 3 to 5 business days.",
    },
    {
      q: "Is the in-home measurement and mobile van consultation truly free?",
      a: "Yes, 100% complimentary with zero obligation. Our mobile showroom van visits your villa, apartment, or office anywhere in Palm Jebel Ali and Dubai with over 1,000 fabric swatches and laser measurement equipment.",
    },
    {
      q: "Are your motorized curtains and blinds compatible with smart homes?",
      a: "Absolutely. We are certified Somfy, Tuya, and Zigbee partners. Our smart automated tracks integrate seamlessly with Apple HomeKit, Amazon Alexa, Google Assistant, Control4, and Crestron systems, allowing voice commands, sunrise/sunset scheduling, and smartphone app control.",
    },
    {
      q: "What warranty do you provide on curtains, blinds, and motors?",
      a: "All motorized tracks and electronic motors come with an official 5-year replacement warranty. Fabrics, manual tracks, and craftsmanship carry a comprehensive 2-year guarantee.",
    },
    {
      q: "Which curtain style is best suited for Dubai summer heat?",
      a: "For total heat and sunlight isolation, we recommend our 100% triple-weave or silicon-coated Blackout Curtains paired with wave pleat tracks. They block 100% of light and reduce indoor heat gain through windows by up to 40%, significantly lowering air conditioning electricity costs.",
    },
    {
      q: "What areas in Dubai and the UAE do you cover?",
      a: "We service all UAE locations including Palm Jebel Ali, Palm Jumeirah, Dubai Hills Estate, Emirates Hills, Downtown Dubai, Arabian Ranches, Jumeirah Golf Estates, Dubai Marina, Business Bay, DIFC, MBR City, Al Barari, and Abu Dhabi.",
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

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear Answers on Pricing, Fast Installation, Motor Warranty & Care"
        badge="Easy Blinds & Curtains • Help Center"
        description="Find instant answers to common questions regarding measuring, smart home motorization, fabric types, and delivery schedules across Dubai."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      {/* 2. Accordion */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-stone-950">
                    {item.q}
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
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-[#F5F1EA]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Feature Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#F0EBE1]">
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

      {/* 3. Window Couture Tailored to Your Dubai & Palm Jebel Ali Lifestyle */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3 border-t border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Got More Questions About Your Dubai Home?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Our styling consultants and laser measuring team are available 7 days a week across Palm Jebel Ali, Palm Jumeirah, and all Dubai communities. Speak directly with an expert today.
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

