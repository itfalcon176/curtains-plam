"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function MotorisedBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Motorised Blinds"
      badge="Smart Tech • Somfy & Tuya Automation"
      subtitle="Effortless One-Touch Remote & Smart Home Control"
      description="Experience ultimate convenience in Palm Jebel Ali & Dubai villas. Whisper-quiet motorized blinds with scheduled timers, sun sensors, and voice control."
      whatIsHeading="What are Smart Motorised Blinds?"
      whatIsText={[
        "Motorised blinds feature integrated ultra-quiet electric motors tucked inside the blind casing, allowing you to raise, lower, or tilt your shades at the push of a button, via smartphone app, or through voice commands.",
        "Equipped with Somfy, Tuya, and Zigbee wireless motors, our automated blinds seamlessly integrate into Apple HomeKit, Amazon Alexa, and Control4 smart home systems across Dubai’s finest residences.",
      ]}
      images={["/card-motorised-blinds.jpg", "/blinds-motorized-palm-jebel-ali.jpg"]}
      imageAltText={[
        "Motorised smart blinds in modern Dubai luxury residence",
        "Somfy automated roller blinds controlled via remote in villa",
      ]}
      whyNeedHeading="Why You Need Motorised Blinds in Dubai"
      whyNeedPoints={[
        "Ideal for High & Hard-to-Reach Windows: Effortlessly adjust double-height foyer or villa mezzanine windows.",
        "Automated Energy Savings: Program blinds to automatically close during peak UAE afternoon sun to keep interiors cool.",
        "Enhanced Home Security: Set holiday schedules to raise and lower blinds while away, creating a lived-in appearance.",
        "Child & Pet Safe Cordless Operation: Zero dangling chains or cords, providing complete peace of mind.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
