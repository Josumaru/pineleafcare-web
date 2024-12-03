import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { register } from "../actions";
interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-10 h-screen bg-[#18181B] border-[#27272A] border flex flex-col items-start justify-between">
        <Image src={ImageConstants.pineleafLogo} alt={"Pineleaf Care"} />
        <div>
          <p className="text-white">
            Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan
            produk dan pelayanan, terbukti sejak tahun 2015 hingga saat ini
            telah mencapai 300 outlet mitra di seluruh Indonesia.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <form>
          <div className="flex flex-col items-center justify-center mb-20">
            <p className="text-gray-100 text-2xl font-bold">
              Selamat datang di Pineleafcare
            </p>
            <p className="text-gray-300">Daftar dengan Email</p>
          </div>
          <p className="text-gray-400">Nama</p>
          <Input
            id="name"
            name="name"
            placeholder="Overlogic Pineleaf"
            className="bg-black text-white border-gray-700"
          />
          <p className="text-gray-400 mt-2">Email</p>
          <Input
            id="email"
            name="email"
            placeholder="overlogic@pineleaf.com"
            className="bg-black text-white border-gray-700"
            type="email"
          />
          <p className="mt-2 text-gray-400">Password</p>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            className="bg-black text-white border-gray-700"
            type="password"
          />
          {/* <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" className="border-gray-600" />
            <label
              htmlFor="terms"
              className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Saya Setuju dengan kebijakan layanan Pineleafcare
            </label>
          </div> */}
          <Button
            formAction={register}
            className="bg-white w-full mt-2 hover:bg-gray-200 text-black"
          >
            Daftar
          </Button>
          <p className="text-gray-400 mt-2">
            Sudah punya akun?{" "}
            <Link
              className="text-white text-bold hover:underline"
              href={"/login"}
            >
              Daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
