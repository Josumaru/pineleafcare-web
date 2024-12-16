import GradientTitle from "@/components/common/GradientTitle";
import { NextPage } from "next";
import Image from "next/image";

const BiayaSection: NextPage = () => {
  return (
    <section className="text-white w-full flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="py-32 px-2 lg:px-0 text-center">
          <GradientTitle text="Kenapa Harus Memilih Kami?" />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-2">
          <div className="text-left w-1/3">
            <p className="text-gray-500 text-lg">/01</p>
            <h2 className="text-4xl font-bold">Biaya</h2>
          </div>

          <div className="lg:w-1/3 bg-[#18181b] rounded-lg h-48 w-full lg:mx-0 my-4">
            <Image src="/images/home/kelebihan/kelebihan_1.jpg" width={800} height={800} alt="Team Support Pineleaf Care" className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-lg duration-300 ease-in-out "/>
          </div>

          {/* Bagian Kanan */}
          <div className="lg:w-1/3 text-right">
            <h3 className="text-2xl font-semibold">
              Biaya Kemitraan Paling Terjangkau
            </h3>

            <div className="flex items-center justify-start mt-2 pl-20">
              <p className="text-gray-400 text-sm mr-4">//Biaya</p>
              <p className="text-gray-400 text-sm">
                Dengan biaya kemitraan paling terjangkau, jadilah mitra kami
                dalam menyediakan layanan perawatan dan pembersihan tas, sepatu,
                serta apparel berkualitas tinggi.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-28 lg:p-28">
          <div
            className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[100%]  lg:w-[80%]"
            style={{
              clipPath:
                "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-2">
          <div className="text-left w-1/3">
            <p className="text-gray-500 text-lg">/02</p>
            <h2 className="text-4xl font-bold">Fee</h2>
          </div>

          <div className="lg:w-1/3 bg-[#18181b] rounded-lg h-48 w-full lg:mx-0 my-4">
            <Image src="/images/home/kelebihan/kelebihan_2.jpg" width={800} height={800} alt="Biaya kemitraan paling terjangkau Pineleaf Care" className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-lg duration-300 ease-in-out "/>
          </div>

          {/* Bagian Kanan */}
          <div className="lg:w-1/3 text-right">
            <h3 className="text-2xl font-semibold">
              Tanpa Royalty dan Franchise Fee
            </h3>

            <div className="flex items-center justify-start mt-2 pl-20">
              <p className="text-gray-400 text-sm mr-4">//Fee</p>
              <p className="text-gray-400 text-sm">
                Tanpa royalty dan franchise fee, Anda dapat bergabung bersama
                kami untuk menyediakan layanan perawatan dan pembersihan tas,
                sepatu, serta apparel.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-28 lg:p-28">
          <div
            className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[100%] lg:w-[80%]"
            style={{
              clipPath:
                "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-2">
          <div className="text-left w-1/3">
            <p className="text-gray-500 text-lg">/03</p>
            <h2 className="text-4xl font-bold">Support</h2>
          </div>

          <div className="lg:w-1/3 bg-[#18181b] rounded-lg h-48 w-full lg:mx-0 my-4">
            <Image src="/images/home/kelebihan/kelebihan_3.webp" width={800} height={800} alt="Tanpa royalty dan franchise fee Pineleaf Care" className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-lg duration-300 ease-in-out "/>
          </div>

          {/* Bagian Kanan */}
          <div className="lg:w-1/3 text-right">
            <h3 className="text-2xl font-semibold">
              Profesional Trainer Support
            </h3>

            <div className="flex items-center justify-start mt-2 pl-20">
              <p className="text-gray-400 text-sm mr-4">//Support</p>
              <p className="text-gray-400 text-sm">
                Dapatkan dukungan dari profesional trainer untuk membantu Anda
                merawat dan membersihkan tas, sepatu, serta apparel dengan
                maksimal.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-28 lg:p-28">
          <div
            className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[100%] lg:w-[80%]"
            style={{
              clipPath:
                "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-2">
          <div className="text-left w-1/3">
            <p className="text-gray-500 text-lg">/04</p>
            <h2 className="text-4xl font-bold">Inovasi</h2>
          </div>

          <div className="lg:w-1/3 bg-[#18181b] rounded-lg h-48 w-full lg:mx-0 my-4">
            <Image src="/images/home/kelebihan/kelebihan_4.png" width={800} height={800} alt="Dapatkan dukungan dari profesional trainer Pineleaf Care" className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-lg duration-300 ease-in-out "/>
          </div>

          {/* Bagian Kanan */}
          <div className="lg:w-1/3 text-right">
            <h3 className="text-2xl font-semibold">
              Pengembangan dan Inovasi Produk Berkelanjutan
            </h3>

            <div className="flex items-center justify-start mt-2 pl-20">
              <p className="text-gray-400 text-sm mr-4">//Inovasi</p>
              <p className="text-gray-400 text-sm">
                Kami terus berinovasi dan mengembangkan produk secara
                berkelanjutan untuk mendukung perawatan tas, sepatu, dan apparel
                Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-28 lg:p-28">
          <div
            className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[100%] lg:w-[80%]"
            style={{
              clipPath:
                "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl px-2">
          <div className="text-left w-1/3">
            <p className="text-gray-500 text-lg">/05</p>
            <h2 className="text-4xl font-bold">Tanggap</h2>
          </div>

          <div className="lg:w-1/3 bg-[#18181b] rounded-lg h-48 w-full lg:mx-0 my-4">
            <Image src="/images/home/kelebihan/kelebihan_5.jpg" width={800} height={800} alt="inovasi dan mengembangkan produk secara Pineleaf Care" className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-lg duration-300 ease-in-out "/>
          </div>

          {/* Bagian Kanan */}
          <div className="lg:w-1/3 text-right">
            <h3 className="text-2xl font-semibold">
              Tim Support Ai-CHA yang Cepat Tanggap
            </h3>

            <div className="flex items-center justify-start mt-2 pl-20">
              <p className="text-gray-400 text-sm mr-4">//Tanggep</p>
              <p className="text-gray-400 text-sm">
                Dengan tim support Ai-CHA yang cepat tanggap, permasalahan
                perawatan tas, sepatu, dan apparel Anda akan segera teratasi.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-28 lg:p-28">
          <div
            className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[100%] lg:w-[80%]"
            style={{
              clipPath:
                "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BiayaSection;
