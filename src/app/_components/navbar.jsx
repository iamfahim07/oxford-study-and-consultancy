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
  const [isOpen, setIsOpen] = useState(false);

  const isTablet = useMedia("(max-width: 768px)", true);

  // table view
  if (isTablet) {
    return (
      <Sheet>
        <NavHeader>
          <SheetTrigger className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path
                  x-show="open"
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  x-show="!open"
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </SheetTrigger>
        </NavHeader>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent className="bg-cream z-[9999]">
          <SheetHeader>
            <SheetTitle>{/* Are you absolutely sure? */}</SheetTitle>
            <SheetDescription>
              {/* This action cannot be undone. This will permanently delete your
              account and remove your data from our servers. */}
            </SheetDescription>
          </SheetHeader>

          <NavLink setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <NavHeader>
      <NavLink setIsOpen={setIsOpen} />
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

const NavLink = ({ setIsOpen }) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(null);

  const handleNavItemClick = () => {
    setIsAccordionExpanded(null);
    setIsOpen(false);
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

      {/* <Link
        className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
        href="/what-we-bring-to-the-table"
      >
        Academic Destinations
      </Link> */}
      <CountriesNavbarItem />

      <ServicesNavbarItem
        isAccordionExpanded={isAccordionExpanded}
        setIsAccordionExpanded={setIsAccordionExpanded}
        setIsOpen={setIsOpen}
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
