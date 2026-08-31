"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Scissors,
  Ruler,
  Wrench,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { AppointmentBookingSection } from "@/components/common/AppointmentBookingSection";
import { CustomerReviews } from "@/components/common/CustomerReviews";

export default function CommercialPage() {
  const commercialRange = [
    {
      title: "Executive Office Blinds",
      image: "/card-commercial-office.jpg",
      href: "/office-blinds-and-curtains",
      desc: "High-durability anti-glare sunscreen motorized roller blinds designed for executive office towers, DIFC suites, and conference rooms across Dubai.",
    },
    {
      title: "Hospitality & Hotel Drapery",
      image: "/card-commercial-hotel.jpg",
      href: "/office-blinds-and-curtains",
      desc: "5-star luxury motorized double-height sheer curtains and blackout drapes for luxury hotels, resorts, and high-end suites in Palm Jebel Ali & Dubai Marina.",
    },
    {
      title: "Medical & Healthcare Blinds",
      image: "/card-blackout-curtains.jpg",
      href: "/office-blinds-and-curtains",
      desc: "Antimicrobial, flame-retardant, hygiene-certified cubicle tracks and wipeable window blinds built for DHA-compliant hospitals and clinics in Dubai.",
    },
    {
      title: "Schools & Educational Blinds",
      image: "/card-roller-blinds.jpg",
      href: "/office-blinds-and-curtains",
      desc: "Child-safe, heavy-duty cordless blackout roller blinds and auditorium acoustic drapery engineered for intense daily school use in Dubai.",
    },
    {
      title: "Government & Sovereign Fitouts",
      image: "/card-wooden-blinds.jpg",
      href: "/office-blinds-and-curtains",
      desc: "Dubai Civil Defense certified flame-retardant commercial window treatments with dedicated project managers and corporate account services.",
    },
    {
      title: "Gyms & Wellness Acoustic Curtains",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/office-blinds-and-curtains",
      desc: "Moisture-resistant wipeable blinds and heavy sound-dampening partition curtains for commercial gyms, fitness clubs, and luxury spa resorts.",
    },
  ];

  const featureServices = [
    {
      title: "Custom Tailoring",
      icon: Scissors,
    },
    {
      title: "Measuring & Fitting",
      icon: Ruler,
    },
    {
      title: "Civil Defense Certified",
      icon: ShieldCheck,
    },
    {
      title: "Repair & Maintenance",
      icon: Wrench,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none text-stone-900">
      {/* 1. Minimal Elegant Hero Title & Intro Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-4 flex-wrap">
          <Link href="/" className="hover:text-[#9E7A4A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#9E7A4A] font-medium">Commercial</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide">
            Commercial Blinds &amp; Curtains
          </h1>


          <div className="pt-1">
            <ChevronDown className="w-5 h-5 text-stone-500 mx-auto animate-bounce" />
          </div>

          <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Looking for commercial blinds and curtains to elevate your business premises in Dubai or Palm Jebel Ali? Look no further than Easy Blinds and Curtains.
            </p>
            <p>
              Easy Blinds and Curtains offer a comprehensive range of contract-grade commercial window coverings in Dubai. Whether you are outfitting an executive corporate suite, a 5-star hotel, a hospital, or an educational facility, Easy Blinds and Curtains is engineered to meet demanding technical specifications and luxury aesthetics. From fire-rated blackout drapes to motorized solar screens, we provide turnkey solutions across the UAE.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Explore Our Commercial Range Grid (3 Cols x 2 Rows) */}
      <section className="py-12 sm:py-16 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E6DFD5]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-wide">
            Explore Our Commercial Range
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {commercialRange.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center space-y-4"
            >
              {/* Card Image */}
              <Link
                href={item.href}
                className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-900 border border-[#E6DFD5] shadow-xs group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Title & Description */}
              <div className="space-y-2 max-w-sm px-2">
                <Link href={item.href}>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-950 group-hover:text-[#9E7A4A] transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Our Commercial Blinds & Curtains? Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal">
                Why Choose Our Commercial Window Treatments?
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 text-left sm:text-center leading-relaxed">
                <p>
                  <strong className="text-stone-900">Certified Flame Retardancy:</strong> Fully compliant with Dubai Civil Defense safety standards and international fire codes.
                </p>
                <p>
                  <strong className="text-stone-900">Smart Motorization &amp; BMS Integration:</strong> Automated control systems compatible with Somfy, Tuya, and corporate central building management systems.
                </p>
                <p>
                  <strong className="text-stone-900">Heat &amp; Glare Control:</strong> Anti-glare solar screen fabrics that reduce computer monitor glare while significantly lowering air conditioning energy costs.
                </p>
                <p>
                  <strong className="text-stone-900">Dedicated Account Management:</strong> Professional turnkey project management ensuring on-time delivery and seamless fitting for Dubai businesses.
                </p>
              </div>
            </div>

            {/* 4 Feature Service Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#F0EBE1]">
              {featureServices.map((feat, i) => {
                const IconComp = feat.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center space-y-3 p-4">
                    <div className="w-16 h-16 rounded-full border border-[#C5A880]/60 bg-[#FAF8F5] text-[#9E7A4A] flex items-center justify-center shadow-2xs">
                      <IconComp className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-stone-900">
                      {feat.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Commercial Window Coverings Tailored to Your Dubai & Palm Jebel Ali Projects */}
      <section className="py-14 max-w-4xl mx-auto px-4 text-center space-y-3">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Commercial Window Coverings Tailored to Your Dubai &amp; Palm Jebel Ali Projects
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          At Easy Blinds and Curtains, we understand the specific climate, safety regulations, and architectural demands of commercial properties in Dubai and Palm Jebel Ali. That’s why our contract blinds and drapery are engineered for beauty, energy savings, and long-lasting heavy-duty performance.
        </p>
      </section>

      {/* 5. Visit Us Today */}
      <section className="pb-16 max-w-4xl mx-auto px-4 text-center space-y-3 border-b border-[#E6DFD5]">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
          Visit Us Today
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Visit our Dubai showroom or contact our commercial project team today to examine contract swatches and discuss trade pricing. Whether you need motorized roller screens or hospitality acoustic drapes, our experts are ready to assist your project.
        </p>
      </section>

      {/* 6. Book a FREE Same Day Appointment Section */}
      <AppointmentBookingSection
        title="Book a FREE commercial site consultation"
        subtitle="Our mobile design van visits your Dubai office, hotel, or commercial site with 1,000+ luxury contract samples & free laser measuring."
        defaultType="Curtains"
      />

      {/* 7. What our customers say */}
      <CustomerReviews />
    </div>
  );
}

