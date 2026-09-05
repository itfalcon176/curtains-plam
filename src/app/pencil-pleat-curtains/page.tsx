"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function PencilPleatCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Pencil Pleat Curtains"
      subtitle="Tightly Gathered Fine Pleats for Timeless Versatility & Classic Drape"
      description="Featuring a continuous header band of tightly gathered, pencil-thin folds. Pencil pleat drapes are a versatile, classic choice for bedrooms, dining areas, and traditional Dubai residences."
      whatIsHeading="What are Pencil Pleat Curtains?"
      whatIsText={[
        "Pencil Pleat Curtains get their name from the neat row of tightly gathered folds running across the top header, resembling a row of standing pencils. Constructed with woven heading tape featuring multiple hook pockets, the width can be easily adjusted during installation.",
        "This adjustable header tape makes pencil pleat drapes adaptable to various track lengths and pole styles, providing an elegant, classic finish for any window size.",
      ]}
      images={["/card-pencil-pleat-blue.jpg", "/card-pencil-pleat-oatmeal.jpg"]}
      imageAltText={["Classic Blue Pencil Pleat Curtains", "Neutral Oatmeal Pencil Pleat Drapes"]}
      whyNeedHeading="Why You Need Pencil Pleat Curtains in Dubai"
      whyNeedPoints={[
        "Adjustable Header Width: Cords in the heading tape allow fullness and width to be adjusted precisely during fitting.",
        "Timeless Traditional Finish: Dense, fine gathered pleats add warmth and texture to classic and transitional interiors.",
        "Multiple Hook Height Positions: Three-pocket heading tape allows curtains to hang flush with poles or conceal tracks completely.",
        "Budget-Friendly Custom Tailoring: Cost-effective header construction while delivering full custom-made quality.",
      ]}
    />
  );
}
