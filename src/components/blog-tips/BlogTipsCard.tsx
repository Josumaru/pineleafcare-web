import { NextPage } from "next";
import Image from "next/image";

interface Props {
  data: {
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

const BlogTipsCard: NextPage<Props> = ({ data }) => {
  return (
    <div
      className="border cursor-pointer hover:border-opacity-35 transition-all group aspect-square border-white p-1 rounded-[24px] border-opacity-10"
      style={{ aspectRatio: 1 / 1 }}
    >
      <div className="relative h-2/3 w-full">
        <Image
          className="object-cover grayscale w-full h-full rounded-[20px] group-hover:grayscale-0 transition-all"
          src={data.image}
          width={1080}
          height={1080}
          alt={data.title}
        />
        <div className="absolute top-2 font-bold px-5 left-2 bg-white bg-opacity-50 text-sm py-1 rounded-[15px] text-bold">
          {data.category}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-400 text-sm">
          {data.date}・Bacaan {Math.round((data.content.length) / 720)} Menit
        </p>
        <p className="text-white line-clamp-1 text-xl my-2 font-bold">{data.title}</p>
        <p className="text-gray-400 line-clamp-3 mb-2">{data.content}</p>
        <div className="flex items-center gap-2">
          <Image
            className="object-cover w-10 h-10 rounded-full"
            src={data.author.image}
            width={100}
            height={100}
            alt={data.author.name}
          />
          <p className="text-lg font-bold text-white">{data.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogTipsCard;
