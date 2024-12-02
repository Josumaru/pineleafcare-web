import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface DropdownProps {
  options: string[]; // Daftar opsi dropdown
  placeholder: string; // Placeholder jika belum ada nilai yang dipilih
  onChange: (value: string) => void; // Callback ketika opsi dipilih
}

const DropDown: React.FC<DropdownProps> = ({ options, placeholder, onChange }) => {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelected(value); // Simpan nilai yang dipilih di state
    onChange(value); // Panggil callback untuk nilai yang dipilih
  };

  return (
    <DropdownMenu>
      {/* Tombol Trigger */}
      <DropdownMenuTrigger className=" px-14 py-2 border-white text-white rounded-lg border ">
        {selected || placeholder}
      </DropdownMenuTrigger>

      {/* Isi Dropdown */}
      <DropdownMenuContent className="  text-black rounded-lg">
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleSelect(option)}
            className="cursor-pointer px-4 py-2"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
