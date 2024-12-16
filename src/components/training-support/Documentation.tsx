import { NextPage } from "next";
import GradientTitle from "@/components/common/GradientTitle";
import Image from "next/image";
import { DocumentationImageConstants } from "@/constants/DocumentationImageConstants";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Skeleton } from "../ui/skeleton";
import { IconClipboardCopy } from "@tabler/icons-react";
import { VideoConstants } from "@/constants/VideoConstants";
import { Play } from "lucide-react";
import VideoCard from "./VideoCard";
interface Props {}

const items = [
  {
    header: <VideoCard url="/video/docs_1.mp4" />,
  },
  {
    header: (
      <Image
        className="w-full h-full grayscale hover:grayscale-0 object-cover rounded-xl overflow-hidden"
        width={512}
        height={512}
        src={"/images/documentation/docs_1.png"}
        alt={"index"}
      />
    ),
  },
  {
    header: (
      <Image
        className="w-full h-full grayscale hover:grayscale-0 object-cover rounded-xl overflow-hidden"
        width={512}
        height={512}
        src={DocumentationImageConstants[0].src}
        alt={"index"}
      />
    ),
  },
  {
    header: (
      <Image
        className="w-full h-full grayscale hover:grayscale-0 object-cover rounded-xl overflow-hidden"
        width={512}
        height={512}
        src={"/images/documentation/docs_2.webp"}
        alt={"index"}
      />
    ),
  },
  {
    header: <VideoCard url="/video/docs_3.mp4" />,
  },
  {
    header: (
      <Image
        className="w-full h-full grayscale hover:grayscale-0 object-cover rounded-xl overflow-hidden"
        width={512}
        height={512}
        src={"/images/documentation/docs_3.webp"}
        alt={"index"}
      />
    ),
  },
 
  {
    header: <VideoCard url="/video/docs_2.mp4" />,
  },
];

const Documentation: NextPage<Props> = ({}) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="py-5">
        <GradientTitle text="DOKUMENTASI" />
      </div>
      <BentoGrid className="max-w-7xl mx-auto mt-10 w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="py-5">
        <GradientTitle text="DOKUMENTASI" />
      </div>
      <div className="w-full h-full transition-all grid grid-cols-3 grid-rows-3 max-w-7xl mx-auto gap-4 relative">
        <Image
          className="w-full h-full grayscale hover:grayscale-0 object-cover rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
          width={512}
          height={512}
          src={DocumentationImageConstants[0].src}
          alt={"index"}
        />
        <Image
          className="w-full grayscale hover:grayscale-0 transition-all h-full rounded-xl object-cover overflow-hidden col-span-1 row-span-1 aspect-square"
          width={512}
          height={512}
          src={DocumentationImageConstants[0].src}
          alt={"index"}
        />
        <Image
          className="w-full h-full grayscale hover:grayscale-0 transition-all object-cover rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
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
          className="w-full h-full grayscale hover:grayscale-0 transition-all object-cover rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
          width={512}
          height={512}
          src={DocumentationImageConstants[0].src}
          alt={"index"}
        />
        <Image
          className="w-full h-full grayscale hover:grayscale-0 transition-all object-cover rounded-xl overflow-hidden col-span-1 row-span-1 aspect-square"
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
  );
};

export default Documentation;
