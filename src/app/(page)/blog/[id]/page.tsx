"use client";
import BlogTipsBreadcrumb from "@/components/blog/BlogTipsBreadCrump";
import BlogTipsCard from "@/components/blog/BlogTipsCard";
import MinimalTiptapContent from "@/components/minimal-tiptap/content-tiptap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/dateFormater";
import { getInitials } from "@/lib/initialName";
import { Blog } from "@/types/blog";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = ({ params }) => {
  const [id, setId] = useState<string>("");
  const [data, setData] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const id = (await params).id;
      setId(id);
      const response = await fetch(`/api/get-all-blog`, {
        cache: "no-cache",
      });
      const data = await response.json();
      setBlogs(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          setData(data[i]);
          setIsLoading(false);
          return;
        }
      }
      setError(true);
    };
    fetchData();
  }, []);

  if(error){
    return (
      <section className="bg-black h-screen flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              Terjadi Kesalahan
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              Maaf, Blog yang kamu cari tidak ditemukan
            </p>
            <Link href="/blog">
              <Button className="inline-flex text-black hover:bg-primary-800 my-4 bg-white hover:bg-slate-300 transition-colors">
                Jelajahi lagi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full text-white flex justify-center mt-24 px-2">
      <div className="max-w-7xl w-full">
        {!loading && <BlogTipsBreadcrumb id={id} />}
        {loading ? (
          <Skeleton className="w-full h-[450px] mt-5 rounded-xl" />
        ) : data ? (
          <div className="mt-5">
            <div className="relative">
              <Image
                src={data.image}
                alt={data.title}
                width={1080}
                height={1080}
                className="w-full h-[450px] rounded-3xl object-cover"
              />
              <Link href={`/pengguna/${data.userId}`}>
                <div className="m-5 absolute top-0 flex items-center justify-center gap-2 drop-shadow-2xl shadow-black hover:cursor-pointer z-30">
                  <Avatar className="">
                    <AvatarImage
                      src={data?.author?.image}
                      alt={data?.author?.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {getInitials(data?.author?.name ?? "Overlogic")}
                    </AvatarFallback>
                  </Avatar>
                  <p>{data.author.name}</p>
                </div>
              </Link>
            </div>
            <p className="text-xl font-semibold mt-2">{data.title}</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-400">
                {formatDate(new Date(data.updatedAt))}・Bacaan{" "}
                {Math.round(data.content.length / 720)} Menit
              </p>
              <Badge>{data.category}</Badge>
            </div>
            <MinimalTiptapContent
              value={data.content}
              editable={false}
              className="mt-10"
            />

            <p className="font-bold mt-5">Baca Juga</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogTipsCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-black animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Memuat
          </div>
        )}
      </div>
    </div>
  );
};


export default Page;
