"use client";

import React, { useEffect, useState } from "react";
import Header from "./header";
import Navbar from "./navbar/navbar";

const Navigation = () => {
  const [hideHeader, setHideHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY === 0) {
        setHideHeader(false);
      } else if (currentY > lastScrollY) {
        setHideHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ease-in-out ${
          hideHeader
            ? "absolute -top-full opacity-0 pointer-events-none"
            : "relative top-0 opacity-100"
        } w-full`}
      >
        <Header />
      </div>

      <Navbar />
    </div>
  );
};

export default Navigation;
