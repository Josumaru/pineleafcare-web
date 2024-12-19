import { Blog } from "@/types/blog";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/beranda`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/peluang-usaha`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/training-support`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/produk`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    ...(await generateBlogPostsSitemapObjects())
  ];
}

const generateBlogPostsSitemapObjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-blog`
  );
  const data = await response.json();

  const blogPosts = data.map((post: Blog) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: "always",
    priority: 0.9,
  }));
  return blogPosts;
};
