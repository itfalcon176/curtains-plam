"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationConfig } from "@/config/navigation";
import { NavIcon } from "./NavIcon";
import { NavBadge } from "./NavBadge";
import { Search, X, ArrowRight, CornerDownLeft, Compass } from "lucide-react";

interface NavSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: NavigationConfig;
}

interface SearchableItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  category: string;
  iconName?: string;
}

export const NavSearchModal: React.FC<NavSearchModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [query, setQuery] = useState("");

  // Flatten all menu items for instantaneous searching
  const allSearchableItems = useMemo(() => {
    const list: SearchableItem[] = [];

    config.mainNav.forEach((item) => {
      list.push({
        id: item.id,
        title: item.title,
        href: item.href,
        category: "Main Menu",
      });

      if (item.type === "mega-menu" && item.megaMenu?.tabs) {
        item.megaMenu.tabs.forEach((tab) => {
          tab.columns?.forEach((col) => {
            col.items.forEach((subItem) => {
              list.push({
                id: `${item.id}-${tab.id}-${subItem.id}`,
                title: subItem.title,
                href: subItem.href,
                description: subItem.description,
                category: `${item.title} › ${tab.label}`,
                iconName: subItem.iconName,
              });
            });
          });
        });
      }

      if (item.type === "dropdown" && item.dropdown?.items) {
        item.dropdown.items.forEach((subItem) => {
          list.push({
            id: `${item.id}-${subItem.id}`,
            title: subItem.title,
            href: subItem.href,
            description: subItem.description,
            category: item.title,
            iconName: subItem.iconName,
          });

          if (subItem.children) {
            subItem.children.forEach((child) => {
              list.push({
                id: `${item.id}-${subItem.id}-${child.id}`,
                title: child.title,
                href: child.href,
                description: child.description,
                category: `${item.title} › ${subItem.title}`,
                iconName: child.iconName,
              });
            });
          }
        });
      }
    });

    return list;
  }, [config]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return allSearchableItems.slice(0, 8);
    }
    const q = query.toLowerCase().trim();
    return allSearchableItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [allSearchableItems, query]);

  // Global shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl border border-[#E6DFD5] shadow-2xl overflow-hidden z-10"
          >
            {/* Input bar */}
            <div className="flex items-center gap-3 p-4 border-b border-[#E6DFD5] bg-white">
              <Search className="w-5 h-5 text-[#9E7A4A]" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search curtains, motorized blinds, pleat styles, fabrics..."
                className="w-full bg-transparent text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden font-medium"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-md text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results list */}
            <div className="p-3 max-h-96 overflow-y-auto space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400 flex items-center justify-between">
                <span>{query.trim() ? "Search Results" : "Quick Suggestions"}</span>
                <span className="text-[10px] font-normal text-stone-400 lowercase">
                  {filteredItems.length} found
                </span>
              </div>

              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-stone-500 text-xs">
                  No curtains or blinds matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white hover:border hover:border-[#E6DFD5] transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-500 group-hover:text-[#9E7A4A] group-hover:bg-[#C5A880]/10 transition-colors shrink-0">
                        <NavIcon name={item.iconName || "Layers"} size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#9E7A4A] transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-stone-400 truncate">
                          {item.category}
                          {item.description && ` • ${item.description}`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-[#9E7A4A] shrink-0 ml-2">
                      <span className="hidden sm:inline">Go</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#F3EFEA]/80 border-t border-[#E6DFD5] text-[11px] text-stone-500 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Search through all bespoke categories and services</span>
              </div>
              <kbd className="px-2 py-0.5 bg-white border border-[#E6DFD5] rounded text-[10px] text-stone-600 font-mono">
                ESC to close
              </kbd>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
