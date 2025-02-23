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

export const CountriesNavbarItem = ({
  isAccordionExpanded,
  setIsAccordionExpanded,
  setIsOpen,
}) => {
  const router = useRouter();

  const isTablet = useMedia("(max-width: 768px)", true);

  const handleAccordion = (id) => {
    setIsAccordionExpanded(null);
    setIsOpen(false);
    router.push(`/${id}`);

    // delay the scroll to let the menu close smoothly
    setTimeout(() => {
      const target = document.getElementById(id);

      target?.scrollIntoView();
    }, 100);
  };

  if (isTablet) {
    return (
      <Accordion
        value={isAccordionExpanded}
        onValueChange={setIsAccordionExpanded}
        type="single"
        collapsible
        onClick={(e) => e.stopPropagation()}
      >
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline md:hover:scale-110 data-[state=open]:text-gray-900 justify-start gap-2 font-normal hover:no-underline">
            Academic Destinations
          </AccordionTrigger>

          <div className="bg-white *:cursor-pointer">
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              USA
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              UK
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Australia
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Canada
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Germany
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Sweden
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              France
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Denmark
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Finland
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Ireland
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Italy
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Hungary
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Romania
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Bulgaria
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-0" onClick={() => {}}>
              Malta
            </AccordionContent>
            <AccordionContent className="px-8 pt-6 pb-6" onClick={() => {}}>
              Cyprus
            </AccordionContent>
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
            <ul className="w-[280px] flex flex-col">
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
