"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BookAppointmentModal } from "./BookAppointmentModal";

export const SideContactBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show starting from second section (scroll past hero ~380px)
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-45 flex flex-col items-stretch bg-white border-l border-t border-b border-[#E0D9CE] rounded-l-xl shadow-2xl overflow-hidden select-none"
          >
            {/* 1. WhatsApp Button (Official WhatsApp Icon) */}
            <a
              href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20inquire%20about%20custom%20curtains%20and%20blinds."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center w-18 sm:w-20 py-4 px-2 hover:bg-[#FAF8F5] transition-all duration-200 border-b border-[#EBE5DA] text-stone-900"
            >
              {/* Left Accent Bar on Hover */}
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Official WhatsApp 2-Color Emblem */}
              <div className="w-7 h-7 mb-1.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-6.5 h-6.5" />
              </div>

              <span className="text-[9.5px] font-sans font-bold uppercase tracking-[0.12em] text-center leading-tight">
                WhatsApp
              </span>
            </a>

            {/* 2. Get In Touch / Form Button (Direct jebelali-palm.com Standard) */}
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="group relative flex flex-col items-center justify-center w-18 sm:w-20 py-4 px-2 hover:bg-[#FAF8F5] transition-all duration-200 text-stone-900 cursor-pointer"
            >
              {/* Left Accent Bar on Hover */}
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Crisp Form / Brochure Outline Icon */}
              <div className="w-7 h-7 mb-1.5 flex items-center justify-center text-stone-800 group-hover:text-[#9E7A4A] group-hover:scale-110 transition-all">
                <svg
                  className="w-5.5 h-5.5 stroke-current fill-none stroke-[1.8]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>

              <span className="text-[9.5px] font-sans font-bold uppercase tracking-[0.12em] text-center leading-tight">
                Get in<br />Touch
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global In-Home Appointment Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
