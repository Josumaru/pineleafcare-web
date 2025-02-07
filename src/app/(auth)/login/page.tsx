"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { login } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().nonempty("Email harus diisi.").email("Email tidak valid."),
  password: z.string().min(6, "Password minimal 6 karakter."),
});

type LoginFormValues = z.infer<typeof loginSchema>;
const Page: NextPage = ({}) => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await login(formData);
    if (!response.success) {
      toast({
        title: "Terjadi Kesalahan",
        description: response.message,
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } else {
      toast({
        title: "Berhasil",
        description: response.message,
      });
      router.replace("/")
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 p-10 h-screen bg-[#18181B] border-[#27272A] border hidden md:flex flex-col items-start justify-between">
        <Image src={ImageConstants.pineleafLogo} alt={"Pineleaf Care"} width={80}/>
        <div>
          <p className="text-white">
            “Perawatan Terbaik untuk Sepatu, Tas, & Apparel Anda”
          </p>
          <br />
          <p className="text-xs text-gray-400">Pineleaf Care</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen md:w-1/2 px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center mb-20">
            <p className="text-gray-100 text-2xl font-bold text-center">
              Selamat datang di Pineleafcare
            </p>
            <p className="text-gray-300">Daftar dengan Email</p>
          </div>
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <Input
            id="email"
            {...register("email")}
            placeholder="overlogic@pineleaf.com"
            className={`mb-2 mt-1 ${
              errors.email ? "focus:ring-offset-red-500 focus-visible:ring-red-500 focus-within:ring-red-500" : ""
            }`}
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <label htmlFor="password" className=" text-white">
            Password
          </label>
          <Input
            id="password"
            {...register("password")}
            placeholder="••••••••"
            className={`mb-2 mt-1 ${
              errors.password ? "focus:ring-offset-red-500 focus-visible:ring-red-500 focus-within:ring-red-500" : ""
            }`}
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" className="border-gray-600" />
            <label
              htmlFor="terms"
              className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ingat Saya
            </label>
          </div>
          <Button
            className="bg-white w-full mt-2 hover:bg-gray-200 text-black"
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
              "Masuk"
            )}
          </Button>
          <p className="text-gray-400 mt-2">
            Belum punya akun?{" "}
            <Link
              className="text-white text-bold hover:underline"
              href={"/register"}
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
