import Logo from "./logo";
import NavAction from "./nav-action";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="p-3 border-b bg-background">
      <div className="container flex items-center justify-between mx-auto">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu style="hidden lg:flex gap-12" />

        <div className="flex items-center gap-3">
          <NavAction style="hidden sm:inline-flex" />

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
