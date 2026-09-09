"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function CushionsAccessoriesPage() {
  return (
    <SubMenuPageTemplate
      title="Cushions & Soft Furnishings"
      subtitle="Bespoke Handcrafted Cushions, Bolsters & Fabric Accents Tailored in Dubai"
      description="Harmonize your living room and bedroom interiors with custom-tailored luxury cushions and soft furnishings. Designed to perfectly complement your curtains, upholstery, and color palette across Dubai residences."
      whatIsHeading="What are Bespoke Cushions & Soft Furnishings?"
      whatIsText={[
        "Our bespoke soft furnishing atelier creates made-to-measure decorative cushions, bolster pillows, bed runners, and custom throws using the identical high-end European fabrics as your luxury curtains.",
        "From sumptuous crushed velvets and woven jacquards to organic Belgian linens and lustrous silks, each piece is handcrafted with custom piping, contrast flanges, French seams, and plush duck feather or hypo-allergenic microfibre inserts for lasting comfort and shape retention.",
      ]}
      images={[
        "/card-bespoke-luxury-cushions.jpg",
        "/card-custom-sofa.jpg",
      ]}
      imageAltText={[
        "Curated Luxury Velvet & Silk Designer Cushions on Living Room Sofa",
        "Bespoke Upholstered Furniture with Coordinated Throw Pillows in Dubai Villa",
      ]}
      whyNeedHeading="Why Invest in Custom Cushions & Furnishings in Dubai?"
      whyNeedPoints={[
        "Flawless Interior Cohesion: Match your throw cushions and runners exactly with your bespoke curtains and villa color scheme.",
        "Premium Filling Options: Choose between ultra-plush cruelty-free natural duck down or high-density hypoallergenic fiber fills.",
        "Custom Shapes & Tailored Trims: Tailored in square, lumbar, cylindrical bolster, or round profiles with corded borders and decorative trims.",
        "UV & Fade Resistant Fabrics: Specialized European textiles engineered to withstand strong UAE sunlight without color degradation.",
      ]}
      categoryParent={{ label: "Curtains", href: "/curtains" }}
    />
  );
}
