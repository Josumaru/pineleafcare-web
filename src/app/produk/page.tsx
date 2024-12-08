import ProductCategory from '@/components/product/product-category/ProductCategory';
import Banner from "@/components/home/banner/banner";
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className='mt-2'><Banner/></div>
      
      <ProductCategory/>

    </div>
  )
}

export default Page