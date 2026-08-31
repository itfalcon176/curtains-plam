"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function RomanCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Roman Curtains"
      subtitle="Soft Fabric Folds Merging Modern Blind Functionality with Luxurious Drapery"
      description="Combining the warmth of fabric curtains with the space-saving operation of a blind. Roman curtains fold into crisp, horizontal pleats when raised, adding tailored sophistication to Dubai kitchens, bedrooms, and study rooms."
      whatIsHeading="What are Roman Curtains?"
      whatIsText={[
        "Roman Curtains (Roman Shades) are custom fabric window coverings that lie flat against the window frame when extended and draw up into neat, stacked horizontal pleats when raised. Operated via smooth chain control or Somfy motorized cassette, they provide clean, tailored light control.",
        "Available in cascading soft folds or crisp flat panel designs, Roman curtains can be customized with sheer, light-filtering, or 100% blackout linings to match your exact room mood.",
      ]}
      images={["/card-wave-curtains.jpg", "/card-fabric-swatches.jpg"]}
      imageAltText={["Luxury Roman Curtain", "Soft Pleated Roman Shade"]}
      whyNeedHeading="Why You Need Roman Curtains in Dubai"
      whyNeedPoints={[
        "Space-Saving Architectural Fit: Fits neatly inside window recesses without occupying floor or wall space.",
        "Luxurious Fabric Warmth: Delivers soft fabric texture and warmth where traditional hard blinds might feel cold.",
        "Custom Lining Options: Choose blackout lining for bedrooms or semi-sheer linen for living rooms and breakfast nooks.",
        "Somfy Motorization Compatibility: Operate multi-window Roman shades simultaneously with a wireless remote control.",
      ]}
    />
  );
}
