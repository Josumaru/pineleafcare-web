import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengguna Pineleafcare",
  description:
    "Dapatkan layanan terbaik untuk perawatan sepatu, tas, dan stroller dari Pineleafcare. Bergabunglah bersama mitra dan pelanggan setia kami untuk pengalaman perawatan premium.",
  keywords: [
    "pengguna pineleafcare",
    "mitra pineleafcare",
    "pelanggan pineleafcare",
    "layanan perawatan sepatu",
    "layanan perawatan tas",
    "perawatan stroller",
    "shoes care pineleaf",
    "shoes clean pineleaf",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
