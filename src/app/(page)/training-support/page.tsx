
import Documentation from "@/components/training-support/Documentation";
import { Pricing } from "@/components/training-support/Pricing";
import { Spotlight } from "@/components/ui/spotlight";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full">
      <div className="flex items-start justify-center flex-col h-screen w-full">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="flex flex-col items-center justify-center px-2">
            <p className="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text font-bold">
              TRAINING & SUPPORT
            </p>
            <p className="text-muted-foreground lg:w-96 text-center">
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
      <div>
        <Pricing />
      </div>
      <Documentation/>
    </div>
  );
};

export default Page;
