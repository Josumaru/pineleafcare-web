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
import { ImageConstants } from "@/constants/ImageConstants";

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/get-product?page=1");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

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
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div className="">
      <div className="text-white font-thin">Produk Terbaik Dari Pineleaf</div>
      <div className="flex gap-3">
        <div className="mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-black">
              <Button className="px-14 py-2 border-white text-white rounded-lg border">
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
          </DropdownMenu>
        </div>

        {/* Dropdown untuk sorting harga */}
        <div className="mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-black">
              <Button className="px-14 py-2 border-white text-white rounded-lg border">
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
          </DropdownMenu>
        </div>
      </div>
      {/* Dropdown untuk kategori */}

      {/* Daftar produk */}
      <div className="mt-6">
        <div className="text-white text-lg font-semibold">Daftar Produk</div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {products&&products.map((product, index) => (
            <div
              key={index}
              className="bg-[#18181B] rounded-2xl p-4 border border-[#7E7E7E]"
            >
              <Image width={1080} height={1080} src={product.img} alt="product" className="rounded-xl h-[200px] object-cover"/>
              <div className="text-white font-semibold mt-2">{product.name}</div>
              <div className="text-white opacity-50 text-sm">
                {product.rating}   {product.sold}
              </div>
              <div className="text-white font-bold text-center text-4xl">
                {product.price}
              </div>
              <div className="flex items-center justify-center">
                <a target="_blank" href={product.link} className="flex items-center justify-between bg-costumBgCard text-white pl-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                  <span className="mr-2">Beli Sekarang</span>
                  <span className="px-5 bg-gray-700 rounded-full p-1 m-[3px]">
                    <LucideSend className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
