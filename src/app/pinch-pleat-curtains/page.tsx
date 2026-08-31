"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function PinchPleatCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Pinch Pleat Curtains"
      subtitle="Timeless Artisanal Triple Pinch Pleats for Formal Luxury Living Rooms & Master Suites"
      description="Hand-sewn triple pinch pleat headers create structured, opulent folds that cascade down your windows. The quintessential luxury tailoring choice for grand Dubai mansions and Palm Jebel Ali villas."
      whatIsHeading="What are Pinch Pleat Curtains?"
      whatIsText={[
        "Pinch Pleat Curtains (Triple Pinch Pleat) are a classic custom drapery style where groups of three fabric folds are tightly hand-stitched together at regular intervals along the top header. This creates stiffened, permanent fan-shaped pleats that retain their rich shape permanently.",
        "Because pinch pleats use more fabric fullness (usually 2.5x to 3x window width), they create dense, luxurious fabric folds that drape with substantial weight and elegance.",
      ]}
      images={["/card-wave-curtains.jpg", "/card-fabric-swatches.jpg"]}
      imageAltText={["Pinch Pleat Header Detail", "Formal Villa Living Room"]}
      whyNeedHeading="Why You Need Pinch Pleat Curtains in Dubai"
      whyNeedPoints={[
        "Hand-Crafted Luxury Tailoring: Each triple pleat is hand-measured and stitched by master drapery artisans.",
        "Permanent Structured Folds: Retains crisp, formal vertical pleats even after years of daily opening and closing.",
        "Maximum Fabric Fullness: High 2.5x to 3x fabric ratio provides extra insulation against heat and outside noise.",
        "Ideal for Heavy Designer Fabrics: Accentuates the rich weight of European velvets, heavy silks, and damasks.",
      ]}
    />
  );
}
