"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Transparent at top threshold
      if (currentScrollY <= 25) {
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);

        // 2. Hide on Scroll Down, Show on Scroll Up
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Only homepage has a dark full-screen image hero banner at the top
  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none",
          isVisible ? "translate-y-0" : "-translate-y-full",
          className
        )}
      >
        {/* Full-Width Slim Header with Dynamic Background */}
        <div
          className={cn(
            "w-full transition-all duration-300",
            isTransparent
              ? "bg-transparent border-b border-transparent py-2.5 sm:py-3.5"
              : "bg-[#FAF8F5]/96 backdrop-blur-xl border-b border-[#E6DFD5] shadow-xs py-1.5 sm:py-2"
          )}
        >
          {/* Responsive Wide Container */}
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-8">
              {/* Left: Brand Logo */}
              <div className="shrink-0">
                <Link
                  href="/"
                  className="group flex items-center transition-opacity duration-200 hover:opacity-90 whitespace-nowrap"
                >
                  {isTransparent ? (
                    <div className="relative h-8 sm:h-10 md:h-11.5 w-auto flex items-center">
                      <Image
                        src={config.brand.logoImageWhite || config.brand.logoImage || "/EasyBlindscurtain_logo-palm-white.png"}
                        alt={config.brand.name}
                        width={240}
                        height={60}
                        priority
                        className="h-7.5 sm:h-9.5 md:h-11 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative h-8 sm:h-10 md:h-11.5 w-auto flex items-center">
                      <Image
                        src={config.brand.logoImage || "/EasyBlindscurtain_logo-palm.png"}
                        alt={config.brand.name}
                        width={240}
                        height={60}
                        priority
                        className="h-7.5 sm:h-9.5 md:h-11 w-auto object-contain"
                      />
                    </div>
                  )}
                </Link>
              </div>

              {/* Center: Desktop Navigation Bar */}
              <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-2">
                <NavDesktop items={config.mainNav} isTransparent={isTransparent} />
              </div>

              {/* Right: Direct Phone Button & Mobile Hamburger Menu */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={`tel:${config.topBar.phoneRaw}`}
                  aria-label="Call Easy Blinds & Curtains"
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-2xs shrink-0",
                    isTransparent
                      ? "bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/25 text-white hover:border-[#C5A880]"
                      : "bg-white border border-[#E6DFD5] text-stone-900 hover:border-[#C5A880] hover:text-[#9E7A4A]"
                  )}
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="hidden sm:inline whitespace-nowrap">{config.topBar.phone}</span>
                  <span className="sm:hidden text-[11px] font-bold">Call</span>
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  className={cn(
                    "lg:hidden p-2 rounded-xl transition-colors shadow-2xs cursor-pointer shrink-0 border flex items-center justify-center",
                    isTransparent
                      ? "bg-black/35 backdrop-blur-md border-white/25 text-white hover:bg-black/55"
                      : "bg-white border-[#E6DFD5] text-stone-800 hover:text-stone-950 hover:bg-stone-50"
                  )}
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
