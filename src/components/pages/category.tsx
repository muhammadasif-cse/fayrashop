"use client";
import React from "react";
import Link from "next/link";
import Title from "@/utils/helpers/title";
import { Button } from "@/components/ui/button";
import Timer from "../timer";
import Image from "next/image";

function Category() {
  return (
    <section className="bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="py-12 lg:py-16 space-y-8">
          <p className="text-success font-semibold">Categories</p>
          <div>
            <Title style="!text-5xl leading-16 text-white">
              Enhance Your Music Experience
            </Title>
          </div>

          <div className="!text-white">
            <Timer
              timestamp="2025-12-31T23:59:59Z"
              onComplete={() => console.log("Timer expired!")}
            />
          </div>

          <Link href="/product">
            <Button
              size={"lg"}
              variant={"success"}
              className="bg-success rounded text-black font-semibold transition duration-300"
            >
              Buy Now!
            </Button>
          </Link>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/category_background.svg"
              alt="category background"
              fill
              className="object-cover opacity-70"
              priority
              draggable={false}
            />
          </div>
          <div className="relative z-10 p-10 flex items-center justify-center">
            <Image
              src="/images/sample-category-product.svg"
              alt="category product"
              width={400}
              height={400}
              className="w-full "
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
