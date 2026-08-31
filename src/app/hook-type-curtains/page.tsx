"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function HookTypeCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Hook Type Curtains"
      subtitle="Adjustable Concealed Header Hooks for Recessed Ceiling Tracks & Custom Pleats"
      description="Tailored with adjustable ratcheted plastic or metal curtain hooks, hook-type drapes are ideal for ceiling-recessed tracks, pelmets, and classic decorative curtain rods across Dubai."
      whatIsHeading="What are Hook Type Curtains?"
      whatIsText={[
        "Hook Type Curtains utilize specialized drapery heading tape or pin hooks inserted directly into the back top header of the curtain. This allows the hooks to remain completely hidden from view while attaching securely to track runners or pole rings.",
        "Equipped with multi-position height-adjustable hooks, these drapes allow precision leveling so your curtains hover exactly 5mm above your finished flooring or marble tiles with absolute perfection.",
      ]}
      images={["/card-blackout-curtains.jpg", "/card-wave-curtains.jpg"]}
      imageAltText={["Concealed Hook Header", "Custom Track Drapes"]}
      whyNeedHeading="Why You Need Hook Type Curtains in Dubai"
      whyNeedPoints={[
        "Height Precision Adjustment: Ratcheted hooks allow millimeter-level height tuning after hanging to compensate for uneven floors.",
        "Concealed Hardware Aesthetic: Tracks and hooks remain 100% hidden behind the fabric header for a clean, tailored finish.",
        "Versatile Track Compatibility: Mounts effortlessly onto silent manual aluminum tracks, motorized tracks, or decorative ring poles.",
        "Easy Removal for Cleaning: Simple to unhook and re-hang when performing annual drapery steam cleaning or dry cleaning.",
      ]}
    />
  );
}
