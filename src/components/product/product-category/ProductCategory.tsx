'use client';
import { NextPage } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideSend } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const ProductCategory: NextPage = () => {
  // Daftar kategori
  const categories = ["Semua Produk", "Sepatu Pria", "Perawatan & Kecantikan", "Sepatu Wanita", "Perlengkapan Rumah", "Otomotif", "Ibu & Bayi", "Pakaian Wanita", "Buku & Alat Tulis", "Aksesori Fashion", "Tas Wanita"];
  
  // Produk contoh dengan harga
  const products = [
    { name: "Produk A", category: "Sepatu Pria", price: 150000 },
    { name: "Produk B", category: "Perawatan & Kecantikan", price: 50000 },
    { name: "Produk C", category: "Tas Wanita", price: 250000 },
    { name: "Produk D", category: "Sepatu Wanita", price: 100000 },
    { name: "Produk E", category: "Perlengkapan Rumah", price: 75000 },
  ];

  // State untuk dropdown
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Produk");
  const [sortOrder, setSortOrder] = useState<string>("termurah");

  // Filtering dan sorting
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "Semua Produk" || product.category === selectedCategory
    )
    .sort((a, b) => (sortOrder === "termurah" ? a.price - b.price : b.price - a.price));

  return (
    <div className="ml-5">
      <div className="text-white font-thin">Produk Terbaik Dari Pineleaf</div>
      <div className="flex gap-3">
        <div className="mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="bg-black">
                <Button className= "px-14 py-2 border-white text-white rounded-lg border">Pilih Kategori: {selectedCategory}</Button>
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
                <Button className="px-14 py-2 border-white text-white rounded-lg border">Urutkan Harga: {sortOrder === "termurah" ? "Termurah ke Termahal" : "Termahal ke Termurah"}</Button>
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
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-[#18181B] rounded-lg p-4 border border-[#7E7E7E]">
              <div className="text-white font-semibold">{product.name}</div>
              <div className="text-white opacity-50 text-sm">{product.category}</div>
              <div className="text-white font-bold text-center text-4xl">Rp {product.price.toLocaleString()}</div>
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-between bg-costumBgCard text-white px-4 mt-10 mb-10 rounded-full border border-gray-600 hover:bg-gray-700 transition">
                        <span className="mr-2">Beli Sekarang</span> 
                        <span className=" bg-gray-700 rounded-full p-1">
                            <LucideSend className="w-4 h-4"/>
                        </span>
                  </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
