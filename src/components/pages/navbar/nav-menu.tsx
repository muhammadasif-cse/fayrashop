"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMenu = ({ style }: { style?: string }) => {
  const pathname = usePathname();

  return (
    <div className={"text-base" + (style ? ` ${style}` : "")}>
      {[
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
        { name: "Signup", path: "/auth/signup" },
      ].map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-link ${isActive ? "active" : ""}`}
          >
            {item.name}
            <span className="nav-border"></span>
          </Link>
        );
      })}
    </div>
  );
};
