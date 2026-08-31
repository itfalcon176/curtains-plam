"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function SheerCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Sheers Curtains"
      subtitle="Airy, Luminous Drapery Providing Soft Daylight Diffusion & Daytime Privacy"
      description="Elevate your living room aesthetics with ethereal floating voiles, Belgian linen sheers, and translucent wave drapes designed for panoramic sea view glazing in Palm Jebel Ali & Dubai."
      whatIsHeading="What are Sheer Curtains?"
      whatIsText={[
        "Sheer Curtains are lightweight, translucent fabric drapes crafted from fine linen voiles, organza, or textured weaves. They soften harsh direct UAE sunlight into a soothing ambient glow while preserving your outdoor view of the Dubai skyline, sea, or garden.",
        "Sheer curtains provide Daytime Privacy by preventing outsiders from seeing inside during daylight hours, while allowing natural breeze and luminous warmth to fill your architectural spaces.",
      ]}
      images={["/card-sheer-curtains.jpg", "/curtains-wave-palm-jebel-ali.jpg"]}
      imageAltText={["Luminous Sheer Curtains", "Beachfront Villa Sheers"]}
      whyNeedHeading="Why You Need Sheer Curtains in Dubai"
      whyNeedPoints={[
        "Soft Daylight Diffusion: Filters intense Dubai sun rays into a warm, glare-free ambient glow without darkening your rooms.",
        "Daytime Privacy Barrier: Enjoy your outdoor pool or beachfront view while ensuring people outside cannot see indoors.",
        "Architectural Elegance: Creates graceful, floor-to-ceiling vertical waves that enhance ceiling height and room spaciousness.",
        "Ideal Layering Partner: Pairs beautifully on dual tracks behind blackout drapes for complete day-to-night lighting versatility.",
      ]}
    />
  );
}
