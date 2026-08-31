"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function HotelBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Hotels & Hospitality Drapery Solutions"
      badge="5-Star Luxury • Motorized Suiting"
      subtitle="Bespoke Acoustic Drapes, Sheer Cascades & Suite Motorization"
      description="Elevate guest experience in luxury resorts, boutique hotels, and fine dining venues in Palm Jebel Ali & Dubai Marina. Turnkey contract drapery with zero light leakage."
      whatIsHeading="What is Hospitality Drapery & Luxury Hotel Window Treatment?"
      whatIsText={[
        "Hotel window coverings are sophisticated drapery assemblies designed to deliver uncompromised luxury, total guest privacy, and flawless light blocking. In Dubai's world-famous 5-star hotels, window treatments set the mood for restful staycations.",
        "From double-height motorized wave sheers in grand lobbies to multi-layer acoustic blackout drapes in oceanfront guest suites, our contract textiles combine opulent aesthetic texture with heavy-duty commercial durability.",
      ]}
      images={["/card-commercial-hotel.jpg", "/card-wave-curtains.jpg"]}
      imageAltText={[
        "5-Star luxury hotel suite motorized curtains in Palm Jebel Ali",
        "Opulent hotel lobby sheer drapery cascades in Dubai",
      ]}
      whyNeedHeading="Why Dubai Luxury Hotels & Resorts Choose Easy Blinds & Curtains"
      whyNeedPoints={[
        "100% Guest Sleep Guarantee: Multi-layer blackout linings that eliminate all ambient street and coastal daylight.",
        "Somfy & BMS Integration: Automated smart motorized tracks controllable via bedside guest tablets or wall keypads.",
        "Acoustic Noise Reduction: Dense hotel velvet and blackout weaves that absorb external resort and street sound.",
        "Turnkey Contract Fitting: Professional installation crews trained to work seamlessly within fast hotel handover schedules.",
      ]}
      categoryParent={{ label: "Commercial", href: "/office-blinds-and-curtains" }}
    />
  );
}
