"use client";
import ProductCard from "@/components/product-card";
import Timer from "@/components/timer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HighlightText from "@/utils/helpers/highlight-text";
import Title from "@/utils/helpers/title";

const FlashSales = () => {
  return (
    <section className="relative pt-16 md:pt-32">
      <HighlightText>Today’s</HighlightText>
      <div className="flex flex-wrap items-end pt-6 gap-x-20 gap-y-3">
        <Title>Flash Sales</Title>
        <Timer days={90} hours={23} minutes={45} seconds={0} />
      </div>
      <div className="pt-10">
        <Carousel>
          <div className="absolute md:block hidden right-12 -top-15">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index} className="basis-2xs">
                <ProductCard data={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center py-14">
        <Button variant={"destructive"} className="rounded-sm">
          View All Products
        </Button>
      </div>
      <div className="pb-14">
        <hr />
      </div>
    </section>
  );
};

export default FlashSales;
