import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import MapComponent from "../map/Map";
import Link from "next/link";
import MessageBox from "./MessageBox";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <section className="p-2">
      <div className="flex items-center justify-center w-full mt-10 pb-5 border-white border-opacity-20 pt-10">
        <div className="max-w-7xl flex-col lg:flex-row flex justify-beetween w-full">
          <div className="w-full lg:w-1/2">
            <Image
              src={ImageConstants.pineleafLogo.src}
              width={120}
              height={32}
              className="mb-2"
              alt="Pineleaf Care"
            />
            <MapComponent />
            <p className="text-[#ABABAB] text-sm my-2">
              Jl. Dr. Rajiman 483, Bumi, Laweyan, Solo
            </p>
          </div>
          <div className="w-full lg:w-1/2 pt-9 flex">
            <div className="w-1/2">
              <p className="text-white font-semibold">Kontak</p>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a className="hover:underline hover:text-white transition-colors" target="_blank" href="mailto:pineleaf.indo@gmail.com">Email</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://wa.me/6285867942389"} target="_blank" className="hover:underline hover:text-white transition-colors">Whats App</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://instagram.com/pineleaf"} target="_blank" className="hover:underline hover:text-white transition-colors">Instagram</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://shopee.co.id/pineleaf"} target="_blank" className="hover:underline hover:text-white transition-colors">Shopee</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://www.tokopedia.com/pineleafcleaner"} target="_blank" className="hover:underline hover:text-white transition-colors">Tokopedia</a>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-white font-semibold">Halaman</p>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link className="hover:underline hover:text-white transition-colors" target="_blank" href="blog">Blog & Tips</Link>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link href={"/blog/create"} target="_blank" className="hover:underline hover:text-white transition-colors">Posting Blog</Link>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link href={"/produk"} target="_blank" className="hover:underline hover:text-white transition-colors">Produk</Link>
              </div>
            </div>
          </div>
          <MessageBox />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-full lg:w-[80%]"
          style={{
            clipPath:
              "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
          }}
        />
      </div>

      <div className="p-5 xl:p-0 flex justify-center items-center w-full pt-5 pb-10 text-center text-[#ABABAB]">
        <div className="max-w-7xl w-full flex items-center justify-between my-2">
          <p className="max-sm:text-[11px] text-base">© 2024 Pineleaf Care All rights reserved.</p>
          <p className="max-sm:text-[11px] text-base">Created by <a href="https://overlogic.id" className="hover:underline hover:text-white transition-colors">Overlogic ID</a></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
