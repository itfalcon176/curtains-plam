"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function MedicalCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Medical Curtains"
      subtitle="Anti-Bacterial, Hygiene-Certified & Flame-Retardant Healthcare Cubicle Drapery"
      description="Engineered specifically for DHA-compliant hospitals, medical centers, dental clinics, and wellness suites across Dubai. Easy Blinds & Curtains provides certified anti-microbial cubicle tracks, mesh headers, and stain-resistant medical drapery."
      whatIsHeading="What are Medical Curtains?"
      whatIsText={[
        "Medical Curtains are specialized antibacterial and flame-retardant fabric partitions used in hospital patient rooms, emergency wards, consultation suites, and clinical therapy bays. Fabricated with silver-ion or permanent anti-microbial treatments, they prevent cross-contamination and bacterial growth in high-sanitation environments.",
        "Equipped with ventilated ceiling mesh tops for sprinkler system compliance and heavy-duty smooth glide aluminum tracking, our healthcare curtains meet all UAE Ministry of Health and Dubai Civil Defense safety regulations.",
      ]}
      images={["/card-medical-curtains.jpg", "/card-medical-clinic.jpg"]}
      imageAltText={["Hospital Cubicle Curtains", "Dubai Medical Clinic Cubicle Drapery"]}
      whyNeedHeading="Why You Need Certified Medical Curtains in Dubai"
      whyNeedPoints={[
        "DHA & UAE Health Regulation Compliance: Certified anti-microbial and flame-retardant materials adhering to strict healthcare fitout standards.",
        "Permanent Anti-Bacterial Defense: Inhibits 99.9% of MRSA, E. coli, and airborne bacteria, preserving a hygienic clinical environment.",
        "Integrated Ventilation Mesh Top: Allows ceiling fire sprinklers and HVAC airflow to circulate unhindered into patient bays.",
        "Heavy-Duty Ceiling Track System: Quiet nylon wheeled runners designed for smooth, silent daily patient privacy partitioning.",
      ]}
    />
  );
}
