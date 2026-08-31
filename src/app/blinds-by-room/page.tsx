"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function BlindsByRoomPage() {
  return (
    <SubMenuPageTemplate
      title="Blinds by Room & Living Spaces"
      badge="Tailored Room Solutions • Dubai"
      subtitle="Curated Window Coverings for Specific Living & Working Environments"
      description="Discover window treatments designed specifically for bedrooms, living rooms, kitchens, bathrooms, and home offices in Palm Jebel Ali & Dubai."
      whatIsHeading="Why Choose Room-Specific Window Blinds?"
      whatIsText={[
        "Every room in your Dubai home has unique lighting, humidity, and privacy requirements. Master bedrooms demand total blackout darkness, while living rooms benefit from luminous sheer daylight filtering.",
        "Our interior designers curate tailor-made blind solutions based on sunlight orientation, room function, and moisture exposure, ensuring optimal performance for every window in Palm Jebel Ali.",
      ]}
      images={["/blinds-wooden-palm-jebel-ali.jpg", "/card-zebra-blinds.jpg"]}
      imageAltText={[
        "Living room tailored blinds in Palm Jebel Ali waterfront villa",
        "Bedrooms and study window treatments in Dubai residence",
      ]}
      whyNeedHeading="Why Room-Tailored Window Solutions Matter in Dubai"
      whyNeedPoints={[
        "Optimized Light & Privacy: Blackout for bedrooms, anti-glare screen for study, waterproof for kitchen.",
        "Thermal Energy Management: Custom solar ratings matched to north, south, east, and west facing glass.",
        "Harmonized Interior Decor: Coordinated colors and materials across contiguous open-plan villa spaces.",
        "Professional In-Home Guidance: Free mobile showroom visit with experts to test swatches in your room lighting.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
