"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function BlackoutCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Blackout Curtains"
      subtitle="100% Light-Blocking Luxury Drapes for Total Privacy & Deep Rest in Dubai"
      description="Block 100% of harsh desert sunlight, reduce indoor room temperatures by up to 40%, and achieve pitch-black sleeping environments in your Palm Jebel Ali villa or Dubai bedroom."
      whatIsHeading="What are Blackout Curtains?"
      whatIsText={[
        "Blackout Curtains are premium heavy drapes lined with a 3-pass acrylic coating or woven with high-density black yarns. Unlike standard lined drapes, blackout curtains eliminate 100% of incoming solar rays, street lights, and glare, turning bright sunshine into total darkness instantly.",
        "In addition to light control, blackout drapes act as thermal barriers that trap air conditioning inside your living spaces while dampening outside traffic and ocean noise for optimal sleep quality.",
      ]}
      images={["/card-blackout-curtains.jpg", "/card-wave-curtains.jpg"]}
      imageAltText={["Blackout Curtains Master Bedroom", "Wave Pleat Blackout Drapes"]}
      whyNeedHeading="Why You Need Blackout Curtains in Dubai"
      whyNeedPoints={[
        "100% Solar & Daylight Elimination: Perfect for master bedrooms, nurseries, and home theater rooms exposed to intense UAE sun.",
        "Thermal Energy Savings: Reduces solar heat transfer through windows, reducing air conditioning electricity bills by up to 40%.",
        "Acoustic Sound Insulation: Heavy multi-layered fabric weaves dampen outside traffic noise, wind, and city ambient sound.",
        "UV Fabric & Furniture Defense: Prevents direct sun rays from fading your artwork, hardwood flooring, and luxury sofas.",
      ]}
    />
  );
}
