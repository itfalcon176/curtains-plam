"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function WaveCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Wave Curtains"
      subtitle="Fluid, Continuous Ripple-Fold Curves for Floor-to-Ceiling Luxury Glazing"
      description="The signature curtain choice for high-end Dubai villas and Palm Jebel Ali beachfront residences. Wave curtains utilize slim ceiling tracks and special glider cords to maintain perfectly spaced, symmetrical fabric waves whether open or closed."
      whatIsHeading="What are Wave Curtains?"
      whatIsText={[
        "Wave Curtains (S-Fold / Ripple Fold) are a contemporary curtain tailoring style where fabric hangs in continuous, smooth, uniform S-shaped waves. Unlike traditional pleated curtains that bunch at the top, wave drapes flow seamlessly from ceiling to floor.",
        "Engineered with a concealed ceiling recess track and connected runner cord system, wave curtains stack back tightly when opened, leaving window glass completely clear to maximize your UAE outdoor views and natural light.",
      ]}
      images={["/card-wave-curtains-villa.jpg", "/card-wave-curtains-suite.jpg"]}
      imageAltText={["Floor-to-Ceiling Wave Pleat Curtains in Villa", "Ripple-Fold S-Wave Drapes in Luxury Master Suite"]}
      whyNeedHeading="Why You Need Wave Curtains in Dubai"
      whyNeedPoints={[
        "Symmetrical Uniform Waves: Specially engineered runners maintain crisp, continuous S-curve folds from edge to edge.",
        "Compact Stack Back: Folds neatly to the side of windows, maximizing natural sunlight and unobstructed sea views.",
        "Ceiling Recess Mounting: Integrates beautifully into architectural ceiling alcoves and ambient LED light coves.",
        "Somfy Smart Track Compatibility: Integrates effortlessly with motorized automated tracks for quiet remote control.",
      ]}
    />
  );
}
