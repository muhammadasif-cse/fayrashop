"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative flex justify-center w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full text-white bg-black">
              <div className="grid items-center grid-cols-1 gap-4 p-6 mx-auto justify-items-center lg:w-11/12 md:grid-cols-2 h-96">
                <article className="space-y-5">
                  <p>iPhone 14 Series</p>
                  <div className="flex gap-3 md:flex-col">
                    <h1 className="text-xl font-bold leading-relaxed xl:text-5xl md:text-3xl">
                      Up to 10% off Voucher
                    </h1>
                    <Link
                      href={"/products"}
                      className="flex items-center gap-2 group"
                    >
                      <p className="pb-1 border-b group-hover:text-[var(--color-danger)] transition-all duration-300 group-hover:border-[var(--color-danger)]">
                        Shop Now
                      </p>{" "}
                      <ArrowRightIcon
                        size={18}
                        className="group-hover:text-[var(--color-danger)] transition-all duration-300"
                      />
                    </Link>
                  </div>
                </article>
                <Image
                  src="/images/fayrashop_hero_endframe.svg"
                  alt="Hero image"
                  width={496}
                  height={352}
                  className="mx-auto w-72 md:w-80 lg:w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute flex items-center justify-center gap-2 bottom-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full bg-white/50", {
              "border-2 border-white bg-danger": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
