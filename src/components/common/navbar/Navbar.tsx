"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/ImageConstants";

const Navbar = () => {
  const pages = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Peluang Usaha",
      href: "/peluang-usaha",
    },
    {
      title: "Training & Support",
      href: "/training-support",
    },
    {
      title: "Produk",
      href: "/produk",
    },
    {
      title: "Blog & Tips",
      href: "/blog-tips",
    },
  ];
  useEffect(() => {
    const currentPathname = window.location.pathname;
    setCurrentPage(currentPathname);
  }, []);
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="border-b bg-transparent fixed top-0 w-full border-b-white border-opacity-20 flex p-5 items-center justify-center z-50 duration-300 backdrop-blur-md">
      <NavigationMenu className="max-w-7xl flex justify-between">
        <Image
          src={ImageConstants.pineleafLogo}
          alt="Pineleaf Logo"
          height={32}
        />
        <NavigationMenuList>
          {pages.map((page, index) => {
            return (
              <NavigationMenuItem key={index}>
                <Link
                  href={page.href}
                  onClick={() => setCurrentPage(page.href)}
                >
                  <div
                    className="text-sm font-medium leading-none px-2"
                    style={{
                      color: page.href == currentPage ? "#FFFFFF" : "#FFFFFF90",
                    }}
                  >
                    {page.title}
                  </div>
                </Link>
              </NavigationMenuItem>
            );
          })}
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
