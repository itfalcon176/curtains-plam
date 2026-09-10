"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function OfficeStudyBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Office & Study Blinds"
      badge="Anti-Glare • High Focus • Motorized Smart Control"
      subtitle="Precision Light-Diffusing Blinds for Executive Home Offices & Study Rooms in Dubai"
      description="Boost productivity and comfort with custom-tailored office and study blinds. Engineered with anti-glare screen fabrics, micro-adjustable slats, and thermal insulation to eliminate monitor reflections and keep your workspace cool across Palm Jebel Ali and Dubai residences."
      whatIsHeading="What are Custom Office & Study Blinds?"
      whatIsText={[
        "Office and study blinds are specialized ergonomic window treatments crafted to balance optimal daylight illumination with zero computer screen glare, protecting your eyes during long working and studying hours.",
        "Whether you prefer sleek anti-glare solar screen roller shades, architectural aluminum venetian slats, or motorized dual zebra shades, our office window coverings allow you to work comfortably without eye fatigue while enjoying panoramic outdoor views.",
      ]}
      images={[
        "/card-office-study-desk.jpg",
        "/card-aluminium-venetian-detail.jpg",
      ]}
      imageAltText={[
        "Modern Executive Home Office in Dubai Villa with Anti-Glare Sunscreen Blinds and Walnut Desk",
        "Precision Slatted Venetian Blinds in Study Workspace Overlooking Dubai Skyline",
      ]}
      whyNeedHeading="Why You Need Specialized Office & Study Blinds in Dubai"
      whyNeedPoints={[
        "Eliminates Computer & Monitor Glare: High-performance micro-perforated mesh prevents annoying sunlight reflections on laptops and screens.",
        "Reduces Eye Strain & Fatigue: Softly diffuses bright desert sunlight into balanced, productive natural ambient light.",
        "Thermal Heat Rejection: Keeps home office temperatures comfortable and reduces air conditioning demands during peak work hours.",
        "Acoustic Dampening & Privacy: Blocks outside ambient noise and provides complete privacy for confidential video calls and meetings.",
        "Smart Voice & App Automation: Effortlessly adjust light levels with Alexa, Siri, or scheduled timers without leaving your chair.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
