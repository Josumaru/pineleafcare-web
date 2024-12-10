import Header from "@/components/peluang-usaha/header/Header";
import Kemitraan from "@/components/peluang-usaha/kemitraan/Kemitraan";
import LokasiMitra from "@/components/peluang-usaha/kemitraan/LokasiMitra";
import PaketKemitraan from "@/components/peluang-usaha/kemitraan/paketKemitraan";
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
        <Header/>
      <div className="max-w-7xl w-full">
        <Kemitraan/>
        <PaketKemitraan/>
        <LokasiMitra/>
      </div>
    </div>
  )
}

export default Page