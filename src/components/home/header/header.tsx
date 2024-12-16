import dynamic from "next/dynamic";
import { NextPage } from "next";
import { Spotlight } from "@/components/home/spotlight/spotlight";
// import Image from 'next/image'; // Import image component from Next.js
import { Send } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Mengimpor komponen AnimatedTestimonials secara dinamis
const AnimatedTestimonials = dynamic(() => import("@/components/ui/animasi"), {
  ssr: true, // Nonaktifkan server-side rendering untuk komponen ini
});

const HeaderWithTestimonials: NextPage = ({}) => {
  // Data testimonial contoh
  const testimonialsData = [
    { src: "/images/header/1.png" },
    { src: "/images/header/2.png" },
    { src: "/images/header/3.png" },
    { src: "/images/header/4.png" },
    { src: "/images/header/5.png" },
    { src: "/images/header/6.png" },
    { src: "/images/header/7.png" },
    { src: "/images/header/8.png" },
    { src: "/images/header/9.png" },
    { src: "/images/header/10.png" },
    { src: "/images/header/11.png" },
    { src: "/images/header/12.png" },
    { src: "/images/header/14.png" },
    { src: "/images/header/14.png" },
    { src: "/images/header/15.png" },
    { src: "/images/header/16.png" },
    { src: "/images/header/17.png" },
    { src: "/images/header/18.png" },
    { src: "/images/header/19.png" },
    { src: "/images/header/20.png" },
    { src: "/images/header/21.png" },
    { src: "/images/header/22.png" },
    { src: "/images/header/23.png" },
    { src: "/images/header/24.png" },
    { src: "/images/header/25.png" },
    { src: "/images/header/26.png" },
    { src: "/images/header/27.png" },
    { src: "/images/header/28.png" },
    { src: "/images/header/29.png" },
    { src: "/images/header/30.png" },
    { src: "/images/header/31.png" },
    { src: "/images/header/32.png" },
  ];

  return (
    <section className="bg-black lg:px-5 2xl:px-0 w-full text-white py-16 max-w-7xl flex lg:block items-center justify-center h-screen">
      {/* <Spotlight className="lg:hidden overflow-hidden" /> */}
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-10">
        <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left space-y-6">
          <TextGenerateEffect
            words="Perawatan Terbaik untuk Sepatu, Tas, & Apparel Anda"
            className="md:text-3xl px-5 lg:px-0 text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text"
          />
          <p className="text-gray-400 text-lg lg:text-xl hidden lg:block">
            Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan
            produk dan pelayanan, terbukti sejak tahun 2015 hingga saat ini
            telah mencapai 300 outlet mitra di seluruh Indonesia.
          </p>
          <p className="text-gray-400 px-5 lg:px-0 text-xs lg:text-xl">
            Pionir Solusi terbaik untuk kebutuhan perawatan sepatu, tas &
            stroller di Indonesia.
          </p>
          <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#FFFFFF_50%,#000000_100%)]" />
            
            <a
              href="https://wa.me/6285867942389"
              target="_blank"
              className="bg-[#27272a] border-gray-600  text-white-500 rounded-full items-center flex h-full w-full cursor-pointer justify-center p-2 text-sm font-medium text-white backdrop-blur-3xl"
            >
              <span className="w-48 pl-2 text-center text-xs lg:text-base">
                Info Lebih Lanjut
              </span>
              <div className="bg-[#3f3f46] p-1 lg:p-2 px-7 lg:px-7 rounded-full">
                <Send />
              </div>
            </a>
          </button>
        </div>

        {/* Gambar testimonial dengan rotasi dan animasi */}
        <div className="lg:w-1/2 justify-center mt-8 lg:mt-0 relative hidden xl:flex">
          <div className="relative z-10 w-full h-auto">
            <Spotlight
              className="absolute inset-0 z-0 scale-110"
              fill="white"
            />
            {/* Memasukkan komponen AnimatedTestimonials */}
            <AnimatedTestimonials testimonials={testimonialsData} />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mx-auto mt-5 grid-cols-1 lg:grid-cols-3 gap-6 text-center hidden lg:grid">
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-3xl font-bold text-white-500">300+</h3>
          <p className="text-gray-400 text-start">
            Hingga saat ini Mitra PINELEAF telah berada di beberapa kota:
            Jakarta, Semarang, Surabaya, Medan, dan kota lainnya.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-3xl font-bold text-white-500">50+</h3>
          <p className="text-gray-400 text-start">
            Produk berkualitas dan inovatif untuk mengatasi masalah pada sepatu,
            tas, dan stroller.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-3xl font-bold text-white-500">4.9 / 5</h3>
          <p className="text-gray-400 text-start">
            Menggunakan produk berkualitas dan mendapatkan review 4.9 di
            marketplace Shopee & Tokopedia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderWithTestimonials;
