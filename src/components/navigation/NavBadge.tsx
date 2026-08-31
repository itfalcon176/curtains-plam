"use client";

import React from "react";
import { NavBadge as NavBadgeType } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface NavBadgeProps {
  badge?: NavBadgeType;
  className?: string;
}

export const NavBadge: React.FC<NavBadgeProps> = ({ badge, className }) => {
  if (!badge) return null;

  const variantStyles = {
    gold: "bg-[#C5A880]/15 text-[#9E7A4A] border-[#C5A880]/30",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    charcoal: "bg-stone-900 text-stone-100 border-stone-800",
    blue: "bg-sky-50 text-sky-700 border-sky-200",
  };

  const currentVariant = badge.variant || "gold";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full border whitespace-nowrap shrink-0 transition-all duration-300",
        variantStyles[currentVariant],
        badge.pulse && "relative",
        className
      )}

    >
      {badge.pulse && (
        <span className="relative flex h-1.5 w-1.5 mr-0.5">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              currentVariant === "rose" && "bg-rose-400",
              currentVariant === "gold" && "bg-[#C5A880]",
              currentVariant === "emerald" && "bg-emerald-400",
              currentVariant === "charcoal" && "bg-stone-400",
              currentVariant === "blue" && "bg-sky-400"
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-1.5 w-1.5",
              currentVariant === "rose" && "bg-rose-600",
              currentVariant === "gold" && "bg-[#9E7A4A]",
              currentVariant === "emerald" && "bg-emerald-600",
              currentVariant === "charcoal" && "bg-stone-900",
              currentVariant === "blue" && "bg-sky-600"
            )}
          />
        </span>
      )}
      {badge.text}
    </span>
  );
};
