import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { login } from '../actions'
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (data?.user) {
      redirect('/')
    }
  return (
    <div className="flex">
      <div className="w-1/2 p-10 h-screen bg-[#18181B] border-[#27272A] border flex flex-col items-start justify-between">
        <Image src={ImageConstants.pineleafLogo} alt={"Pineleaf Care"} />
        <div>
          <p className="text-white">
            “Perawatan Terbaik untuk Sepatu, Tas, & Apparel Anda”
          </p>
          <br />
          <p className="text-xs text-gray-400">Pineleaf Care</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <form>
          <div className="flex flex-col items-center justify-center mb-20">
            <p className="text-gray-100 text-2xl font-bold">
              Selamat datang di Pineleafcare
            </p>
            <p className="text-gray-300">Masuk dengan Email</p>
          </div>
          <label htmlFor="email" className="text-gray-400">Email</label>
          <Input id="email" name="email" placeholder="overlogic@pineleaf.com" className="bg-black text-white border-gray-700" type="email" />
          <label htmlFor="password" className="mt-2 text-gray-400">Password</label>
          <Input id="password" name="password" placeholder="••••••••" className="bg-black text-white border-gray-700" type="password" />
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" className="border-gray-600"/>
            <label
                htmlFor="terms"
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Ingat Saya
            </label>
            </div>
          <Button formAction={login} className="bg-white w-full mt-2 hover:bg-gray-200 text-black">
            Sign In
          </Button>
          <p className="text-gray-400 mt-2">Belum punya akun? <Link className="text-white text-bold hover:underline" href={"/register"}>Daftar</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Page;
