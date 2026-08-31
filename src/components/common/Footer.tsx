"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Heart,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141517] text-[#D8D4CE] border-t border-[#252629] pt-16 pb-12 select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-14 border-b border-[#252629]">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">24-Hour Express Fitting</h4>
              <p className="text-xs text-stone-400">Guaranteed swift turnaround across Dubai & UAE.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">5-Year Motor Warranty</h4>
              <p className="text-xs text-stone-400">Official certified Somfy & smart automation.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Perfect Fit</h4>
              <p className="text-xs text-stone-400">Free in-home laser measurement service.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Instant WhatsApp Support</h4>
              <p className="text-xs text-stone-400">Direct styling consultations 7 days a week.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-[#252629]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              {navigationConfig.brand.logoImageWhite || navigationConfig.brand.logoImage ? (
                <div className="relative h-10 sm:h-11 w-auto flex items-center">
                  <Image
                    src={navigationConfig.brand.logoImageWhite || navigationConfig.brand.logoImage || "/EasyBlindscurtain_logo-palm-white.png"}
                    alt={navigationConfig.brand.name}
                    width={220}
                    height={55}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl text-white tracking-widest uppercase">
                    {navigationConfig.brand.name}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#C5A880] font-semibold uppercase">
                    {navigationConfig.brand.tagline}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Easy Blinds and Curtains is Dubai’s premier bespoke window treatment atelier. We craft tailor-made drapery, luxury blinds, and smart automated tracks for luxury villas, penthouses, and commercial spaces across the UAE.
            </p>

            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Barsha Heights, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${navigationConfig.topBar.phoneRaw}`} className="hover:text-white font-semibold">
                  {navigationConfig.topBar.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <a
                  href={`https://wa.me/${navigationConfig.topBar.whatsappRaw.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold"
                >
                  WhatsApp: {navigationConfig.topBar.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Curtains Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase">Bespoke Curtains</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><Link href="/blackout-curtains" className="hover:text-[#C5A880] transition-colors">Blackout Curtains</Link></li>
              <li><Link href="/sheers-curtains" className="hover:text-[#C5A880] transition-colors">Sheer & Luminous Drapes</Link></li>
              <li><Link href="/motorised-curtains" className="hover:text-[#C5A880] transition-colors">Motorized Curtains</Link></li>
              <li><Link href="/curtains" className="hover:text-[#C5A880] transition-colors">Wave Pleat Curtains</Link></li>
              <li><Link href="/curtains" className="hover:text-[#C5A880] transition-colors">Pinch Pleat Tailoring</Link></li>
              <li><Link href="/curtains" className="hover:text-[#C5A880] transition-colors">Luxury Velvet & Linen Fabrics</Link></li>
            </ul>
          </div>

          {/* Blinds Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase">Custom Blinds</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><Link href="/roller-blinds" className="hover:text-[#C5A880] transition-colors">Roller & Sunscreen Blinds</Link></li>
              <li><Link href="/zebra-blinds" className="hover:text-[#C5A880] transition-colors">Zebra & Day-Night Blinds</Link></li>
              <li><Link href="/wooden-venetian-blinds" className="hover:text-[#C5A880] transition-colors">Wooden Venetian Blinds</Link></li>
              <li><Link href="/blinds" className="hover:text-[#C5A880] transition-colors">Motorized Smart Blinds</Link></li>
              <li><Link href="/blinds" className="hover:text-[#C5A880] transition-colors">Roman Blinds</Link></li>
              <li><Link href="/blinds" className="hover:text-[#C5A880] transition-colors">Vertical & Duplex Shades</Link></li>
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wider uppercase">Services & Areas</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><Link href="/in-home-measuring" className="hover:text-[#C5A880] transition-colors font-semibold text-[#C5A880]">Free In-Home Laser Measuring</Link></li>
              <li><Link href="/book-a-free-appointment" className="hover:text-[#C5A880] transition-colors">Book Free Mobile Van Visit</Link></li>
              <li><Link href="/care-package" className="hover:text-[#C5A880] transition-colors">Curtain Care & Maintenance</Link></li>
              <li><Link href="/office-blinds-and-curtains" className="hover:text-[#C5A880] transition-colors">Commercial & Corporate Projects</Link></li>
              <li><Link href="/our-works" className="hover:text-[#C5A880] transition-colors">Dubai Villa Project Gallery</Link></li>
              <li><Link href="/faqs" className="hover:text-[#C5A880] transition-colors">FAQs & Warranty Information</Link></li>
              <li><Link href="/about-us" className="hover:text-[#C5A880] transition-colors">About Our Dubai Atelier</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A880] transition-colors">Showroom Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* UAE Areas Covered */}
        <div className="py-6 border-b border-[#252629] text-[11px] text-stone-400 flex flex-wrap items-center gap-2">
          <span className="font-bold text-white uppercase tracking-wider">Dubai Coverage Areas:</span>
          <span>Palm Jebel Ali • Palm Jumeirah • Downtown Dubai • Dubai Hills Estate • Emirates Hills • Arabian Ranches • Jumeirah Golf Estates • Dubai Marina • Bluewaters • Business Bay • DIFC • MBR City • Al Barari • Jumeirah Islands • Abu Dhabi & All UAE</span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Easy Blinds and Curtains Dubai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
