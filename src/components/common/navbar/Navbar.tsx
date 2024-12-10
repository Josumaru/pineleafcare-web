import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ImageConstants } from "@/constants/ImageConstants";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon, LogInIcon, PlusIcon } from "lucide-react";
import { getUser } from "./action";
import { LogOut, User } from "lucide-react";
import NavbarMenu from "./NavbarMenu";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/initialName";
import Leading from "./Leading";
const Navbar = async () => {
  const user = await getUser();

  return (
    <div className="border-b bg-transparent fixed top-0 w-full border-b-white border-opacity-20 flex p-5 items-center justify-center z-50 duration-300 backdrop-blur-md">
      <NavigationMenu className="max-w-7xl flex justify-between">
        <div className="hidden lg:block">
          <Leading />
        </div>
        <NavigationMenuList>
          <NavbarMenu />
        </NavigationMenuList>
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
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
