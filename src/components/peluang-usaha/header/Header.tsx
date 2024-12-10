import { NextPage } from "next";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
const Header: NextPage = ({}) => {
    return (
        <div className="bg-[#272727] w-full">
            <div className="text-center py-32">
                <div className="text-5xl text-center font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">PELUANG USAHA PINELEAF</div>
            </div>
            <div className="grid grid-cols-3 text-center items-center p-5">
                <div className="text-white ">
                    <Image
                        className="ml-32 grayscale"
                        src={ImageConstants.pineleafLogo}
                        alt="Pineleaf Logo"
                        height={60}
                    />
                    <div className="text-2xl max-w-60 ml-24 font-serif font-thin">
                        SHOES ,BAG & STROLLER SPA
                    </div>
                </div>
                <div>
                    <Image
                        className="ml-28 h-24 w-52"
                        src={ImageConstants.pineleafpremiumcareLogo}
                        alt="Pineleaf Premium Care Logo"
                    />
                </div>
                <div>
                    <Image
                        className="ml-32 h-32 w-40 grayscale"
                        src={ImageConstants.pineleafLogo}
                        alt="Pineleaf Logo"
                    />
                    <div className="font-serif text-white font-thin text-lg">TRAINING & DEVELOPMENT</div>
                </div>
                <div className="mt-10 p-5 text-white max-w-40 ml-32">
                    <div className="text-sm font-semibold text-[#AEAEAE]">PARTNERSHIP & FRENCHISE</div>
                    <div className="text-xs font-light mt-1 text-[#AEAEAE]">Paket Usaha Siap Buka di Mail atau Rumahan</div>
                </div>
                <div className="mt-10 p-5 text-white ml-32 max-w-40">
                    <div className="text-sm font-semibold text-[#AEAEAE]">SHOES CARE PRODUCT & SUPPLY</div>
                    <div className="text-xs font-light mt-1 text-[#AEAEAE] ">Menggunakan Produk Berkualitas & Ramah Lingkungan</div>
                </div>
                <div className="mt-10 p-5 text-white ml-32 max-w-40">
                    <div className="text-sm font-semibold text-[#AEAEAE]">TRAINING SOP & MANAGEMENT</div>
                    <div className="text-xs font-light mt-1 text-[#AEAEAE]">Meningkatkan Skill Perwatan Sepatu, Tas & Stroller Spa</div>
                </div>
            </div>
        </div>
    )
}
export default Header;