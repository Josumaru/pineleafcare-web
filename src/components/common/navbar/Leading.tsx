import { ImageConstants } from "@/constants/ImageConstants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Leading: NextPage<Props> = ({}) => {
  return (
    <>
      <Link href={"/beranda"}>
        <Image
          src={ImageConstants.pineleafLogo}
          className="hover:cursor-pointer"
          alt="Pineleaf Logo"
          height={32}
        />
      </Link>
    </>
  );
};

export default Leading;
