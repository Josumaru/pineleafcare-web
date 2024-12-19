import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Support - Pineleafcare",
  description:
    "Pelatihan dan dukungan profesional untuk mitra waralaba cuci sepatu, tas, dan stroller. Bergabung bersama Pineleafcare untuk solusi terbaik dalam bisnis perawatan premium.",
  keywords: [
    "training & support pineleaf",
    "waralaba cuci sepatu",
    "kemitraan bisnis cuci sepatu",
    "pelatihan perawatan sepatu",
    "franchise cuci sepatu",
    "shoes care training",
    "dukungan bisnis shoes care",
    "shoes clean franchise",
    "pelatihan cuci sepatu",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
