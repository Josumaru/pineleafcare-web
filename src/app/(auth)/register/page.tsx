"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { register } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama harus memiliki setidaknya 3 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  password: z
    .string()
    .min(6, { message: "Password harus memiliki setidaknya 6 karakter" }),
});

type RegisterFormValues = z.infer<typeof schema>;

const Page: NextPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      const response = await register(formData);
      if (!response.success) {
        toast({
          title: "Permintaan Gagal",
          description: response.message,
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
      } else {
        toast({
          title: "Berhasil",
          description: response.message,
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        router.push("/login")
      }
    } catch (error) {
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-10 h-screen bg-[#18181B] border-[#27272A] border hidden md:flex flex-col items-start justify-between">
        <Image src={ImageConstants.pineleafLogo} alt={"Pineleaf Care"} width={80}/>
        <div>
          <p className="text-white">
            Kami selalu mengedepankan inovasi dan konsisten dalam pengembangan
            produk dan pelayanan, terbukti sejak tahun 2015 hingga saat ini
            telah mencapai 300 outlet mitra di seluruh Indonesia.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen w-full md:w-1/2 px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center mb-20">
            <p className="text-gray-100 text-2xl font-bold text-center">
              Selamat datang di Pineleafcare
            </p>
            <p className="text-gray-300">Daftar dengan Email</p>
          </div>

          <div>
            <p className="text-gray-400">Nama</p>
            <Input
              {...formRegister("name")}
              placeholder="Overlogic Pineleaf"
              className={`bg-black text-white border ${
                errors.name ? "focus:ring-offset-red-500 focus-visible:ring-red-500 focus-within:ring-red-500" : "border-gray-700"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mt-4">
            <p className="text-gray-400">Email</p>
            <Input
              {...formRegister("email")}
              placeholder="overlogic@pineleaf.com"
              type="email"
              className={`bg-black text-white border ${
                errors.email ? "focus:ring-offset-red-500 focus-visible:ring-red-500 focus-within:ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <p className="text-gray-400">Password</p>
            <Input
              {...formRegister("password")}
              placeholder="••••••••"
              type="password"
              className={`bg-black text-white border ${
                errors.password ? "focus:ring-offset-red-500 focus-visible:ring-red-500 focus-within:ring-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            className="bg-white w-full mt-4 hover:bg-gray-200 text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-black animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Memuat
              </div>
            ) : (
              "Daftar"
            )}
          </Button>

          <p className="text-gray-400 mt-2">
            Sudah punya akun?{" "}
            <Link
              className="text-white text-bold hover:underline"
              href={"/login"}
            >
              Masuk
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
