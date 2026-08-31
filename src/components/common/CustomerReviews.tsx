"use client";

import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface ReviewItem {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  avatarBg?: string;
  initials?: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "1",
    name: "Sophia K.",
    timeAgo: "1 month ago",
    rating: 5,
    text: "I’m extremely happy with my wave pleat curtains! Excellent service, fast 48-hour installation, and remarkable fabric quality. Highly recommend in Dubai!",
    avatarBg: "bg-blue-600",
    initials: "SK",
  },
  {
    id: "2",
    name: "Tariq Al Mansoori",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Pro-active and friendly fitting team for curtains and motorized blinds in Palm Jebel Ali. On-time delivery, laser precision measuring, and clean work!",
    avatarBg: "bg-emerald-600",
    initials: "TM",
  },
  {
    id: "3",
    name: "Elena V.",
    timeAgo: "2 months ago",
    rating: 5,
    text: "A real pleasure to deal with! Professional approach, smooth in-home measurement with 1,000+ fabric swatches brought right to our villa driveway.",
    avatarBg: "bg-amber-600",
    initials: "EV",
  },
  {
    id: "4",
    name: "Alexander M.",
    timeAgo: "3 months ago",
    rating: 5,
    text: "Very professional team. They were super quick and efficient, fast delivery and precision curtain track installation! Will buy again for our penthouse.",
    avatarBg: "bg-purple-600",
    initials: "AM",
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] select-none border-t border-[#E6DFD5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            What our customers say
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Real experiences from Dubai homeowners, villa owners &amp; interior designers.
          </p>
        </div>

        {/* Reviews Layout: Google Rating Badge (Left) + Reviews Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Google Rating Badge */}
          <div className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col items-center justify-center text-center space-y-3">
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
              <span className="font-serif font-bold text-lg text-stone-900">Google Reviews</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm">
                Curtains Dubai - Easy Blinds &amp; Curtains
              </h3>
              <div className="flex items-center justify-center gap-1 text-amber-500">
                <span className="font-bold text-stone-900 text-base mr-1">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-500 font-medium">1,240+ Verified Reviews</p>
            </div>

            <a
              href="https://g.page/r/easyblinds-dubai/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-4 py-2 bg-stone-900 hover:bg-[#C5A880] text-white hover:text-stone-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              Write a review
            </a>
          </div>

          {/* Right: Reviews Cards Grid (9 Cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-full ${
                          review.avatarBg || "bg-stone-800"
                        } text-white font-bold text-xs flex items-center justify-center`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 text-xs leading-tight">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-stone-400 block">{review.timeAgo}</span>
                      </div>
                    </div>

                    <svg className="w-4 h-4 text-stone-400" viewBox="0 0 24 24">
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

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
