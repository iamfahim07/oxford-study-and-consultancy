"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ServicesNavbarItem } from "@/components/services-navbar-item";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(null);

  const handleNavItemClick = () => {
    setIsAccordionExpanded(null);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "w-full h-28 text-gray-700 bg-cream",
        isOpen && "max-md:h-fit"
      )}
    >
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="relative md:mt-8">
            <Image width={58} height={48} src="/logo.png" alt="Logo" />
          </div>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
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
          </button>
        </div>

        <nav
          className={cn(
            "h-0 md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 *:transition",
            isOpen ? "h-full" : "max-md:scale-y-0"
          )}
          onClick={handleNavItemClick}
        >
          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
            href="/#home"
          >
            Home
          </Link>

          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
            href="/#services"
          >
            Services
          </Link>
          <ServicesNavbarItem
            isAccordionExpanded={isAccordionExpanded}
            setIsAccordionExpanded={setIsAccordionExpanded}
            setIsOpen={setIsOpen}
          />

          <Link
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110"
            href="/#about-us"
          >
            About Us
          </Link>
          <Link
            className="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4 md:hover:scale-110"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
