import dynamic from 'next/dynamic';
import { NextPage } from "next";

const AnimatedTestimonials = dynamic(() => import('@/components/ui/animated-testimonials'), { ssr: false });

const testimoni: NextPage = () => {
  // Data Testimoni dalam bentuk array
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/images/header/7.png", // src sekarang adalah string
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/images/header/7.png", // src sekarang adalah string
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/header/7.png", // src sekarang adalah string
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/header/7.png", // src sekarang adalah string
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/header/7.png", // src sekarang adalah string
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Bagian Heading */}
      <div className="text-center mb-12">
        <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#ABABAB] via-white to-[#ABABAB] inline-block text-transparent bg-clip-text">
          Testimoni
        </h3>
      </div>

      {/* Komponen Testimoni */}
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default testimoni;
