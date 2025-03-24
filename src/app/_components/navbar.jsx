"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

import { CountriesNavbarItem } from "@/components/countries-navbar-item";
import { ServicesNavbarItem } from "@/components/services-navbar-item";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isNavSheetOpen, setIsNavSheetOpen] = useState(false);

  const isTablet = useMedia("(max-width: 768px)", true);

  // table view
  if (isTablet) {
    return (
      <Sheet open={isNavSheetOpen} onOpenChange={setIsNavSheetOpen}>
        <NavHeader>
          <SheetTrigger className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                x-show="!open"
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </SheetTrigger>
        </NavHeader>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent className="px-0 bg-cream overflow-y-scroll z-[9999]">
          <SheetHeader>
            <SheetTitle>{/* Are you absolutely sure? */}</SheetTitle>
            <SheetDescription>
              {/* This action cannot be undone. This will permanently delete your
              account and remove your data from our servers. */}
            </SheetDescription>
          </SheetHeader>

          <NavLink setIsNavSheetOpen={setIsNavSheetOpen} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <NavHeader>
      <NavLink />
    </NavHeader>
  );
};

const NavHeader = ({ children }) => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrollTop(false);
      } else {
        setIsScrollTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "w-full h-28 text-gray-700 bg-cream pb-0 transition-all duration-300 fixed top-0 left-0 z-50",
        !isScrollTop &&
          "h-16 md:h-20 md:pb-8 bg-white bg-opacity-90 border-b-2 border-[#eee]"
      )}
    >
      <div className="max-w-screen-xl w-full h-full flex flex-row items-center justify-between py-6 px-8 md:mx-auto">
        <div className="relative md:mt-8">
          <Link href="/">
            <Image width={58} height={48} src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {children}
      </div>
    </div>
  );
};

const NavLink = ({ setIsNavSheetOpen }) => {
  // const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleNavItemClick = () => {
    // setIsAccordionExpanded(false);
    setIsNavSheetOpen?.(false);
  };

  return (
    <nav
      className={cn(
        "flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 *:transition"
      )}
      onClick={handleNavItemClick}
    >
      <Link
        className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
        href="/"
      >
        Home
      </Link>

      <CountriesNavbarItem setIsNavSheetOpen={setIsNavSheetOpen} />

      <ServicesNavbarItem
        // isAccordionExpanded={isAccordionExpanded}
        // setIsAccordionExpanded={setIsAccordionExpanded}
        setIsNavSheetOpen={setIsNavSheetOpen}
      />

      <Link
        className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
        href="/about-us"
      >
        About Us
      </Link>

      <Link
        className="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4 md:hover:scale-110"
        href="/contact-us"
      >
        Contact
      </Link>
    </nav>
  );
};
