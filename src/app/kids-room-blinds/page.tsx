"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function KidsRoomBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Kids' Room Blinds"
      badge="100% Child-Safe • Wipeable & Bright"
      subtitle="Cordless Safety, Cheerful Designs & Daytime Blackout"
      description="Safe, durable, and colorful window blinds crafted for children’s bedrooms and nurseries in Palm Jebel Ali & Dubai. Cordless spring and motorized systems."
      whatIsHeading="What are Kids' Room & Nursery Blinds?"
      whatIsText={[
        "Kids' room blinds are specially designed window coverings that combine strict child safety standards with fun aesthetics, durable wipe-clean fabrics, and dependable daylight blocking for afternoon naps.",
        "Equipped with zero-cord mechanisms, our nursery and children's blinds ensure complete safety for toddlers while providing thermal insulation against Dubai's desert sun.",
      ]}
      images={["/card-school-blinds.jpg", "/card-roller-blinds.jpg"]}
      imageAltText={[
        "Child-safe cordless blackout blinds in Dubai kids bedroom",
        "Cheerful durable nursery window shades in Palm Jebel Ali villa",
      ]}
      whyNeedHeading="Why You Need Specialized Kids' Room Blinds in Dubai"
      whyNeedPoints={[
        "100% Child Safety Certification: Totally cordless or motorized operation eliminating loose cord strangulation risks.",
        "Dependable Afternoon Nap Blackout: Blocks bright UAE daytime sun for easy infant nap routines.",
        "Wipe-Clean Stain Resistant Fabrics: Easily cleaned with mild soap and water to handle sticky fingerprints.",
        "Thermal Sun Protection: Keeps children's rooms comfortably cool while insulating against heat.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
