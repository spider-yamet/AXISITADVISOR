import 'swiper/css/bundle';
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import BackToTop from '@/components/Layout/BackToTop';
import AosAnimation from '@/components/Layout/AosAnimation';

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technology Agency",
  description: "A digital solution for sustainable economies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
      <body>
        {children}

        {/* BackToTop */}
        <BackToTop />

        {/* AosAnimation */}
        <AosAnimation />
      </body>
    </html>
  );
}
