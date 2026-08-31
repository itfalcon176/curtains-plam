"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function MosquitoNetsPage() {
  return (
    <SubMenuPageTemplate
      title="Mosquito Nets & Mesh"
      subtitle="Protect Your Villa & Family from Pests with Sleek Breathable Insect Screen Barriers"
      description="Enjoy fresh coastal breezes in Palm Jebel Ali and Dubai without insects. Our custom-engineered retractable pleated mesh screens and magnetic insect net frames fit seamlessly onto patio sliding doors, tilt windows, and bi-fold glass panels."
      whatIsHeading="What are Mosquito Nets & Mesh?"
      whatIsText={[
        "Mosquito Nets & Mesh are unobtrusive, high-transparency insect protection systems designed for modern UAE villas and apartments. Constructed with powder-coated extruded aluminum frames and durable fiberglass or stainless-steel mesh, they create a breathable shield against mosquitoes, flies, sandflies, and dust while preserving your outside panorama.",
        "Whether you require sleek accordion-pleated retractable door screens or magnetic window frames, our tailored mesh solutions are custom-measured to integrate seamlessly with your architectural aluminum frames without impairing natural airflow or view clarity.",
      ]}
      images={["/card-mosquito-nets.jpg", "/curtains-wave-palm-jebel-ali.jpg"]}
      imageAltText={["Mosquito Mesh Patio Door", "Villa Living Room View"]}
      whyNeedHeading="Why You Need Mosquito Nets/Mesh in Dubai"
      whyNeedPoints={[
        "Discreet Protection from Mosquitoes & Pests: Keep windows and balcony doors wide open during cooler UAE winter evenings without insect invasion.",
        "High-Transparency Visibility: Premium fiberglass mesh retains 95% daylight transparency so your Palm Jebel Ali sea or garden view remains unhindered.",
        "Dust & Sand Filter Barrier: Micro-mesh weave reduces airborne sand particles and fine dust entry through open windows.",
        "Sleek Retractable Accordion Design: Folds neatly into a slim side cassette when not in use, preserving clean interior lines.",
      ]}
    />
  );
}
