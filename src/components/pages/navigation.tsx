"use client";
import React from "react";
import Header from "./header";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";
const Navbar = dynamic(() => import("@/components/pages/navbar/navbar"), {
  ssr: false,
  loading: () => <Skeleton className="h-20 w-full" />,
});

const Navigation = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

export default Navigation;
