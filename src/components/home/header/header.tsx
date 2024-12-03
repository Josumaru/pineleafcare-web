import dynamic from 'next/dynamic';
import { NextPage } from "next";
import Image from 'next/image'; // Import image component from Next.js
import { Send } from 'lucide-react';

// Mengimpor komponen AnimatedTestimonials secara dinamis
const AnimatedTestimonials = dynamic(() => import('@/components/ui/animasi'), {
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
    <section className="bg-black text-white py-16 max-w-7xl">
      {/* Header Section */}
      <div className="container flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 flex flex-col items-start justify-start text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
            Perawatan Terbaik untuk Sepatu, Tas, & Apparel Anda
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl">
            Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan produk dan pelayanan, terbukti <br />
            sejak tahun 2015 hingga saat ini telah mencapai 300 outlet mitra di seluruh Indonesia. <br />
            Pionir Solusi terbaik untuk kebutuhan perawatan sepatu, tas & stroller di Indonesia.
          </p>
          <button className="p-1 border-2 bg-[#27272a] border-gray-600  text-white-500 rounded-full flex items-center space-x-2">
            <span className='pr-10 pl-2'>Info Lebih Lanjut</span>
            <div className='bg-[#3f3f46] p-2 px-5 rounded-full'><Send></Send></div>
          </button>
        </div>

        {/* Gambar testimonial dengan rotasi dan animasi */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
          {/* Efek Cahaya Bergradasi */}
          <div className="absolute inset-0 bg-white opacity-20 rounded-full transform z-0"></div>

          <div className="relative z-10 w-full h-auto">
            {/* Memasukkan komponen AnimatedTestimonials */}
            <AnimatedTestimonials testimonials={testimonialsData} />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
        <div className='flex flex-col items-start justify-start'>
          <h3 className="text-3xl font-bold text-white-500">300+</h3>
          <p className="text-gray-400 text-start">
            Hingga saat ini Mitra PINELEAF telah berada di beberapa kota: Jakarta, Semarang, Surabaya, Medan, dan kota lainnya.
          </p>
        </div>
        <div className='flex flex-col items-start justify-start'>
          <h3 className="text-3xl font-bold text-white-500">50+</h3>
          <p className="text-gray-400 text-start">
            Produk berkualitas dan inovatif untuk mengatasi masalah pada sepatu, tas, dan stroller.
          </p>
        </div>
        <div className='flex flex-col items-start justify-start'>
          <h3 className="text-3xl font-bold text-white-500">4.9 / 5</h3>
          <p className="text-gray-400 text-start">
            Menggunakan produk berkualitas dan mendapatkan review 4.9 di marketplace Shopee & Tokopedia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderWithTestimonials;
