"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  rating: number;
  text: string;
  avatarBg?: string;
  initials?: string;
  verified?: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "1",
    name: "Rashid Al Nuaimi",
    location: "Palm Jebel Ali Villa",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "Easy Blinds & Curtains transformed our Palm Jebel Ali beachfront villa! Their mobile design van arrived loaded with 1,000+ swatches. The motorized wave curtains operate silently via Somfy remote. Fitted in under 48 hours!",
    avatarBg: "bg-[#9E7A4A]",
    initials: "RN",
    verified: true,
  },
  {
    id: "2",
    name: "Sophia K.",
    location: "Dubai Marina Penthouse",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Extremely happy with our wave pleat sheer curtains and blackout blinds! Laser precision measuring, zero light gaps, and remarkable fabric quality. Highly recommend Easy Blinds in Dubai!",
    avatarBg: "bg-blue-600",
    initials: "SK",
    verified: true,
  },
  {
    id: "3",
    name: "Tariq Al Mansoori",
    location: "Emirates Hills Residence",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Top-tier service from start to finish! They brought fabric samples right to our villa driveway, measured with laser accuracy, and installed custom motorized blackout blinds across all 6 bedrooms in 2 days.",
    avatarBg: "bg-emerald-700",
    initials: "TM",
    verified: true,
  },
  {
    id: "4",
    name: "Elena V.",
    location: "Downtown Dubai Suite",
    timeAgo: "2 months ago",
    rating: 5,
    text: "A real pleasure dealing with Easy Blinds & Curtains! Professional approach, exquisite Belgian linen drape textures, and their 24-48 hour fast delivery & installation guarantee was fulfilled perfectly.",
    avatarBg: "bg-amber-600",
    initials: "EV",
    verified: true,
  },
  {
    id: "5",
    name: "Alexander M.",
    location: "DIFC Executive Office",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Outfitted our DIFC corporate floor with motorized solar screen blinds and acoustic curtains. Civil Defense certified materials, laser measurement, and zero disruption. Outstanding commercial team!",
    avatarBg: "bg-purple-700",
    initials: "AM",
    verified: true,
  },
  {
    id: "6",
    name: "Fatima Al Hashimi",
    location: "Jumeirah Golf Estates",
    timeAgo: "3 months ago",
    rating: 5,
    text: "The sheer wave curtains look divine against our double-height villa glass. Exceptional craftsmanship by Easy Blinds & Curtains. Their mobile design van service made fabric selection so easy!",
    avatarBg: "bg-[#8C6D3F]",
    initials: "FH",
    verified: true,
  },
];

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = reviewsData.length;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] select-none border-t border-[#E6DFD5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-[#E6DFD5] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9E7A4A] uppercase mb-1">
              <Star className="w-4 h-4 fill-[#9E7A4A] text-[#9E7A4A]" />
              <span>Verified Customer Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950">
              What our customers say
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Real reviews from Palm Jebel Ali villa owners, Dubai homeowners &amp; interior designers.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-end">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-[#E6DFD5] bg-white hover:bg-[#F5F1EB] hover:border-[#C5A880] text-stone-800 flex items-center justify-center transition-all duration-200 shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5 text-stone-700" />
            </button>

            <div className="text-xs font-semibold text-stone-600 px-2">
              <span className="text-[#9E7A4A]">{currentIndex + 1}</span> / {totalReviews}
            </div>

            <button
              onClick={handleNext}
              type="button"
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-[#E6DFD5] bg-white hover:bg-[#F5F1EB] hover:border-[#C5A880] text-stone-800 flex items-center justify-center transition-all duration-200 shadow-2xs"
            >
              <ChevronRight className="w-5 h-5 text-stone-700" />
            </button>
          </div>
        </div>

        {/* Main Grid: Google Rating Badge (Left) + Animated Reviews Carousel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Google 5.0 Star Verified Badge */}
          <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col items-center justify-between text-center space-y-4">
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                  />
                </svg>
                <span className="font-serif font-bold text-lg text-stone-950">Google Reviews</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-stone-900 text-sm">
                  Easy Blinds &amp; Curtains Dubai
                </h3>
                <div className="flex items-center justify-center gap-1 text-amber-500">
                  <span className="font-bold text-stone-950 text-lg mr-1">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-500 font-medium">1,240+ Verified 5-Star Reviews</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E6DFD5] text-left text-[11px] text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24–48h Delivery Guarantee</span>
                </div>
                <p className="text-stone-500 leading-snug">
                  Mobile Van with 1,000+ swatches delivered to your villa driveway.
                </p>
              </div>
            </div>

            <a
              href="https://g.page/r/easyblinds-dubai/review"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs block"
            >
              Write a Review
            </a>
          </div>

          {/* Right: Interactive Carousel Slider (9 Cols) */}
          <div
            className="lg:col-span-9 relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[0, 1, 2].map((offset) => {
                const reviewIndex = (currentIndex + offset) % totalReviews;
                const review = reviewsData[reviewIndex];

                return (
                  <motion.div
                    key={`${review.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="bg-white p-6 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300 hover:border-[#C5A880]/60 relative group"
                  >
                    <div className="space-y-3">
                      {/* Reviewer Header */}
                      <div className="flex items-center justify-between border-b border-[#F5F1EB] pb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${
                              review.avatarBg || "bg-stone-800"
                            } text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                          >
                            {review.initials}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-stone-950 text-sm leading-tight truncate">
                              {review.name}
                            </h4>
                            <span className="text-[11px] text-[#9E7A4A] font-medium block truncate">
                              {review.location}
                            </span>
                          </div>
                        </div>

                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                          />
                        </svg>
                      </div>

                      {/* Stars & Time */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-stone-400">{review.timeAgo}</span>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs text-stone-600 leading-relaxed font-normal italic">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Verified Tag */}
                    <div className="pt-2 flex items-center justify-between text-[10px] text-stone-500 border-t border-[#F5F1EB]">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Order
                      </span>
                      <span className="text-stone-400">Easy Blinds &amp; Curtains</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-[#9E7A4A]"
                      : "w-2 bg-[#E6DFD5] hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
