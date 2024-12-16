"use client"

import { Check, ChevronsDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";

interface ComboBoxProps {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}

export const ComboBox: React.FC<ComboBoxProps> = ({ options = [], defaultValue, placeholder = "Select...", onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(defaultValue ?? "");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value); // Trigger onChange callback
    setOpen(false);  // Close the combobox
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="flex w-full">
        <Button
        variant={"outline"}
        role="combobox"
          className="w-full border-slate-700 bg-black flex justify-between items-center"
        >
          {selected || placeholder}
          <ChevronsDown className="ml-2 h-4 w-4" />
        </Button>
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
