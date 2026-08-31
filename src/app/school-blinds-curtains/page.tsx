"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function SchoolBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Schools & Educational Institute Blinds"
      badge="Child-Safe • High Durability"
      subtitle="Robust, Cordless & Fire-Rated Blackout Blinds for Classrooms"
      description="Tailored window coverings engineered for schools, nurseries, and universities across Dubai & Palm Jebel Ali. Cordless safety, glare reduction, and auditorium acoustic drapery."
      whatIsHeading="What are Educational Facility Window Treatments?"
      whatIsText={[
        "School blinds and auditorium drapery are heavy-duty, child-safe window systems designed to handle daily classroom activity while providing ideal lighting conditions for interactive smartboards, projector screens, and student learning.",
        "Equipped with spring-loaded or motorized cordless control mechanisms, our educational window solutions eliminate dangerous dangling cords, providing 100% child safety in nurseries and primary schools across Palm Jebel Ali and Dubai.",
      ]}
      images={["/card-school-blinds.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Child-safe classroom blackout blinds in Dubai school",
        "Durable window roller shades for educational facility",
      ]}
      whyNeedHeading="Why Educational Facilities Need Professional Window Blinds"
      whyNeedPoints={[
        "100% Child Safety Guaranteed: Completely cordless or motorized systems eliminating choking hazards for younger children.",
        "Interactive Screen Glare Reduction: Anti-glare solar screen fabrics that improve smartboard visibility during daytime lessons.",
        "Auditorium & Multipurpose Room Darkening: Heavy-duty blackout drapes for school assemblies, drama productions, and presentations.",
        "High Heat & UV Protection: Insulates large glass school windows from UAE heat, lowering HVAC cooling energy costs.",
      ]}
      categoryParent={{ label: "Commercial", href: "/office-blinds-and-curtains" }}
    />
  );
}
