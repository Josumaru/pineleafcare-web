import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Pineleafcare - Perawatan Sepatu, Tas, & Stroller",
  description:
    "Temukan berbagai produk dan layanan terbaik dari Pineleafcare untuk perawatan sepatu, tas, dan stroller Anda. Solusi profesional untuk kebutuhan perawatan premium.",
  keywords: [
    "produk pineleafcare",
    "perawatan sepatu",
    "perawatan tas",
    "perawatan stroller",
    "waralaba cuci sepatu",
    "franchise cuci sepatu",
    "kemitraan bisnis cuci sepatu",
    "shoes care",
    "shoes clean",
    "produk perawatan sepatu",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
