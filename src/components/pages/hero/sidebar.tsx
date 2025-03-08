"use client";
import { categories } from "@/app/data/categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="pr-3 overflow-y-auto max-h-96">
      <Accordion type="single" collapsible>
        <div className="flex flex-col gap-1">
          {categories.map((category) =>
            category.category && category.category.length > 0 ? (
              <AccordionItem key={category.name} value={category.name}>
                <AccordionTrigger>{category.name}</AccordionTrigger>
                <AccordionContent className="flex h-full pt-1">
                  <div className="self-stretch">
                    <hr className="w-[1px] h-full bg-primary/10 ml-2 mr-4" />
                  </div>
                  <div className="flex flex-col gap-1">
                    {category.category.map((link, index) => (
                      <Link key={index} href={link.route}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                className="flex items-center justify-between text-sm"
                key={category.name}
                href={category.route}
              >
                {category.name}{" "}
                <ChevronRightIcon className="pointer-events-none text-muted-foreground size-4 shrink-0" />
              </Link>
            )
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default Sidebar;
