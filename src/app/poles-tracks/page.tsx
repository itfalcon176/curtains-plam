"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function PolesTracksPage() {
  return (
    <SubMenuPageTemplate
      title="Poles & Motorized Tracks"
      subtitle="Heavy-Duty Silent Glide Tracks & Designer Curtain Poles for Palm Jebel Ali & Dubai Villas"
      description="Upgrade your drapery with precision-engineered curtain poles and smart motorized tracks in Dubai. From concealed flush-ceiling recessed tracks to handcrafted brushed brass and matte black poles, experience effortless glide and whisper-quiet performance."
      whatIsHeading="What are Designer Poles & Motorized Curtain Tracks?"
      whatIsText={[
        "Curtain Poles and Motorized Tracks serve as the structural backbone of every luxury window dressing. High-grade architectural aluminum tracks allow heavy blackout and velvet drapes to glide silently with zero friction, whether mounted directly onto ceilings or hidden inside plaster recesses.",
        "Our bespoke decorative curtain pole collection features premium finishes including champagne gold, brushed brass, antique bronze, matte black, and chrome with custom hand-carved finials, making them a striking interior design feature.",
      ]}
      images={[
        "/card-poles-motorized-tracks.jpg",
        "/card-curtain-poles-hardware.jpg",
      ]}
      imageAltText={[
        "Modern Recessed Motorized Curtain Track System in Dubai Penthouse",
        "Handcrafted Luxury Curtain Pole with Brushed Brass Rings and Ornate Finial",
      ]}
      whyNeedHeading="Why Choose Premium Poles & Tracks in Dubai?"
      whyNeedPoints={[
        "Engineered for Heavy Double-Height Drapes: Built with aircraft-grade aluminum alloy to support tall, multi-layered curtains without bowing or bending.",
        "Whisper-Quiet Glide Technology: Low-friction wheeled runners and silicone-coated internal channels guarantee silent, fluid movement.",
        "Flush Recessed & Curved Bay Solutions: Custom bending for bay windows, curved glass facades, and architectural ceiling coves.",
        "Smart Somfy & Zigbee Automation: Seamless integration with motorized rail motors for remote and voice-controlled drapery.",
      ]}
      categoryParent={{ label: "Curtains", href: "/curtains" }}
    />
  );
}
