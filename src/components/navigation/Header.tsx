"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig, NavigationConfig } from "@/config/navigation";
import { NavDesktop } from "./NavDesktop";
import { NavMobileDrawer } from "./NavMobileDrawer";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";
import { Menu, Phone } from "lucide-react";
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
          "w-full z-40 sticky top-0 transition-all duration-300 select-none",
          className
        )}
      >
        {/* Full-Width Slim Header with Larger Logo */}
        <div
          className={cn(
            "w-full transition-all duration-300 border-b",
            isScrolled
              ? "bg-[#FAF8F5]/96 backdrop-blur-xl border-[#E6DFD5] shadow-xs py-1 sm:py-1.5"
              : "bg-[#FAF8F5]/98 border-[#E6DFD5]/70 py-1.5 sm:py-2"
          )}
        >
          {/* Responsive Wide Container */}
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between gap-4 xl:gap-8">
              {/* Left: Brand Logo (Enlarged & Sharp) */}
              <div className="shrink-0">
                <Link
                  href="/"
                  className="group flex items-center transition-opacity duration-200 hover:opacity-90 whitespace-nowrap"
                >
                  {config.brand.logoImage ? (
                    <div className="relative h-10 sm:h-11.5 md:h-12.5 w-auto flex items-center">
                      <Image
                        src={config.brand.logoImage}
                        alt={config.brand.name}
                        width={240}
                        height={60}
                        priority
                        className="h-9 sm:h-10.5 md:h-11.5 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-start whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.14em] text-stone-950 uppercase">
                          {config.brand.logoText}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block mb-1" />
                      </div>
                      <span className="text-[9px] tracking-[0.2em] text-[#9E7A4A] font-bold uppercase -mt-0.5">
                        {config.brand.logoSubtitle}
                      </span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Center: Desktop Navigation Bar */}
              <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-2">
                <NavDesktop items={config.mainNav} />
              </div>

              {/* Right: Direct Phone Button */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
                <a
                  href={`tel:${config.topBar.phoneRaw}`}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E6DFD5] text-xs font-bold text-stone-900 hover:border-[#C5A880] hover:text-[#9E7A4A] transition-all shadow-2xs whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="whitespace-nowrap">{config.topBar.phone}</span>
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  className="lg:hidden p-2 rounded-xl bg-white border border-[#E6DFD5] text-stone-800 hover:text-stone-950 hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer shrink-0"
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

      {/* Global Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
export default Header;
