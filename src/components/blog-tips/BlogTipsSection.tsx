import { NextPage } from "next";
import GradientTitle from "../common/GradientTitle";
import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import BlogTipsCard from "./BlogTipsCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface Props {}

const BlogTipsSection: NextPage<Props> = ({}) => {
  return (
    <div className="max-w-7xl w-screen pt-5">
      <GradientTitle text="Blog  dan Tips" />
      <p className="text-white">
        Here, we share some shoes tips, articles fact and news that give you
        more insight.
      </p>
      <div className="mt-1 gap-1 flex">
        <div className="w-20 p-1 rounded-xl bg-white flex items-center justify-center">
          All
        </div>
        {["Artikel", "Tips", "Berita"].map((category, index) => {
          return (
            <div
              key={index}
              className="w-20 p-1 rounded-xl bg-black text-white border-white border flex items-center justify-center"
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 ">
        {blogs.map((data, index) => (
          <BlogTipsCard data={data} key={index} />
        ))}
      </div>
      <div className="mt-10">
        <Pagination className="text-white">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default BlogTipsSection;

const blogs: {
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
}[] = [
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
  {
    title: "The Impact of Pineleaf Shoes on Footwear",
    content:
      "Pineleaf shoes are a trend that has gained attention in recent years. They have a unique combination of comfort, durability, and style that makes them popular among consumers.",
    image: DocumentationImageConstants[0].src,
    date: "20 September 2024",
    category: "Tips",
    author: {
      name: "Overlogic ID",
      image: DocumentationImageConstants[0].src,
    },
  },
];