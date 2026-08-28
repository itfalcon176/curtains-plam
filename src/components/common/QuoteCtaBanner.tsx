"use client";

import React from "react";
import { AppointmentBookingSection } from "./AppointmentBookingSection";

interface QuoteCtaBannerProps {
  title?: string;
  subtitle?: string;
  defaultType?: "Curtains" | "Blinds" | "Commercial" | "Both";
}

export const QuoteCtaBanner: React.FC<QuoteCtaBannerProps> = ({
  title,
  subtitle,
  defaultType = "Curtains",
}) => {
  return (
    <AppointmentBookingSection
      title={title}
      subtitle={subtitle}
      defaultType={defaultType}
    />
  );
};
