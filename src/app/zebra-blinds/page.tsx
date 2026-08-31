"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function ZebraBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Zebra Blinds (Day & Night Shades)"
      badge="Trending • Dual Light Control"
      subtitle="Alternating Sheer & Solid Stripes for Versatile Daylight Tuning"
      description="Dubai’s favorite contemporary window shade. Effortlessly adjust privacy and sunlight in Palm Jebel Ali villas with dual-layer sliding fabric stripes."
      whatIsHeading="What are Zebra Blinds?"
      whatIsText={[
        "Zebra blinds (also known as vision blinds or day-and-night shades) feature a dual-layer fabric loop with alternating horizontal bands of sheer mesh and solid light-blocking fabric.",
        "By gently sliding the fabric layers, you can align the solid bands for complete room privacy, align the sheer bands to let in soft diffused daylight, or raise the blind entirely into its modern cassette housing.",
      ]}
      images={["/card-zebra-blinds.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Contemporary zebra blinds in Palm Jebel Ali living room",
        "Day and night dual stripe zebra blinds in Dubai apartment",
      ]}
      whyNeedHeading="Why You Need Zebra Blinds in Dubai"
      whyNeedPoints={[
        "Instant Dual Light Adjustability: Switch between privacy, soft glare-free daylight, and full view without raising the blind.",
        "Modern Geometric Aesthetic: Adds a clean, contemporary linear design element to living rooms and modern kitchens.",
        "Dust & Moisture Resistant: Treated polyester fabrics that resist Dubai humidity and require minimal maintenance.",
        "Manual & Smart Motorized Options: Smooth chain mechanism or wireless Somfy motorization for single-touch control.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
