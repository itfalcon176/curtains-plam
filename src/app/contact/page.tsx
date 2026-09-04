"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";


export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Contact Easy Blinds & Curtains Dubai"
        subtitle="Visit Our Dubai Showroom or Request a Free Mobile Van Visit"
        badge="Easy Blinds & Curtains • Get In Touch"
        description="Our drapery stylists and certified technicians are ready to assist you 7 days a week. Visit our showroom in Barsha Heights or schedule a mobile design van visit directly to your doorstep."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* 2. Contact Information & Form */}
      <section className="py-20 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Showroom Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EFEAE1] text-[#9E7A4A] text-[11px] font-bold tracking-wide uppercase">
                Showroom & Operations
              </span>
              <h2 className="font-serif text-3xl font-normal text-stone-900">
                Let’s Discuss Your Window Treatment Project
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Whether you need a single room blackout curtain or full turnkey automation for a beachfront villa, our team is at your service.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD5] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-stone-900 font-bold text-sm">Dubai Showroom Location</h4>
                  <p className="text-xs text-stone-600">Barsha Heights (TECOM), Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD5] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-stone-900 font-bold text-sm">Direct Phone Inquiry</h4>
                  <a href="tel:+97144431950" className="text-xs text-stone-900 font-semibold hover:text-[#C5A880] block">
                    +971 444 319 50
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD5] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-stone-900 font-bold text-sm">WhatsApp Consultation (Instant)</h4>
                  <a
                    href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20inquire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#9E7A4A] font-semibold hover:underline block"
                  >
                    +971 50 834 9761
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD5] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-stone-900 font-bold text-sm">Working Hours</h4>
                  <p className="text-xs text-stone-600">Monday – Sunday: 9:00 AM – 9:00 PM (Open 7 Days)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DFD5] shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Message Received!</h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">Our team will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-6">
                <div className="space-y-1 border-b border-[#F0EBE1] pb-4">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Send an Inquiry</h3>
                  <p className="text-xs text-stone-500">We respond within 30 minutes during showroom hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-stone-700">Full Name *</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Al Mansoori"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-stone-700">Phone / WhatsApp *</span>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-stone-700">Service Interested In</span>
                  <select className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50">
                    <option>Bespoke Curtains (Blackout / Sheer / Wave)</option>
                    <option>Custom Blinds (Roller / Zebra / Wooden Venetian)</option>
                    <option>Motorized Smart Window Treatments</option>
                    <option>Commercial / Corporate Window Fitout</option>
                    <option>Curtain Care & Maintenance</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-stone-700">Project Details or Requirements</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your room, number of windows, villa community..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Showroom Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      {/* 3. Customer Reviews */}
      <CustomerReviews />
    </div>
  );
}

