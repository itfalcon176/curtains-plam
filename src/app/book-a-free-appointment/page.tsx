"use client";

import React from "react";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";

export default function BookAppointmentPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Page Hero */}
      <PageHero
        title="Book Free In-Home Consultation"
        subtitle="1,000+ Fabrics Brought to Your Palm Jebel Ali Villa with Free Laser Measurement"
        badge="Easy Blinds & Curtains • Instant Booking"
        description="Choose your preferred date, time, and service. Our mobile design van will arrive fully equipped with fabric swatches, motorization samples, and laser measuring tools anywhere in Dubai & UAE."
        breadcrumbs={[{ label: "Book Free Appointment" }]}
      />

      {/* 2. Full Appointment Booking Form Section */}
      <AppointmentBookingSection
        title="Book a FREE Same Day Appointment"
        subtitle="Our mobile design van visits your Palm Jebel Ali villa or Dubai home with 1,000+ fabrics & laser measuring."
      />
    </div>
  );
}
