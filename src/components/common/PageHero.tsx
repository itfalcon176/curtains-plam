"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Phone, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
  onOpenBooking?: () => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = "Easy Blinds and Curtains • Dubai",
  description,
  breadcrumbs,
  bgImage,
  onOpenBooking,
}) => {
  return (
    <section className="relative w-full bg-[#141517] text-white py-16 sm:py-20 lg:py-24 overflow-hidden select-none border-b border-[#2A2B2E]">
      {/* Background Image / Subtle Dark Gradient */}
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A880]/15 via-transparent to-transparent opacity-50" />
      )}

      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#C5A880] flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-stone-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#C5A880] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C5A880] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Content */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#E6D7C3] text-[11px] font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>{badge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#C5A880] font-medium tracking-wide">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl pt-1">
              {description}
            </p>
          )}

          {/* Quick CTA Actions */}
          <div className="pt-4 flex items-center gap-3 sm:gap-4 flex-wrap">
            <Link
              href="/book-a-free-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-[#B4966E] text-stone-950 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free In-Home Measurement</span>
            </Link>

            <a
              href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 transition-all"
            >
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
