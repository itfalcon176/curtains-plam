"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Phone,
  MessageCircle,
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
      a: "Yes, 100% complimentary with zero obligation. Our mobile showroom van visits your villa, apartment, or office anywhere in Dubai and the UAE with over 1,000 fabric swatches and laser measurement equipment.",
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

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear Answers on Pricing, Fast Installation, Motor Warranty & Care"
        badge="Easy Blinds & Curtains • Help Center"
        description="Find instant answers to common questions regarding measuring, smart home motorization, fabric types, and delivery schedules across Dubai."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      {/* 2. Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-[#C5A880] transition-transform duration-200 shrink-0",
                      isOpen && "rotate-180"
                    )}
                  />
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

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-stone-900 text-white text-center space-y-4">
          <h3 className="font-serif text-2xl font-normal text-[#E6D7C3]">
            Still Have Questions?
          </h3>
          <p className="text-xs text-stone-400 max-w-md mx-auto">
            Speak directly with our Dubai window treatment specialists on WhatsApp or call our showroom.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20have%20a%20question%20about%20your%20curtains"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Ask on WhatsApp
            </a>
            <Link
              href="/book-a-free-appointment"
              className="px-6 py-3 bg-[#C5A880] hover:bg-[#B4966E] text-stone-950 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Book Free Visit
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner />
    </div>
  );
}
