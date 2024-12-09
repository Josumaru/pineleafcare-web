"use client";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const pages = [
  {
    title: "Beranda",
    href: "/beranda",
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
    href: "/blog",
  },
];

const NavbarMenu: NextPage = ({}) => {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    const currentPathname = window.location.pathname;
    setCurrentPage(currentPathname);
  }, []);
  return (
    <>
      {pages.map((page, index) => {
        return (
          <NavigationMenuItem key={index}>
            <Link href={page.href} onClick={() => setCurrentPage(page.href)}>
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
    </>
  );
};

export default NavbarMenu;
