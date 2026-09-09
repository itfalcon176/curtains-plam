"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function SolarScreenBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Solar Screen Blinds"
      badge="99% UV Block • Glare Control • View-Through Mesh"
      subtitle="High-Performance UV Filtering Sunscreen Shades with Preserved Outdoor Views"
      description="Engineered specifically for Dubai's intense sunny climate and coastal residences in Palm Jebel Ali. Solar screen blinds block up to 99% of harmful UV rays, reject solar heat gain, and eliminate glare while keeping your panoramic sea and city skyline views crystal clear."
      whatIsHeading="What are Custom Solar Screen Blinds?"
      whatIsText={[
        "Solar Screen Blinds (Sunscreen Roller Shades) are high-tech architectural window coverings woven from fiberglass and PVC-coated polyester mesh yarns. Engineered with calibrated openness factors (1%, 3%, 5%, and 10%), they filter harsh desert ultraviolet rays while allowing natural filtered daylight and one-way daytime outward visibility.",
        "Unlike opaque blackout fabrics that shut out the outside world, solar screen blinds let you enjoy breathtaking views of the Arabian Gulf, Palm Jebel Ali coastline, and Dubai skyline throughout the brightest hours of the day while keeping interiors noticeably cooler and comfortable.",
      ]}
      images={["/card-commercial-office.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "High-performance solar screen blinds in Dubai executive office blocking sun glare while maintaining city skyline view",
        "Contemporary solar sunscreen roller blinds in luxury Dubai villa living and kitchen area",
      ]}
      whyNeedHeading="Why You Need Solar Screen Blinds in Dubai"
      whyNeedPoints={[
        "Cuts AC Energy Consumption: Rejects up to 80% of solar heat gain, significantly reducing the load on your air conditioning.",
        "Preserves Panoramic Coastal Views: Enjoy clear outward visibility towards the sea, garden, or city without harsh squinting glare.",
        "95% to 99% Harmful UV Protection: Safeguards your hardwood flooring, luxury furniture upholstery, and fine art from sun fading.",
        "Eliminates TV & Computer Screen Glare: Perfect for living rooms, open kitchens, home offices, and corporate meeting rooms.",
        "Somfy Motorization & Sun Sensor Automation: Program motorized solar screens to automatically lower during peak midday UV hours.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
