"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function CurtainFabricsPage() {
  return (
    <SubMenuPageTemplate
      title="Curtain Fabrics Catalog"
      subtitle="Exclusive European Linen, Velvet, Jacquard, Sheer & Thermal Dimout Textiles"
      description="Explore Dubai's most expansive library of over 1,000+ luxury drapery fabrics. Brought directly to your residence via our mobile showroom vans with free on-site design consultation and laser measuring."
      whatIsHeading="What is in Our Luxury Curtain Fabrics Catalog?"
      whatIsText={[
        "Our extensive fabric archive features handpicked textiles from world-renowned mills across Belgium, Italy, Turkey, and France. From airy, light-filtering Belgian sheer voiles and organic washed linens to heavy theatrical velvets, textured chenilles, and damask jacquards, we offer the right texture for every aesthetic.",
        "Engineered specifically for the Middle Eastern climate, our fabrics incorporate thermal insulated backings, UV protection coatings, and certified flame-retardant (FR) treatments meeting Dubai Civil Defence standards.",
      ]}
      images={[
        "/card-curtain-fabrics-palette.jpg",
        "/card-fabric-swatches.jpg",
      ]}
      imageAltText={[
        "Luxury Curtain Fabric Swatch Ring with Belgian Linen, Velvet, and Jacquard Samples",
        "Fabric Consultation Swatch Book with Interior Designer in Dubai",
      ]}
      whyNeedHeading="Why Choose Our Designer Fabrics in Dubai?"
      whyNeedPoints={[
        "1,000+ Swatches Delivered to Your Door: Test materials in your room's natural lighting against your flooring and wall paint.",
        "100% Total Blackout & Thermal Dimout: Double-woven triple weave layers block harsh desert sun and reduce AC electricity consumption.",
        "Fade-Resistant & Easy Clean Treatments: High colorfastness ratings that resist bleaching from intense solar radiation.",
        "Flame Retardant (FR) & Eco-Certified: Compliant with international safety and Oeko-Tex environmental standards.",
      ]}
      categoryParent={{ label: "Curtains", href: "/curtains" }}
    />
  );
}
