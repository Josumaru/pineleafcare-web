import Hero from "@/components/home/header/header";
import Banner from "@/components/home/banner/banner";
import About from "@/components/home/about/about";
import Produk from "@/components/home/produk/produk";
import Kelebihan from "@/components/home/kelebihan/kelebihan";
import Testimoni from "@/components/home/testimoni/testimoni";
import Footer from "@/components/common/footer/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <Hero />
      <Banner />
      <About />
      <Produk />
      <Kelebihan />
      <Testimoni />
    </div>
  );
}
