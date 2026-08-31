"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function AluminiumVenetianBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Aluminium Venetian Blinds"
      badge="Moisture Resistant • Metallic Sleek"
      subtitle="Lightweight, Durable & Waterproof Aluminum Slats"
      description="Sleek, ultra-modern aluminum slat blinds tailored for kitchens, bathrooms, and commercial offices in Dubai & Palm Jebel Ali. 100% moisture resistant."
      whatIsHeading="What are Aluminium Venetian Blinds?"
      whatIsText={[
        "Aluminium Venetian blinds feature spring-tempered, high-grade aluminum horizontal slats finished with baked-on enamel or anodized metallic powder coats.",
        "Completely waterproof, rust-proof, and lightweight, our aluminum blinds are the ultimate practical choice for high-humidity environments like luxury kitchens, spa bathrooms, and commercial work suites in Dubai.",
      ]}
      images={["/card-commercial-office.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Sleek metallic aluminum Venetian blinds in modern kitchen",
        "Waterproof aluminum window slats in Dubai office suite",
      ]}
      whyNeedHeading="Why You Need Aluminium Venetian Blinds in Dubai"
      whyNeedPoints={[
        "100% Waterproof & Rust-Proof: Will not corrode, peel, or degrade in damp humid bathrooms and kitchens.",
        "Sleek Ultra-Thin Profile: Minimal footprint ideal for tilt-and-turn windows and compact frames.",
        "Wipeable Easy Cleaning: Simple to clean with a damp cloth or sponge, keeping slats pristine.",
        "Extensive Metallic Finishes: Available in brushed silver, matte black, champagne gold, white, and perforated screen slats.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
