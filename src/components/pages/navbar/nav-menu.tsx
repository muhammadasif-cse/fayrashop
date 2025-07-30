"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMenu = ({ style }: { style?: string }) => {
  //* hooks
  const { auth } = useAuth();

  const pathname = usePathname();

  return (
    <div className={"text-base" + (style ? ` ${style}` : "")}>
      {[
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
        {
          name: auth.is_loggedIn ? "Profile" : "Sign Up",
          path: auth.is_loggedIn ? "/auth/profile" : "/auth/signup",
        },
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
