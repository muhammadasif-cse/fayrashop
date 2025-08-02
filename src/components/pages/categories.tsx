import HighlightText from "@/utils/helpers/highlight-text";
import Title from "@/utils/helpers/title";
import CategoryCard from "../category-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Categories = () => {
  return (
    <div className="container mx-auto sm:pl-0 pl-3">
      <HighlightText>Categories</HighlightText>
      <Title style="pt-6">Browse By Category</Title>
      <div className="py-14">
        <Carousel>
          <div className="absolute md:block hidden right-12 -top-15">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index} className="basis-4xs">
                <CategoryCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="pb-14">
        <hr />
      </div>
    </div>
  );
};

export default Categories;
