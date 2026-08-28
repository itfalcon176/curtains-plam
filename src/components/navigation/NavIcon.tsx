"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface NavIconProps {
  name?: string;
  className?: string;
  size?: number;
}

export const NavIcon: React.FC<NavIconProps> = ({
  name,
  className = "w-4 h-4",
  size = 16,
}) => {
  if (!name) return null;

  // Type safe dynamic icon resolution through unknown cast
  const iconLookup = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ size?: number; className?: string }>
  >;

  const IconComponent = iconLookup[name];

  if (!IconComponent) {
    return <LucideIcons.CircleDot size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};
