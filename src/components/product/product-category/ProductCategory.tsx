"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideSend } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const ProductCategory: NextPage = () => {
  // Daftar kategori
  const categories = [
    "Semua Produk",
    "Sepatu Pria",
    "Perawatan & Kecantikan",
    "Sepatu Wanita",
    "Perlengkapan Rumah",
    "Otomotif",
    "Ibu & Bayi",
    "Pakaian Wanita",
    "Buku & Alat Tulis",
    "Aksesori Fashion",
    "Tas Wanita",
  ];

  // Produk contoh dengan harga
  // const products = [
  //   { name: "Pineleaf Anti Jamur dan 100 ml canvas", category: "Sepatu Pria", price: 80000,img: ImageConstants.product1 },
  //   { name: "Shoes Cleaner Pineleaf Economic", category: "Sepatu Pria", price: 60000,img: ImageConstants.product2},
  //   { name: "Pineleaf Economic 1 Liter Apple Scent", category: "Sepatu Pria", price: 200000,img: ImageConstants.product3},
  //   { name: "Pineleaf Shoes Cleaner", category: "Sepatu Wanita", price: 95200,img: ImageConstants.product4 },
  //   { name: "Pineleaf Shoes Cleaner for Black Shoes", category: "Sepatu Wanita", price: 80000, img:ImageConstants.product5 },
  // ];

  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sources, setSources] = useState<any[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchSources = async () => {
      try {
        
        const sourcesRes = await fetch("/api/get-product-sources");
        const dataSources = await sourcesRes.json();
        let arr:any[] = []
        dataSources.page.map((i: any) => {
          if(i.name != ".emptyFolderPlaceholder"){
            arr.push(i)
          }
        })
        setSources(arr);
      } catch (error) {
      }
    };
    fetchSources();
  }, []);

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      if(sources == null) return
      const file = sources[(currentPage-1)]?.name??"";
      const res = await fetch(`/api/get-product?file=${file}`);
      const data = await res.json();
      setProducts(data.products);
      setIsLoading(false)
    }
    fetchProducts();
  }, [currentPage, sources])

  // State untuk dropdown
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Semua Produk");
  const [sortOrder, setSortOrder] = useState<string>("termurah");

  // Filtering dan sorting
  // const filteredProducts = products
  //   .filter(
  //     (product) =>
  //       selectedCategory === "Semua Produk" ||
  //       product.category === selectedCategory
  //   )
  //   .sort((a, b) =>
  //     sortOrder === "termurah" ? a.price - b.price : b.price - a.price
  //   );
  // const formatCurrency = (price: number) => {
  //   return new Intl.NumberFormat("id-ID", {
  //     style: "currency",
  //     currency: "IDR",
  //     minimumFractionDigits: 0,
  //   }).format(price);
  // };
  return (
    <div className="px-2">
      <div className="text-white font-thin text-center sm:text-left">
        Produk Terbaik Dari Pineleaf
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
        <div className="mt-4 sm:mt-0">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-black">
              <Button className="px-8 sm:px-14 py-2 border-white text-white rounded-lg border">
                Pilih Kategori: {selectedCategory}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              {categories.map((category, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>

        {/* Dropdown untuk sorting harga */}
        <div className="mt-4 sm:mt-0">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-black">
              <Button className="px-8 sm:px-14 py-2 border-white text-white rounded-lg border">
                Urutkan Harga:{" "}
                {sortOrder === "termurah"
                  ? "Termurah ke Termahal"
                  : "Termahal ke Termurah"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem onClick={() => setSortOrder("termurah")}>
                Termurah ke Termahal
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder("termahal")}>
                Termahal ke Termurah
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>

      {/* Daftar produk */}
      <div className="mt-6">
        <div className="text-white text-lg font-semibold text-center sm:text-left">
          Daftar Produk
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {isLoading ? 
            (<div className="h-96 col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-center">
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
            </div>) 
            : 
            (
              products &&
                products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-[#18181B] rounded-2xl p-4 border border-[#7E7E7E]"
                  >
                    <Image
                      width={1080}
                      height={1080}
                      src={product.img}
                      alt="product"
                      className="rounded-xl h-[200px] object-cover"
                    />
                    <div className="text-white font-semibold mt-2">
                      {product.name}
                    </div>
                    <div className="text-white opacity-50 text-sm">
                      {product.rating} {product.sold}
                    </div>
                    <div className="text-white font-bold text-center text-2xl sm:text-4xl">
                      {product.price}
                    </div>
                    <div className="flex items-center justify-center">
                      <a
                        target="_blank"
                        href={product.link}
                        className="flex items-center justify-between bg-costumBgCard text-white pl-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition"
                      >
                        <span className="mr-2">Beli Sekarang</span>
                        <span className="px-5 bg-gray-700 rounded-full p-1 m-[3px]">
                          <LucideSend className="w-4 h-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                ))
              )}
          </div>
        <div className="mt-10">
        <Pagination className="text-white">
          <PaginationContent>
            {1 != currentPage&&<PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              <PaginationPrevious/>
            </PaginationItem>}
            {Array.from({length: Math.ceil(sources?.length??0)}).map((_, index) => (
              <PaginationItem>
                <PaginationLink isActive={index + 1 == currentPage} onClick={() => setCurrentPage(index + 1)}>
                  {index+1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {Math.ceil(sources?.length??0) != currentPage&&<PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              <PaginationNext/>
            </PaginationItem>}
          </PaginationContent>
        </Pagination>
      </div>
      </div>
    </div>

  );
};

export default ProductCategory;
