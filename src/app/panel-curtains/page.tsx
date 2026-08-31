"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function PanelCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Panel Curtains"
      subtitle="Sleek Sliding Fabric Panels Ideal for Large Glass Patio Doors & Room Dividers"
      description="Modern flat fabric panels sliding smoothly along multi-channel aluminum ceiling tracks. Panel curtains provide a minimalist, Japanese-inspired window treatment for wide patio doors, balcony glass, and open-plan room division in Dubai."
      whatIsHeading="What are Panel Curtains?"
      whatIsText={[
        "Panel Curtains (Japanese Sliding Panels) consist of wide, flat fabric panels suspended from a multi-track aluminum channel system. When operated, the panels glide smoothly past one another, stacking neatly behind each other when open.",
        "Ideal for floor-to-ceiling glass sliding doors, wide balcony entrances, and flexible open-plan room dividers, panel curtains offer a clean, architectural alternative to traditional draped fabric.",
      ]}
      images={["/card-sheer-curtains.jpg", "/card-commercial-office.jpg"]}
      imageAltText={["Sliding Panel Curtains", "Patio Door Panel System"]}
      whyNeedHeading="Why You Need Panel Curtains in Dubai"
      whyNeedPoints={[
        "Perfect for Wide Glazing: Glides effortlessly across expansive 6-meter villa patio sliding doors and balcony glass.",
        "Minimalist Architectural Appearance: Flat, wrinkle-free fabric panels maintain clean modern lines.",
        "Flexible Room Partitioning: Excellent for dividing open-plan living areas or creating private study spaces.",
        "Low Maintenance & Easy Care: Weight bars ensure flat drape; fabric panels detach quickly for cleaning.",
      ]}
    />
  );
}
