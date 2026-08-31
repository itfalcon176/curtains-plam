"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function MotorisedCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Motorised Curtains"
      subtitle="Whisper-Quiet Smart Automated Drapery Controls for Palm Jebel Ali & Dubai Homes"
      description="Experience luxury living with automated motorized curtain tracks powered by Somfy, Tuya, and Zigbee. Control double-height living room drapes effortlessly via smartphone app, voice command, or sunrise schedules."
      whatIsHeading="What are Motorised Curtains?"
      whatIsText={[
        "Motorised Curtains combine high-end custom drapery with quiet electric motor tracks. Powered by rechargeable lithium batteries or concealed hardwired mains power, these motorized systems allow you to open or close heavy floor-to-ceiling drapes at the touch of a button.",
        "Equipped with smart home connectivity, motorized tracks sync seamlessly with Apple HomeKit, Amazon Alexa, Google Assistant, Control4, and Crestron, giving you remote curtain control from anywhere in the world.",
      ]}
      images={["/blinds-motorized-palm-jebel-ali.jpg", "/card-motorised-blinds.jpg"]}
      imageAltText={["Motorized Smart Curtain Track", "Somfy Automated Drapes"]}
      whyNeedHeading="Why You Need Motorised Curtains in Dubai"
      whyNeedPoints={[
        "Effortless Control for High Windows: Easily open double-height 6-meter living room drapes without manual tugging.",
        "Smart Home App & Voice Integration: Open or close curtains using Siri, Alexa, Google Voice, or smartphone apps.",
        "Automated Sun & Heat Timers: Schedule curtains to close during peak UAE midday heat to keep your indoor temperature cool.",
        "Whisper-Quiet Operation: Ultra-silent electric motors engineered for smooth, vibration-free gliding.",
      ]}
    />
  );
}
