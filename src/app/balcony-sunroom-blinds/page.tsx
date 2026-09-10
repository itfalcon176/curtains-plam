"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function BalconySunroomBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Balcony & Sunroom Blinds"
      badge="Outdoor Weatherproof • Heat Rejection • UV Block"
      subtitle="Heavy-Duty Outdoor Zip Screens & Sunroom Solar Roller Blinds in Dubai"
      description="Transform your Dubai balcony, patio terrace, and glass sunroom into year-round comfortable living spaces. Engineered with wind-resistant zip track channels, 99% UV-blocking solar screen fabrics, and automated Somfy motorization for Palm Jebel Ali villas and luxury high-rise apartments."
      whatIsHeading="What are Custom Balcony & Sunroom Blinds?"
      whatIsText={[
        "Balcony and sunroom blinds are specialized heavy-duty architectural window treatments engineered to withstand outdoor desert heat, high winds, dust, and intense sunlight without degrading or fading.",
        "From motorized exterior zip-track screens for open balconies to precision solar sunscreen roller shades for glass solariums and patio enclosures, these blinds reject up to 90% of ambient solar heat while preserving crystal-clear outward views of the Arabian Gulf, gardens, and Dubai cityscape.",
      ]}
      images={[
        "/card-balcony-blinds-patio.jpg",
        "/card-sunroom-glass-blinds.jpg",
      ]}
      imageAltText={[
        "Motorized Outdoor Zip Screen Balcony Blinds in Luxury Dubai Penthouse Overlooking Palm Jebel Ali",
        "Modern Glass Sunroom and Solarium Fitted with Solar Screen Roller Shades Overlooking Pool and Garden",
      ]}
      whyNeedHeading="Why You Need Balcony & Sunroom Blinds in Dubai"
      whyNeedPoints={[
        "Expands Usable Living Area Year-Round: Enclose your balcony or patio to create a breezy, shaded outdoor lounge even during warmer months.",
        "Wind-Resistant Zip-Track Technology: Secure side zip guides prevent flapping, tearing, or displacement during coastal gusts.",
        "Rejects Solar Heat & Cuts AC Load: Blocks solar thermal radiation before it penetrates interior glass doors, reducing cooling costs.",
        "Dust & Insect Protection: High-density micro-mesh keeps out desert dust, sand, and flying insects while maintaining ventilation.",
        "1-Touch Smart Automation & Wind Sensors: Somfy-powered motors automatically retract in extreme weather and deploy for optimal daytime shading.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
