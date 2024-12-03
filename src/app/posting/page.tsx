"use client";

import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { ImagePlusIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";

const Page = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { toast } = useToast()
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", "Tech");
      if (image) {
        formData.append("image", image);
      }
  
      const res = await fetch("/api/create", {
        method: "POST",
        body: formData,
      });

      if(res.status === 201) {
        router.push("/blog-tips");
      } else {
        toast({
          title: "Terjadi Kesalahan",
          description: "Periksa internet anda atau cek kembali tulisan anda",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        })
      }

    } catch (err) {
      setLoading(false)
    }
    setLoading(false)
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="p-10 mt-20 max-w-7xl w-full"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="w-full h-96 rounded-xl bg-[#2c2c2c] mb-2 hover:bg-[#585858] transition-all flex items-center justify-center">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <ImagePlusIcon
              style={{ display: image != null ? "none" : "block" }}
              className="text-gray-400"
            />
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Image
            src={imagePreview ?? ""}
            width={720}
            height={480}
            alt="Preview"
            className="object-cover w-full h-full rounded-xl"
            style={{ display: image == null ? "none" : "block" }}
          />
        </div>
        <Input
          className="border-gray-700 bg-transparent text-white mb-4"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-700 bg-transparent text-white w-full h-40 mb-4 p-4 rounded"
          placeholder="Konten"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-white hover:bg-gray-50 text-black rounded"
        >
          Posting
        </Button>
      </form>
      <div style={{display: loading ? "flex" : "none"}} className="w-screen h-screen backdrop-blur-lg fixed z-[10030] flex items-center justify-center">
        <p className="text-white">Mohon Tunggu</p>
      </div>
    </div>
  );
};

export default Page;
