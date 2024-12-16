import { ImageConstants } from "@/constants/ImageConstants";
import { ChevronRight, Globe } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const AboutSection: NextPage = () => {
  return (
    <section className="bg-black text-white w-full flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
        {/* Bagian Kiri - Teks */}
        <div className="flex flex-col justify-center">
          <div className="relative h-full pb-28 flex justify-end items-end">
            <div className="absolute top-0 ">
              <div className="flex">
                <h2 className="text-xl bold">ABOUT US</h2>
                <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
                  PINELEAF
                </h3>
              </div>
              <p className="absolute pl-16 text-gray-400 text-lg text-right">
                Perawatan terbaik untuk Sepatu, Tas, dan Apparel anda.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="relative ">
              <div className="justify-end hidden lg:block">
                <div className="flex mb-2">
                  <div className="pl-1 pr-2">
                    <Globe />
                  </div>
                  <p>Surakarta</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg transform scale-6 z-0"></div>
                  <div className="relative y-10 w-full h-auto py-5 px-4">
                    <Image
                      src={ImageConstants.pineleafLogo}
                      alt="Pineleaf Store"
                      width={200}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center m-2">
              <div>
                <h4 className="text-5xl pt-2 font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
                  PEMBERSIH TERBAIK
                </h4>
                <p className="text-gray-400 text-lg">
                  Perawatan dan pembersih terbaik untuk barang-barang anda,
                  terjamin kualitas dan kebersihannya garansi uang kembali jika
                  tidak bersih. Menyediakan produk dan juga layanan kebersihan
                  dengan produk PINELEAF.
                </p>
                <Link href="/training-support">
                  <div className="flex text-0xl hover:underline ">
                    <span>Selengkapnya</span>
                    <div>
                      <ChevronRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="relative aspect-square mx-2 lg:mx-0">
          <div className="relative z-10 w-full h-auto aspect-square">
            <Image
              src="/images/documentation/docs_4.webp"
              alt="Pineleaf Store"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover w-full aspect-square h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
