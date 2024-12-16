"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Swiper options
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SwiperOptions } from "swiper/types";
import GradientTitle from "@/components/common/GradientTitle";

const EcoFriendlySection = () => {
  const [position, setPosition] = useState(0);

  // Daftar poster dengan properti path dan dimensi
  const PosterConstants = [
    { src: "/images/home/swiper/1.png", width: 800, height: 400 },
    { src: "/images/home/swiper/2.png", width: 800, height: 400 },
    { src: "/images/home/swiper/3.png", width: 800, height: 400 },
    { src: "/images/home/swiper/4.png", width: 800, height: 400 },
    { src: "/images/home/swiper/5.png", width: 800, height: 400 },
  ];

  const swiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation, Autoplay, EffectCoverflow],
    spaceBetween: -40,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 40,
      depth: 150,
      modifier: 5,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: ".swiper-bullet",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const handleSlideChange = (e: any) => {
    setPosition(e.realIndex);
  };

  return (
    <section className="bg-black w-full text-white py-16">
      {/* Bagian Heading */}
      <div className="text-center mb-12">
        <GradientTitle text="Produk Kami"/>
      </div>

      {/* Bagian Carousel */}
      <div className="relative mt-10 md:container mx-auto">
        <Swiper
          {...swiperOptions}
          className="!p-2 mt-20 md:container container-none"
          onSlideChange={handleSlideChange}
        >
          {PosterConstants.map((poster, index) => (
            <SwiperSlide key={index} className={`rounded-lg`}>
              <div
                className="relative w-full lg:w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: "66.25%" }}
              >
                <Image
                  src={poster}
                  alt={`Poster-${index}`}
                  className="absolute top-0 overflow-hidden rounded-2xl left-0 w-full h-full object-cover object-bottom"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="!flex items-center justify-center h-5 mt-5">
            <ArrowLeft
              className="swiper-button-prev !relative mx-4"
              color="gray"
            />
            {PosterConstants.map((_, index) => (
              <div
                key={index}
                className={`rounded-full w-3 h-3 z-20 mx-1`}
                style={{
                  backgroundColor: index === position ? "#ffffff" : "#4c4c4c",
                }}
              />
            ))}
            <ArrowRight
              className="swiper-button-next !relative mx-4"
              color="gray"
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default EcoFriendlySection;
