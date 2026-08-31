"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import { ShieldCheck, Award, Clock, Wrench, FileCheck, Phone, Mail } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        title="Terms of Service"
        subtitle="Service Terms & Warranty Conditions"
        badge="Easy Blinds & Curtains • Dubai, UAE"
        description="Review our service agreement, in-home measurement protocols, 24-48 hour delivery terms, and 5-year hardware warranty conditions."
        breadcrumbs={[
          { label: "Terms of Service" },
        ]}
      />

      {/* 2. Terms Content Section */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DFD5] shadow-xs space-y-10">
          
          {/* Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Easy Blinds Terms of Service
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              These Terms of Service (“Terms”) govern the provision of custom drapery, blinds, motorization, and installation services by Easy Blinds and Curtains in Dubai and Palm Jebel Ali. By booking an appointment or confirming an order, you agree to these terms.
            </p>
          </div>

          {/* 1. In-Home Appointments */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                1. Free In-Home Consultation &amp; Laser Measuring
              </h3>
            </div>
            <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
              <p>Our mobile design van visits your Dubai villa or apartment free of charge. The following conditions apply:</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-700">
                <li>Initial in-home visits include 1,000+ fabric swatches and laser measurement with zero purchase obligation.</li>
                <li>Clients must ensure clear, safe access to window spaces for our installation team.</li>
              </ul>
            </div>
          </div>

          {/* 2. Custom Manufacturing & 24-48h Fitting Guarantee */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                2. Custom Tailoring &amp; Express Delivery
              </h3>
            </div>
            <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
              <p>All curtains and blinds are custom made to your exact window dimensions in Dubai within 24 to 48 hours following fabric approval.</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-700">
                <li>Because items are custom tailored, orders cannot be cancelled once fabric cutting has commenced.</li>
                <li>We guarantee a 100% precision fit based on our technician's laser measurements.</li>
              </ul>
            </div>
          </div>

          {/* 3. Warranty */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                3. 5-Year Hardware &amp; Motor Warranty
              </h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              All Somfy, Tuya, and motorized tracks, mechanisms, and hardware supplied by Easy Blinds &amp; Curtains come with an official 5-year replacement warranty against manufacturing defects.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E6DFD5] space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-950">
              Need Terms Assistance?
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our customer care team is available 7 days a week to answer your questions:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-900 pt-1">
              <a href="tel:+971501234567" className="hover:text-[#9E7A4A] inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>+971 50 123 4567</span>
              </a>
              <a href="mailto:info@easyblinds.ae" className="hover:text-[#9E7A4A] inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>info@easyblinds.ae</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Customer Reviews Section */}
      <CustomerReviews />
    </div>
  );
}
