import { NextPage } from "next";
const Kemitraan: NextPage = ({}) => {
    return (
        <div className="text-white py-12 px-6 grid grid-cols-2 gap-64">
            <div className="max-w-6xl mx-auto">
                <div className="mb-5">
                    <div className="text-2xl font-bold">KEMITRAAN</div>
                    <div className="text-3xl font-extrabold">MENGAPA PINELEAF?</div>
                </div>
                <p className=" text-white max-w-md mb-5 text">
                    Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan produk dan pelayanan, terbukti sejak tahun 2015 hingga saat ini telah mencapai 300 outlet mitra di seluruh Indonesia.
                    
                </p>
                <p className="text-white max-w-md">
                    Pionir Solusi terbaik untuk kebutuhan perawatan sepatu, tas & stroller di Indonesia. Menggunakan produk berkualitas dan mendapatkan review 4.9 di marketplace Shopee & Tokopedia.
                </p>
                <div className="mt-5">
                    <button className="bg-gray-500 text-white px-6 py-4 rounded-full font-bold">HUBUNGI SEKARANG</button>
                </div>
            </div>
            <div className="">
                <div className="mt-20">
                    <div className="mb-5">
                        <div></div>
                        <div className="font-bold text-xl">FRENCHISE</div>
                        <div className="text-sm max-w-sm">Menggunakan brand PINELEAF SHOES, BAG & STROLLER SPA. Desain booth sesuai standar, Mendapatkan peralatan lengkap dan pelatihan secara profesional. Bisnis dapat dijalankan Auto-Pilot.</div>
                    </div>

                    <div className="mb-5">
                        <div></div>
                        <div className="font-bold text-xl">MITRA</div>
                        <div className="text-sm max-w-sm">Desain & brand bebas dan fleksibel. Didukung oleh tim Pineleaf. Mendapat peralatan & SOP secara lengkap. Tanpa biaya franchise dan royalti. 100% keuntungan milik mitra.</div>
                    </div>
                    <div>
                        <div></div>
                        <div className="font-bold text-xl">PAKET USAHA</div>
                        <div className="text-sm max-w-sm">Perlengkapan dan peralatan usaha cuci sepatu & tas. Mendapat Buku SOP dan Video Tutorial. Sertifikat</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Kemitraan;