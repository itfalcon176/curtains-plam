"use client";

import React from "react";
import { TopBarConfig } from "@/config/navigation";
import { Phone, MapPin, Clock, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

interface TopBarProps {
  config: TopBarConfig;
  onOpenBooking?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ config, onOpenBooking }) => {
  return (
    <div className="bg-[#141517] text-[#D8D4CE] border-b border-[#252629] text-[11px] font-medium tracking-wide select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-9 flex items-center justify-between gap-4">
          {/* Left: Direct Contact & Location */}
          <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap overflow-x-auto no-scrollbar py-1">
            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-[#C5A880] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-semibold">{config.phone}</span>
            </a>

            <span className="hidden sm:inline-block w-px h-3 bg-stone-700/60 shrink-0" />

            <a
              href={`https://wa.me/${config.whatsappRaw.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#25D366] transition-colors shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden md:inline">WhatsApp:</span>
              <span>{config.whatsapp}</span>
            </a>

            <span className="hidden lg:inline-block w-px h-3 bg-stone-700/60 shrink-0" />

            <div className="hidden lg:inline-flex items-center gap-1.5 text-stone-400 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{config.location}</span>
            </div>
          </div>

          {/* Right: Announcement & Action */}
          <div className="hidden md:flex items-center gap-3 whitespace-nowrap shrink-0">
            <div className="flex items-center gap-1.5 text-stone-300 text-[11px]">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>Complimentary 24-Hour In-Home Measurement</span>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1 text-[#C5A880] hover:text-[#E6D7C3] font-bold text-[11px] uppercase tracking-wider ml-1 cursor-pointer transition-colors"
            >
              <span>Book Free Visit</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
