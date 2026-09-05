"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function DoublePleatCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Double Pleat Curtains"
      subtitle="Refined Balance of Elegant Tailoring & Slim Stacking Width"
      description="Double Pinch Pleat (Dutch Pleat) curtains feature groups of two stitched folds along the header, offering a refined, tailored look that uses slightly less fabric stack than triple pleats—perfect for modern Dubai spaces."
      whatIsHeading="What are Double Pleat Curtains?"
      whatIsText={[
        "Double Pleat Curtains feature paired fabric folds hand-stitched at the header at precise intervals. Offering a slightly cleaner and less bulky top header than triple pinch pleats, double pleats strike the ideal balance between traditional tailoring and contemporary simplicity.",
        "When pulled open, double pleat curtains compress into a narrower side stack, allowing more window glass and natural light to be uncovered in compact rooms or balcony doorways.",
      ]}
      images={["/card-double-pleat-track.jpg", "/card-double-pleat-pole.jpg"]}
      imageAltText={["Double Pleat Heading on Ceiling Track", "Double Pinch Pleat Header with Pole Rings"]}
      whyNeedHeading="Why You Need Double Pleat Curtains in Dubai"
      whyNeedPoints={[
        "Slimmer Side Stack Width: Occupies less wall space when open, maximizing glass exposure and sea views.",
        "Refined Tailored Appearance: Offers custom hand-stitched elegance without looking overly formal or heavy.",
        "Excellent Versatility: Suitable for sheer voiles, linen blends, and light-filtering fabrics in living rooms and bedrooms.",
        "Seamless Track & Pole Compatibility: Works smoothly on ceiling recessed tracks or decorative curtain rods.",
      ]}
    />
  );
}
