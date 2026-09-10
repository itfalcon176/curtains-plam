"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function ChildSafetyBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Child-Safe Cordless Blinds"
      badge="100% Zero Cord Hazards • BS EN 13120 Compliant"
      subtitle="Total Peace of Mind with Certified Cordless, Motorized & Spring-Assisted Window Treatments"
      description="Protect your children and pets with Dubai's certified child-safe cordless blinds. Featuring zero dangerous loop cords, smooth spring-loaded soft-lift mechanisms, magnetic wand controls, and whisper-quiet Somfy motorization tailored for Palm Jebel Ali villas and family residences."
      whatIsHeading="What are Child-Safe Cordless Blinds?"
      whatIsText={[
        "Child-Safe Cordless Blinds are specialized window coverings engineered to completely eliminate free-hanging pull cords, continuous loop chains, and hazardous strangulation risks. Operated either by a simple gentle push or pull on the bottom rail, an ergonomic wand, or automated smart motorization, they provide effortless light control while ensuring your nursery, playroom, and family bedrooms remain 100% safe.",
        "Fully compliant with international child safety standards (BS EN 13120 and ANSI/WCMA), our cordless systems are available across roller shades, Roman blinds, wooden venetian slats, and blackout honeycomb cellular blinds.",
      ]}
      images={[
        "/card-child-safe-nursery.jpg",
        "/card-child-safe-bedroom.jpg",
      ]}
      imageAltText={[
        "Mother effortlessly operating certified child-safe cordless soft-lift blind in baby nursery",
        "Safe cordless wooden venetian and blackout blinds with zero dangling cords in kids bedroom",
      ]}
      whyNeedHeading="Why You Need Child-Safe Cordless Systems in Dubai"
      whyNeedPoints={[
        "Zero Strangulation Hazard: Eliminates dangling cords and looped chains, creating a completely safe environment for infants, toddlers, and pets.",
        "Smooth Soft-Touch Lift: Precision-balanced spring mechanism allows you to raise, lower, or stop the blind at any exact height with one finger.",
        "Certified International Safety Compliance: Meets and exceeds strict UAE and European child safety standards (BS EN 13120).",
        "Remote & Voice Motorization: Adjust nursery blackout shades using your smartphone or Alexa without opening the door and waking your sleeping child.",
        "Clean Streamlined Aesthetics: Cordless design eliminates messy dangling strings for an uncluttered, modern architectural window finish.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
