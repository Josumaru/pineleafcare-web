"use client";
import React, { useRef, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradientTitle from "@/components/common/GradientTitle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import HLSPlayer from "../hls/HLSPlayer";

export function ScrollBanner() {

  const items = [
    {
      header: <HLSPlayer src="/video/suede/8c8859d4139542b584d2efd55d603103/suede.m3u8"/>
      // (
      //   <video
      //     ref={videoRef}
      //     loop
      //     autoPlay
      //     muted
      //     className="w-full h-full object-cover rounded-xl"
      //     src="/video/docs_1.mp4"
      //   />
      // ),
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="py-5">
          <GradientTitle text="TEKNIK SUEDE" />
        </div>
        <BentoGrid className="max-w-7xl mx-auto mt-10 w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              header={item.header}
              className={"col-span-3 row-span-2"}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
