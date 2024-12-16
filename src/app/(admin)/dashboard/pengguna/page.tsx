"use client";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/initialName";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState<string | null>(null); // Track tombol yang sedang loading
  const { toast } = useToast();

  const handleVerify = async (userId: string, verified: boolean) => {
    setLoadingButton(userId);
    try {
      const response = await fetch("/api/verify-user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          isVerified: !verified, // Ubah status ke kebalikan
        }),
      });

      if (response.ok) {
        // Perbarui status pengguna di tabel
        if (users?.length != 0) {
          setUsers((prevUsers) => {
            if (prevUsers != null) {
              return prevUsers.map(
                (user) =>
                  user.id === userId
                    ? { ...user, verified: !user.verified } // Update field yang diinginkan
                    : user // Biarkan objek lain tetap sama
              );
            }
            return users;
          });
        }

        toast({
          title: "Berhasil",
          description: `Pengguna ${
            verified ? "dibatalkan verifikasi" : "terverifikasi"
          }`,
        });
      } else {
        throw new Error("Failed to update verification status");
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal memperbarui status verifikasi pengguna",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      setLoadingButton(null);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/get-all-user");
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        toast({
          title: "Terjadi Kesalahan",
          description: "Gagal mendapatkan data invoices",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);
  return isLoading ? (
    <div className="text-white w-full h-screen flex items-center justify-center">
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
    <div className="pt-10 px-3 w-full">
      <Table className="w-full">
        <TableCaption>Daftar Pengguna</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-">Avatar</TableHead>
            <TableHead className="hidden lg:block">ID USER</TableHead>
            <TableHead>Nama Pengguna</TableHead>
            <TableHead className="text-right">Status Verifikasi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={user.image}
                      alt={user.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {getInitials(user?.name ?? "")}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium hidden lg:block">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant={user.verified ? "destructive" : "default"}
                    onClick={() => handleVerify(user.id, user.verified)}
                    disabled={loadingButton === user.id}
                  >
                    {loadingButton === user.id ? (
                      <div
                        className={`${
                          user.verified ? "text-white" : "text-black"
                        }`}
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
                    ) : user.verified ? (
                      "Hapus Verifikasi"
                    ) : (
                      "Verifikasi"
                    )}
                  </Button>
                </TableCell>
                {/* <TableCell className="text-right">{user.postCount}</TableCell> */}
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Pengguna</TableCell>
            <TableCell className="text-right"> {users?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Page;
