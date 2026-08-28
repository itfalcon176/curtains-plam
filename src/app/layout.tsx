import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/navigation";
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
  title: "Palm & Drape Dubai | Bespoke Luxury Curtains & Motorized Blinds",
  description:
    "Premium custom-made curtains, blackout drapery, motorized blinds, and shutters in Dubai. Complimentary 24-hour in-home measurement, design consultation, and fast installation across UAE.",
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
      </body>
    </html>
  );
}
