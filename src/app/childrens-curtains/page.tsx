"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function ChildrensCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Children's Curtains"
      subtitle="Playful Designs, 100% Blackout Linings & Certified Cord-Free Child Safety"
      description="Create restful, magical bedrooms and nurseries for your children. Our custom kids' curtains feature OEKO-TEX certified hypo-allergenic fabrics, 100% light-blocking blackout linings for daytime naps, and 100% cord-free safety systems."
      whatIsHeading="What are Children's Curtains?"
      whatIsText={[
        "Children's Curtains are fun, colorful, and highly functional window treatments designed specifically for kids' bedrooms, nurseries, and playrooms. Crafted with non-toxic, anti-dust-mite organic cottons and soft velvets, they create a healthy indoor sleeping environment.",
        "Equipped with thick thermal blackout linings, our children's drapes block out 100% of daytime UAE sunlight, ensuring your toddlers and children enjoy deep, uninterrupted nap times and restful nights.",
      ]}
      images={["/card-blackout-curtains.jpg", "/card-sheer-curtains.jpg"]}
      imageAltText={["Kids Nursery Blackout Curtains", "Playroom Sheer Drapes"]}
      whyNeedHeading="Why You Need Children's Curtains in Dubai"
      whyNeedPoints={[
        "100% Daytime Blackout Protection: Blocks midday sun so babies and young children can nap comfortably during the day.",
        "100% Child-Safe Cordless Design: No dangerous hanging cords or loose wires; compliant with international child safety laws.",
        "Hypo-Allergenic & OEKO-TEX Certified: Free from harmful chemical dyes, VOCs, and allergens for sensitive young lungs.",
        "Easy-Clean Washable Fabrics: Durable materials resistant to fingerprints, dust, and everyday playtime spills.",
      ]}
    />
  );
}
