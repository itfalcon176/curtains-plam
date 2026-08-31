"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function GovernmentProjectsPage() {
  return (
    <SubMenuPageTemplate
      title="Government & Sovereign Project Blinds"
      badge="Civil Defense Approved • Contract Grade"
      subtitle="Heavy-Duty Flame Retardant Commercial Window Systems"
      description="Turnkey window covering supply and fitting for government ministries, embassies, civil authority towers, and municipal facilities across Dubai and UAE."
      whatIsHeading="What are Government & Sovereign Contract Window Coverings?"
      whatIsText={[
        "Government and sovereign window treatments are certified contract-grade blind and curtain installations engineered to satisfy exact civil procurement requirements, fire safety regulations, and long-term facility durability.",
        "From executive council chambers to high-security public service centres in Dubai, our products undergo rigorous testing for flame retardancy, UV endurance, and motor lifespan under commercial usage conditions.",
      ]}
      images={["/card-commercial-office.jpg", "/blinds-wooden-palm-jebel-ali.jpg"]}
      imageAltText={[
        "Dubai government office executive commercial blinds",
        "High-durability commercial window treatments in UAE public building",
      ]}
      whyNeedHeading="Why UAE Municipal & Government Projects Partner With Us"
      whyNeedPoints={[
        "Dubai Civil Defense Certification: All textiles and materials hold verified fire resistance test certificates.",
        "Dedicated Tender & Contract Support: Complete submittal documentation, sample boards, and technical compliance data.",
        "High-Durability Heavy Usage Build: Commercial-grade aluminum tracks and motor units designed for heavy daily use.",
        "On-Time Project Execution: Committed project managers guaranteeing delivery against strict civil deadlines.",
      ]}
      categoryParent={{ label: "Commercial", href: "/office-blinds-and-curtains" }}
    />
  );
}
