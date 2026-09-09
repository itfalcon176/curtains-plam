"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function BlackoutBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Blackout Blinds"
      badge="100% Light Blocking • Deep Privacy"
      subtitle="Complete Room Darkening & Thermal Insulation"
      description="Enjoy total darkness and restful sleep in Palm Jebel Ali & Dubai. High-performance multi-layer blackout blinds engineered for bedrooms, home cinemas, and nurseries."
      whatIsHeading="What are Custom Blackout Blinds?"
      whatIsText={[
        "Blackout blinds are heavy-duty, light-tight window treatments designed with dense opaque fabrics and thermally coated linings that prevent 100% of external sunlight and artificial street glare from penetrating your room.",
        "Ideal for Dubai’s intense sunny climate, our custom blackout blinds feature side retention channels and cassette headboxes to eliminate light gaps along window edges, guaranteeing a pitch-black sleeping environment day or night.",
      ]}
      images={["/card-blackout-blinds-bedroom.jpg", "/card-blackout-blinds-cassette.jpg"]}
      imageAltText={[
        "100% Blackout Roller Blinds in Luxury Dubai Master Bedroom",
        "Motorized Blackout Roller Blind with Light-Locking Cassette and Side Tracks",
      ]}
      whyNeedHeading="Why You Need Blackout Blinds in Dubai"
      whyNeedPoints={[
        "Guaranteed Deep Sleep & Daytime Rest: Essential for night-shift professionals, young children, and midday nap routines.",
        "Maximized Thermal Insulation: High thermal resistance layer cuts heat transfer, keeping bedrooms significantly cooler.",
        "Home Cinema & Media Room Optimization: Prevents TV screen glare and creates authentic dark theater ambience.",
        "Total Nighttime Privacy: Zero silhouette visibility from outside luxury Palm Jebel Ali beachfront villas.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
