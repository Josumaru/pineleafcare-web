import { getUser } from "@/components/common/navbar/action";
import BlogTipsPengguna from "@/components/pengguna/BlogTipsPengguna";
import { IconConstants } from "@/constants/IconConstants";
import Image from "next/image";

import UpdateNameProfile from "@/components/pengguna/UpdateNameProfile";
import UpdateBannerProfile from "@/components/pengguna/UpdateBannerProfile";
import UpdateImageProfile from "@/components/pengguna/UpdateImageProfile";

const Page = async ({}) => {
  const user = await getUser();

  return (
    <div className="pt-20">
      <div className="w-full h-[600px] flex justify-center">
        <div className="max-w-7xl w-full flex justify-end absolute">
          <UpdateBannerProfile />
        </div>
        <div className="w-full absolute z-10">
          <Image
            src={user?.banner ?? ""}
            width={1024}
            height={1024}
            alt={user?.name ?? ""}
            className="w-full h-auto object-cover aspect-[5/1]"
          />
        </div>
        <div className="h-[550px] flex items-end w-full absolute justify-center">
          <div className="w-full max-w-7xl z-20 flex items-end justify-between">
            <div className="flex items-end">
              <Image
                src={user?.image ?? ""}
                width={320}
                height={320}
                alt={user?.name ?? ""}
                className="w-72 h-72 object-cover bg-white rounded-[80px]"
              />
              <div className="absolute w-72 h-72 flex justify-end">
                <UpdateImageProfile />
              </div>
              <div className="mx-10">
                <div>
                  <div className="flex items-center justify-start gap-3">
                    <p className="text-2xl font-bold text-white">
                      {user?.name}
                    </p>
                    <UpdateNameProfile user={user!} />
                  </div>
                  <div className="flex items-center gap-2">
                    {user?.verified ? (
                      <>
                        <p className="text-gray-400">Terverifikasi</p>
                        <Image
                          src={IconConstants.verifiedIcon}
                          alt="Terverifikasi"
                          className="w-5 h-5"
                        />
                      </>
                    ) : (
                      <>
                        <p className="text-gray-400">Belum Terverifikasi</p>
                        <Image
                          src={IconConstants.verifiedIcon}
                          alt="Terverifikasi"
                          className="w-5 h-5 grayscale"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  {/* <Link href={"/profil/ubah"}>
                    <Button className="bg-white hover:bg-gray-300 text-black">
                      <LucideClipboardEdit />
                      Ubah Profil Pengguna
                    </Button>
                  </Link> */}
                  {/* <Button
                    className="mx-2 bg-black hover:bg-[#ffffff2a] hover:text-white text-white"
                    variant={"outline"}
                  >
                    Cek toko
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-gray-300 text-bold text-xl">Postingan</p>
              <p className="text-white text-3xl font-bold">5</p>
            </div>
          </div>
        </div>
      </div>
      <BlogTipsPengguna id={user?.id ?? ""} />
    </div>
  );
};

export default Page;
