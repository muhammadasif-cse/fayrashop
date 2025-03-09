"use client";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HighlightText from "@/utils/helpers/highlight-text";
import Title from "@/utils/helpers/title";

const BestSales = () => {
  return (
    <div>
      <HighlightText>This Month</HighlightText>
      <div className="flex flex-wrap items-end pt-6 justify-between gap-y-3">
        <Title>Best Selling Products</Title>
        <Button variant={"danger"} size={"lg"}>
          View All
        </Button>
      </div>
      <div className="pt-10">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index} className="basis-2xs">
                <ProductCard
                  data={index}
                  actions={{ has_new: true, trash_btn: true, has_color: true }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default BestSales;
