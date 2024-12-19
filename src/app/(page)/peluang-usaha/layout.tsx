import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peluang Usaha - Waralaba Pineleafcare",
  description:
    "Bergabunglah dengan peluang usaha waralaba Pineleafcare! Solusi terbaik untuk bisnis perawatan sepatu, tas, dan stroller dengan dukungan pelatihan dan sistem kemitraan profesional.",
  keywords: [
    "peluang usaha pineleafcare",
    "waralaba cuci sepatu",
    "franchise cuci sepatu",
    "kemitraan bisnis cuci sepatu",
    "peluang usaha perawatan sepatu",
    "peluang bisnis tas & stroller",
    "pelatihan perawatan sepatu",
    "shoes care",
    "shoes clean",
    "bisnis perawatan sepatu",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
