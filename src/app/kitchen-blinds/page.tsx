"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function KitchenBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Kitchen Blinds"
      badge="Waterproof • Flame Retardant"
      subtitle="Moisture-Resistant, Grease-Repellent & Easy-Wipe Window Shades"
      description="Durable, high-performance kitchen window blinds tailored for Palm Jebel Ali & Dubai luxury homes. Resistant to cooking steam, grease, and moisture."
      whatIsHeading="What are Custom Kitchen Blinds?"
      whatIsText={[
        "Kitchen blinds are specialized window treatments manufactured with waterproof PVC, treated faux wood, or anodized aluminum slats engineered to handle cooking heat, steam, and splatter.",
        "Unlike standard fabric drapes that absorb food odors and oil, our custom kitchen blinds wipe clean effortlessly, maintaining a pristine, hygienic kitchen atmosphere across Dubai homes.",
      ]}
      images={["/card-kitchen-blinds-sink.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Waterproof Fauxwood Venetian Blinds over Marble Countertop and Kitchen Sink in Dubai Villa",
        "Wipeable Moisture-Resistant Roller Blinds in Modern Open-Plan Luxury Kitchen",
      ]}
      whyNeedHeading="Why You Need Kitchen Blinds in Dubai"
      whyNeedPoints={[
        "100% Moisture & Steam Proof: Will not warp, mildew, or absorb moisture from cooking or dishwashing.",
        "Grease-Repellent & Easy to Wipe: Splatters wipe away in seconds using a damp cloth.",
        "Flame Retardant Materials: Safety-tested fabrics meeting strict kitchen fire safety standards.",
        "Sunlight & Heat Control: Slats tilt to block blinding sunlight over countertops while preserving airflow.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
