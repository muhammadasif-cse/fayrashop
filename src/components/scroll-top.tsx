"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";

const ScrollTop = () => {
  return (
    <Button
      size={"icon"}
      variant="outline"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute -top-12 right-32 rounded-full"
    >
      <ArrowUpIcon />
    </Button>
  );
};

export default ScrollTop;
