import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pineleafcare - Solusi Perawatan Sepatu, Tas, & Stroller",
  description:
    "Selamat datang di Pineleafcare! Kami adalah pionir solusi perawatan sepatu, tas, dan stroller di Indonesia. Temukan layanan terbaik dan peluang bisnis bersama kami.",
  keywords: [
    "pineleafcare",
    "beranda pineleafcare",
    "waralaba cuci sepatu",
    "franchise perawatan sepatu",
    "kemitraan bisnis perawatan sepatu",
    "shoes care",
    "shoes clean",
    "perawatan tas",
    "perawatan stroller",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
