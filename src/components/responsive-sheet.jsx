"use client";

import { Sheet } from "@/components/ui/sheet";
import { useCountriesWeWorkWithSheet } from "@/hooks/use-countries-we-work-with-sheet";

export const ResponsiveSheet = ({ children }) => {
  const { isOpen, setIsOpen } = useCountriesWeWorkWithSheet();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Sheet>
  );
};
