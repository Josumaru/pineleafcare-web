"use client";
import React, { useRef, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    if (!videoRef.current) return;
    const videoElement = videoRef.current;
    const rect = videoElement.getBoundingClientRect();

    // Periksa apakah video terlihat di dalam viewport
    if (rect.top +1080 >= 0 && rect.bottom <= window.innerHeight+1080) {
      if (videoElement.paused) {
        videoElement
          .play()
          .catch((error) => console.error("Autoplay gagal:", error));
      }
    } else {
      if (!videoElement.paused) {
        videoElement.pause();
      }
    }
  };

  const enableSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false; // Mengaktifkan suara
    videoRef.current.play().catch((error) => console.error("Play gagal:", error));
    // Hapus listener setelah suara diaktifkan
    document.removeEventListener("click", enableSound);
  };

  useEffect(() => {
    // Tambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Menunggu interaksi pengguna untuk mengaktifkan suara
    document.addEventListener("click", enableSound);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", enableSound);
    };
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Video Pendek <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Suede
              </span>
            </h1>
          </>
        }
      >
        <div className="bg-black w-full rounded-xl flex justify-center items-center overflow-hidden landscape">
          <video
            ref={videoRef} // Ref dengan tipe <HTMLVideoElement>
            className="rounded-xl object-contain object-center h-[60rem] -translate-y-1/2 md:h-[80rem] flex items-center justify-center relative px-2 md:px-20 hover:cursor-pointer"
            playsInline
            muted
            preload="auto"
            draggable={false}
          >
            <source src="/video/suede.mp4" type="video/mp4" />
          </video>
          <div className="absolute">
            <p>Klik untuk aktifkan suara</p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
