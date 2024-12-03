import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import GradientTitle from "../common/GradientTitle";

interface Props {
  blog: {
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
    author: {
      name: string;
      image: string;
    };
  };
}

const BlogTipsHeader: NextPage<Props> = ({ blog }) => {
  const date = new Date(blog.date);

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative">
        <Image
          className="absolute w-full h-screen object-cover grayscale"
          src={blog.image}
          width={720}
          height={520}
          alt="Pineleaf Logo"
        />
        <div className="absolute w-screen h-screen flex justify-center bg-black bg-opacity-50">
          <div className="max-w-7xl flex w-screen h-screen items-end">
            <div className="flex w-1/2 flex-col pb-10">
              <div className="p-1 border border-white mb-2 rounded-xl px-5 w-fit text-white">
                Article
              </div>
              <p className="text-white ">{blog.title}</p>
              <p className="w-full line-clamp-3 text-[#878787]">
                {blog.content}
              </p>
            </div>
            <div className="w-1/2 pb-10">
              <div className="w-full flex flex-col items-end justify-end">
                <div>
                <div className="flex w-full items-center gap-2">
                  <Image
                    className="rounded-full w-9 h-9 object-cover mb-2"
                    src={blog.author.image}
                    width={36}
                    height={36}
                    alt="Overlogic ID"
                  />
                  <p className="text-white">{blog.author.name}</p>
                </div>
                <p className="text-[#878787] w-full">
                  {formattedDate}・Bacaan {Math.round(blog.content.length / 720)} Menit
                </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTipsHeader;
