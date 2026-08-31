"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { CustomerReviews } from "@/components/common/CustomerReviews";
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Page Hero with Breadcrumbs */}
      <PageHero
        title="Privacy Policy"
        subtitle="Data Protection & Privacy Transparency"
        badge="Easy Blinds & Curtains • Dubai, UAE"
        description="Your privacy is our priority. Learn how Easy Blinds and Curtains collects, protects, and manages your personal information during in-home consultations and orders."
        breadcrumbs={[
          { label: "Privacy Policy" },
        ]}
      />

      {/* 2. Policy Content Section */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DFD5] shadow-xs space-y-10">
          
          {/* Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Our Commitment to Your Privacy
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Easy Blinds and Curtains (“we”, “our”, or “us”) respects your privacy and is committed to protecting the personal data of our clients across Dubai, Palm Jebel Ali, Abu Dhabi, and the wider UAE. This Privacy Policy outlines our practices regarding information collection, usage, and safeguards when you visit our website or book an in-home measurement appointment.
            </p>
          </div>

          {/* Data Collection */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                1. Information We Collect
              </h3>
            </div>
            <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
              <p>When you interact with our website or request a free mobile van appointment, we may collect the following details:</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-700">
                <li><strong>Contact Information:</strong> Full name, phone/WhatsApp number, email address, and delivery address.</li>
                <li><strong>Appointment Details:</strong> Preferred villa/apartment visit date, time slot, and window treatment category (Curtains, Blinds, Commercial).</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing patterns collected via standard cookies.</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                2. How We Use Your Information
              </h3>
            </div>
            <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
              <p>We strictly utilize your data for legitimate business purposes including:</p>
              <ul className="list-disc pl-5 space-y-2 text-stone-700">
                <li>Scheduling and dispatching our mobile design van and laser measurement technicians to your Palm Jebel Ali villa or Dubai address.</li>
                <li>Processing bespoke fabric orders, custom tailoring, and 24-48 hour installation services.</li>
                <li>Sending order confirmation updates, appointment reminders, and post-installation warranty support.</li>
                <li>Improving website performance, user experience, and localized customer service.</li>
              </ul>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="space-y-4 pt-6 border-t border-[#F0EBE1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 text-[#9E7A4A] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                3. Data Security &amp; Confidentiality
              </h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We implement strict administrative, technical, and physical security measures to protect your personal information against unauthorized access, disclosure, or alteration. We do <strong>NOT</strong> sell, rent, or trade client personal data to third parties under any circumstances.
            </p>
          </div>

          {/* Contact Information */}
          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E6DFD5] space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-950">
              Questions Regarding Privacy?
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              If you have any questions or wish to request data correction or deletion, please contact our Dubai support atelier:
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
