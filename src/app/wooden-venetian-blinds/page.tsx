"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function WoodenVenetianBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Wooden Venetian Blinds"
      badge="Natural Hardwood • Handcrafted Luxury"
      subtitle="Authentic Basswood Slats with Warm Rich Grain Stains"
      description="Handcrafted real wood blinds that bring organic warmth, elegance, and natural texture to Palm Jebel Ali & Dubai luxury villas. Custom 50mm and 35mm slats."
      whatIsHeading="What are Wooden Venetian Blinds?"
      whatIsText={[
        "Wooden Venetian blinds are premium horizontal window slats crafted from sustainably sourced real basswood or high-grade hardwood. They feature rich, warm wood grain stains and hand-finished decorative cloth ladder tapes.",
        "Engineered with kiln-dried wood to prevent warping under UAE heat, our wooden blinds provide organic luxury, thermal insulation, and timeless sophistication for executive offices, living rooms, and master bedrooms.",
      ]}
      images={["/card-wooden-blinds.jpg", "/blinds-wooden-palm-jebel-ali.jpg"]}
      imageAltText={[
        "Authentic real wood basswood Venetian blinds in Dubai villa",
        "Rich warm grain wooden window slats in luxury living room",
      ]}
      whyNeedHeading="Why You Need Wooden Venetian Blinds in Dubai"
      whyNeedPoints={[
        "Natural Organic Warmth: Adds timeless natural timber elegance to modern and classic villa interiors.",
        "Superior Thermal Insulation: Wood naturally insulates against heat, keeping villa interiors noticeably cooler.",
        "UV Anti-Warp Treatment: Kiln-dried basswood treated with protective UV coats to prevent warping or color fading.",
        "Custom Slat & Tape Options: Choose 35mm or 50mm slats with matching or contrasting woven cotton tapes.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
