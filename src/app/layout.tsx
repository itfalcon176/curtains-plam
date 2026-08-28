import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/navigation";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easy Blinds and Curtains Dubai | Bespoke Luxury Curtains & Smart Blinds",
  description:
    "Dubai’s premier custom-made curtains, blackout drapery, motorized blinds, and smart Somfy window treatments. Complimentary 24-hour in-home measurement, design consultation, and fast installation across UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#C5A880]/30 selection:text-stone-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
