import Sidebar from "./sidebar";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="container px-0 mx-auto flex flex-wrap items-start w-full lg:flex-nowrap">
      <div className="order-2 w-full px-2 md:px-0 pt-8 lg:order-1 lg:w-72">
        <Sidebar />
      </div>
      <div className="self-stretch lg:order-2">
        <hr className="lg:block hidden w-[1px] h-full bg-secondary mx-4" />
      </div>
      <div className="flex-grow order-1 w-full mx-auto xl:pt-10 lg:pt-8 lg:order-3">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
