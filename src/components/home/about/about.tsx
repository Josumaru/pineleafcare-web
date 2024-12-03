import { ChevronRight, Globe } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";

const AboutSection: NextPage = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bagian Kiri - Teks */}
        <div className="flex flex-col justify-center">
          <div className="relative h-full bg-black pb-28">
            <div className="absolute top-0 left-2">
              <div className="flex">
                <h2 className="text-2xl bold">ABOUT US</h2>
                <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
                  PINELEAF
                </h3>
              </div>
              <p className="absolute pl-16 pr-4 text-gray-400 text-lg text-right">
                Perawatan terbaik untuk Sepatu, Tas, dan Apparel anda.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="relative ">
              <div className="justify-end">
                <div className="flex">
                  <div className="pl-1 pr-2">
                    <Globe />
                  </div>
                  <p>surakarta jawatengah</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg transform scale-6 z-0"></div>
                  <div className="relative y-10 w-full h-auto">
                    <Image
                      src="/images/header/7.png"
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
            <div className="items-center m-5">
              <div>
                <h4 className="text-5xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
                  PEMBERSIH TERBAIK
                </h4>
                <p className="text-gray-400 text-lg">
                  Perawatan dan pembersih terbaik untuk barang-barang anda,
                  terjamin kualitas dan kebersihannya garansi uang kembali jika
                  tidak bersih. Menyediakan produk dan juga layanan kebersihan
                  dengan produk PINELEAF.
                </p>
                <div className="flex text-0xl">
                  <span>Selengkapnya</span>
                  <div>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="relative">
          <div className="absolute inset-0 bg-white opacity-20 rounded-lg transform scale-10 z-0"></div>
          <div className="relative z-10 w-full h-auto">
            <Image
              src="/images/header/7.png"
              alt="Pineleaf Store"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
