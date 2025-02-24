import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMedia } from "react-use";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const countries = [
  {
    title: "USA",
    href: "usa",
    description: "",
  },
  {
    title: "UK",
    href: "uk",
    description: "",
  },
  {
    title: "Australia",
    href: "australia",
    description: "",
  },
  {
    title: "Canada",
    href: "canada",
    description: "",
  },
  {
    title: "Germany",
    href: "germany",
    description: "",
  },
  {
    title: "Sweden",
    href: "sweden",
    description: "",
  },
  {
    title: "France",
    href: "france",
    description: "",
  },
  {
    title: "Denmark",
    href: "denmark",
    description: "",
  },
  {
    title: "Finland",
    href: "finland",
    description: "",
  },
  {
    title: "Ireland",
    href: "ireland",
    description: "",
  },
  {
    title: "Italy",
    href: "italy",
    description: "",
  },
  {
    title: "Hungary",
    href: "hungary",
    description: "",
  },
  {
    title: "Romania",
    href: "romania",
    description: "",
  },
  {
    title: "Bulgaria",
    href: "bulgaria",
    description: "",
  },
  {
    title: "Malta",
    href: "malta",
    description: "",
  },
  {
    title: "Cyprus",
    href: "cyprus",
    description: "",
  },
];

export const CountriesNavbarItem = ({ setIsNavSheetOpen }) => {
  const router = useRouter();

  const isTablet = useMedia("(max-width: 768px)", true);

  const handleAccordion = (href) => {
    router.push(`/${href}`);

    setIsNavSheetOpen(false);
  };

  if (isTablet) {
    return (
      <Accordion type="single" collapsible onClick={(e) => e.stopPropagation()}>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110 data-[state=open]:text-gray-900 justify-start gap-2 font-normal hover:no-underline">
            Academic Destinations
          </AccordionTrigger>

          <div className="bg-white *:cursor-pointer">
            {countries.map((country, index) => {
              return (
                <AccordionContent
                  key={country.title}
                  className={cn(
                    "px-8 pt-6 pb-0",
                    index === countries.length - 1 && "pb-6"
                  )}
                  onClick={() => handleAccordion(country.href)}
                >
                  {country.title}
                </AccordionContent>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110 transition font-normal hover:!bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:scale-110 data-[state=open]:text-gray-900">
            Academic Destinations
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] h-[70vh] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-yellow-500">
              {countries.map((country) => {
                return (
                  <ListItem
                    key={country.title}
                    className="p-7 hover:text-white hover:bg-yellow-500"
                    title={country.title}
                    href={`/${country.href}`}
                  >
                    {country.description}
                  </ListItem>
                );
              })}

              {/* <ListItem
                className="p-7 hover:text-white hover:bg-yellow-500"
                title={"What We Bring to the Table"}
                href="/what-we-bring-to-the-table"
              >
                We specialize in student visa consultancy, guiding aspiring
                students toward achieving their dreams of studying abroad. From
                university applications to visa processing, our expert team
                ensures a smooth journey, making your transition to
                international education seamless and stress-free.
              </ListItem>

              <ListItem
                className="p-7 hover:text-white hover:bg-yellow-500"
                title="Countries We Offer Support"
                href="/countries-we-offer-support"
              >
                We provide comprehensive support for visa processing and
                admission assistance in the following countries. Our dedicated
                team ensures a seamless experience, guiding you through every
                step of the application process. Whether it’s document
                preparation, compliance with requirements, or timely
                submissions, we are committed to helping you achieve your
                academic and professional goals.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-gray-100">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
