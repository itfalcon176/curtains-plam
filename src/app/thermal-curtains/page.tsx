"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function ThermalCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Thermal Curtains"
      subtitle="Energy-Saving Thermal Insulation to Shield Your Home from Extreme UAE Summer Heat"
      description="Engineered specifically for the intense United Arab Emirates climate. Our thermal insulating curtains feature high-density thermal linings that block external solar heat radiant transfer, keeping indoor room temperatures cool and comfortable."
      whatIsHeading="What are Thermal Curtains?"
      whatIsText={[
        "Thermal Curtains are specialized insulated window drapes featuring a multi-layered thermal backing or high-density woven interlining. Designed to trap a layer of insulating air between your window glass and living room, they prevent outside ambient heat from radiating indoors.",
        "In addition to heat blocking during hot Dubai summer months, thermal curtains block 100% of solar UV rays, protect interior furnishings, and significantly cut down AC power consumption.",
      ]}
      images={["/card-blackout-curtains.jpg", "/curtains-wave-palm-jebel-ali.jpg"]}
      imageAltText={["Thermal Insulated Curtains", "Beachfront Villa Thermal Drapes"]}
      whyNeedHeading="Why You Need Thermal Curtains in Dubai"
      whyNeedPoints={[
        "Up to 40% AC Energy Reduction: Cuts heat gain through large glass windows, reducing air conditioning workloads.",
        "100% UV Protection Barrier: Shields carpets, hardwood floors, and luxury sofas from sun bleaching and heat damage.",
        "Acoustic Noise Reduction: Dense multi-layer construction muffles outside ambient traffic and wind noise.",
        "All-Year Indoor Comfort: Maintains consistent cool indoor room temperatures across Palm Jebel Ali & Dubai.",
      ]}
    />
  );
}
