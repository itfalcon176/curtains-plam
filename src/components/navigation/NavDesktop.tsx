"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavItem } from "@/config/navigation";
import { NavMegaMenu } from "./NavMegaMenu";
import { NavDropdown } from "./NavDropdown";
import { NavBadge } from "./NavBadge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavDesktopProps {
  items: NavItem[];
}

export const NavDesktop: React.FC<NavDesktopProps> = ({ items }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [hoveredPillId, setHoveredPillId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenuId(itemId);
    setHoveredPillId(itemId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenuId(null);
      setHoveredPillId(null);
    }, 180);
  };

  return (
    <nav
      className="hidden lg:flex items-center gap-0.5 xl:gap-1 relative select-none"
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => {
        const isOpen = activeMenuId === item.id;
        const isPillHovered = hoveredPillId === item.id;
        const hasSubmenu = item.type === "mega-menu" || item.type === "dropdown";

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
          >
            <Link
              href={item.href}
              className={cn(
                "relative z-10 flex items-center gap-1 px-2 xl:px-2.5 py-1.5 text-[13px] font-medium tracking-normal transition-colors duration-150 rounded-full select-none whitespace-nowrap",
                isOpen || isPillHovered
                  ? "text-stone-950 font-semibold"
                  : "text-stone-700 hover:text-stone-950"
              )}
            >
              <span className="whitespace-nowrap">{item.title}</span>

              {item.badge && (
                <NavBadge badge={item.badge} className="scale-85 -ml-0.5" />
              )}

              {hasSubmenu && (
                <ChevronDown
                  className={cn(
                    "w-3 h-3 text-stone-500 transition-transform duration-200 shrink-0",
                    isOpen && "rotate-180 text-[#9E7A4A]"
                  )}
                />
              )}

              {/* Animated Floating Pill Background */}
              {isPillHovered && (
                <motion.div
                  layoutId="desktopNavPill"
                  className="absolute inset-0 bg-[#EFEAE1]/75 rounded-full -z-10 shadow-2xs border border-[#E6DFD5]/60"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
            </Link>

            {/* Render Mega Menu */}
            {item.type === "mega-menu" && item.megaMenu && (
              <NavMegaMenu
                config={item.megaMenu}
                isOpen={isOpen}
                onClose={() => {
                  setActiveMenuId(null);
                  setHoveredPillId(null);
                }}
              />
            )}

            {/* Render Standard Nested Dropdown */}
            {item.type === "dropdown" && item.dropdown && (
              <NavDropdown
                config={item.dropdown}
                isOpen={isOpen}
                onClose={() => {
                  setActiveMenuId(null);
                  setHoveredPillId(null);
                }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};
