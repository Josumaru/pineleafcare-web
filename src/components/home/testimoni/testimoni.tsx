import dynamic from 'next/dynamic';
import { NextPage } from "next";
import GradientTitle from '@/components/common/GradientTitle';

const AnimatedTestimonials = dynamic(() => import('@/components/ui/animated-testimonials'), { ssr: true });

const testimoni: NextPage = () => {
  // Data Testimoni dalam bentuk array
  const testimonials = [
    {
      quote: "Cleaner dari pineleaf ini sangat ampuh dalam membersihakan noda yang membandel dan pastinya tidak merusak bahan sepatunya serta parfumnya sangat khas aroma bable gumnya.",
      name: "Sambatrushoe",
      designation: "Sambatrushoe",
      src: "/images/home/testimoni/0.png",
    },
    {
      quote: "no more effort utk bersihin sepatu putih walaupun kotor. biasanya kan sepatu putih klo kita cuci agak menguning ya klo pake cleaner lain tpi klo pake cleaner pinleaf bersih kinclong.",
      name: "Shoes lab 99",
      designation: "Shoes lab 99",
      src: "/images/home/testimoni/1.png",
    },
    {
      quote:
        "Pengalaman saya menggunakan cleaner dari pineleaf puas min, karena bersih, hasilnya wangi juga, dan yang terpenting hasilnya ngga kalah dari merk lain yang harga mahal.",
      name: "Alba.Treatment",
      designation: "Operations Director at CloudScale",
      src: "/images/home/testimoni/2.png",
    },
    {
      quote:
        "Untuk produknya baguss bgt, buat cleaner sama parfumenya juga wangi dan ampuh bgt. Sama yg surprise itu Sole nya bisa sekaligus mutihin sole nya.",
      name: "shiningshoes.xyz",
      designation: "shiningshoes.xyz",
      src: "/images/home/testimoni/3.png",
    },
    {
      quote:
        "Produknya bagus dan bersih kak mantab",
      name: "Evil Washer",
      designation: "Evil Washer",
      src: "/images/home/testimoni/4.png",
    },
    {
      quote: 'jujur puas banget dengan dua varian cleaner nya 1. Cleaner yg dapat di pakai ke semua jenis bahan(wangin lemonnya segar)2. Cleaner yg khusus buat bahan leather atau kulit (ini wanginya juara sih manis soft ada segarnya juga) busanya banyak mempermudah buat pencucian hasil juga maksimal noda" juga gampang bgt hilangnya dan yg paling penting minim residu.',
      name: "Horse shoescleaning",
      designation: "Horse shoescleaning",
      src: "/images/home/testimoni/5.png",
    },
    {
      quote: 'Pengalaman memakai produk pineleaf, jujur bahannya aku suka karena produk alami, baunya juga harum dan juga tidak lengket, jadi bener bener produk yg bagus dan ramah untuk pengguna mas, dan sampai sekarang kutsu lebih sering memakai produk dari pineleaf drpd yg lainnya, mulai dari shoes cleaner, sol cleaner, shoes refresher, anti jamur (khusus bahan kulit)',
      name: "Kutsu cleaning shoes",
      designation: "Kutsu cleaning shoes",
      src: "/images/home/testimoni/6.png",
    },
  ];

  return (
    <section className="bg-black text-white pt-10 w-full">
      {/* Bagian Heading */}
      <div className="text-center">
        <GradientTitle text='Testimoni'/>
      </div>

      {/* Komponen Testimoni */}
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default testimoni;
