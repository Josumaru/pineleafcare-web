"use client";
import { useEffect, useState } from "react";
import BlogTipsPengguna from "@/components/pengguna/BlogTipsPengguna";
import { IconConstants } from "@/constants/IconConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = ({ params }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { id } = await params;
        const response = await fetch(`/api/get-user?id=${id}`);
        const userData = await response.json();
        if (userData.error) {
          throw new Error(userData.error);
        }
        setUser(userData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchUserData(); // Only run on client
    }
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
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
      </div>
    );
  }

  if (!user) {
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
              Maaf, Pengguna yang kamu cari tidak ditemukan
            </p>
            <Link href="/">
              <Button className="inline-flex text-black hover:bg-primary-800 my-4 bg-white hover:bg-slate-300 transition-colors">
                Kembali ke beranda
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-auto flex flex-col items-center">

        {/* Banner Image */}
        <div className="w-full h-[150px] lg:h-[250px] relative">
          <Image
            src={user?.banner == "" ? "/banner/default.jpg" : user?.banner ?? "/banner/default.jpg"}
            width={1024}
            height={300}
            alt={user?.name ?? "Banner"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 lg:-mt-16 flex flex-row items-center justify-between w-full max-w-7xl px-2 md:px-4 xl:px-0 rounded-lg">
          <div className="relative flex flex-row items-center w-full">
            {/* Profile Image */}
            <div className="relative rounded-lg w-32 h-32 lg:w-40 lg:h-40">
              <Image
                src={user?.image == "" ? "/banner/default.jpg" : user?.image ?? "/banner/default.jpg"}
                width={160}
                height={160}
                alt={user?.name ?? "Profile"}
                className="h-full w-full object-cover bg-white backdrop-blur-lg border-white shadow-md rounded-[40px]"
              />
            </div>

            {/* Name and Verification */}
            <div className="lg:ml-4 ml-2 flex items-end flex-col">
              <div className="mt-16 lg:mt-14">
                <div className="flex items-start justify-start flex-col">
                  <p className="text-lg lg:text-2xl font-bold text-white">
                    {user?.name ?? "Overlogic Universe"}
                  </p>
                  {user?.verified ? (
                    <div className="flex items-center justify-center text-muted-foreground">
                      Terverifikasi
                      <Image
                        src={IconConstants.verifiedIcon}
                        alt="Verified"
                        className="h-4 w-4"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center text-muted-foreground">
                      Belum Terverifikasi
                      <Image
                        src={IconConstants.verifiedIcon}
                        alt="Verified"
                        className="h-4 w-4 grayscale"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <div className="mt-16 lg:mt-14 justify-center gap-10 text-center hidden lg:flex">
            <div>
              <p className="text-gray-500 text-sm">Postingan</p>
              <p className="text-white text-xl font-bold">
                {user?.postCount ?? 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Tips Section */}
      <div className="">
        <BlogTipsPengguna id={user?.id ?? ""} edit={false}/>
      </div>
    </div>
  );
};

export default Page;