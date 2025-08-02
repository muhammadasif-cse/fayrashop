"use client";

import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/utils/components/chunk-array";
import HighlightText from "@/utils/helpers/highlight-text";
import Title from "@/utils/helpers/title";

const OurProducts = () => {
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
      price: 370,
      originalPrice: 1160,
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
    {
      id: 5,
      name: "Gaming Mouse Pad XL",
      image: "/images/fayrashop-products-5.svg",
      price: 30,
      rating: 4.2,
      reviewCount: 45,
    },
    {
      id: 6,
      name: "Mechanical Gaming Keyboard",
      image: "/images/fayrashop-products-6.svg",
      price: 150,
      originalPrice: 200,
      rating: 4.7,
      reviewCount: 65,
    },
    {
      id: 7,
      name: "Ergonomic Gaming Chair",
      image: "/images/fayrashop-products-7.svg",
      price: 300,
      originalPrice: 350,
      rating: 4.9,
      reviewCount: 80,
    },
    {
      id: 8,
      name: "4K Ultra HD Monitor",
      image: "/images/fayrashop-products-8.svg",
      price: 800,
      originalPrice: 900,
      rating: 4.6,
      reviewCount: 50,
    },
    {
      id: 9,
      name: "RGB Gaming Mouse",
      image: "/images/fayrashop-products-9.svg",
      price: 70,
      originalPrice: 90,
      rating: 4.3,
      reviewCount: 30,
    },
    {
      id: 10,
      name: "Portable SSD Drive",
      image: "/images/fayrashop-products-10.svg",
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviewCount: 40,
    },
    {
      id: 11,
      name: "Gaming Headset with Mic",
      image: "/images/fayrashop-products-11.svg",
      price: 100,
      originalPrice: 130,
      rating: 4.4,
      reviewCount: 60,
    },
    {
      id: 12,
      name: "Wireless Charging Pad",
      image: "/images/fayrashop-products-12.svg",
      price: 25,
      rating: 4.1,
      reviewCount: 20,
    },
    {
      id: 13,
      name: "Gaming Laptop Stand",
      image: "/images/fayrashop-products-13.svg",
      price: 45,
      rating: 4.0,
      reviewCount: 15,
    },
    {
      id: 14,
      name: "HD Webcam with Microphone",
      image: "/images/fayrashop-products-14.svg",
      price: 85,
      originalPrice: 100,
      rating: 4.8,
      reviewCount: 25,
    },
    {
      id: 15,
      name: "USB-C Hub with Multiple Ports",
      image: "/images/fayrashop-products-15.svg",
      price: 40,
      rating: 4.2,
      reviewCount: 10,
    },
  ];
  
  const actions: IProductActions = {
    onAddToCart: (product) => console.log("Add to cart:", product),
    onToggleFavorite: (product) => console.log("Toggle favorite:", product),
    onView: (product) => console.log("View product:", product),
    onRemove: (product) => console.log("Remove product:", product),
  };

  return (
    <div className="container mx-auto pr-0">
      <HighlightText>Our Products</HighlightText>
      <div className="flex flex-wrap items-end pt-6 justify-between gap-y-3">
        <Title>Explore Our Products</Title>
      </div>

      <div className="py-10">
        <Carousel>
          <div className="absolute md:block hidden right-12 -top-15">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {chunkArray(sampleProducts, 2).map((group, index) => (
              <CarouselItem key={index} className="basis-2xs">
                <div className="flex flex-col gap-4">
                  {group.map((product) => (
                    <ProductCard
                      key={product.id}
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
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurProducts;
