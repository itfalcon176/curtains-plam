"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function CorporateBlindsAndCurtainsSolutionsPage() {
  return (
    <SubMenuPageTemplate
      title="Corporate & Hospitality Drapes"
      subtitle="Bespoke Flame-Retardant Contract Drapery & Motorized Solutions for Dubai Enterprises"
      description="Tailor-made commercial curtain and blind installations for Dubai corporate headquarters, 5-star luxury hotels, restaurants, diplomatic embassies, and healthcare facilities. Full compliance with Dubai Civil Defence fire-rating standards."
      whatIsHeading="What are Corporate & Hospitality Draping Solutions?"
      whatIsText={[
        "Our contract commercial drapery division provides turnkey window treatment solutions engineered for high-traffic corporate offices, boardrooms, luxury hotel suites, and event venues across the UAE.",
        "We supply certified BS5867 / NFPA 701 flame-retardant (FR) acoustic fabrics, heavy-duty commercial motorized rails, glare-reducing screen blinds for conference rooms, and bespoke luxury blackout drapes crafted to stringent architect specifications.",
      ]}
      images={[
        "/card-corporate-hospitality-drapes.jpg",
        "/card-commercial-office.jpg",
      ]}
      imageAltText={[
        "Executive Boardroom with Grand Motorized Wave Curtains Overlooking Dubai Marina",
        "Modern Commercial Corporate Office with Glare-Reducing Contract Window Treatments",
      ]}
      whyNeedHeading="Why Dubai Businesses Choose Easy Blinds & Curtains"
      whyNeedPoints={[
        "Dubai Civil Defence FR Certified: Certified flame-retardant textiles meeting strict UAE municipal and hospitality fire codes.",
        "Acoustic Sound Absorption: Specialized dense wave drapes that reduce echo and reverberation in conference rooms and hotel lobbies.",
        "Commercial Heavy-Duty Motorization: Industrial-grade Somfy and automated track motors built for continuous daily cycling.",
        "Dedicated Project Manager & Fast Turnaround: Direct site surveys, CAD submittals, sample boards, and scheduled after-hours installation.",
      ]}
      categoryParent={{ label: "Commercial", href: "/commercial" }}
    />
  );
}
