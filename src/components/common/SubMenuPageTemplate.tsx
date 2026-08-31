"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import {
  Scissors,
  Ruler,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export interface SubMenuPageTemplateProps {
  title: string;
  badge?: string;
  subtitle?: string;
  description: string;
  whatIsHeading: string;
  whatIsText: string[];
  images: [string, string];
  imageAltText?: [string, string];
  whyNeedHeading: string;
  whyNeedPoints: string[];
  whyChoosePoints?: string[];
  categoryParent?: { label: string; href: string };
}

export const SubMenuPageTemplate: React.FC<SubMenuPageTemplateProps> = ({
  title,
  badge = "Easy Blinds & Curtains • Dubai",
  subtitle,
  description,
  whatIsHeading,
  whatIsText,
  images,
  imageAltText = [title, title],
  whyNeedHeading,
  whyNeedPoints,
  whyChoosePoints = [
    "Fast 24 to 48-Hour Fitting & Delivery across Palm Jebel Ali & Dubai",
    "In-Home Mobile Van Consultation loaded with 1,000+ swatches delivered to your door",
    "Free Same-Day Appointment Scheduling with Zero Obligation",
    "5-Year Replacement Warranty on all Motor Tracks & Hardware",
  ],
  categoryParent = { label: "Curtains", href: "/curtains" },
}) => {
  const featureServices = [
    {
      title: "Curtain Tailoring",
      icon: Scissors,
    },
    {
      title: "Laser Fitting",
      icon: Ruler,
    },
    {
      title: "Track Installation",
      icon: Layers,
    },
    {
      title: "Repair & Maintenance",
      icon: Wrench,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        title={title}
        subtitle={subtitle}
        badge={badge}
        description={description}
        breadcrumbs={[
          { label: categoryParent.label, href: categoryParent.href },
          { label: title },
        ]}
      />

      {/* 2. Main Detail Section */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 border-t border-[#E6DFD5]">
        {/* What is Heading & Paragraphs */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950">
            {whatIsHeading}
          </h2>
          {whatIsText.map((paragraph, idx) => (
            <p key={idx} className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 2 Side-by-Side High-Res Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E6DFD5] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={images[0]}
              alt={imageAltText[0]}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E6DFD5] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={images[1]}
              alt={imageAltText[1]}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Why You Need in Dubai */}
        <div className="space-y-4 max-w-4xl mx-auto pt-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-950">
            {whyNeedHeading}
          </h3>
          <ul className="space-y-3 pt-2">
            {whyNeedPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-stone-700 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Purchase from Easy Blinds & Curtains */}
        <div className="space-y-4 max-w-4xl mx-auto pt-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-950">
            Why Purchase from Easy Blinds &amp; Curtains?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            As Dubai’s premier window couture atelier, we bring superior craftsmanship, laser accuracy, and transparent pricing directly to your villa.
          </p>
          <ul className="space-y-3 pt-2">
            {whyChoosePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-stone-700 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4 Circular Service Badges */}
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

      {/* 3. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE same day appointment"
        subtitle="Our mobile design van visits your Palm Jebel Ali villa or Dubai residence with 1,000+ luxury fabrics & free laser measuring."
        defaultType="Curtains"
      />

      {/* 4. Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
};
