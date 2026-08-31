"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function RollerBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Roller Blinds"
      badge="Top Rated • Modern Minimalist"
      subtitle="Sleek, Durable & Precision-Engineered Window Rollers"
      description="Dubai’s premier custom roller blinds tailored for modern villas in Palm Jebel Ali & luxury apartments. Available in manual chain and Somfy motorized automation."
      whatIsHeading="What are Custom Roller Blinds?"
      whatIsText={[
        "Roller blinds are sleek, minimalist window coverings featuring a single piece of premium fabric wrapped neatly around a top casing or aluminum tube. When raised, they roll up tightly to reveal panoramic window views with clean aesthetic simplicity.",
        "Engineered with anti-fray woven textiles, UV-blocking solar screens, and total blackout backings, our custom roller blinds provide precise daylight control for bedrooms, living rooms, and office towers across Dubai.",
      ]}
      images={["/card-roller-blinds.jpg", "/blinds-motorized-palm-jebel-ali.jpg"]}
      imageAltText={[
        "Modern luxury villa roller blinds in Palm Jebel Ali Dubai",
        "Sleek motorized roller shades installed in living room",
      ]}
      whyNeedHeading="Why You Need Custom Roller Blinds in Dubai"
      whyNeedPoints={[
        "Superior UAE Heat & Glare Insulation: Blocks up to 99% of damaging UV rays, protecting luxury furniture and flooring.",
        "Minimalist Architectural Aesthetic: Tightly rolls away to maximize natural coastal views and clean room lines.",
        "Versatile Light Control Options: Choose translucent daylight filtering, privacy screen mesh, or total room blackout.",
        "Smart Remote & App Motorization: Effortless control via Somfy, Alexa, Google Assistant, or smartphone app.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
