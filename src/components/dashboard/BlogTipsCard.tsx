import { formatDate } from "@/lib/dateFormater";
import { NextPage } from "next";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/initialName";
import TiptapContentCard from "../tiptap/TiptapContentCard";
import { LucideTrash2, PencilLineIcon } from "lucide-react";
import { useRouter } from "next/navigation";
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
import { useRef, useState } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "@/hooks/use-toast";
interface Props {
  blog: Blog;
  editUrl?: string;
}

const BlogTipsCard: NextPage<Props> = ({ blog, editUrl = "/dashboard/blog" }) => {
  const date = new Date(blog.createdAt);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHide, setIsHide] = useState<boolean>(false);
  const { toast } = useToast();
  const formattedDate = formatDate(date);
  const closeRef = useRef<HTMLButtonElement | null>(null)

  // Handle actions for edit and delete buttons
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`${editUrl}/${blog.id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    const fetchDelete = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/delete-blog?id=${blog.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setIsLoading(false);
        setIsHide(true);
        closeRef.current?.click()
      } else {
        toast({
          title: "Terjadi Kesalahan",
          description: "Gagal menghapus blog",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        setIsLoading(false);
      }
    };
    fetchDelete();
  };

  return (
    <div
      className="border cursor-pointer hover:border-opacity-35 transition-all group aspect-square border-white p-1 rounded-[24px] border-opacity-10"
      style={{ aspectRatio: 1 / 1, display: isHide ? "none" : "block" }}
    >
      <div className="relative h-2/3 w-full">
        <Link href={`/blog/${blog.id}`}>
          <Image
            className="object-cover grayscale w-full h-full rounded-[20px] group-hover:grayscale-0 transition-all"
            src={blog.image}
            width={1080}
            height={1080}
            alt={blog.title}
          />
        </Link>

        <div className="absolute top-2 right-2">
          <Button
            variant={"default"}
            className="rounded-xl mx-2 z-50"
            onClick={handleEdit}
          >
            <PencilLineIcon />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"} className="rounded-xl">
                <LucideTrash2 />
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
                  <Button ref={closeRef} variant={"default"} className="w-full mt-2 sm:mt-0">Batalkan</Button>
                </DialogClose>
                <Button
                  disabled={isLoading}
                  variant={"destructive"}
                  type="button"
                  onClick={handleDelete}
                >
                  {isLoading ? (
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
      <Link href={`/blog/${blog.id}`}>
        <div className="mt-2">
          <p className="text-gray-400 text-sm">
            {formattedDate}・Bacaan {Math.round(blog.content.length / 720)}{" "}
            Menit
          </p>
          <TiptapContentCard content={blog.content} />
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={blog.author?.image}
                alt={blog.author?.name}
                className="object-cover"
              />
              <AvatarFallback>
                {getInitials(blog.author?.name ?? "Overlogic")}
              </AvatarFallback>
            </Avatar>
            <p className="font-base font-semibold text-white">
              {blog.author?.name ?? "Overlogic"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogTipsCard;
