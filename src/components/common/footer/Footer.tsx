import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import MapComponent from "../map/Map";
import { Instagram, Mail, PhoneIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <section>
      <div className="flex items-center justify-center w-full mt-10 border-b pb-5 border-white border-opacity-20 pt-10">
        <div className="max-w-7xl flex justify-beetween w-full">
          <div className="w-1/2">
            <Image
              src={ImageConstants.pineleafLogo.src}
              width={120}
              height={32}
              alt="Pineleaf Care"
            />
            <MapComponent />
            <p className="text-[#ABABAB] text-sm my-2">
              Jl. Dr. Rajiman 483, Bumi, Laweyan, Solo
            </p>
          </div>
          <div className="w-1/3 pt-9">
            <p className="text-white font-bold">Kontak</p>
            <div className="flex gap-1 pb-1 text-[#ABABAB]">
              <Mail strokeWidth={1.5}/>
              <p>pineleafcare@gmail.com</p>
            </div>
            <div className="flex gap-1 pb-1 text-[#ABABAB]">
              <PhoneIcon strokeWidth={1.5}/>
              <p>+62 858-6794-2389</p>
            </div>
            <div className="flex gap-1 pb-1 text-[#ABABAB]">
              <Instagram strokeWidth={1.5}/>
              <p>@pineleaf</p>
            </div>
          </div>
          <div className="w-1/3 pt-9">
            <p className="text-white font-bold">Berminat bermitra dengan Pineleaf Care ?</p>
            <div className="flex flex-col items-end">
              <Input placeholder="Nama" className="bg-black mb-2 border-[#ABABAB] text-white"/>
              <Input placeholder="Pesan" className="bg-black mb-2 border-[#ABABAB] text-white"/>
              <Button variant={"outline"} className="bg-black  text-[#ABABAB] hover:bg-[#ABABAB] border-[#ABABAB]">Kirim</Button>
            </div>
          </div>
        </div>  
      </div>

      <div className="flex items-center justify-center">
        <div
          className="relative h-1 bg-gradient-to-r from-black via-white to-black w-[80%]"
          style={{
            clipPath: "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)",
          }}
        ></div>
      </div>
        
      <div className="flex justify-between p-4 text-center text-[#ABABAB]">
        <p>© 2024 Pineleaf Care All rights reserved.</p>
        <p>Created by Overlogic ID</p>
      </div>

    </section>
  );
};

export default Footer;
