import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./logo";
import NavAction from "./nav-action";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10 p-2">
        <Logo />
        <NavMenu style="lg:hidden gap-4 flex-col flex w-fit items-start" />
        <NavAction style="sm:hidden inline-flex" />
      </SheetContent>
    </Sheet>
  );
};
