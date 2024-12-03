import Header from "@/components/peluang-usaha/header/Header";
import Kemitraan from "@/components/peluang-usaha/kemitraan/Kemitraan";
import LokasiMitra from "@/components/peluang-usaha/kemitraan/LokasiMitra";
import PaketKemitraan from "@/components/peluang-usaha/kemitraan/paketKemitraan";
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Header/>
      <Kemitraan/>
      <PaketKemitraan/>
      <LokasiMitra/>
    </>
  )
}

export default Page