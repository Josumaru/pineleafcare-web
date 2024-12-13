import GradientTitle from "@/components/common/GradientTitle";
import { LucideClipboard, LucideHandshake, LucideWallet } from "lucide-react";
import { NextPage } from "next";
const Kemitraan: NextPage = ({}) => {
    return (
        <div className="text-white py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-60">
            {/* Bagian Kiri */}
            <div className="max-w-7xl">
                <div className="mb-5">
                    <div className="text-xl lg:text-2xl font-bold opacity-50">KEMITRAAN</div>
                    <div className="">
                        <GradientTitle text="MENGAPA PINELEAF?" />
                    </div>
                </div>
                <p className="text-white max-w-md mb-5 opacity-80">
                    Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan produk dan pelayanan, terbukti sejak tahun 2015 hingga saat ini telah mencapai 300 outlet mitra di seluruh Indonesia.
                </p>
                <p className="text-white max-w-md opacity-80">
                    Pionir solusi terbaik untuk kebutuhan perawatan sepatu, tas & stroller di Indonesia. Menggunakan produk berkualitas dan mendapatkan review 4.9 di marketplace Shopee & Tokopedia.
                </p>
                <div className="mt-5">
                    <button className="bg-gray-500 text-white px-6 py-3 rounded-full font-bold">
                        HUBUNGI SEKARANG
                    </button>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className="">
                <div className="mt-10 lg:mt-20">
                    {/* FRENCHISE */}
                    <div className="mb-5">
                        <div className="flex items-start">
                            <LucideWallet className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-5" />
                            <div>
                                <div className="font-bold text-lg lg:text-xl">FRENCHISE</div>
                                <div className="text-sm lg:text-base max-w-xs opacity-80">
                                    Menggunakan brand PINELEAF SHOES, BAG & STROLLER SPA. Desain booth sesuai standar, mendapatkan peralatan lengkap, dan pelatihan profesional. Bisnis dapat dijalankan Auto-Pilot.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MITRA */}
                    <div className="mb-5">
                        <div className="flex items-start">
                            <LucideHandshake className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-5" />
                            <div>
                                <div className="font-bold text-lg lg:text-xl">MITRA</div>
                                <div className="text-sm lg:text-base max-w-xs opacity-80">
                                    Desain & brand bebas dan fleksibel. Didukung oleh tim Pineleaf. Mendapat peralatan & SOP secara lengkap. Tanpa biaya franchise dan royalti. 100% keuntungan milik mitra.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PAKET USAHA */}
                    <div className="">
                        <div className="flex items-start">
                            <LucideClipboard className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-5" />
                            <div>
                                <div className="font-bold text-lg lg:text-xl">PAKET USAHA</div>
                                <div className="text-sm lg:text-base max-w-xs opacity-80">
                                    Perlengkapan dan peralatan usaha cuci sepatu & tas. Mendapat Buku SOP, Video Tutorial, dan Sertifikat.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Kemitraan;