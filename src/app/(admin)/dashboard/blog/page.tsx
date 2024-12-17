"use client";
import BlogTipsCard from "@/components/dashboard/BlogTipsCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Blog } from "@/types/blog";
import { Category } from "@/types/category";
import { Plus } from "lucide-react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}
export const dynamic = "force-dynamic"

const Page: NextPage<Props> = ({}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const toast = useToast();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch("/api/get-all-blog",{
          cache: "no-store",
        });
        const catRes = await fetch("/api/category", {
          cache: "no-store",
        });
        const catData = await catRes.json();
        const data = await res.json();
        setBlogs(data);
        setCategory(catData.data);
      } catch (error) {
        toast.toast({
          title: "Terjadi Kesalahan",
          description: "Gagal mendapatkan data blog & tips",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    setIsLoadingButton(true);
    if (name == null || name == "") {
      toast.toast({
        title: "Terjadi Kesalahan",
        description: "kolom wajib diisi",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      setIsLoadingButton(false);
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    const response = await fetch("/api/category", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      toast.toast({
        title: "Permintaan Gagal",
        description: "Gagal menyimpan kategori",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      setIsLoadingButton(false);
      return;
    } else if (response.ok) {
      toast.toast({
        title: "Berhasil",
        description: "Kategori berhasil disimpan",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      setIsLoadingButton(false);
      window.location.reload();
    }
  };

  const handleDelete = async (id: string) => {
    setIsLoadingButton(true);
    const formData = new FormData();
    formData.append("id", id)
    const response = await fetch(`/api/category/`, {
      method: "DELETE",
      body: formData
    });

    if (!response.ok) {
      toast.toast({
        title: "Permintaan Gagal",
        description: "Gagal menghapus kategori",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      setIsLoadingButton(false);
      return;
    }
    if (response.ok) {
      toast.toast({
        title: "Berhasil",
        description: "Kategori berhasil dihapus",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      setIsLoadingButton(false);
      window.location.reload();
    }

  }
  if (isLoading)
    return (
      <div className="relative text-white h-screen flex items-center justify-center">
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
  return (
    <div className="pt-10 px-2">
      <div className="">
        <div className="flex items-center gap-5">
          <p className="font-bold">Blog Category</p>
          
        </div>
        <div className="">
          {category &&
            category.map((cat) => {
              return (
                <Dialog>
                <DialogTrigger asChild>
                <Button key={cat.id} className="mr-3 mt-2 group hover:bg-red-800 transition-transform duration-500 ease-in-out" variant={"secondary"}>
                  <p className="group-hover:hidden block transition-transform duration-500">
                    {cat.name}
                    </p>
                  <p className="group-hover:block hidden transition-transform duration-500">Hapus</p>
                </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Hapus Kategori</DialogTitle>
                    <DialogDescription>
                      Apakah anda yakin? tindakan ini tidak bisa dipulihkan.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      disabled={isLoading}
                      variant={"destructive"}
                      type="button"
                      onClick={() => handleDelete(cat.id)}
                    >
                      {isLoadingButton ? (
                        <div className="text-white">
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
                              fill="#FFFFFF"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="red"
                            />
                          </svg>
                          Menghapus
                        </div>
                      ) : (
                        "Hapus"
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              );
            })}
            <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-2">
                +
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-white">Tambah Kategori</DialogTitle>
                <DialogDescription className="text-slate-200">
                  Tambahkan kategori disini. Klik tombol dibawah ketika sudah selesai
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Kategori
                  </Label>
                  <Input
                    id="name"
                    defaultValue={name ?? ""}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleAdd}
                  disabled={isLoading}
                  className="bg-white text-black hover:bg-slate-200"
                >
                  {isLoadingButton ? (
                    <div>
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
                  ) : (
                    "Tambah"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <p className="font-bold mt-3">Blog Pengguna</p>
      <div className="pb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-2 ">
        {blogs.map((blog, index) => {
          return <BlogTipsCard blog={blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Page;
