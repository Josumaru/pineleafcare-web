import GradientTitle from "@/components/common/GradientTitle";
import { Spotlight } from "@/components/ui/spotlight";
import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text font-bold">
              TRAINING & SUPPORT
            </p>
            <p className="text-white w-96 text-center">
              Rasakan banyak keuntungan ketika anda bergabung menjadi mitra
              PINELEAF dan tergabung di dalam lingkungan komunitas yang saling
              support.
            </p>
          </div>

          {/* <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Spotlight <br /> is the new trend.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific
              part of the page. Here, we are drawing the attention towards the
              text section of the page. I don&apos;t know why but I&apos;m
              running out of copy.
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="py-5">
          <GradientTitle text="DOKUMENTASI" />
        </div>
        <div className="w-full h-full transition-all grid grid-cols-3 grid-rows-3 max-w-7xl mx-auto gap-4 relative">
          <Image
            className="w-full h-full grayscale hover:grayscale-0 object-fill rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
            width={512}
            height={512}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full grayscale hover:grayscale-0 transition-all h-full rounded-xl object-fill overflow-hidden col-span-1 row-span-1 aspect-square"
            width={512}
            height={512}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full h-full grayscale hover:grayscale-0 transition-all object-fill rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
            width={512}
            height={512}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full h-full grayscale hover:grayscale-0 transition-all object-cover rounded-xl overflow-hidden col-span-2 row-span-1"
            style={{ aspectRatio: "2 / 1" }}
            width={512}
            height={256}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full h-full grayscale hover:grayscale-0 transition-all object-fill rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
            width={512}
            height={512}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full h-full grayscale hover:grayscale-0 transition-all object-fill rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
            width={512}
            height={512}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
          <Image
            className="w-full h-full grayscale hover:grayscale-0 transition-all object-cover rounded-xl overflow-hidden col-span-2 row-span-1"
            style={{ aspectRatio: "2 / 1" }}
            width={512}
            height={256}
            src={DocumentationImageConstants[0].src}
            alt={"index"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
