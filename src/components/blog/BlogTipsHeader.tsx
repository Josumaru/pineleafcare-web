import { formatDate } from "@/lib/dateFormater";
import { NextPage } from "next";
import Image from "next/image";
import { Blog } from "@/types/blog";
import TiptapContentCard from "../tiptap/TiptapContentCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/initialName";
import Link from "next/link";

interface Props {
  blog: Blog;
}

const BlogTipsHeader: NextPage<Props> = ({ blog }) => {
  const date = new Date(blog.updatedAt);

  const formattedDate = formatDate(date);

  return (
    <div className="w-full h-[50vh] lg:h-screen overflow-hidden ">
        <Link href={`/blog/${blog.id}`}>
        <div className="relative">
          <Image
            className="absolute w-full h-[50vh] lg:h-screen object-cover grayscale hover:grayscale-0"
            src={blog?.image ?? ""}
            width={720}
            height={520}
            alt="Pineleaf Logo"
          />
          <div className="lg:px-10 absolute w-screen h-[50vh] lg:h-screen flex justify-center bg-black bg-opacity-50">
            <div className="max-w-7xl flex w-screen h-[50vh] lg:h-screen items-end px-2">
              <div className="flex w-full lg:w-1/2 flex-col pb-2 lg:pb-10">
                <div className="lg:hidden block">
                  <div className="w-full flex flex-col pb-2">
                    <div>
                      <p className="text-[#878787] drop-shadow w-full">
                        {formattedDate}・Bacaan{" "}
                        {Math.round(blog.content.length / 720)} Menit
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1 border-2 border-white mb-2 rounded-xl px-5 w-fit text-white hover:bg-[#ffffff59] transition-colors hover:cursor-pointer">
                  {blog?.category ?? ""}
                </div>
                <p className="text-white ">{blog?.title ?? ""}</p>
                <div className="w-full line-clamp-3 text-[#878787]">
                  <TiptapContentCard content={blog?.content ?? ""} />
                </div>
              </div>
              <div className="hidden lg:block w-1/2 pb-20">
                <div className="w-full flex flex-col items-end justify-end">
                  <div>
                    <div className="flex w-full items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src={blog?.author?.image}
                          alt={blog?.author?.name}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {getInitials(blog?.author?.name ?? "Tidak Bernama")}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-white">
                        {blog?.author?.name ?? "Tidak Bernama"}
                      </p>
                    </div>
                    <p className="text-[#878787] shadow w-full">
                      {formattedDate}・Bacaan{" "}
                      {Math.round(blog.content.length / 720)} Menit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
  );
};

export default BlogTipsHeader;
