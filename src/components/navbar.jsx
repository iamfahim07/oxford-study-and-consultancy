import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4">
      <div className="flex items-center gap-x-1">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <p className="text-xl text-[#CE4420] font-semibold">
          Oxford Study and Consultancy
        </p>
      </div>

      <div className="flex gap-x-2">
        <Button size="lg" variant="ghost">
          Home
        </Button>
        <Button size="lg" variant="ghost">
          Services
        </Button>
        <Button size="lg" variant="ghost">
          About
        </Button>
        <Button size="lg">Contact</Button>
      </div>
    </nav>
  );
};
