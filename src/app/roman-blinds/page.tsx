"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function RomanBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Roman Blinds"
      badge="Tailored Elegance • Soft Pleats"
      subtitle="Clean Architectural Folds with Soft Fabric Luxury"
      description="Combines the rich texture of custom curtains with the compact space-saving utility of blinds. Custom tailored in Dubai for Palm Jebel Ali luxury homes."
      whatIsHeading="What are Custom Roman Blinds?"
      whatIsText={[
        "Roman blinds are sophisticated fabric window coverings that fold smoothly into neat horizontal pleats when raised, and lay flat into a smooth, elegant fabric panel when drawn down.",
        "Crafted with premium European linens, structured cottons, and opulent velvets, our custom Roman blinds offer a warmer, softer architectural feel than traditional hard blinds while maintaining compact room proportions.",
      ]}
      images={["/card-sheer-curtains.jpg", "/card-blackout-curtains.jpg"]}
      imageAltText={[
        "Luxury tailored linen Roman blinds in Dubai living room",
        "Custom blackout fabric Roman shade in Palm Jebel Ali villa",
      ]}
      whyNeedHeading="Why You Need Roman Blinds in Dubai"
      whyNeedPoints={[
        "Architectural Softness & Warmth: Brings rich textile texture to dining rooms, bedrooms, and study spaces.",
        "Custom Thermal & Light Linings: Available with translucent daylight, blackout, or energy-saving thermal linings.",
        "Space-Saving Luxury: Perfect for windows where full floor-length curtains are impractical or space is limited.",
        "Precision Tailoring: Hand-stitched with hidden dowels ensuring crisp, perfectly balanced horizontal folds every time.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
