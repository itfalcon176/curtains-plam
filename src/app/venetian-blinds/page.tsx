"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function VenetianBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Venetian Blinds"
      badge="Classic Precision • Wood & Aluminium"
      subtitle="Timeless Horizontal Slat Control with Tilt-and-Raise Function"
      description="Classic architectural window slats custom crafted in wood, faux wood, and metallic aluminum. Tailored in Dubai for Palm Jebel Ali villas & executive suites."
      whatIsHeading="What are Venetian Blinds?"
      whatIsText={[
        "Venetian blinds are classic horizontal slat window coverings connected by cord tapes or ladder braids. By tilting the slats, you can direct sunlight upwards toward the ceiling or downwards to cut room glare.",
        "Available in authentic basswood, moisture-proof faux wood, and ultra-sleek anodized aluminum, our Venetian blinds offer versatile tilt management and clean architectural lines for any Dubai room.",
      ]}
      images={["/card-wooden-blinds.jpg", "/blinds-wooden-palm-jebel-ali.jpg"]}
      imageAltText={[
        "Custom wooden Venetian blinds in Palm Jebel Ali villa",
        "Sleek aluminum horizontal Venetian blinds in modern office",
      ]}
      whyNeedHeading="Why You Need Venetian Blinds in Dubai"
      whyNeedPoints={[
        "Micro-Adjustable Light Control: Fine-tune slat angles to allow natural light while preventing direct solar glare.",
        "Rich Material Variety: Natural hardwoods, moisture-proof faux woods for kitchens, and metallic aluminum.",
        "Airflow & Ventilation Friendly: Keep windows cracked for fresh coastal breezes while slats maintain room privacy.",
        "Durable UV Scratch Resistant Coatings: Treated with protective UV lacquers that prevent fading in Dubai sun.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
