import ProductCategory from '@/components/product/product-category/ProductCategory'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <ProductCategory/>
    </div>
  )
}

export default Page