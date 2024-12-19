import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Pineleafcare - Tips Perawatan Sepatu, Tas, & Stroller",
  description:
    "Temukan solusi perawatan terbaik untuk sepatu, tas, dan stroller Anda. Baca artikel tips, panduan, dan informasi terbaru dari Pineleafcare, pionir perawatan profesional di Indonesia.",
  keywords: [
    "perawatan sepatu",
    "perawatan tas",
    "perawatan stroller",
    "tips perawatan",
    "blog Pineleafcare",
    "Pineleafcare Indonesia",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
