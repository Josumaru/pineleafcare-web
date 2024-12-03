"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const EcoFriendlySection = () => {
  const [position, setPosition] = useState(0);

  // Daftar poster dengan properti path dan dimensi
  const PosterConstants = [
    { src: "/images/header/7.png", width: 800, height: 400 },
    { src: "/images/header/7.png", width: 800, height: 400 },
    { src: "/images/header/7.png", width: 800, height: 400 },
  ];

  // Swiper options
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  };

  const handleSlideChange = (e: any) => {
    setPosition(e.realIndex);
  };

  return (
    <section className="bg-black text-white py-16">
      {/* Bagian Heading */}
      <div className="text-center mb-12">
        <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
          Produk Kami
        </h3>
      </div>

      {/* Bagian Carousel */}
      <div className="relative mt-10 md:container mx-auto">
        <Swiper
          {...swiperOptions}
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
          className="rounded-lg"
        >
          {PosterConstants.map((poster, index) => (
            <SwiperSlide key={index} className="rounded-lg">
              <div
                className="relative lg:w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <Image
                  src={poster.src}
                  alt={`Poster-${index}`}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                  width={poster.width}
                  height={poster.height}
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigasi dan indikator */}
        <div className="flex items-center justify-center mt-5">
          <button className="swiper-button-prev mx-4">
            <ArrowLeft color="gray" />
          </button>
          {PosterConstants.map((_, index) => (
            <div
              key={index}
              className={`rounded-full w-3 h-3 mx-1 ${
                index === position ? "bg-blue-600" : "bg-gray-500"
              }`}
            ></div>
          ))}
          <button className="swiper-button-next mx-4">
            <ArrowRight color="gray" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlySection;
