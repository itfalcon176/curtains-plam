"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function AccessoriesPage() {
  return (
    <SubMenuPageTemplate
      title="Blinds Accessories & Cassettes"
      subtitle="Fabric-Wrapped Pelmets, Concealed Fascias & Child-Safe Wand Controls in Dubai"
      description="Refine your window aesthetics with precision accessories, color-matched aluminum cassettes, fabric-wrapped pelmets, bottom bars, and child-safe cordless control systems in Dubai."
      whatIsHeading="What are Blinds Accessories & Cassettes?"
      whatIsText={[
        "Blinds accessories and top cassettes provide a clean, architecturally finished appearance to roller blinds, zebra shades, and venetian blinds by fully concealing the top mechanism roll and mounting brackets.",
        "Available in curved, square, and flush-mounted profiles in powder-coated white, anodized silver, matte black, champagne bronze, or matching fabric wrap inserts, cassettes eliminate light leakage at the top of windows.",
      ]}
      images={[
        "/card-poles-motorized-tracks.jpg",
        "/card-roller-blinds.jpg",
      ]}
      imageAltText={[
        "Modern Concealed Cassette Roller Blinds Track System in Dubai Home",
        "Designer Roller Blinds with Matching Enclosed Cassette Top Bar",
      ]}
      whyNeedHeading="Why Add Premium Accessories & Cassettes?"
      whyNeedPoints={[
        "Eliminates Top Light Leaks: Fully encloses the roll tube, preventing halo light slippage above blackout blinds.",
        "Architectural Integrated Finish: Creates a sleek minimalist silhouette that hides brackets and mounting screws.",
        "Child & Pet Safety Compliant: Cordless spring-assisted mechanisms and magnetic wand controls remove hazardous dangling cords.",
        "Color-Matched & Fabric Inlays: Custom finished to coordinate seamlessly with your wall paint and blind fabric.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
