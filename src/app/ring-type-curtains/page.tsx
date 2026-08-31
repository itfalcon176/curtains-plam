"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function RingTypeCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Ring Type Curtains"
      subtitle="Decorative Metal Rings & Finials Combined with Custom Handcrafted Drapes"
      description="Pair custom tailored curtains with decorative wooden or metal curtain rings and hand-crafted finials. Ring-type drapes showcase statement curtain poles as a prominent design element in your Dubai home."
      whatIsHeading="What are Ring Type Curtains?"
      whatIsText={[
        "Ring Type Curtains hang from individual decorative rings sliding along a curtain pole. Attached to the back of the curtain header via discreet curtain hooks, the rings remain visible as a decorative hardware accent.",
        "Available in brushed brass, antique bronze, matte black, and carved hardwood finishes, ring-type curtain poles add an artisanal architectural statement above windows and French doors.",
      ]}
      images={["/card-wave-curtains.jpg", "/card-wooden-blinds.jpg"]}
      imageAltText={["Decorative Ring Header", "Custom Pole & Ring Drapes"]}
      whyNeedHeading="Why You Need Ring Type Curtains in Dubai"
      whyNeedPoints={[
        "Decorative Hardware Statement: Accentuate your interior architecture with hand-finished metal or timber curtain rods.",
        "Smooth Manual Glide: Premium nylon-lined rings glide quietly across decorative poles without scratching.",
        "Easy Maintenance & Unhooking: Quickly detach curtains for dry cleaning while leaving poles securely mounted.",
        "Custom Finial Choices: Match pole end finials to your villa door handles, lighting fixtures, and furniture accents.",
      ]}
    />
  );
}
