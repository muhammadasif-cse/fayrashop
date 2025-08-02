"use client";

import ProductCard from "@/components/product-card";
import Timer from "@/components/timer";
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
  const sampleProducts: IProduct[] = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: "/images/fayrashop-products-1.svg",
      price: 120,
      originalPrice: 160,
      rating: 4.5,
      reviewCount: 88,
      colors: [
        { value: "red", code: "#ff0000", name: "Red" },
        { value: "blue", code: "#0000ff", name: "Blue" },
        { value: "black", code: "#2d2d2d", name: "Black" },
      ],
      isNew: true,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      image: "/images/fayrashop-products-2.svg",
      price: 960,
      originalPrice: 1160,
      rating: 4.0,
      reviewCount: 75,
      colors: [
        { value: "white", code: "#ffffff", name: "White" },
        { value: "black", code: "#2d2d2d", name: "Black" },
      ],
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: "/images/fayrashop-products-3.svg",
      originalPrice: 1160,
      price: 370,
      rating: 5.0,
      reviewCount: 99,
    },
    {
      id: 4,
      name: "Wireless Bluetooth Headphones",
      image: "/images/fayrashop-products-4.svg",
      price: 220,
      originalPrice: 280,
      rating: 4.8,
      reviewCount: 120,
      colors: [
        { value: "black", code: "#2d2d2d", name: "Black" },
        { value: "silver", code: "#c0c0c0", name: "Silver" },
      ],
    },
  ];
  const actions: IProductActions = {
    onAddToCart: (product) => console.log("Add to cart:", product),
    onToggleFavorite: (product) => console.log("Toggle favorite:", product),
    onView: (product) => console.log("View product:", product),
    onRemove: (product) => console.log("Remove product:", product),
  };

  return (
    <section className="container mx-auto relative pt-10 sm:pr-0">
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
            {sampleProducts.map((product, index) => {
              return product ? (
                <CarouselItem key={product.id || index} className="basis-2xs">
                  <ProductCard
                    product={product}
                    actions={actions}
                    showActions={{
                      discount: true,
                      heart: true,
                      eye: true,
                      cart: true,
                      trash: false,
                    }}
                  />
                </CarouselItem>
              ) : null;
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FlashSales;
