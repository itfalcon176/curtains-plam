"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, CheckCircle2, Phone, RefreshCw } from "lucide-react";
import { UaeFlag } from "./UaeFlag";
import { navigationConfig } from "@/config/navigation";

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("9 AM - 11 AM");
  const [type, setType] = useState("Curtains");
  const [agreed, setAgreed] = useState(true);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Captcha
  const [captchaNum1, setCaptchaNum1] = useState(6);
  const [captchaNum2, setCaptchaNum2] = useState(4);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setCaptchaNum1(n1);
    setCaptchaNum2(n2);
    setCaptchaInput("");
    setCaptchaError("");
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = captchaNum1 + captchaNum2;

    if (parseInt(captchaInput.trim(), 10) !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please solve the captcha.");
      return;
    }

    if (!agreed) {
      alert("Please agree to the Terms of Service.");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Top Accent Gold Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#C5A880] via-[#E6D7C3] to-[#C5A880]" />

            {/* Header */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-stone-100 bg-[#FAF8F5]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span>Palm Jebel Ali & Dubai</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-950">
                  Book a FREE Same Day Appointment
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  1,000+ luxury fabric swatches & free laser measurement at your door.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Form */}
            <div className="p-6 overflow-y-auto space-y-4">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    Appointment Request Received!
                  </h4>

                  <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{firstName} {lastName}</strong>. Our Palm Jebel Ali mobile van coordinator will contact you at <strong>{phone}</strong> to confirm your slot.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-stone-950 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#C5A880] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                      />
                    </div>
                  </div>

                  {/* Email & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Mobile Number *</label>
                      <div className="relative flex items-center">
                        <div className="absolute left-2.5 flex items-center gap-1.5 pointer-events-none text-xs font-bold text-stone-700 border-r border-stone-300 pr-2">
                          <UaeFlag className="w-4 h-3 rounded-[1px] shadow-2xs border border-stone-200" />
                          <span>+971</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="50 123 4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-22 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Date *</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50 text-stone-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Appointment Time *</label>
                      <select
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50 text-stone-800"
                      >
                        <option value="9 AM - 11 AM">9 AM - 11 AM</option>
                        <option value="11 AM - 1 PM">11 AM - 1 PM</option>
                        <option value="1 PM - 3 PM">1 PM - 3 PM</option>
                        <option value="3 PM - 6 PM">3 PM - 6 PM</option>
                        <option value="6 PM - 8 PM">6 PM - 8 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Type & Checkbox */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-700">Type *</label>
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50/50 text-stone-800"
                      >
                        <option value="Curtains">Curtains</option>
                        <option value="Blinds">Blinds</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <label className="flex items-start gap-2 cursor-pointer text-[11px] text-stone-600">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="w-3.5 h-3.5 rounded border-stone-300 text-[#C5A880] focus:ring-[#C5A880] mt-0.5"
                        />
                        <span>I agree to your Terms of Service and Privacy Policy</span>
                      </label>
                    </div>
                  </div>

                  {/* Dynamic Captcha */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">
                        Captcha *
                      </label>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="inline-flex items-center gap-1 text-[10px] text-[#9E7A4A] hover:underline cursor-pointer"
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        <span>Change</span>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[11px] text-stone-600">
                        What is <span className="font-bold text-stone-950 font-mono">{captchaNum1} + {captchaNum2}</span>?
                      </p>
                      <input
                        type="text"
                        required
                        placeholder="Answer"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#C5A880] bg-stone-50 font-mono"
                      />
                      {captchaError && (
                        <p className="text-[10px] text-rose-600 font-medium">{captchaError}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#B4966E] hover:bg-[#9E7A4A] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
