import dynamic from 'next/dynamic';
import { NextPage } from "next";
import Image from 'next/image'; // Import image component from Next.js

// Mengimpor komponen AnimatedTestimonials secara dinamis
const AnimatedTestimonials = dynamic(() => import('@/components/ui/animated-testimonials'), {
  ssr: false, // Nonaktifkan server-side rendering untuk komponen ini
});

const HeaderWithTestimonials: NextPage = ({}) => {
  // Data testimonial contoh
  const testimonialsData = [
    { src: "/images/header/7.png" },
    { src: "/images/header/7.png" },
    { src: "/images/header/7.png" },
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Header Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Perawatan <span className="text-green-500">Terbaik</span> untuk Sepatu, Tas, & Apparel Anda
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl">
            Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan produk dan pelayanan, terbukti <br />
            sejak tahun 2015 hingga saat ini telah mencapai 300 outlet mitra di seluruh Indonesia. <br />
            Pionir Solusi terbaik untuk kebutuhan perawatan sepatu, tas & stroller di Indonesia.
          </p>
          <button className="px-6 py-3 border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-black rounded-lg flex items-center space-x-2 mx-auto">
            <span>Info Lebih Lanjut</span>
          </button>
        </div>

        {/* Gambar testimonial dengan rotasi dan animasi */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
          {/* Efek Cahaya Bergradasi */}
          <div className="absolute inset-0 bg-white opacity-20 rounded-full transform scale-150 z-0"></div>

          <div className="relative z-10 w-full h-96 sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            {/* Memasukkan komponen AnimatedTestimonials */}
            <AnimatedTestimonials testimonials={testimonialsData} />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-green-500">300+</h3>
          <p className="text-gray-400">
            Hingga saat ini Mitra PINELEAF telah berada di beberapa kota: Jakarta, Semarang, Surabaya, Medan, dan kota lainnya.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-500">50+</h3>
          <p className="text-gray-400">
            Produk berkualitas dan inovatif untuk mengatasi masalah pada sepatu, tas, dan stroller.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-500">4.9 / 5</h3>
          <p className="text-gray-400">
            Menggunakan produk berkualitas dan mendapatkan review 4.9 di marketplace Shopee & Tokopedia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderWithTestimonials;
