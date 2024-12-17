import { formatDate } from "@/lib/dateFormater";
import { NextPage } from "next";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/initialName";
import TiptapContentCard from "../tiptap/TiptapContentCard";

interface Props {
  blog: Blog;
}

const BlogTipsCard: NextPage<Props> = ({ blog }) => {
  const date = new Date(blog.createdAt);

  const formattedDate = formatDate(date);

  return (
    <div
      className="border cursor-pointer hover:border-opacity-35 transition-all group aspect-square border-white p-1 rounded-[24px] border-opacity-10"
      style={{ aspectRatio: 1 / 1 }}
    >
      <Link href={`/blog/${blog.id}`}>
        <div className="relative h-2/3 w-full">
          <Image
            className="object-cover grayscale w-full h-full rounded-[20px] group-hover:grayscale-0 transition-all"
            src={blog.image}
            width={1080}
            height={1080}
            alt={blog.title}
          />
          <div className="absolute top-2 font-bold px-5 left-2 bg-white bg-opacity-50 text-black text-sm py-1 rounded-[15px] text-bold">
            {blog.category}
          </div>
        </div>
      </Link>
      <div className="mt-2">
        <Link href={`/blog/${blog.id}`}>
          <p className="text-gray-400 text-sm">
            {formattedDate}・Bacaan {Math.round(blog.content.length / 720)}{" "}
            Menit
          </p>
          <TiptapContentCard content={blog.content} />
        </Link>
        <Link href={`/pengguna/${blog.userId}`}>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={blog.author?.image}
                alt={blog.author?.name}
                className="object-cover"
              />
              <AvatarFallback>
                {getInitials(blog.author?.name ?? "Overlogic")}
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold text-white hover:text-[#ffffffa6] hover:underline transition-transform">
              {blog.author?.name ?? "Overlogic"}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogTipsCard;
