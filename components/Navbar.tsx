import React from "react";
import { navItems } from "@/constants";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="md:px-[22rem] px-6 py-[2rem]">
      <div className="flex justify-between items-center py-4 px-6 rounded-full border-[1px] bg-neutral-900">
        <div>
          <h1 className="text-2xl font-medium">Invozia</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex gap-6 text-sm text-zinc-300">
            {navItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="md:block hidden">
          <Button className="rounded-full">Download app</Button>
        </div>

        <div className="md:hidden block">
          <div className="flex gap-4 items-center">
            <ul className="flex gap-6 text-sm text-zinc-300">
              <li>Cart</li>
            </ul>
            <Sheet>
              <SheetTrigger>
                <Button className="rounded-full">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Manage your invoices.</SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col gap-2 pt-6 text-sm text-zinc-300">
                      {navItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
