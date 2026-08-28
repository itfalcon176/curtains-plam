"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBanner } from "@/components/home/HeroBanner";
import { QuoteCtaBanner } from "@/components/common/QuoteCtaBanner";
import { BookAppointmentModal } from "@/components/common/BookAppointmentModal";
import {
  Crown,
  ShieldCheck,
  Clock,
  Scissors,
  SlidersHorizontal,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
  Cpu,
  Smartphone,
  Sun,
  Moon,
  Calendar,
  MessageCircle,
  Phone,
  Ruler,
  Award,
  TreePine,
  Check,
} from "lucide-react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedFabricTab, setSelectedFabricTab] = useState<"linen" | "velvet" | "blackout" | "sheer">("linen");

  const palmJebelAliCollections = [
    {
      title: "Double-Height Wave Pleat Curtains",
      badge: "Palm Jebel Ali Signature",
      desc: "Graceful continuous wave ripple folds engineered for double-height ceilings and panoramic beachfront floor-to-ceiling glass.",
      image: "/curtains-wave-palm-jebel-ali.jpg",
      href: "/curtains",
      features: ["Up to 8-Meter Seamless Drops", "Whisper-Quiet Somfy Tracks", "100% UV Protection"],
    },
    {
      title: "Smart Motorized Blackout & Zebra Blinds",
      badge: "App & Voice Automation",
      desc: "Rechargeable wire-free motorized blinds that shield master bedrooms and private cinema suites from intense desert glare.",
      image: "/blinds-motorized-palm-jebel-ali.jpg",
      href: "/blinds",
      features: ["Apple HomeKit & Alexa Voice", "Solar Charging Capabilities", "5-Year Motor Warranty"],
    },
    {
      title: "Handcrafted 50mm Wooden Venetians",
      badge: "Natural Basswood Luxury",
      desc: "Sustainably harvested authentic timber slats with custom fabric tape ribbons, bringing organic warmth to luxury study rooms and suites.",
      image: "/blinds-wooden-palm-jebel-ali.jpg",
      href: "/wooden-venetian-blinds",
      features: ["180° Precision Slat Tilting", "UV-Resistant Protective Seal", "Moisture Proof Options"],
    },
    {
      title: "1,000+ Fabric In-Home Van Consultation",
      badge: "Zero Obligation • 100% Free",
      desc: "Our mobile design van brings European velvets, Belgian linens, and sheer swatches straight to your Palm Jebel Ali villa driveway.",
      image: "/fabric-consultation-palm-jebel-ali.jpg",
      href: "/in-home-measuring",
      features: ["Free Laser Measurement", "On-the-Spot Instant Quote", "Touch & Feel Swatches in Daylight"],
    },
  ];

  const fabricData = {
    linen: {
      name: "Organic Belgian & French Linens",
      tagline: "Airy, natural, breathable texture for light-filled coastal living",
      benefits: ["Natural cooling airflow", "Earthy matte texture", "Eco-friendly natural fibers", "Drapes with relaxed elegance"],
      bestFor: "Palm Jebel Ali living rooms, dining pavilions, and sun-drenched master suites.",
    },
    velvet: {
      name: "Italian Heavyweight Heritage Velvet",
      tagline: "Opulent depth, acoustic dampening, and sumptuous tactile softness",
      benefits: ["Maximum acoustic noise absorption", "Rich color depth in champagne & charcoal", "Luxurious weighted drop", "Refined light blocking"],
      bestFor: "Private master suites, formal majlis halls, and luxury cinema rooms.",
    },
    blackout: {
      name: "100% Silicon-Coated Thermal Blackout",
      tagline: "Total room darkness and 40% thermal heat rejection for Dubai summers",
      benefits: ["100% zero light transmission", "Reflects intense solar radiation", "Lowers AC energy consumption", "Prevents furniture UV fading"],
      bestFor: "Bedrooms, nurseries, and media rooms facing direct east or west sun.",
    },
    sheer: {
      name: "Luminous European Voiles & Sheers",
      tagline: "Soft daylight diffusion preserving beachfront ocean panoramas",
      benefits: ["Transforms harsh glare into soft ambient glow", "Daytime privacy with exterior views", "Featherlight float on wave tracks", "UV filtering protection"],
      bestFor: "Floor-to-ceiling glass balconies overlooking the Arabian Gulf.",
    },
  };

  const palmJebelAliVillas = [
    {
      community: "Palm Jebel Ali • Frond M",
      title: "Beachfront Coral Villa Window Couture",
      details: "Motorized double wave tracks with Belgian linen sheers and 100% blackout drapery.",
      tag: "Completed Project",
    },
    {
      community: "Palm Jebel Ali • Frond D",
      title: "Waterfront Mansion Solar Blinds",
      details: "5% openness solar screen motorized rollers cutting 95% heat without blocking sea vistas.",
      tag: "Somfy Smart Fit",
    },
    {
      community: "Palm Jebel Ali • Crescent",
      title: "Luxury Penthouse Suite Acoustic Drapes",
      details: "Handcrafted triple pinch pleat velvet curtains with ceiling-recessed motorized tracks.",
      tag: "Turnkey Installation",
    },
  ];

  const testimonials = [
    {
      quote: "Easy Blinds and Curtains fitted our entire beachfront villa on Palm Jebel Ali. The mobile van arrived on time, their laser measurements were 100% spot-on, and the motorized wave curtains look like an architectural masterpiece.",
      name: "Alexander & Elena V.",
      location: "Palm Jebel Ali Waterfront Villa",
      rating: 5,
    },
    {
      quote: "The Somfy motorized blackout curtains in our master bedroom completely block the morning sun and heat. Professional team, clean installation, and exceptional fabric quality. Highly recommend in Dubai!",
      name: "Tariq Al Mansoori",
      location: "Dubai Hills & Palm Jebel Ali Resident",
      rating: 5,
    },
    {
      quote: "Being able to see 1,000+ luxury fabric swatches in our own home’s natural lighting made all the difference. The turn-around was just 48 hours. Five stars all the way.",
      name: "Sophia Kensington",
      location: "Palm Jumeirah & Palm Jebel Ali Investor",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#FAF8F5] select-none">
      {/* 1. Immersive Full-Screen Luxury Hero Banner (Fit Screen & Priority) */}
      <HeroBanner />

      {/* 3. Featured Visual Collections for Palm Jebel Ali (Rich Image Cards) */}
      <section className="py-24 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5" />
            <span>Easy Blinds &amp; Curtains • Palm Jebel Ali Collection</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-stone-950 font-extrabold leading-tight tracking-tight">
            Curated Window Couture by Easy Blinds &amp; Curtains
          </h2>

          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Every villa on Palm Jebel Ali features unique ceiling heights, expansive panoramic glass, and intense sun exposure. Easy Blinds &amp; Curtains designs custom window treatments tailored to master these architectural elements with effortless luxury.
          </p>
        </div>

        {/* 4 Rich Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {palmJebelAliCollections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E6DFD5] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md text-[#E6D7C3] text-xs font-bold tracking-wide border border-white/20">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EBE1] flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 hover:text-[#C5A880] uppercase tracking-wider transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="px-4 py-2 rounded-full bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Book Free Sample
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Fabric & Texture Studio */}
      <section className="py-20 bg-[#141517] text-white border-t border-b border-[#252629]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info & Tabs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#E6D7C3] text-xs font-bold uppercase tracking-widest">
                <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>1,000+ Fabric Library</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Touch, Feel & Experience Luxury Materials in Your Villa
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Why choose from tiny digital swatches? Our mobile showroom van brings complete physical drapery sample cascades directly to Palm Jebel Ali so you can evaluate colors under your exact lighting.
              </p>

              {/* Tabs */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                {[
                  { id: "linen", label: "Belgian Linen" },
                  { id: "velvet", label: "Italian Velvet" },
                  { id: "blackout", label: "Thermal Blackout" },
                  { id: "sheer", label: "Luminous Sheers" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFabricTab(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedFabricTab === tab.id
                        ? "bg-[#C5A880] text-stone-950 shadow-lg scale-105"
                        : "bg-white/10 text-stone-300 hover:bg-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Tab Details Box */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 backdrop-blur-md">
                <h4 className="font-serif text-2xl text-[#E6D7C3] font-normal">
                  {fabricData[selectedFabricTab].name}
                </h4>
                <p className="text-xs text-stone-400 italic">
                  {fabricData[selectedFabricTab].tagline}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {fabricData[selectedFabricTab].benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-200">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-xs text-[#C5A880] font-semibold border-t border-white/10">
                  <span>Recommended for: </span>
                  <span className="text-stone-300 font-normal">{fabricData[selectedFabricTab].bestFor}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#B4966E] text-stone-950 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  Request Swatches to Palm Jebel Ali
                </button>

                <a
                  href="https://wa.me/971508349761?text=Hi%20Easy%20Blinds%2C%20please%20send%20me%20fabric%20swatch%20photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  WhatsApp Swatch Photos
                </a>
              </div>
            </div>

            {/* Right Interactive Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/fabric-consultation-palm-jebel-ali.jpg"
                  alt="Palm Jebel Ali Fabric Swatch Consultation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E6D7C3]">
                    <Sparkles className="w-4 h-4 text-[#C5A880]" />
                    <span>Complimentary 24-Hour In-Home Mobile Van</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Serving all Palm Jebel Ali Fronds, Palm Jumeirah, Dubai Hills, and UAE communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Palm Jebel Ali Real Villa Projects Showcase */}
      <section className="py-24 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Verified Island Installations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
              Signature Projects Across Palm Jebel Ali
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Explore how we tailor motorized drapes and architectural blinds to withstand coastal sea breezes and high-intensity sunlight.
            </p>
          </div>

          <Link
            href="/our-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E6DFD5] text-stone-950 hover:border-[#C5A880] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {palmJebelAliVillas.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-300 space-y-4 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#9E7A4A] uppercase tracking-wider">
                    {v.community}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#EFEAE1] text-stone-700 font-bold uppercase">
                    {v.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  {v.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {v.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1]">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-[#C5A880] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Request Similar Fit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Somfy Smart Automation Featurette */}
      <section className="py-20 bg-[#F3EFEA]/80 border-t border-b border-[#E6DFD5]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/20 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Certified Somfy Partner</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 leading-tight">
                Whisper-Quiet Smart Curtains & Solar Blind Automation
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Control your double-height drapes with a simple voice command or schedule them to glide open at sunrise overlooking the Palm Jebel Ali sea. Certified integration with **Apple HomeKit, Alexa, Google Home, Control4 & Crestron**.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#E6DFD5] space-y-1">
                  <Smartphone className="w-5 h-5 text-[#C5A880]" />
                  <h4 className="font-bold text-stone-900 text-xs">Smartphone App</h4>
                  <p className="text-[11px] text-stone-500">Control from anywhere in the world</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E6DFD5] space-y-1">
                  <Sun className="w-5 h-5 text-[#C5A880]" />
                  <h4 className="font-bold text-stone-900 text-xs">Sun Sensor Triggers</h4>
                  <p className="text-[11px] text-stone-500">Automatic closure during peak heat</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E6DFD5] shadow-xl">
              <Image
                src="/blinds-motorized-palm-jebel-ali.jpg"
                alt="Palm Jebel Ali Motorized Curtains and Blinds"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Testimonials */}
      <section className="py-24 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            <span>4.9 / 5.0 Rated Across UAE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal">
            Trusted by Dubai Villa Owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E6DFD5] shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1]">
                <div className="font-bold text-stone-900 text-sm">{t.name}</div>
                <div className="text-xs text-[#9E7A4A] font-medium">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Quote CTA Banner */}
      <QuoteCtaBanner
        title="Ready to Transform Your Palm Jebel Ali Villa?"
        subtitle="Book Free In-Home Laser Measurement & Fabric Van Consultation Across Dubai & UAE"
      />

      {/* Booking Modal */}
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
