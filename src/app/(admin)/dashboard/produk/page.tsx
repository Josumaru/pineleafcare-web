"use client";
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
import { useToast } from "@/hooks/use-toast";
import { formatDate } from "@/lib/dateFormater";
import { ToastAction } from "@radix-ui/react-toast";
import { Pencil, Trash } from "lucide-react";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
interface Props {}
export const dynamic = "force-dynamic"

const Page: NextPage<Props> = ({}) => {
  const [pages, setPages] = useState<any[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const changeRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-product-sources");
        const data = await response.json();
        setPages(data.page);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Permintaan Gagal",
        description: "Pilih file yang ingin diunggah",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    }

    const formData = new FormData();
    formData.append("fileContent", selectedFile);

    try {
      setIsLoading(true);

      const response = await fetch("/api/add-product-sources", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Berhasil",
          description: "Page source berhasil ditambahkan",
          variant: "default",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        window.location.reload();
        setSelectedFile(null);
        const updatedPages = await response.json();
        setPages(updatedPages.page);
      } else {
        const errorData = await response.json();
        toast({
          title: "Permintaan Gagal",
          description: errorData.message,
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      toast({
        title: "Permintaan Gagal",
        description: "Gagal mengunggah file. Ukuran file melebihi 3 MB",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("fileContent", file);
      formData.append("fileName", fileName ?? "");

      const response = await fetch("/api/update-product-sources", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast({
          title: "Permintaan Gagal",
          description: "Gagal mengunggah file.",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        return;
      }

      toast({
        title: "Pembaruan Berhasil",
        description: "Berhasil memperbarui file",
        variant: "default",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Permintaan Gagal",
        description: "Gagal memperbarui banner.",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsButtonLoading(true);
    try {
      const formData = new FormData();
      formData.append("filePath", fileName ?? "");
      const response = await fetch("/api/delete-product-sources", {
        method: "DELETE",
        body: formData,
      });
      if (!response.ok) {
        toast({
          title: "Permintaan Gagal",
          description: "Gagal menghapus page source.",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        return;
      } else {
        toast({
          title: "Berhasil",
          description: "Page source berhasil dihapus",
          variant: "default",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: "Permintaan Gagal",
        description: "Gagal menghapus page source.",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      setIsButtonLoading(false);
    }
  };

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
    <div className="pt-10 px-3">
      <p className="font-bold">Shopee Page Sources</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pages &&
          pages.map((page, index) => {
            if (page.name == ".emptyFolderPlaceholder") return;
            return (
              <div
                key={page.id}
                className="rounded-lg border-[#ffffff15] border bg-[#ffffff10] hover:bg-[#ffffff20] transition-colors flex items-center justify-between"
              >
                <div className="p-4 text-white">
                  <p>Diperbarui {new Date(page.updated_at).toLocaleDateString()} {new Date(page.updated_at).toLocaleTimeString()}</p>
                </div>
                <input
                  hidden
                  ref={changeRef}
                  type="file"
                  accept=".html"
                  onChange={handleChangePage}
                />
                <div className="text-white">
                  <Button
                    className="mr-3"
                    onClick={() => {
                      setFileName(page.name);
                      changeRef.current?.click();
                    }}
                  >
                    <Pencil className="h-full mx-3 hover:text-[#ffffff80] transition-colors hResultover:cursor-pointer" />
                  </Button>
                </div>
                <div className="text-white">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={"destructive"} className="mr-3"
                      onClick={() => {
                        setFileName(page.name);
                      }}>
                        <Trash
                          
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Hapus Blog</DialogTitle>
                        <DialogDescription>
                          Apakah anda yakin? tindakan ini tidak bisa dipulihkan.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose>
                          <Button variant={"default"} className="w-full mt-2 sm:mt-0">Batalkan</Button>
                        </DialogClose>
                        <Button
                          disabled={isButtonLoading}
                          variant={"destructive"}
                          type="button"
                          onClick={() => handleDelete()}
                        >
                          {isButtonLoading ? (
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
                </div>
              </div>
            );
          })}
        <div className="rounded-lg border-[#ffffff15] border bg-[#ffffff10] hover:bg-[#ffffff20] transition-colors flex items-center justify-between p-4">
          <Input
            ref={inputRef}
            type="file"
            accept=".html"
            onChange={handleFileChange}
            className="text-white"
          />
          <Button onClick={handleFileUpload} className="ml-2 h-9">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
