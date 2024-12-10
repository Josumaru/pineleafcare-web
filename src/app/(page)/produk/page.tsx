import ProductCategory from "@/components/product/product-category/ProductCategory";
import Banner from "@/components/home/banner/banner";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-5 max-w-7xl w-full">
        <Banner />
      <ProductCategory /> 
      </div>
    </div>
  );
};

export default Page;
