"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ArrowUpRightFromSquare, LucideSidebarClose, LucideSidebarOpen } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Leading from "./Leading";

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const currentPathname = window.location.pathname;
    setCurrentPage(currentPathname);
  }, []);

  return (
    <>
      {pages.map((page, index) => {
        return (
          <NavigationMenuItem key={index} className="hidden lg:block">
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
      <Button
        variant={"ghost"}
        onClick={handleShowMobileMenu}
        className="hover:text-primary-500 duration-500 block lg:hidden z-30"
      >
        {showMobileMenu ? (
          <LucideSidebarClose className="text-white" />
        ) : (
          <LucideSidebarOpen className="text-white" />
        )}
      </Button>
      <div>
        <div
          className="p-5 w-[300px] fixed left-0 z-[99] bg-white dark:bg-black top-0 h-screen duration-500 py-6"
          style={{ left: showMobileMenu ? 0 : -300 }}
        >
          <div className="mb-5">
            <Leading />
          </div>
          {pages.map((menu, index) => {
            return (
              <Link href={menu.href} passHref key={index} onClick={handleShowMobileMenu}>
                <p className="hover:underline text-sm my-2 hover:text-primary-500 text-muted-foreground">
                  {menu.title}
                </p>
              </Link>
            );
          })}
          
        </div>
        <div
          style={{ display: showMobileMenu ? "block" : "none" }}
          className="w-full overflow-hidden fixed backdrop-blur-sm z-[98] h-screen top-0"
          onClick={handleShowMobileMenu}
        />
      </div>
    </>
  );
};

export default NavbarMenu;
