import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <section className="bg-black h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Terjadi Kesalahan
          </p>
          <p className="mb-4 text-lg font-light text-gray-400">
            Maaf, Halaman yang kamu cari tidak ditemukan
          </p>
          <Link href="/beranda">
            <Button className="inline-flex text-black hover:bg-primary-800 my-4 bg-white hover:bg-slate-300 transition-colors">
              Kembali ke beranda
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
