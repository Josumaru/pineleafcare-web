import { NextPage } from "next";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";
const Header: NextPage = ({}) => {
    return (
        <div className="bg-[#272727] w-full">
            <div className="text-center py-20 md:py-32">
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
                    PELUANG USAHA PINELEAF
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center p-5 mb-10">
                <div className="flex flex-col items-center">
                    <Image
                        className="mx-auto grayscale"
                        src={ImageConstants.pineleafLogo}
                        alt="Pineleaf Logo"
                        height={60}
                    />
                    <div className="max-w-full md:max-w-60">
                        <div className="font-serif font-thin text-lg md:text-2xl text-white">
                            SHOES, BAG & STROLLER SPA
                        </div>
                        <div className="mt-5">
                            <div className="text-sm md:text-base font-semibold text-[#AEAEAE]">
                                PARTNERSHIP & FRENCHISE
                            </div>
                            <div className="text-xs md:text-sm font-light mt-1 text-[#AEAEAE]">
                                Paket Usaha Siap Buka di Mall atau Rumahan
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="mx-auto h-16 md:h-24 w-40 md:w-52"
                        src={ImageConstants.pineleafpremiumcareLogo}
                        alt="Pineleaf Premium Care Logo"
                    />
                    <div className="mt-5 max-w-full">
                        <div className="text-sm md:text-base font-semibold text-[#AEAEAE]">
                            SHOES CARE PRODUCT & SUPPLY
                        </div>
                        <div className="text-xs md:text-sm font-light mt-1 text-[#AEAEAE]">
                            Menggunakan Produk Berkualitas & Ramah Lingkungan
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="mx-auto h-24 md:h-32 w-32 md:w-40 grayscale"
                        src={ImageConstants.pineleafLogo}
                        alt="Pineleaf Logo"
                    />
                    <div className="font-serif text-white font-thin text-sm md:text-lg">
                        TRAINING & DEVELOPMENT
                    </div>
                    <div className="mb-5">
                        <div className="text-sm md:text-base font-semibold text-[#AEAEAE]">
                            TRAINING SOP & MANAGEMENT
                        </div>
                        <div className="text-xs md:text-sm font-light mt-1 text-[#AEAEAE]">
                            Meningkatkan Skill Perawatan Sepatu, Tas & Stroller Spa
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Header;