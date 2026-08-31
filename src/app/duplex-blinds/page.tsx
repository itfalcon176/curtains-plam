"use client";

import React from "react";
import { SubMenuPageTemplate } from "@/components/common/SubMenuPageTemplate";

export default function DuplexBlindsPage() {
  return (
    <SubMenuPageTemplate
      title="Duplex Blinds (Dual Roller Shades)"
      badge="Dual Layer • Multi-Mood Lighting"
      subtitle="Two Independent Blinds in One Sleek Cassette"
      description="Combines a light-filtering sunscreen roller and a 100% blackout roller in a single cassette. Ideal for Palm Jebel Ali & Dubai bedrooms requiring versatile daylight."
      whatIsHeading="What are Duplex Dual Roller Blinds?"
      whatIsText={[
        "Duplex blinds feature two separate roller blinds mounted inside one compact, double-bracket cassette housing. One blind is a high-grade UV solar screen, while the second blind is a total blackout fabric.",
        "This dual system lets you lower the solar screen during daytime to enjoy natural sunlight and ocean views without glare, and lower the blackout blind at night for total privacy and restful sleep.",
      ]}
      images={["/card-zebra-blinds.jpg", "/card-motorised-blinds.jpg"]}
      imageAltText={[
        "Duplex dual roller blinds installed in luxury Dubai bedroom",
        "Daytime sheer screen and nighttime blackout duplex blind system",
      ]}
      whyNeedHeading="Why You Need Duplex Blinds in Dubai"
      whyNeedPoints={[
        "2-in-1 Complete Light Flexibility: Daytime sun diffusion + nighttime 100% blackout in a single installation.",
        "Space-Efficient Dual Bracket Design: Takes up minimal window depth while offering maximum performance.",
        "HVAC Cooling & UV Protection: Sunscreen layer reflects UAE thermal heat while blackout layer locks in cool air.",
        "Independent Motorization Options: Control solar screen and blackout roller independently via remote or smartphone.",
      ]}
      categoryParent={{ label: "Blinds", href: "/blinds" }}
    />
  );
}
