"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavbarMenu from "./NavbarMenu";
import Leading from "./Leading";
import Action from "./Action";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = React.useState(false);


  React.useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pastikan tidak negatif
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`border-b bg-transparent sticky w-screen top-0 border-b-white border-opacity-20 flex p-5 items-center justify-center z-50 duration-300 backdrop-blur-md ${
      hideNavbar ? "-translate-y-full" : "translate-y-0"
    }`}
    style={{ position: "fixed" }}>
      <NavigationMenu className="max-w-7xl flex justify-between">
        <div className="hidden lg:block">
          <Leading />
        </div>
        <NavigationMenuList>
          <NavbarMenu />
        </NavigationMenuList>
        <Action />
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
