import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

const NavAction = ({ style }: { style?: string }) => {
  return (
    <div className={"sm:gap-6 gap-3" + (style ? ` ${style}` : "")}>
      <div className="flex items-center w-64 px-2 rounded-sm sm:px-3 bg-muted">
        <Input
          type="search"
          placeholder="What are you looking for?"
          className={cn(
            "border-none outline-none rounded-none shadow-none",
            "focus-visible:border-none focus-visible:ring-[0px]"
          )}
        />
        <SearchIcon />
      </div>
      <div className="flex items-center gap-4">
        <HeartIcon className="w-6 h-6" />
        <ShoppingCartIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default NavAction;
