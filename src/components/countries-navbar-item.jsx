import { useParams, useRouter } from "next/navigation";
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

  const { country_param } = useParams();

  const isTablet = useMedia("(max-width: 768px)", true);

  const handleClick = (href) => {
    router.push(`/destination/${href}`);

    isTablet && setIsNavSheetOpen(false);
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
                    "px-8 py-2",
                    country_param === country.href && "text-white bg-yellow-500"
                    // index === countries.length - 1 && "mb-6"
                  )}
                  onClick={() => handleClick(country.href)}
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
                    className={cn(
                      "p-7 cursor-pointer hover:text-white hover:bg-yellow-500",
                      country_param === country.href &&
                        "text-white bg-yellow-500"
                    )}
                    title={country.title}
                    // href={`/destination/${country.href}`}
                    onClick={() => handleClick(country.href)}
                  >
                    {country.description}
                  </ListItem>
                );
              })}
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
        <div
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
        </div>
      </NavigationMenuLink>
    </li>
  );
};
