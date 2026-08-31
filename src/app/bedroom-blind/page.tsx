"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function BedroomBlindPage() {
  return (
    <SubMenuPageTemplate
      title="Bedroom Blinds"
      badge="Restful Sleep • Thermal Comfort"
      subtitle="Maximum Darkening & Acoustic Insulation for Master Suites"
      description="Create a peaceful sleeping sanctuary in Palm Jebel Ali & Dubai. Specialized blackout roller shades, Roman drapes, and automated blinds for bedrooms."
      whatIsHeading="What are Custom Bedroom Blinds?"
      whatIsText={[
        "Bedroom blinds are purpose-engineered window treatments designed to prioritize total sleep quality, sound insulation, and thermal comfort in private master suites and guest rooms.",
        "Custom tailored in multi-layer blackout fabrics with cassette side tracks, our bedroom blinds block out 100% of Dubai's morning sun and city light pollution, ensuring uninterrupted rest.",
      ]}
      images={["/card-blackout-curtains.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Luxury master bedroom blackout blinds in Palm Jebel Ali villa",
        "Automated bedroom window shades in Dubai residence",
      ]}
      whyNeedHeading="Why You Need Custom Bedroom Blinds in Dubai"
      whyNeedPoints={[
        "Complete Room Darkening: Eliminates 100% of morning sun rays for refreshing sleep at any hour.",
        "Acoustic Noise Reduction: Dense fabric layers absorb outdoor coastal and neighborhood sound.",
        "Thermal Energy Savings: Keeps bedroom temperature cool, reducing air conditioning load during hot nights.",
        "Smart Remote & Voice Scheduling: Program blinds to raise gently at your preferred wakeup time.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
