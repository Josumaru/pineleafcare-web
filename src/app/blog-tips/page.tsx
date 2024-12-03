"use client";
import BlogTipsHeader from "@/components/blog-tips/BlogTipsHeader";
import BlogTipsSection from "@/components/blog-tips/BlogTipsSection";
import { Skeleton } from "@/components/ui/skeleton";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
}
const Page: NextPage = ({}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch("/api/create");
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col">
      {isLoading ? (
        <Skeleton className="w-screen h-screen "/>
      ) : (
        <>
          <BlogTipsHeader blog={blogs[0]} />
          <BlogTipsSection blogs={blogs} />
        </>
      )}
    </div>
  );
};

export default Page;
