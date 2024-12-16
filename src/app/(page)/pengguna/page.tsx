import { getUser } from "@/components/common/navbar/action";
import BlogTipsPengguna from "@/components/pengguna/BlogTipsPengguna";
import { IconConstants } from "@/constants/IconConstants";
import Image from "next/image";

import UpdateNameProfile from "@/components/pengguna/UpdateNameProfile";
import UpdateBannerProfile from "@/components/pengguna/UpdateBannerProfile";
import UpdateImageProfile from "@/components/pengguna/UpdateImageProfile";
import { ImageConstants } from "@/constants/ImageConstants";

const Page = async ({}) => {
  const user = await getUser();

  return (
    <div className="pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-auto flex flex-col items-center">
        {/* Update Banner Button */}
        <div className="absolute top-0 right-0 px-3 z-20">
          <UpdateBannerProfile />
        </div>

        {/* Banner Image */}
        <div className="w-full h-[150px] lg:h-[250px] relative">
          <Image
            src={user?.banner ?? "/banner/default.jpg"}
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
                src={user?.image ?? "/banner/default.jpg"}
                width={160}
                height={160}
                alt={user?.name ?? "Profile"}
                className="h-full w-full object-cover bg-white backdrop-blur-lg border-white shadow-md rounded-[40px]"
              />
              <div className="absolute bottom-0 right-0">
                <UpdateImageProfile />
              </div>
            </div>

            {/* Name and Verification */}
            <div className="lg:ml-4 ml-2 flex items-end flex-col">
              <div className="mt-16 lg:mt-14">
                <div className="flex items-start justify-start flex-col">
                  <p className="text-lg lg:text-2xl font-bold text-white flex gap-2 items-center justify-center">
                    {user?.name ?? "Overlogic Universe"} <UpdateNameProfile user={user!}/>
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
              <p className="text-gray-800 text-xl font-bold">
                {user?.postCount ?? 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Tips Section */}
      <div className="mt-10">
        <BlogTipsPengguna id={user?.id ?? ""} />
      </div>
    </div>
  );
};

export default Page;
