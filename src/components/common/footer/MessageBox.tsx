"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const MessageBox: NextPage<Props> = ({}) => {
  const [name, setName] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleClick = () => {
    if (!name || !message) {
      toast({
        title: "Harap isi nama dan pesan",
        description: "Kami akan segera menghubungi anda",
        variant: "default",
        action: <ToastAction altText="Oke">Oke</ToastAction>,
      });
      return;
    }
  
    const encodedString = encodeURIComponent(
      `Halo, saya ${name}. ${message}`
    );
  
    const phoneNumber = "6285867942389";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedString}`, "_blank");
  
    setName(null);
    setMessage(null);
  };
  

  return (
    <div className="w-2/5 pt-9">
      <p className="text-white font-bold">
        Berminat bermitra dengan Pineleaf Care ?
      </p>
      <div className="flex flex-col items-end mt-2">
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
          className="mb-2 text-white"
        />
        <Input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Pesan"
          className="mb-2"
        />
        <Button
          variant={"outline"}
          onClick={handleClick}
          className=" bg-white w-full mt-2 hover:bg-gray-200 text-black hover:text-black"
        >
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default MessageBox;
