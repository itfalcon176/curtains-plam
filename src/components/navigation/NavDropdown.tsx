"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownConfig, SubMenuItem } from "@/config/navigation";
import { NavIcon } from "./NavIcon";
import { NavBadge } from "./NavBadge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  config: DropdownConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  config,
  isOpen,
  onClose,
}) => {
  const [activeSubItemId, setActiveSubItemId] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-0 mt-2.5 w-84 sm:w-96 z-50 pointer-events-auto"
        >
          <div className="bg-[#FAF8F5]/98 backdrop-blur-xl border border-[#E6DFD5] rounded-2xl shadow-xl shadow-stone-950/10 p-2.5 space-y-1 relative">
            {/* Top gold line */}
            <div className="h-0.5 w-12 bg-[#C5A880] rounded-full mx-auto mb-1.5 opacity-80" />

            {config.items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isSubActive = activeSubItemId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveSubItemId(item.id)}
                  onMouseLeave={() => hasChildren && setActiveSubItemId(null)}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-center justify-between p-2.5 rounded-xl hover:bg-white transition-all duration-150 border border-transparent hover:border-[#E6DFD5]/80 hover:shadow-xs",
                      isSubActive && "bg-white border-[#E6DFD5] shadow-xs"
                    )}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200/80 flex items-center justify-center text-stone-600 group-hover:text-[#9E7A4A] group-hover:border-[#C5A880]/30 group-hover:bg-[#C5A880]/10 transition-all duration-200 shrink-0 mt-0.5">
                        <NavIcon name={item.iconName} size={15} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-stone-900 group-hover:text-[#9E7A4A] transition-colors duration-150">
                            {item.title}
                          </span>
                          {item.badge && <NavBadge badge={item.badge} />}
                        </div>
                        {item.description && (
                          <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {hasChildren && (
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#C5A880] group-hover:translate-x-0.5 transition-all duration-150 shrink-0 ml-2" />
                    )}
                  </Link>

                  {/* Level 3 Nested Submenu Flyout */}
                  {hasChildren && isSubActive && item.children && (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-0 left-full ml-2 w-72 bg-[#FAF8F5]/98 backdrop-blur-xl border border-[#E6DFD5] rounded-2xl shadow-xl p-2 space-y-1 z-50"
                    >
                      {item.children.map((subChild) => (
                        <Link
                          key={subChild.id}
                          href={subChild.href}
                          onClick={onClose}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white transition-all duration-150 group"
                        >
                          <div className="w-6 h-6 rounded-md bg-stone-100 flex items-center justify-center text-stone-600 group-hover:text-[#9E7A4A] group-hover:bg-[#C5A880]/10 shrink-0 mt-0.5">
                            <NavIcon name={subChild.iconName} size={13} />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-stone-900 group-hover:text-[#9E7A4A]">
                                {subChild.title}
                              </span>
                              {subChild.badge && (
                                <NavBadge badge={subChild.badge} />
                              )}
                            </div>
                            {subChild.description && (
                              <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                                {subChild.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
