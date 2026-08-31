"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function GymCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Gym & Fitness Centre Curtains"
      badge="Moisture & UV Resistant • Heavy-Duty"
      subtitle="Acoustic Partition Drapes & High-Impact Sunscreen Blinds"
      description="Tailored window screens and space divider drapes engineered for commercial fitness clubs, wellness spas, and luxury residential gymnasiums in Palm Jebel Ali & Dubai."
      whatIsHeading="What are Gym & Wellness Facility Window Coverings?"
      whatIsText={[
        "Gym and fitness centre curtains are high-performance window shades and space dividing drapes specifically designed to withstand humidity, sweat, frequent cleaning, and high sound levels typical of modern fitness spaces.",
        "Our specialized solar screen blinds block intense UAE sunlight and glare while preserving outdoor ocean views for gym-goers, creating an energized workout environment with reduced HVAC cooling load.",
      ]}
      images={["/card-roller-blinds.jpg", "/card-motorised-blinds.jpg"]}
      imageAltText={[
        "Modern fitness centre sunscreen roller blinds in Dubai",
        "Acoustic partition gym curtains in Palm Jebel Ali wellness resort",
      ]}
      whyNeedHeading="Why Dubai Fitness Clubs & Spas Require Commercial Gym Curtains"
      whyNeedPoints={[
        "Moisture & Sweat Resistant: Antimicrobial synthetic fabrics that resist mold, odor retention, and moisture damage.",
        "Anti-Glare & Heat Blocking: Filters harsh glare off fitness equipment displays while slashing indoor temperature.",
        "Acoustic Sound Dampening: Heavy fabric partitions that absorb loud music, weight drop impacts, and echoes.",
        "Wipe-Clean Maintenance: Easily sanitized with standard fitness equipment cleaning agents without fabric degradation.",
      ]}
      categoryParent={{ label: "Commercial", href: "/office-blinds-and-curtains" }}
    />
  );
}
