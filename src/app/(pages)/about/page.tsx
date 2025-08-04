import Image from "next/image";
import {
  Store,
  BadgeDollarSign,
  HandCoins,
  ShoppingBag,
  Truck,
  Headphones,
  RotateCcw,
} from "lucide-react";
import HighlightCard from "@/components/pages/highlight-card";
import AboutSlider from "./carousel";
import Title from "@/utils/helpers/title";

const highlightData = [
  {
    Icon: Store,
    name: "10.5k ",
    description: "Sallers active our site",
  },
  {
    Icon: BadgeDollarSign,
    name: "33k",
    description: "Mopnthly Produduct Sale",
  },
  {
    Icon: HandCoins,
    name: "45.5k",
    description: "Customer active in our site",
  },
  {
    Icon: ShoppingBag,
    name: "25k",
    description: "Anual gross sale in our site",
  },
];

const service = [
  {
    Icon: Truck,
    name: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    Icon: Headphones,
    name: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    Icon: RotateCcw,
    name: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const About = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center gap-10">
        <article className="flex-1">
          <Title style="md:!text-6xl text-4xl leading-relaxed my-10 whitespace-nowrap">
            Our Story
          </Title>
          <p className="font-normal text-base leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
            <br />
            <br />
            Exclusive offers more than 1 million products and is growing
            rapidly. We provide a diverse assortment across categories ranging
            from electronics to daily essentials.
          </p>
        </article>
        <div>
          <Image
            src="/images/story.svg"
            alt="Our Story Side Image"
            width={705}
            height={609}
            className="w-full lg:h-[609px] shrink-0 h-auto object-cover object-center"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-32">
        {highlightData.map((item, index) => (
          <HighlightCard
            key={index}
            is_border
            is_hover
            size="lg"
            Icon={item.Icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-32">
        <AboutSlider />
      </div>
      <section className="my-32">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 place-content-center w-full">
          {service.map((item, index) => (
            <HighlightCard
              key={index}
              Icon={item.Icon}
              name={item.name}
              description={item.description}
              size="sm"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
