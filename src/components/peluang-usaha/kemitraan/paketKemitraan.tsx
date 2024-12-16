import GradientTitle from "@/components/common/GradientTitle";
import { LucideCrown, LucideRocket, LucideSend, LucideTrendingUp } from "lucide-react";
import { NextPage } from "next";

const PaketKemitraan: NextPage = ({}) => {
    return (
        <div className="text-white">
            <div className="text-xl md:text-2xl font-bold opacity-50">PAKET KEMITRAAN</div>
            <div className="">
                <GradientTitle text="APA SAJA PAKET KEMITRAAN PINELEAF ?" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                {/* Paket Kickstart Lite */}
                <div className="bg-[#18181B] rounded-2xl border border-gray-500 p-6 md:p-8">
                    <LucideRocket className="mx-auto w-20 h-20 md:w-32 md:h-32 my-4" />
                    <div className="text-lg md:text-2xl font-thin text-center">Paket Kickstart Lite</div>
                    <div className="text-xs md:text-sm opacity-50 mt-3 text-center">
                        Paket ini cocok untuk kamu yang baru memulai perjalanan bisnis. Dengan investasi minimal, kamu sudah bisa mendapatkan perlengkapan dasar dan pelatihan cepat untuk memulai bisnis cuci sepatu.
                    </div>
                    <div className="mt-10 md:mt-24 text-2xl md:text-4xl text-center font-bold">
                        <span className="relative align-top top-[-4px] md:top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <a href="https://wa.me/6285867942389" target="_blank">
                            <button className="flex items-center justify-between bg-costumBgCard text-white p-1  md:py-2 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                                <span className="px-4">Konsultasi</span>
                                <span className="px-3 md:px-5 bg-gray-700 rounded-full p-1">
                                    <LucideSend className="w-4 h-4" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Paket Rise & Shine */}
                <div className="bg-[#18181B] rounded-2xl border border-gray-500 p-6">
                    <LucideTrendingUp className="mx-auto w-20 h-20 md:w-32 md:h-32 my-4" />
                    <div className="text-lg md:text-2xl font-thin text-center">Paket Rise & Shine</div>
                    <div className="text-xs md:text-sm opacity-50 mt-3 text-center">
                        Paket ini dirancang untuk kamu yang ingin memperluas usaha dengan modal lebih besar. Dilengkapi dengan perlengkapan yang lebih lengkap dan pelatihan mendalam, kamu akan siap bersinar dalam bisnis jasa cuci sepatu.
                    </div>
                    <div className="mt-10 md:mt-20 text-2xl md:text-4xl text-center font-bold">
                        <span className="relative align-top top-[-4px] md:top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <a href="https://wa.me/6285867942389" target="_blank">
                            <button className="flex items-center justify-between bg-costumBgCard text-white p-1  md:py-2 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                                <span className="px-4">Konsultasi</span>
                                <span className="px-3 md:px-5 bg-gray-700 rounded-full p-1">
                                    <LucideSend className="w-4 h-4" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Paket Supreme Trailblazer */}
                <div className="bg-[#18181B] rounded-2xl border border-gray-500 p-6">
                    <LucideCrown className="mx-auto w-20 h-20 md:w-32 md:h-32 my-4" />
                    <div className="text-lg md:text-2xl font-thin text-center">Paket Supreme Trailblazer</div>
                    <div className="text-xs md:text-sm opacity-50 mt-3 text-center">
                        Paket paling lengkap untuk kamu yang ingin menjadi pionir di industri ini. Dengan perlengkapan bisnis full-set, pelatihan eksklusif, dan strategi bisnis yang terbukti, paket ini adalah pilihan tepat bagi mereka yang ingin menciptakan jejak besar dalam dunia bisnis jasa cuci sepatu.
                    </div>
                    <div className="mt-10 md:mt-16 text-2xl md:text-4xl text-center font-bold">
                        <span className="relative align-top top-[-4px] md:top-[-10px]">Rp </span>
                        200.000
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <a href="https://wa.me/6285867942389" target="_blank">
                            <button className="flex items-center justify-between bg-costumBgCard text-white p-1  md:py-2 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                                <span className="px-4">Konsultasi</span>
                                <span className="px-3 md:px-5 bg-gray-700 rounded-full p-1">
                                    <LucideSend className="w-4 h-4" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaketKemitraan;