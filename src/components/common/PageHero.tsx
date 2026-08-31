"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, ChevronDown, Calendar, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

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
}) => {
  const activeBreadcrumbs = breadcrumbs || [{ label: title }];

  return (
    <section className="bg-[#FAF8F5] select-none text-stone-900 pt-24 sm:pt-28 pb-10 sm:pb-14 text-center max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-4 flex-wrap">
        <Link href="/" className="hover:text-[#9E7A4A] flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {activeBreadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-[#9E7A4A] transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[#9E7A4A] font-medium">{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>


      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
          {title}
        </h1>

        <div className="pt-1">
          <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
        </div>

        <div className="pt-2 space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
          {subtitle && <p className="font-medium text-stone-800 text-sm sm:text-base">{subtitle}</p>}
          {description && <p>{description}</p>}
        </div>
      </motion.div>
    </section>
  );
};

