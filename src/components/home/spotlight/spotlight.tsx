import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[50] h-[100%] w-[100%]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0100 -2000 2787 4842"
      fill="none"
      style={{ left: '75px', top: '-50px', width: '250%', height: '250%'}}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1000"
          cy="0000"
          rx="1924"
          ry="473"
          transform="matrix(0.622377 -0.568943 0.868943 0.822377 2000 1500)"
          fill={fill || "rgba(255, 255, 255, 0.5)"}
          fillOpacity="0.31"
          stroke="red"
          strokeWidth="2"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="4785.16"
          height="3840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
