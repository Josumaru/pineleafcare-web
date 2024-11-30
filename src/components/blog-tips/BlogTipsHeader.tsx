import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import GradientTitle from "../common/GradientTitle";

interface Props {}

const BlogTipsHeader: NextPage<Props> = ({}) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative">
        <Image
          className="absolute w-full h-screen object-cover grayscale"
          src={DocumentationImageConstants[0]}
          alt="Pineleaf Logo"
        />
        <div className="absolute w-screen h-screen flex justify-center bg-black bg-opacity-50">
          <div className="max-w-7xl flex w-screen h-screen items-end">
            <div className="flex flex-col pb-10">
              <div className="p-1 border border-white mb-2 rounded-xl px-5 w-fit text-white">
                Article
              </div>
              <p className="text-white ">Biaya Kemitraan Paling Terjangkau</p>
              <p className="w-1/2 text-[#878787]">
                With specialized treatments and professional techniques, we
                bring your footwear back to life, extending its wear and
                preserving its style.
              </p>
            </div>
            <div className="w-1/2 pb-10 flex flex-col items-end">
              <div className="">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-9 h-9 object-cover mb-2"
                    src={DocumentationImageConstants[0]}
                    alt="Overlogic ID"
                  />
                  <p className="text-white">Overlogic ID</p>
                </div>
                <p className="text-[#878787]">
                  30 September 2024・Bacaan 10 menit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTipsHeader;
