import Header from "@/components/peluang-usaha/header/Header";
import Kemitraan from "@/components/peluang-usaha/kemitraan/Kemitraan";
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Header/>
      <Kemitraan/>
    </>
  )
}

export default Page