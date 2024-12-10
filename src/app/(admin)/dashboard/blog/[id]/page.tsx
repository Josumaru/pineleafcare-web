"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Content } from "@tiptap/react";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NextPage } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

const Page: NextPage<Props> = ({ params }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<Content>("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchId = async () => {
      const id = (await params).id;
      setId(id);
    };
    fetchId();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const res = await fetch(`/api/get-blog?id=${id}`);
        if (res.ok) {
          const data = await res.json();
          const response = await fetch(data.image);
          const blob = await response.blob();

          // Konversi Blob ke File
          const file = new File([blob], data.image.split("/").pop(), { type: blob.type });
          setTitle(data.title);
          setValue(data.content);
          setCategory(data.category);
          setImage(file);
          setImagePreview(data.image);
        } else {
          toast({
            title: "Blog Tidak Ditemukan",
            description: "ID blog yang Anda cari tidak ditemukan",
            variant: "destructive",
            action: <ToastAction altText="Oke">Oke</ToastAction>,
          });
        }
      };
      fetchBlog();
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (category == null || category == "") {
      toast({
        title: "Lengkapi Category",
        description: "Pastikan semua data telah terisi",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    } else if (title == null || title.length == 0) {
      toast({
        title: "Lengkapi Judul",
        description: "Pastikan semua data telah terisi",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    } else if (imagePreview == null) {
      toast({
        title: "Lengkapi Gambar",
        description: "Pastikan semua data telah terisi",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("content", value?.toString() ?? "");
      formData.append("title", title ?? "Tidak ada Judul");
      formData.append("category", category ?? "Teknologi");
      formData.append("blogId", id ?? "");
      if (image) {
        formData.append("image", image);
      }

      const res = await fetch("/api/update-blog", {
        method: "PUT",
        body: formData,
      });

      if (res.status === 200) {
        router.push("/dashboard/blog");
      } else {
        toast({
          title: "Terjadi Kesalahan",
          description: "Periksa internet anda atau cek kembali tulisan anda",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
      }
    } catch (err) {
      setLoading(false);
    }
    setLoading(false);
  };

  const categoryBlogs = [
    "Kecantikan",
    "Kebersihan",
    "Tips",
    "Kuliner",
    "Kesehatan",
    "Olahraga",
    "Bisnis",
    "Lifestyle",
    "Sosial",
    "Teknologi",
    "Edukasi",
    "Pendidikan",
    "Kesehatan",
  ];

  if (
    image == null ||
    imagePreview == null ||
    category == null ||
    value == null
  ) {
    return (
      <div className="w-full text-white flex items-center justify-center h-screen">
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
      </div>
    );
  }

  return (
    <div className="flex items-center flex-1 justify-center">
      <form
        className="p-10 max-w-7xl w-full"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="w-full h-96 rounded-xl border border-dashed text-sm transition-all flex items-center justify-center relative">
          {/* Label untuk upload image */}
          <label
            htmlFor="imageUpload"
            className="absolute inset-0 cursor-pointer flex items-center justify-center rounded-xl"
          >
            {image ? (
              <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                Ganti Gambar
              </span>
            ) : (
              <span className="text-gray-400">Unggah Gambar</span>
            )}
          </label>

          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />

          {image && (
            <Image
              src={imagePreview ?? ""}
              width={720}
              height={480}
              alt="Preview"
              className="object-cover w-full h-full rounded-xl"
            />
          )}
        </div>

        <Input
          className="border-input bg-transparent text-white my-5"
          placeholder="Judul"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between mb-5"
            >
              {category
                ? categoryBlogs.find(
                    (categoryBlog) => categoryBlog === category
                  )
                : "Pilih Kategori Blog & Tips"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-7xl w-screen p-0">
            <Command>
              <CommandInput placeholder="Cari Kategory" />
              <CommandList>
                <CommandEmpty>Kategori Tidak ditemukan</CommandEmpty>
                <CommandGroup>
                  {categoryBlogs.map((categoryBlog) => (
                    <CommandItem
                      className="hover:bg-[#ffffff20]"
                      key={categoryBlog}
                      value={categoryBlog}
                      onSelect={(currentValue) => {
                        setCategory(
                          currentValue === category ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      {categoryBlog}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === categoryBlog ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <MinimalTiptapEditor
          value={value}
          content={value}
          immediatelyRender={false}
          onChange={setValue}
          className="w-full max-w-7xl focus-within:border-input"
          editorContentClassName="p-5"
          output="html"
          placeholder="Tulis deskripsimu disini"
          autofocus={true}
          editable={true}
          editorClassName="focus:outline-none"
        />
        <Button
          type="submit"
          disabled={loading}
          className="px-6 mt-5 py-3 bg-white hover:bg-gray-50 text-black rounded"
        >
          Simpan
        </Button>
      </form>
      <div
        style={{ display: loading ? "flex" : "none" }}
        className="w-screen h-screen backdrop-blur-lg fixed top-0 z-[10030] flex items-center justify-center"
      >
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
      </div>
    </div>
  );
};

export default Page;
