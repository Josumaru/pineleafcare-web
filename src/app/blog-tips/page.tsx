import BlogTipsHeader from "@/components/blog-tips/BlogTipsHeader";
import BlogTipsSection from "@/components/blog-tips/BlogTipsSection";
import GradientTitle from "@/components/common/GradientTitle";
import { Button } from "@/components/ui/button";
import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const Page: NextPage<Props> = ({}) => {

  return (
    <div className="flex items-center justify-center flex-col">
      <BlogTipsHeader />
      <BlogTipsSection />
    </div>
  );
};

export default Page;
