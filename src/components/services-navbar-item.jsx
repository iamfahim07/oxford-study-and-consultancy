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

const services = [
  {
    title: "What We Bring to the Table",
    href: "what-we-bring-to-the-table",
    description:
      "We specialize in student visa consultancy, guiding aspiring students toward achieving their dreams of studying abroad. From university applications to visa processing, our expert team ensures a smooth journey, making your transition to international education seamless and stress-free.",
  },
  {
    title: "Countries We Offer Support",
    href: "countries-we-offer-support",
    description:
      "We provide comprehensive support for visa processing and admission assistance in the following countries. Our dedicated team ensures a seamless experience, guiding you through every step of the application process. Whether it’s document preparation, compliance with requirements, or timely submissions, we are committed to helping you achieve your academic and professional goals.",
  },
];

export const ServicesNavbarItem = ({
  isAccordionExpanded,
  setIsAccordionExpanded,
  setIsNavSheetOpen,
}) => {
  const router = useRouter();

  const isTablet = useMedia("(max-width: 768px)", true);

  const handleAccordion = (href) => {
    router.push(`/${href}`);

    setIsAccordionExpanded(false);
    setIsNavSheetOpen?.(false);
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
            Services
          </AccordionTrigger>

          <div className="bg-white *:cursor-pointer">
            {services.map((service, index) => {
              return (
                <AccordionContent
                  key={service.title}
                  className={cn(
                    "px-8 pt-6 pb-0",
                    index === services.length - 1 && "pb-6"
                  )}
                  onClick={() => handleAccordion(service.href)}
                >
                  {service.title}
                </AccordionContent>
              );
            })}

            {/* <AccordionContent
              className="px-8 pt-6 pb-0"
              onClick={() => handleAccordion("what-we-bring-to-the-table")}
            >
              What We Bring to the Table
            </AccordionContent>
            <AccordionContent
              className="px-8 pt-6 pb-6"
              onClick={() => handleAccordion("countries-we-offer-support")}
            >
              Countries We Offer Support
            </AccordionContent> */}
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
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="w-[280px] flex flex-col">
              {services.map((service) => {
                return (
                  <ListItem
                    key={service.title}
                    className="p-7 hover:text-white hover:bg-yellow-500"
                    title={service.title}
                    href={`/${service.href}`}
                  >
                    {service.description}
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
