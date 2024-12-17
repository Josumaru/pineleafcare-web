"use client";
import { NextPage } from "next";
import GradientTitle from "../common/GradientTitle";
import BlogTipsCard from "./BlogTipsCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Category } from "@/types/category";

interface BlogProps {
  blogs: Blog[];
}

const BlogTipsSection: NextPage<BlogProps> = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [blogList, setBlogList] = useState<Blog[]>(blogs);

  useEffect(() => {
    setCurrentPage(1);
    let filteredBlog: Blog[] = [];
    if (category == "") return;
    blogs.map((blog) => {
      if (blog.category === category) {
        filteredBlog.push(blog);
      }
    });
    setBlogList(filteredBlog);
  }, [category]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl w-screen pt-5">
      <div className="px-2 xl:px-0">
        <GradientTitle text="Blog  dan Tips" />
      </div>
      <p className="text-white px-2 xl:px-0">
        Di sini, kami membagikan beberapa tips sepatu, artikel fakta dan berita
        yang dapat memberi Anda wawasan.
      </p>
      <div className="mt-1 gap-1 flex overflow-x-scroll pb-2 px-2 xl:px-0">
        <Button
          className="mr-1"
          variant={category == "" ? "default" : "outline"}
          onClick={() => setCategory("")}
        >
          Semua
        </Button>
        {categories &&
          categories.map((item, index) => {
            return (
              <Button
                key={index}
                onClick={() => setCategory(item.name)}
                variant={category != item.name ? "outline" : "default"}
                className="mr-1"
              >
                {item.name}
              </Button>
            );
          })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 ">
        {blogList.length == 0 && (
          <div className="h-64 col-span-3 flex items-center justify-center ">
            Tidak ada blog yang sesuai
          </div>
        )}
        {blogList
          .slice((currentPage - 1) * 6, currentPage * 6)
          .map((data, index) => (
            <BlogTipsCard blog={data} key={index} />
          ))}
      </div>
      <div className="mt-10">
        <Pagination className="text-white">
          <PaginationContent>
            {1 != currentPage && (
              <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                <PaginationPrevious />
              </PaginationItem>
            )}
            {Array.from({ length: Math.ceil(blogs.length / 6) }).map(
              (_, index) => (
                <PaginationItem>
                  <PaginationLink
                    isActive={index + 1 == currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            {Math.ceil(blogs.length / 6) != currentPage && (
              <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                <PaginationNext />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default BlogTipsSection;
