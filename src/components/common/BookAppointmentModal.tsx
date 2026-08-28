"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    serviceType: "Curtains & Blinds",
    preferredTime: "Morning (9 AM - 1 PM)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden z-10"
          >
            {/* Top Accent Gold Bar */}
            <div className="h-1 bg-gradient-to-r from-[#C5A880] via-[#E6D7C3] to-[#C5A880]" />

            {/* Header */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-[#E6DFD5]/80 bg-white/80">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A880]/15 text-[#9E7A4A] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <span>Complimentary UAE Service</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-950">
                  Book Free In-Home Consultation
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Our mobile design van brings 1,000+ fabric swatches &amp; laser measurement to your doorstep.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-950 hover:bg-stone-200 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-stone-900">
                      Appointment Request Received!
                    </h4>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-stone-900">{formData.name}</strong>. Our Dubai styling consultant will call you at <strong className="text-stone-900">{formData.phone}</strong> within 15 minutes to confirm your visit.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-[#1B1C1F] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                    >
                      Done
                    </button>
                    <a
                      href="https://wa.me/971508349761"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Al Maktoum"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 bg-white border border-[#E6DFD5] rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 bg-white border border-[#E6DFD5] rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Location / Villa / Tower *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Palm Jebel Ali / Downtown"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3.5 py-2 bg-white border border-[#E6DFD5] rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Interest
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2 bg-white border border-[#E6DFD5] rounded-xl text-xs text-stone-900 focus:outline-hidden focus:border-[#C5A880]"
                      >
                        <option>Curtains &amp; Drapes</option>
                        <option>Motorized Blinds</option>
                        <option>Blackout &amp; Sheer Combo</option>
                        <option>Full Villa Turnkey Package</option>
                        <option>Commercial / Office</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Preferred Consultation Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "Morning (9-1)",
                        "Afternoon (1-5)",
                        "Evening (5-9)",
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: slot })}
                          className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition-all ${
                            formData.preferredTime === slot
                              ? "bg-[#C5A880]/15 border-[#C5A880] text-[#9E7A4A] font-bold"
                              : "bg-white border-[#E6DFD5] text-stone-600 hover:bg-stone-50"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-[#C5A880] to-[#B69768] hover:from-[#B69768] hover:to-[#A38354] text-stone-950 font-bold rounded-xl shadow-md text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Free Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#9E7A4A]" />
                      24h Response
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      100% Free &amp; No Obligation
                    </span>
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
