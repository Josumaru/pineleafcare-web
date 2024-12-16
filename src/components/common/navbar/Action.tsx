import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getInitials } from "@/lib/initialName";
import { User as CurrentUser} from "@/types/user";
import { PlusIcon } from "@radix-ui/react-icons";
import { LayoutGridIcon, LogInIcon, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Action = ({}) => {
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/get-current-user");
      const data = await response.json();
      
      if(data.status == 200){
          setUser(data.user);
      }
    };

    fetchUser();
  }, []);
  return (
    <NavigationMenuList>
      {user && (
        <NavigationMenuItem>
          <Link href={"/blog/create"}>
            <Button className="bg-white text-black mx-2 hover:bg-gray-300">
              <PlusIcon />
              Posting
            </Button>
          </Link>
        </NavigationMenuItem>
      )}

      <NavigationMenuItem>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-white rounded-full flex items-center justify-center w-9 h-9">
                <Avatar>
                  <AvatarImage
                    src={user?.image}
                    alt={user?.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-black">
                    {getInitials(user?.name ?? "Overlogic")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-42 bg-black text-white border-gray-800">
              <DropdownMenuItem>
                <Link
                  href={"/pengguna"}
                  className="w-full flex justify-between items-center flex-row gap-2"
                >
                  <User />
                  <p>Pengguna</p>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              {user.role == "admin" && (
                <DropdownMenuItem>
                  <Link
                    href={"/dashboard"}
                    className="w-full flex justify-between items-center flex-row gap-2"
                  >
                    <LayoutGridIcon />
                    <span>Dashboard</span>
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem>
                <Link
                  href={"/logout"}
                  className="w-full flex justify-between items-center flex-row gap-2"
                >
                  <LogOut />
                  <span>Keluar</span>
                  <DropdownMenuShortcut>⇧⌘K</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={"/login"}>
            <Button className="bg-white hover:bg-gray-200 text-black ml-10">
              <LogInIcon />
              <span>Masuk</span>
            </Button>
          </Link>
        )}
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export default Action;
