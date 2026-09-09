"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function SmartCurtainsSolutionsPage() {
  return (
    <SubMenuPageTemplate
      title="Smart Home Curtain Solutions"
      subtitle="Intelligent Somfy, Tuya & Zigbee Motorized Automation with App & Voice Integration"
      description="Transform your Palm Jebel Ali villa or Dubai penthouse into an intelligent smart sanctuary with automated curtain solutions. Schedule opening with sunrise, trigger thermal cooling during desert heatwaves, and control drapes effortlessly with Apple HomeKit, Alexa, or Google Assistant."
      whatIsHeading="What are Smart Home Curtain Solutions?"
      whatIsText={[
        "Smart Curtain Solutions combine whisper-quiet precision electric motors with IoT smart home connectivity. With built-in Wi-Fi, Zigbee 3.0, and RF receivers, your drapery synchronizes directly into your centralized home automation system—whether that's Control4, Crestron, KNX, Apple Home, or Tuya Smart.",
        "Equipped with intelligent light sensors and sunrise/sunset timer routines, smart curtains automate energy efficiency by closing during Dubai's peak UV hours to preserve cool indoor air conditioning and protect fine furniture from sun fading.",
      ]}
      images={[
        "/card-smart-home-curtains.jpg",
        "/card-motorised-curtains-living.jpg",
      ]}
      imageAltText={[
        "Modern Dubai Smart Home Living Room with Smartphone App Controlling Motorized Curtains",
        "Floor-to-Ceiling Motorized Wave Curtains with Remote Control in Luxury Penthouse",
      ]}
      whyNeedHeading="Why You Need Smart Curtain Solutions in Dubai?"
      whyNeedPoints={[
        "Automated Climate & Energy Savings: Lowers cooling bills by automatically closing drapes when external temperatures spike.",
        "Voice & Mobile App Control: Command your curtains effortlessly with 'Hey Siri, close the salon curtains' or via iOS and Android apps.",
        "Rechargeable Wireless & Mains Hardwired: Choose between concealed 6-month rechargeable lithium battery motors or 220V hardwired mains.",
        "Vacation Presence Simulation: Schedule random curtain movements while traveling abroad to enhance home security.",
      ]}
      categoryParent={{ label: "Curtains", href: "/curtains" }}
    />
  );
}
