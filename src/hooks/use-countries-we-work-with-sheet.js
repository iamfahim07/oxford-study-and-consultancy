import { parseAsBoolean, useQueryState } from "nuqs";

export const useCountriesWeWorkWithSheet = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "countries-we-offer-support-sheet",
    parseAsBoolean.withDefault(false)
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
};
