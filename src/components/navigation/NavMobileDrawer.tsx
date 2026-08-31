"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem, NavigationConfig } from "@/config/navigation";
import { NavIcon } from "./NavIcon";
import { NavBadge } from "./NavBadge";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  X,
  ChevronDown,
  Phone,
  MapPin,
  Calendar,
  Search,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: NavigationConfig;
  onOpenSearch?: () => void;
  onOpenBooking?: () => void;
}

export const NavMobileDrawer: React.FC<NavMobileDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onOpenSearch,
  onOpenBooking,
}) => {
  const [expandedItemIds, setExpandedItemIds] = useState<Record<string, boolean>>({});
  const [expandedTabIds, setExpandedTabIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItemIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleTabExpand = (id: string) => {
    setExpandedTabIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Off-canvas Drawer Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-sm sm:max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 overflow-hidden border-r border-[#E6DFD5]"
          >
            {/* Header / Brand in Drawer */}
            <div className="p-4 border-b border-[#E6DFD5] flex items-center justify-between bg-[#F3EFEA]/80">
              <div className="flex items-center">
                {config.brand.logoImage ? (
                  <Image
                    src={config.brand.logoImage}
                    alt={config.brand.name}
                    width={160}
                    height={40}
                    priority
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-base tracking-wider text-stone-950">
                      {config.brand.logoText}
                    </span>
                    <span className="text-[9px] tracking-widest text-[#9E7A4A] font-semibold uppercase">
                      {config.brand.logoSubtitle}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="w-9 h-9 rounded-full bg-white border border-[#E6DFD5] flex items-center justify-center text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="p-4 border-b border-[#E6DFD5]/80 bg-white/60">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenSearch) onOpenSearch();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl text-stone-500 text-xs hover:border-[#C5A880] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#9E7A4A]" />
                  <span>Search curtains, blinds, fabrics...</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-stone-200/80 rounded text-stone-600 font-mono">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 divide-y divide-[#E6DFD5]/60">
              <div className="space-y-1 pb-4">
                {config.mainNav.map((item) => {
                  const isExpanded = !!expandedItemIds[item.id];
                  const hasMegaMenu = item.type === "mega-menu" && !!item.megaMenu;
                  const hasDropdown = item.type === "dropdown" && !!item.dropdown;
                  const hasChildren = hasMegaMenu || hasDropdown;

                  return (
                    <div key={item.id} className="rounded-xl overflow-hidden">
                      {/* Top Item Row */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex-1 py-2.5 px-3 text-sm font-bold text-stone-900 hover:text-[#9E7A4A] transition-colors flex items-center gap-2"
                        >
                          <span>{item.title}</span>
                          {item.badge && <NavBadge badge={item.badge} />}
                        </Link>

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            aria-label={`Toggle ${item.title} subcategories`}
                            className={cn(
                              "p-2.5 rounded-lg text-stone-500 hover:text-stone-900 transition-transform duration-200",
                              isExpanded && "rotate-180 text-[#9E7A4A]"
                            )}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Mega Menu Mobile Accordion */}
                      {hasMegaMenu && item.megaMenu && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-1 py-2 space-y-3 bg-[#F3EFEA]/60 rounded-xl border border-[#E6DFD5]/80 my-1"
                        >
                          {item.megaMenu.tabs?.map((tab) => {
                            const isTabExpanded = !!expandedTabIds[tab.id];

                            return (
                              <div key={tab.id} className="space-y-1.5">
                                <button
                                  type="button"
                                  onClick={() => toggleTabExpand(tab.id)}
                                  className="w-full flex items-center justify-between py-1.5 px-2 text-xs font-bold text-stone-800 uppercase tracking-wider bg-white/70 rounded-lg border border-[#E6DFD5]/60"
                                >
                                  <div className="flex items-center gap-2">
                                    <NavIcon name={tab.iconName} size={14} className="text-[#9E7A4A]" />
                                    <span>{tab.label}</span>
                                  </div>
                                  <ChevronDown
                                    className={cn(
                                      "w-3.5 h-3.5 text-stone-400 transition-transform duration-200",
                                      isTabExpanded && "rotate-180 text-[#9E7A4A]"
                                    )}
                                  />
                                </button>

                                {isTabExpanded && (
                                  <div className="pl-3 space-y-1 pt-1">
                                    {tab.columns?.map((col) => (
                                      <div key={col.id} className="space-y-1 mb-2">
                                        <div className="text-[10px] font-bold uppercase text-stone-500 px-2 py-0.5">
                                          {col.heading}
                                        </div>
                                        {col.items.map((subItem) => (
                                          <Link
                                            key={subItem.id}
                                            href={subItem.href}
                                            onClick={onClose}
                                            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-stone-700 hover:text-stone-950 hover:bg-white rounded-md transition-colors"
                                          >
                                            <div className="flex items-center gap-2">
                                              <NavIcon name={subItem.iconName} size={13} className="text-stone-400" />
                                              <span>{subItem.title}</span>
                                            </div>
                                            {subItem.badge && (
                                              <NavBadge badge={subItem.badge} />
                                            )}
                                          </Link>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </motion.div>
                      )}

                      {/* Dropdown Mobile Accordion */}
                      {hasDropdown && item.dropdown && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-1 py-2 space-y-1 bg-[#F3EFEA]/60 rounded-xl border border-[#E6DFD5]/80 my-1"
                        >
                          {item.dropdown.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={onClose}
                              className="flex items-center justify-between px-2.5 py-2 text-xs font-medium text-stone-800 hover:bg-white rounded-lg transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <NavIcon name={subItem.iconName} size={14} className="text-[#9E7A4A]" />
                                <span>{subItem.title}</span>
                              </div>
                              {subItem.badge && (
                                <NavBadge badge={subItem.badge} />
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Contact & Support Block */}
              <div className="pt-4 space-y-3">
                <div className="text-[11px] font-bold tracking-wider text-[#8C8275] uppercase px-2">
                  Showroom &amp; Support
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${config.topBar.phoneRaw}`}
                    className="flex items-center justify-center gap-2 p-2.5 bg-white border border-[#E6DFD5] rounded-xl text-xs font-semibold text-stone-900 hover:border-[#C5A880] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9E7A4A]" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href={`https://wa.me/${config.topBar.whatsappRaw.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="p-3 bg-white/80 border border-[#E6DFD5] rounded-xl space-y-2 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#9E7A4A] shrink-0 mt-0.5" />
                    <span>{config.topBar.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free 24h installation guarantee across UAE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sticky Action CTA */}
            <div className="p-4 bg-white border-t border-[#E6DFD5] shadow-lg">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#C5A880] to-[#B69768] text-stone-950 font-bold rounded-xl shadow-md text-xs uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{config.topBar.cta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
