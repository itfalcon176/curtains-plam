"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function VerticalBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Vertical Blinds"
      badge="Panoramic Glass • 180° Rotation"
      subtitle="Sleek Vertical Louvers for Large Patio Doors & Executive Glass"
      description="Ideal for floor-to-ceiling sliding glass doors and large villa windows in Palm Jebel Ali & Dubai. Smooth 180-degree louver rotation for tailored sunlight."
      whatIsHeading="What are Custom Vertical Blinds?"
      whatIsText={[
        "Vertical blinds consist of individual fabric louvers hanging vertically from an aluminum track. The louvers rotate 180 degrees to precisely angle incoming daylight, and traverse smoothly side-to-side to open up entire glass doors.",
        "Custom tailored in anti-static, dust-repellent fabrics, our vertical blinds provide modern light management for tall living room patio doors, balcony entrances, and commercial office towers across Dubai.",
      ]}
      images={["/card-commercial-office.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Sleek vertical blinds on floor-to-ceiling glass in Dubai villa",
        "Modern white vertical blinds on balcony sliding doors",
      ]}
      whyNeedHeading="Why You Need Vertical Blinds in Dubai"
      whyNeedPoints={[
        "Perfect for Large Sliding Glass Doors: Glides open effortlessly without interfering with patio doorway access.",
        "180° Precision Light Direction: Tilt louvers to block harsh side sun while maintaining outdoor coastal views.",
        "Dust & Static Repellent Fabrics: Specially treated textiles that minimize dust accumulation in UAE desert environments.",
        "Acoustic & Privacy Control: Provides privacy across wide expanses of architectural glass.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
