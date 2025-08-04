// "use client";

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import { cn } from "@/lib/utils";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { Linkedin, Instagram, Twitter } from "lucide-react";

// function AboutSlider() {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   const cards = [
//     {
//       title: "Tom Cruise",
//       subtitle: "Founder & Chairman",
//       image: "/images/image 46.svg",
//     },
//     {
//       title: "Emma Watson",
//       subtitle: "Managing Director",
//       image: "/images/image 51.svg",
//     },
//     {
//       title: "Will Smith",
//       subtitle: "Product Designer",
//       image: "/images/image 47.svg",
//     },
//     {
//       title: "Tom Cruise",
//       subtitle: "Founder & Chairman",
//       image: "/images/image 46.svg",
//     },
//     {
//       title: "Emma Watson",
//       subtitle: "Managing Director",
//       image: "/images/image 51.svg",
//     },
//     {
//       title: "Will Smith",
//       subtitle: "Product Designer",
//       image: "/images/image 47.svg",
//     },
//     {
//       title: "Tom Cruise",
//       subtitle: "Founder & Chairman",
//       image: "/images/image 46.svg",
//     },
//     {
//       title: "Emma Watson",
//       subtitle: "Managing Director",
//       image: "/images/image 51.svg",
//     },
//     {
//       title: "Will Smith",
//       subtitle: "Product Designer",
//       image: "/images/image 47.svg",
//     },
//     {
//       title: "Tom Cruise",
//       subtitle: "Founder & Chairman",
//       image: "/images/image 46.svg",
//     },
//     {
//       title: "Emma Watson",
//       subtitle: "Managing Director",
//       image: "/images/image 51.svg",
//     },
//     {
//       title: "Will Smith",
//       subtitle: "Product Designer",
//       image: "/images/image 47.svg",
//     },
//     {
//       title: "Tom Cruise",
//       subtitle: "Founder & Chairman",
//       image: "/images/image 46.svg",
//     },
//     {
//       title: "Emma Watson",
//       subtitle: "Managing Director",
//       image: "/images/image 51.svg",
//     },
//     {
//       title: "Will Smith",
//       subtitle: "Product Designer",
//       image: "/images/image 47.svg",
//     },
//   ];

//   const plugin = React.useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: true })
//   );

//   React.useEffect(() => {
//     if (!api) return;

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   return (
//     <div className="relative flex flex-col justify-center w-full px-0">
//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//         setApi={setApi}
//       >
//         <CarouselContent>
//           {cards.map((item, slideIndex) => (
//             <CarouselItem
//               key={slideIndex}
//               className="flex justify-center w-full md:basis-1/2 lg:basis-1/3"
//             >
//               <div
//                 key={slideIndex}
//                 className="rounded shadow-lg flex flex-col w-full h-auto"
//               >
//                 <div className="relative w-full flex md:justify-center sm:pt-5 bg-accent/30">
//                   <div className="overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={294}
//                       height={350}
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 space-y-4 text-start px-4 sm:mt-4 sm:px-3 md:mt-5 md:px-3">
//                   <p className="font-medium text-3xl sm:text-xl md:text-2xl">
//                     {item.title}
//                   </p>
//                   <h1 className="font-normal text-base sm:text-sm md:text-base">
//                     {item.subtitle}
//                   </h1>
//                   <div className="flex gap-4 mt-4">
//                     <Twitter className="w-6 h-6 cursor-pointer" />
//                     <Instagram className="w-6 h-6 cursor-pointer" />
//                     <Linkedin className="w-6 h-6 cursor-pointer" />
//                   </div>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       <div className="hidden md:flex items-center justify-center gap-2 mt-8 sm:mt-10">
//         {Array.from({ length: count }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => api?.scrollTo(index)}
//             className={cn(
//               "h-3.5 w-3.5 rounded-full bg-accent",
//               current === index + 1 && "bg-primary"
//             )}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AboutSlider;
"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Title from "@/utils/helpers/title";
import Link from "next/link";
export default function AboutSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const cards = [
    {
      title: "Tom Cruise",
      subtitle: "Founder & Chairman",
      image: "/images/image 46.svg",
    },
    {
      title: "Emma Watson",
      subtitle: "Managing Director",
      image: "/images/image 51.svg",
    },
    {
      title: "Will Smith",
      subtitle: "Product Designer",
      image: "/images/image 47.svg",
    },
    {
      title: "Tom Cruise",
      subtitle: "Founder & Chairman",
      image: "/images/image 46.svg",
    },
    {
      title: "Emma Watson",
      subtitle: "Managing Director",
      image: "/images/image 51.svg",
    },
    {
      title: "Will Smith",
      subtitle: "Product Designer",
      image: "/images/image 47.svg",
    },
  ];

  return (
    <div className="">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {cards.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center w-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="w-full p-0 border-none">
                <CardContent className="p-0 items-center justify-center">
                  <div className="w-full flex justify-center bg-accent/30">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={294}
                      height={350}
                      className="object-contain md:h-96 h-72"
                    />
                  </div>

                  <article className="mt-4 md:text-start text-center space-y-3">
                    <Title style="text-primary">{item.title}</Title>
                    <h1 className="font-medium text-base">{item.subtitle}</h1>
                    <div className="flex md:justify-start justify-center items-center gap-3">
                      <Link href={"#"}>
                        <TwitterIcon className="w-6 h-6" />
                      </Link>
                      <Link href={"#"}>
                        <InstagramIcon className="w-6 h-6" />
                      </Link>
                      <Link href={"#"}>
                        <LinkedinIcon className="w-6 h-6" />
                      </Link>
                    </div>
                  </article>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
