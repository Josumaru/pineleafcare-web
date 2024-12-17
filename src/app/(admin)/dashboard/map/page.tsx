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
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Button } from "@/components/ui/button";
import { LucideTrash, Pencil, Plus, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProvinceConstants } from "@/constants/ProvinceConstants";
import { ComboBox } from "@/components/dashboard/ComboBox";

interface Props {}


type MarkerData = {
  id: number;
  lat: number;
  lng: number;
  title: string;
  desc: string;
  loc: string;
  province: string;
  city: string;
};

const Page: NextPage<Props> = ({}) => {
  const [markers, setMarkers] = useState<MarkerData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState<boolean>(false); // Track tombol yang sedang loading
  const { toast } = useToast();
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [lat, setLat] = useState<string | null>(null);
  const [lng, setLng] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [loc, setLoc] = useState<string | null>(null);
  const [province, setProvince] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  const handleEdit = async () => {
    setLoadingButton(true);
    try {
      const formData = new FormData();
      formData.append("id", id ?? "");
      formData.append("title", title ?? "");
      formData.append("lat", lat ?? "");
      formData.append("lng", lng ?? "");
      formData.append("desc", desc ?? "");
      formData.append("loc", loc ?? "");
      formData.append("province", province ?? "");
      formData.append("city", city ?? "");
      let response;

      if (
        id != null &&
        id != "" &&
        title != null &&
        title != "" &&
        lat != null &&
        lat != "" &&
        lng != null &&
        lng != "" &&
        desc != null &&
        desc != "" &&
        loc != null &&
        loc != "" &&
        province != null &&
        province != "" &&
        city != null &&
        city != ""
      ) {
        response = await fetch("/api/marker", {
          cache: "no-store",
          method: "PUT",
          body: formData,
        });
      } else {
        toast({
          title: "Permintaan Gagal",
          description: "Data yang diinputkan harus lengkap.",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        return;
      }

      if (response?.ok) {
        toast({
          title: "Berhasil",
          description: `Lokasi berhasil diubah`,
        });
        window.location.reload();
      } else {
        throw new Error("Failed to update verification status");
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal memperbarui penanda peta",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      // setIsLoading(false);
      setLoadingButton(false);
    }
  };

  const handleAdd = async () => {
    setLoadingButton(true);
    try {
      const formData = new FormData();
      formData.append("title", title ?? "");
      formData.append("lat", lat ?? "");
      formData.append("lng", lng ?? "");
      formData.append("desc", desc ?? "");
      formData.append("loc", loc ?? "");
      formData.append("province", province ?? "");
      formData.append("city", city ?? "");
      let response;

      if (
        title != null &&
        title != "" &&
        lat != null &&
        lat != "" &&
        lng != null &&
        lng != "" &&
        desc != null &&
        desc != "" &&
        loc != null &&
        loc != "" &&
        province != null &&
        province != "" &&
        city != null &&
        city != ""
      ) {
        response = await fetch("/api/marker", {
          method: "POST",
          body: formData,
        });
      } else {
        toast({
          title: "Permintaan Gagal",
          description: "Data yang diinputkan harus lengkap.",
          variant: "destructive",
          action: <ToastAction altText="Oke">Oke</ToastAction>,
        });
        return;
      }

      if (response?.ok) {
        toast({
          title: "Berhasil",
          description: `Lokasi berhasil ditambah`,
        });
        window.location.reload();
      } else {
        throw new Error("Failed to update verification status");
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal menambah penanda peta",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      // setIsLoading(false);
      setLoadingButton(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoadingButton(true);
    try {
      const formData = new FormData();
      formData.append("id", id);
      let response = await fetch("/api/marker", {
        method: "DELETE",
        body: formData,
      });

      if (response?.ok) {
        toast({
          title: "Berhasil",
          description: `Lokasi berhasil dihapus`,
        });
        window.location.reload();
      } else {
        throw new Error("Failed to update verification status");
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal menghapus penanda peta",
        variant: "destructive",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
    } finally {
      // setIsLoading(false);
      setLoadingButton(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/marker");
        if (response.ok) {
          const data = await response.json();
          setMarkers(data.data);
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
      <div className="flex items-center mb-5">
        <p className="font-bold">Lokasi Mitra</p>
        <form>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="ml-2" onClick={() => {}}>
                <Plus /> Tambah Lokasi
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black border-slate-800">
              <DialogHeader>
                <DialogTitle className="text-white">Ubah Lokasi</DialogTitle>
                <DialogDescription className="text-slate-200">
                  Ubah lokasi mitra disini. Klik simpan ketika sudah selesai
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Mitra
                  </Label>
                  <Input
                    minLength={1}
                    id="title"
                    defaultValue={selectedMarker?.title ?? ""}
                    onChange={(e) => setTitle(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Kota
                  </Label>
                  <Input
                    minLength={1}
                    id="title"
                    defaultValue={selectedMarker?.city ?? ""}
                    onChange={(e) => setCity(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Provinsi
                  </Label>
                  <div className="col-span-3">
                    <ComboBox
                      options={ProvinceConstants}
                      placeholder="Pilih Provinsi"
                      onChange={(value) => {
                        setProvince(value);
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Deskripsi
                  </Label>
                  <Input
                    minLength={1}
                    id="title"
                    defaultValue={selectedMarker?.desc ?? ""}
                    onChange={(e) => setDesc(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Latitude
                  </Label>
                  <Input
                    minLength={1}
                    id="title"
                    type="number"
                    defaultValue={selectedMarker?.lat ?? ""}
                    onChange={(e) => setLat(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Longitude
                  </Label>
                  <Input
                    type="number"
                    minLength={1}
                    id="title"
                    defaultValue={selectedMarker?.lng ?? ""}
                    onChange={(e) => setLng(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-white">
                    Google Maps Link
                  </Label>
                  <Input
                    minLength={1}
                    id="title"
                    defaultValue={selectedMarker?.loc ?? ""}
                    onChange={(e) => setLoc(e.target.value)}
                    className="col-span-3 bg-black border-slate-700 text-white"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleAdd}
                  disabled={loadingButton}
                  className="bg-white text-black hover:bg-slate-200"
                >
                  {loadingButton ? (
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
                    "Simpan Perubahan"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </div>
      <Table className="w-full">
        <TableCaption>Daftar Map Pengguna</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden lg:block">Mitra</TableHead>
            <TableHead className="">Kota</TableHead>
            <TableHead className="">Provinsi</TableHead>
            <TableHead className="text-right w-full">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {markers &&
            markers.map((marker) => (
              <TableRow key={marker.id}>
                <TableCell className="font-medium hidden lg:block">
                  {marker.title}
                </TableCell>
                <TableCell>{marker.city}</TableCell>
                <TableCell>{marker.province}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant={"default"}
                        onClick={() => {
                          setId(`${marker.id}`);
                          setTitle(marker.title);
                          setLat(`${marker.lat}`);
                          setLng(`${marker.lng}`);
                          setDesc(marker.desc);
                          setLoc(marker.loc);
                          setProvince(marker.province);
                          setCity(marker.city);
                          setSelectedMarker(marker);
                        }}
                      >
                        <Pencil />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-black border-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Ubah Lokasi
                        </DialogTitle>
                        <DialogDescription className="text-slate-200">
                          Ubah lokasi mitra disini. Klik simpan ketika sudah
                          selesai
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4 w-full">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Mitra
                          </Label>
                          <Input
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.title ?? ""}
                            onChange={(e) => setTitle(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Kota
                          </Label>
                          <Input
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.city ?? ""}
                            onChange={(e) => setCity(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4 w-full">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Provinsi
                          </Label>
                          <div className="w-full col-span-3">
                            <ComboBox
                              options={ProvinceConstants}
                              placeholder="Pilih Provinsi"
                              defaultValue={selectedMarker?.province ?? ""}
                              onChange={(value) => {
                                setProvince(value);
                              }}
                            />

                          </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Deskripsi
                          </Label>
                          <Input
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.desc ?? ""}
                            onChange={(e) => setDesc(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Latitude
                          </Label>
                          <Input
                            type="number"
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.lat ?? ""}
                            onChange={(e) => setLat(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Longitude
                          </Label>
                          <Input
                            type="number"
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.lng ?? ""}
                            onChange={(e) => setLng(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right text-white"
                          >
                            Google Maps Link
                          </Label>
                          <Input
                            minLength={1}
                            id="title"
                            defaultValue={selectedMarker?.loc ?? ""}
                            onChange={(e) => setLoc(e.target.value)}
                            className="col-span-3 bg-black border-slate-700 text-white"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={handleEdit}
                          disabled={loadingButton}
                          className="bg-white text-black hover:bg-slate-200"
                        >
                          {loadingButton ? (
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
                            "Simpan Perubahan"
                          )}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={"destructive"} className="ml-2">
                        <LucideTrash />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Hapus dari Peta</DialogTitle>
                        <DialogDescription>
                          Apakah anda yakin? tindakan ini tidak bisa dipulihkan.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          disabled={isLoading}
                          variant={"destructive"}
                          type="button"
                          onClick={() => handleDelete(`${marker.id}`)}
                        >
                          {loadingButton ? (
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
                </TableCell>
                {/* <TableCell className="text-right">{marker.postCount}</TableCell> */}
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Penanda</TableCell>
            <TableCell className="text-right"> {markers?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Page;
