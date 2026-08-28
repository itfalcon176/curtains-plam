"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Mic,
  Sun,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function MotorisedCurtainsPage() {
  const integrations = [
    { title: "Somfy Smart Motors", desc: "World leader in whisper-quiet curtain track automation with 5-year official warranty." },
    { title: "Apple HomeKit & Siri", desc: "Open or close your drapery with simple voice commands or iOS automation routines." },
    { title: "Amazon Alexa & Google", desc: "Sync your window coverings with sunrise, sunset, movie time, and bedtime scenes." },
    { title: "Control4 & Crestron", desc: "Engineered for high-end luxury villa home automation control systems across UAE." },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Motorized Smart Curtains in Dubai"
        subtitle="Whisper-Quiet Somfy & Tuya Automation with Voice & App Control"
        badge="Easy Blinds & Curtains • Smart Home"
        description="Experience effortless luxury. Open and close your curtains with the touch of a button, smartphone app, or voice command. Powered by certified Somfy automation with a 5-year guarantee."
        breadcrumbs={[
          { label: "Curtains", href: "/curtains" },
          { label: "Motorised Curtains" },
        ]}
      />

      {/* 2. Integrations Grid */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Smart Automation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Effortless Control from Anywhere in the World
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Ideal for double-height ceilings, wide glass patio doors, and luxury master suites in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFEAE1] text-[#9E7A4A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-13">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Ready to Automate Your Curtains with Somfy?"
        subtitle="Book Free In-Home Smart Motor Demonstration Across Dubai"
      />
    </div>
  );
}
