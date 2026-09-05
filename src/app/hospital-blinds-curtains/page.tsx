"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function HospitalBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Hospital & Medical Facility Blinds"
      badge="DHA Compliant • Healthcare Couture"
      subtitle="Antimicrobial, Hygiene-Certified & Flame-Retardant Cubicle Systems"
      description="Engineered specifically for medical centres, hospitals, and clinics in Dubai and Palm Jebel Ali. High-performance privacy tracks and wipeable antimicrobial window coverings."
      whatIsHeading="What are Medical & Hospital Window Treatments?"
      whatIsText={[
        "Hospital blinds and cubicle curtains are specialized healthcare window and space division solutions designed to meet rigorous hygiene, safety, and privacy standards. In modern medical environments across Dubai, maintaining infection control while providing patient dignity and comfort is essential.",
        "Crafted with silver-ion antimicrobial coatings and flame-retardant synthetic fibers, our medical curtains and wipeable PVC roller blinds resist bacteria, mold, and fluid absorption. They operate on silent ceiling-recessed aluminum tracks designed for zero snagging.",
      ]}
      images={["/card-medical-curtains.jpg", "/card-medical-clinic.jpg"]}
      imageAltText={[
        "Antimicrobial medical cubicle curtains in Dubai hospital",
        "Wipeable healthcare cubicle drapery in clinic room",
      ]}
      whyNeedHeading="Why Medical Facilities in Dubai Require Specialized Blinds"
      whyNeedPoints={[
        "Strict DHA & MOH Infection Control Compliance: Fabric treated with antibacterial agents to prevent cross-contamination.",
        "Civil Defense Fire Safety: Certified M1/B1 flame retardancy meeting Dubai Civil Defense commercial codes.",
        "Wipeable & Easy Sterilization: High-durability materials that withstand daily chemical disinfectant wiping without fading.",
        "Ceiling Recessed Silent Tracks: Smooth, whisper-quiet patient privacy screening engineered for 24/7 hospital use.",
      ]}
      categoryParent={{ label: "Commercial", href: "/office-blinds-and-curtains" }}
    />
  );
}
