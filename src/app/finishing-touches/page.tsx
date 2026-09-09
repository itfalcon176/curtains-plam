"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function FinishingTouchesPage() {
  return (
    <SubMenuPageTemplate
      title="Finishing Touches & Tiebacks"
      subtitle="Handcrafted Tassel Tiebacks, Brass Holdbacks & Architectural Draping Trims"
      description="Add an opulent final flourish to your curtains with our curated range of luxury tiebacks, magnetic clasps, solid brass holdbacks, and artisan cord trims handcrafted for Dubai luxury villas and penthouses."
      whatIsHeading="What are Curtain Finishing Touches & Tiebacks?"
      whatIsText={[
        "Curtain tiebacks and holdbacks are decorative hardware and textile elements that hold your drapery gracefully to the side, framing panoramic outdoor views and creating elegant soft cascades in living and dining rooms.",
        "From intricate hand-knotted silk tassels and braided cord ropes to minimalist brushed brass wall hooks and magnetic holdback clasps, our finishing accessories elevate standard drapery into majestic couture window fashion.",
      ]}
      images={[
        "/card-curtain-tassel-tiebacks.jpg",
        "/card-curtain-poles-hardware.jpg",
      ]}
      imageAltText={[
        "Handcrafted Silk Tassel Tieback and Ornate Brass Holdback on Velvet Drapery",
        "Designer Champagne Gold Curtain Pole with Custom Brass Rings and Finial",
      ]}
      whyNeedHeading="Why Add Luxury Tiebacks & Holdbacks to Your Dubai Curtains?"
      whyNeedPoints={[
        "Elevates Visual Elegance: Converts everyday curtains into regal, architectural drape compositions with sweeping fabric folds.",
        "Maximizes Daylight & Palm Views: Securely gathers heavy blackout linings and velvet fabrics during the day to flood your space with sunshine.",
        "Solid Brass & Precious Metal Hardware: Rust-proof, tarnish-resistant metal alloys designed for long-term resilience in Dubai's climate.",
        "Custom Match with Swatches: Tieback cords, bullion fringes, and braided trims can be dyed to match your curtain fabric palette.",
      ]}
      categoryParent={{ label: "Curtains", href: "/curtains" }}
    />
  );
}
