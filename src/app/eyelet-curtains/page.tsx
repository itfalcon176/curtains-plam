"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function EyeletCurtainsPage() {
  return (
    <SubMenuPageTemplate
      title="Eyelet Curtains"
      subtitle="Modern Metallic Grommet Drapes for Bold, Effortless Vertical Folds"
      description="Feature contemporary metallic eyelets in brushed brass, matte black, or polished chrome. Eyelet curtains slide smoothly over decorative curtain poles, creating crisp, deep vertical folds ideal for modern Dubai interiors."
      whatIsHeading="What are Eyelet Curtains?"
      whatIsText={[
        "Eyelet Curtains (also known as Grommet Curtains) feature hand-set metal rings reinforced directly into the top hem of the curtain fabric. Threaded directly onto a decorative metal curtain pole, they fold naturally into uniform, dramatic S-curves without requiring hooks, tapes, or hidden tracks.",
        "With their clean geometric top header and effortless gliding motion, eyelet curtains add a contemporary architectural accent to living rooms, dining spaces, and master suites.",
      ]}
      images={["/card-eyelet-curtains-detail.jpg", "/card-eyelet-curtains-lounge.jpg"]}
      imageAltText={["Brushed Brass Eyelet Grommet Curtain Header", "Luxury Living Room Eyelet Drapes on Metal Pole"]}
      whyNeedHeading="Why You Need Eyelet Curtains in Dubai"
      whyNeedPoints={[
        "Modern Architectural Aesthetic: Metal grommets provide a sleek, contemporary header style that complements minimalist modern villas.",
        "Effortless Smooth Glide: Ring-on-pole construction ensures fluid, snag-free opening and closing across wide windows.",
        "Minimal Maintenance Header: No curtain hooks or plastic gliders to replace; grommets are permanently secured into the fabric header.",
        "Deep Uniform Soft Folds: Automatically forms dramatic vertical fabric waves that highlight luxurious linen and velvet textures.",
      ]}
    />
  );
}
