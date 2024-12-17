"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import {
  ArrowUpRightFromSquare,
  Book,
  CircleDollarSignIcon,
  HomeIcon,
  LucideSidebarClose,
  LucideSidebarOpen,
  Pocket,
  RulerIcon,
} from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Leading from "./Leading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/initialName";
import { User } from "@/types/user";

const pages = [
  {
    title: "Beranda",
    href: "/beranda",
    icon: <HomeIcon />,
  },
  {
    title: "Peluang Usaha",
    href: "/peluang-usaha",
    icon: <CircleDollarSignIcon />,
  },
  {
    title: "Training & Support",
    href: "/training-support",
    icon: <RulerIcon />,
  },
  {
    title: "Produk",
    href: "/produk",
    icon: <Pocket />,
  },
  {
    title: "Blog & Tips",
    href: "/blog",
    icon: <Book />,
  },
];

const NavbarMenu: NextPage = ({}) => {
  const [currentPage, setCurrentPage] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const fetchUser = async () => {
      const response = await fetch("/api/get-current-user");
      const data = await response.json();

      if (data.status == 200) {
        setUser(data.user);
      }
    };

    fetchUser();
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
          className="w-[300px] pb-24 left-0 z-[99] bg-white dark:bg-black top-0 h-screen duration-500 py-6 fixed flex justify-between flex-col"
          style={{ left: showMobileMenu ? 0 : -300 }}
        >
          <div>
            <div className="mb-5">
              <Leading />
            </div>
            {pages.map((menu, index) => {
              return (
                <Link
                  href={menu.href}
                  passHref
                  key={index}
                  onClick={() => {
                    handleShowMobileMenu();
                    setCurrentPage(menu.href);
                  }}
                  style={{
                    color: menu.href == currentPage ? "#FFFFFF" : "#FFFFFF90",
                    backgroundColor:
                      menu.href == currentPage ? "#ffffff20" : "transparent",
                  }}
                  className="flex items-center gap-2 hover:bg-[#ffffff20] rounded-lg my-1 py-2 mr-2"
                >
                  <div
                    className="bg-white h-6 w-1 rounded-r-lg"
                    style={{
                      backgroundColor:
                        menu.href == currentPage ? "white" : "transparent",
                    }}
                  />
                  {menu.icon}
                  <p
                    className="hover:underline text-sm my-2 hover:text-primary-500 text-muted-foreground"
                    style={{
                      color: menu.href == currentPage ? "#FFFFFF" : "#FFFFFF90",
                    }}
                  >
                    {menu.title}
                  </p>
                </Link>
              );
            })}
          </div>
          {user && (
            <div onClick={handleShowMobileMenu}>
              <Link href={"/pengguna"}>
                <div className="flex items-center bg-[#ffffff20] rounded-full p-2 m-2 gap-2">
                  <Avatar>
                    <AvatarImage
                      src={user?.image ?? "/banner/default.jpg"}
                      alt={user?.name ?? "Avatar"}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {getInitials(user?.name ?? "Overlogic")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-white">
                      {user?.name ?? "Overlogic Pineleaf"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user?.email ?? "overlogic@pineleaf.com"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
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
