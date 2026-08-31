import React from "react";
import { cn } from "@/lib/utils";

interface WhatsAppIconProps {
  className?: string;
  alt?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = "w-5 h-5",
  alt = "WhatsApp",
}) => {
  return (
    <img
      src="/wh icon.png"
      alt={alt}
      className={cn("inline-block shrink-0 object-contain", className)}
    />
  );
};

