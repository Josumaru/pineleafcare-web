import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import MapComponent from "../map/Map";
import Link from "next/link";
import MessageBox from "./MessageBox";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <section>
      <div className="flex items-center justify-center w-full mt-10 pb-5 border-white border-opacity-20 pt-10">
        <div className="max-w-7xl flex justify-beetween w-full">
          <div className="w-1/2">
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
          <div className="w-1/2 pt-9 flex">
            <div className="w-1/2">
              <p className="text-white font-bold">Kontak</p>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a className="hover:underline" target="_blank" href="mailto:pineleaf.indo@gmail.com">Email</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://wa.me/6285867942389"} target="_blank" className="hover:underline">Whats App</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://instagram.com/pineleaf"} target="_blank" className="hover:underline">Instagram</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://shopee.co.id/pineleaf"} target="_blank" className="hover:underline">Shopee</a>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <a href={"https://www.tokopedia.com/pineleafcleaner"} target="_blank" className="hover:underline">Tokopedia</a>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-white font-bold">Halaman</p>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link className="hover:underline" target="_blank" href="blog">Blog & Tips</Link>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link href={"/blog/create"} target="_blank" className="hover:underline">Posting Blog</Link>
              </div>
              <div className="flex gap-1 pb-1 text-[#ABABAB]">
                <Link href={"/produk"} target="_blank" className="hover:underline">Produk</Link>
              </div>
            </div>
          </div>
          <MessageBox />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative h-[1px] bg-gradient-to-r from-black via-white to-black w-[80%]"
          style={{
            clipPath:
              "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
          }}
        />
      </div>

      <div className="flex justify-center items-center w-full pt-5 pb-10 text-center text-[#ABABAB]">
        <div className="max-w-7xl w-full flex items-center justify-between">
          <p>© 2024 Pineleaf Care All rights reserved.</p>
          <p>Created by Overlogic ID</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
