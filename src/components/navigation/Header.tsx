"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig, NavigationConfig } from "@/config/navigation";
import { NavDesktop } from "./NavDesktop";
import { NavMobileDrawer } from "./NavMobileDrawer";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";
import { Menu, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  config?: NavigationConfig;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  config = navigationConfig,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "w-full z-40 sticky top-0 transition-all duration-300",
          className
        )}
      >
        {/* Clean Main Navbar */}
        <div
          className={cn(
            "transition-all duration-300 border-b",
            isScrolled
              ? "bg-[#FAF8F5]/94 backdrop-blur-xl border-[#E6DFD5] shadow-xs py-2.5"
              : "bg-[#FAF8F5]/98 border-[#E6DFD5]/70 py-3 sm:py-4"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-6 lg:gap-10">
              {/* Left: Brand Logo Image */}
              <div className="shrink-0">
                <Link
                  href="/"
                  className="group flex items-center transition-opacity duration-200 hover:opacity-90 select-none whitespace-nowrap"
                >
                  {config.brand.logoImage ? (
                    <div className="relative h-10 sm:h-12 w-auto flex items-center">
                      <Image
                        src={config.brand.logoImage}
                        alt={config.brand.name}
                        width={220}
                        height={55}
                        priority
                        className="h-9 sm:h-11 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-start whitespace-nowrap">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.16em] text-stone-950 uppercase whitespace-nowrap">
                          {config.brand.logoText}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block mb-1 shrink-0" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#9E7A4A] font-bold uppercase -mt-0.5 whitespace-nowrap">
                        {config.brand.logoSubtitle}
                      </span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Center: Desktop Navigation Bar */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <NavDesktop items={config.mainNav} />
              </div>

              {/* Right: Direct Phone & CTA */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0 whitespace-nowrap">
                {/* Direct Phone Call Button */}
                <a
                  href={`tel:${config.topBar.phoneRaw}`}
                  className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E6DFD5] text-xs font-bold text-stone-900 hover:border-[#C5A880] hover:text-[#9E7A4A] transition-all shadow-2xs whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="whitespace-nowrap">{config.topBar.phone}</span>
                </a>

                {/* Primary CTA (Book Free Measurement) */}
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B1C1F] hover:bg-stone-800 text-white rounded-full text-xs font-bold tracking-wide uppercase shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="whitespace-nowrap">{config.topBar.cta.label}</span>
                </button>

                {/* Mobile Menu Hamburger */}
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  className="lg:hidden p-2.5 rounded-xl bg-white border border-[#E6DFD5] text-stone-800 hover:text-stone-950 hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer shrink-0"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <NavMobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        config={config}
        onOpenBooking={() => {
          setIsMobileDrawerOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      {/* Global Free Consultation Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
export default Header;
