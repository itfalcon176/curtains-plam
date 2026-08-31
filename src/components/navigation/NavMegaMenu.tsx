"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MegaMenuConfig } from "@/config/navigation";
import { NavIcon } from "./NavIcon";
import { NavBadge } from "./NavBadge";
import { ArrowRight, ChevronRight, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavMegaMenuProps {
  config: MegaMenuConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const NavMegaMenu: React.FC<NavMegaMenuProps> = ({
  config,
  isOpen,
  onClose,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    config.tabs?.[0]?.id || ""
  );

  const currentTab = config.tabs?.find((t) => t.id === activeTabId) || config.tabs?.[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.985 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl px-4 sm:px-6 mt-2.5 z-50 pointer-events-auto"
        >
          <div className="bg-[#FAF8F5]/98 backdrop-blur-xl border border-[#E6DFD5] rounded-2xl shadow-2xl shadow-stone-950/15 overflow-hidden transition-all duration-300">
            {/* Top Subtle Luxury Accent Bar */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-80" />

            {/* Layout: Tabs on Left + Content on Right */}
            {config.layout === "tabs" && config.tabs && (
              <div className="grid grid-cols-12 min-h-[340px]">

                {/* Left Sidebar: Tabs List */}
                <div className="col-span-3 bg-[#F3EFEA]/80 border-r border-[#E6DFD5]/80 p-4 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="px-3 py-2 text-[11px] font-semibold tracking-wider text-[#8C8275] uppercase">
                      Categories
                    </div>
                    {config.tabs.map((tab) => {
                      const isActive = tab.id === activeTabId;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onMouseEnter={() => setActiveTabId(tab.id)}
                          onClick={() => setActiveTabId(tab.id)}
                          className={cn(
                            "w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 group relative",
                            isActive
                              ? "bg-white text-stone-900 shadow-sm border border-[#E6DFD5]"
                              : "text-stone-600 hover:text-stone-900 hover:bg-white/60"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200",
                                isActive
                                  ? "bg-[#C5A880]/20 text-[#8C6D3F]"
                                  : "bg-stone-200/60 text-stone-500 group-hover:bg-[#C5A880]/10 group-hover:text-[#8C6D3F]"
                              )}
                            >
                              <NavIcon name={tab.iconName} size={16} />
                            </div>
                            <span className="font-semibold">{tab.label}</span>
                          </div>
                          {tab.badge && <NavBadge badge={tab.badge} />}
                          {isActive && (
                            <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Left Bottom Mini Note */}
                  <div className="p-3 bg-white/70 border border-[#E6DFD5]/60 rounded-xl mt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 mb-1">
                      <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Custom Tailoring</span>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      All curtains & blinds made to exact measurements in Dubai within 24–48 hours.
                    </p>
                  </div>
                </div>

                {/* Right Area: Dynamic Tab Content Columns + Promo Card */}
                <div className="col-span-9 p-6 bg-white/40 flex flex-col justify-between">
                  {currentTab && (
                    <div className="grid grid-cols-12 gap-6">
                      {/* Submenu Columns */}
                      <div
                        className={cn(
                          "grid gap-6",
                          !currentTab.promoCard || currentTab.columns?.length === 3
                            ? "col-span-12 grid-cols-3"
                            : "col-span-8 grid-cols-2"
                        )}
                      >
                        {currentTab.columns?.map((col) => (
                          <div key={col.id} className="space-y-3">
                            <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-2">
                              <h4 className="text-xs font-bold tracking-wider uppercase text-stone-900">
                                {col.heading}
                              </h4>
                              {col.headingHref && (
                                <Link
                                  href={col.headingHref}
                                  onClick={onClose}
                                  className="text-[11px] text-[#9E7A4A] font-semibold hover:underline"
                                >
                                  View All
                                </Link>
                              )}
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                              {col.items.map((item) => (
                                <Link
                                  key={item.id}
                                  href={item.href}
                                  onClick={onClose}
                                  className="group flex items-center justify-between p-2.5 rounded-xl bg-white/80 hover:bg-white border border-[#E6DFD5]/70 hover:border-[#C5A880]/60 hover:shadow-xs transition-all duration-150"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center text-stone-600 group-hover:text-[#9E7A4A] group-hover:border-[#C5A880]/40 group-hover:bg-[#C5A880]/10 transition-all duration-200 shrink-0">
                                      <NavIcon name={item.iconName} size={15} />
                                    </div>
                                    <span className="text-xs font-semibold text-stone-900 group-hover:text-[#9E7A4A] transition-colors duration-150 leading-snug">
                                      {item.title}
                                    </span>
                                  </div>


                                  {item.badge && (
                                    <div className="shrink-0 ml-2">
                                      <NavBadge badge={item.badge} />
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Promo Card (Only shown if promoCard is present) */}
                      {currentTab.promoCard && (
                        <div className="col-span-4 flex flex-col">
                          <div className="h-full bg-gradient-to-br from-[#1C1D20] to-[#2B2C30] text-stone-100 rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden border border-stone-800">
                            {/* Decorative Gold Glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A880]/15 rounded-full blur-2xl pointer-events-none" />

                            <div className="space-y-3 relative z-10">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">
                                  {currentTab.promoCard.subtitle || "Exclusive"}
                                </span>
                                {currentTab.promoCard.badge && (
                                  <NavBadge badge={currentTab.promoCard.badge} />
                                )}
                              </div>

                              <h3 className="text-base font-serif font-bold text-white leading-snug">
                                {currentTab.promoCard.title}
                              </h3>

                              <p className="text-xs text-stone-300 leading-relaxed">
                                {currentTab.promoCard.description}
                              </p>
                            </div>

                            <Link
                              href={currentTab.promoCard.href}
                              onClick={onClose}
                              className="mt-4 inline-flex items-center justify-between w-full px-4 py-2.5 bg-[#C5A880] hover:bg-[#B69768] text-stone-950 rounded-xl text-xs font-bold transition-all duration-200 group relative z-10"
                            >
                              <span>{currentTab.promoCard.buttonText}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}


                  {/* Footer Shortcuts */}
                  {config.footerLinks && config.footerLinks.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-[#E6DFD5] flex items-center justify-between flex-wrap gap-4 text-xs text-stone-600">
                      <div className="flex items-center gap-6">
                        {config.footerLinks.map((flink, idx) => (
                          <Link
                            key={idx}
                            href={flink.href}
                            onClick={onClose}
                            className="inline-flex items-center gap-1.5 font-semibold text-stone-700 hover:text-[#9E7A4A] transition-colors duration-150"
                          >
                            <NavIcon name={flink.iconName} size={14} className="text-[#C5A880]" />
                            <span>{flink.title}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="text-[11px] text-[#8C8275] italic">
                        Free delivery & 24h installation in Dubai
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
