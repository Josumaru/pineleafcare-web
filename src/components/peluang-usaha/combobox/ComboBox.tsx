"use client";

import { useState } from "react";
import { Check, ChevronsDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ComboBoxProps {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options = [], placeholder = "Select...", onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value); // Trigger onChange callback
    setOpen(false);  // Close the combobox
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center rounded-md border bg-black px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none"
        >
          {selected || placeholder}
          <ChevronsDown className="ml-2 h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className=" z-50">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            {options.length > 0 ? (
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    onSelect={() => handleSelect(option)}
                  >
                    {selected === option && <Check className="mr-2 h-4 w-4 text-green-500" />}
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>No options available</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboBox;
