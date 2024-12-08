"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Berganti gambar otomatis setiap 5 detik
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval); // Hapus interval saat komponen unmount
    }
  }, [autoplay]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative h-80 w-full">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: 0, // Rotasi awal
              }}
              animate={{
                opacity: index === active ? 1 : 0,
                scale: index === active ? 1 : 0.9,
                rotate: index === active ? 30 : 0, // Rotasi 10 derajat ke kanan untuk gambar aktif
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                rotate: 0, // Rotasi kembali ke posisi awal saat keluar
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 origin-bottom ${
                index === active ? "block" : "opacity-0 pointer-events-none" // Hanya menampilkan gambar aktif
              }`}
            >
              <Image
                src={testimonial.src}
                alt={`Testimonial Image ${index}`}
                width={500}
                height={500}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;