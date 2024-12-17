import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com/",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://acme.com/beranda",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.7,
    },
    {
      url: "https://acme.com/peluang-usaha",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.4,
    },
    {
      url: "https://acme.com/training-support",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: "https://acme.com/produk",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.6,
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
  ];
}
