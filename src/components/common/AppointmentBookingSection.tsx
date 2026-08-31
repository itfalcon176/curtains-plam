"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Award,
  User,
  Layers,
  Check,
  Send,
  ArrowRight,
  Crown,
} from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { UaeFlag } from "./UaeFlag";

interface AppointmentBookingSectionProps {
  title?: string;
  subtitle?: string;
  defaultType?: "Curtains" | "Blinds" | "Commercial" | "Both";
}

export const AppointmentBookingSection: React.FC<AppointmentBookingSectionProps> = ({
  title = "Book a FREE Same Day Appointment",
  subtitle = "Our mobile design van visits your Palm Jebel Ali villa or Dubai residence with 1,000+ luxury fabrics & free laser measuring.",
  defaultType = "Curtains",
}) => {
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("9 AM - 11 AM");
  const [type, setType] = useState(defaultType);
  const [agreed, setAgreed] = useState(true);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Captcha State
  const [captchaNum1, setCaptchaNum1] = useState(5);
  const [captchaNum2, setCaptchaNum2] = useState(4);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 7) + 1;
    setCaptchaNum1(n1);
    setCaptchaNum2(n2);
    setCaptchaInput("");
    setCaptchaError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = captchaNum1 + captchaNum2;

    if (parseInt(captchaInput.trim(), 10) !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please solve the calculation.");
      return;
    }

    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }

    setIsSubmitting(true);
    setCaptchaError("");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] select-none border-t border-[#E6DFD5] overflow-hidden">
      {/* Subtle Luxury Ambient Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-xs font-bold uppercase tracking-widest border border-[#C5A880]/30 shadow-2xs">
            <Crown className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Palm Jebel Ali & Dubai In-Home Service</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-950 font-normal leading-tight">
            {title}
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Ultra-Premium Glassmorphism & Obsidian Card */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#D8CEBF] bg-white grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Left: Luxury White/Cream Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-between">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 my-auto"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 flex items-center justify-center mx-auto shadow-md border border-emerald-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#9E7A4A] uppercase tracking-widest">
                    Appointment Confirmed
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Thank You, {firstName}!
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Our Palm Jebel Ali design van specialist has reserved your slot on{" "}
                  <strong>{date || "your requested date"} ({appointmentTime})</strong> for{" "}
                  <strong>{type}</strong>. We will contact you at <strong>{phone}</strong> to confirm arrival.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${navigationConfig.topBar.whatsappRaw.replace("+", "")}?text=Hi%20Easy%20Blinds%2C%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(firstName)}%20in%20Palm%20Jebel%20Ali`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      generateCaptcha();
                    }}
                    className="px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#F0EBE1] pb-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Client & Window Details
                  </span>
                  <span className="text-[11px] text-[#9E7A4A] font-semibold">
                    100% Free & No Obligation
                  </span>
                </div>

                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#C5A880]" />
                      <span>First Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 hover:bg-stone-50 transition-all text-stone-900 placeholder:text-stone-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#C5A880]" />
                      <span>Last Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al Mansoori"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 hover:bg-stone-50 transition-all text-stone-900 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone Number with crisp SVG UAE Flag */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#C5A880]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 hover:bg-stone-50 transition-all text-stone-900 placeholder:text-stone-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#C5A880]" />
                      <span>Mobile / WhatsApp *</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 flex items-center gap-2 pointer-events-none text-xs font-bold text-stone-800 border-r border-stone-300 pr-2.5">
                        <UaeFlag className="w-5 h-3.5 rounded-[2px] shadow-2xs border border-stone-300" />
                        <span>+971</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-26 pr-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 hover:bg-stone-50 transition-all text-stone-900 placeholder:text-stone-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Date & Appointment Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#C5A880]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 text-stone-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>Appointment Time *</span>
                    </label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 text-stone-900"
                    >
                      <option value="9 AM - 11 AM">9:00 AM – 11:00 AM (Morning)</option>
                      <option value="11 AM - 1 PM">11:00 AM – 1:00 PM (Mid-Day)</option>
                      <option value="1 PM - 3 PM">1:00 PM – 3:00 PM (Afternoon)</option>
                      <option value="3 PM - 6 PM">3:00 PM – 6:00 PM (Late Afternoon)</option>
                      <option value="6 PM - 8 PM">6:00 PM – 8:00 PM (Evening)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Treatment Type & Terms Checkbox */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#C5A880]" />
                      <span>Treatment Type *</span>
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/15 bg-stone-50/70 text-stone-900"
                    >
                      <option value="Curtains">Curtains (Wave Pleat / Blackout / Sheer)</option>
                      <option value="Blinds">Blinds (Motorized / Roller / Zebra / Wood)</option>
                      <option value="Commercial">Commercial / Turnkey Fitout</option>
                      <option value="Both">Both Curtains & Blinds</option>
                    </select>
                  </div>

                  <div className="pt-2 sm:pt-5">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-stone-600">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="w-4 h-4 rounded border-stone-300 text-[#C5A880] focus:ring-[#C5A880] mt-0.5"
                      />
                      <span>
                        I agree to the{" "}
                        <Link href="/terms-of-service" target="_blank" className="text-stone-900 font-semibold underline hover:text-[#9E7A4A]">
                          Terms of Service
                        </Link>{" "}
                        &amp;{" "}
                        <Link href="/privacy-policy" target="_blank" className="text-stone-900 font-semibold underline hover:text-[#9E7A4A]">
                          Privacy Policy
                        </Link>.
                      </span>

                    </label>
                  </div>
                </div>

                {/* Row 5: Dynamic Math Security Captcha */}
                <div className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#E6DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-stone-800 uppercase tracking-widest flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9E7A4A]" />
                      <span>Anti-Spam Security Captcha *</span>
                    </label>

                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="inline-flex items-center gap-1 text-[11px] text-[#9E7A4A] font-semibold hover:underline cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>New Question</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono font-bold text-stone-900 shrink-0">
                      {captchaNum1} + {captchaNum2} = ?
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Answer"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className="w-36 px-4 py-2 rounded-xl border border-stone-300 text-xs font-mono font-bold text-stone-900 focus:outline-none focus:border-[#C5A880] bg-white"
                    />
                  </div>

                  {captchaError && (
                    <p className="text-[11px] text-rose-600 font-semibold">{captchaError}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-stone-950 hover:bg-[#C5A880] text-white hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Confirming Appointment..." : "Confirm Free Van Appointment"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Luxury Obsidian & Gold Showcase Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141517] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-[#252629] relative overflow-hidden">
            {/* Subtle Gold Ambient Gradient in Panel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E6D7C3] text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Mobile Van On Call • Palm Jebel Ali</span>
                </div>

                <h3 className="font-serif text-3xl font-normal text-white">
                  Direct Inquiries & Showroom
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Palm Jebel Ali & Dubai Showroom</span>
                    <span className="text-[11px] text-stone-400">Barsha Heights (TECOM), Dubai, UAE</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Telephone</span>
                    <a href={`tel:${navigationConfig.topBar.phoneRaw}`} className="hover:text-[#C5A880] font-bold text-white text-sm">
                      {navigationConfig.topBar.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Instant WhatsApp</span>
                    <a
                      href={`https://wa.me/${navigationConfig.topBar.whatsappRaw.replace("+", "")}?text=Hi%20Easy%20Blinds%2C%20I%20would%20like%20to%20book%20a%20free%20home%20visit`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-bold text-[#25D366]"
                    >
                      {navigationConfig.topBar.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Email Address</span>
                    <span className="font-medium text-stone-200">{navigationConfig.topBar.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Guarantee Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#C5A880]/20 to-white/5 border border-[#C5A880]/30 space-y-2 relative z-10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E6D7C3]">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>100% Free Consultation Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-300">
                Zero hidden fees. Complete mobile fabric library with 1,000+ luxury European textures brought straight to your villa driveway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
