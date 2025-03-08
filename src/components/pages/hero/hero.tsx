import Sidebar from "./sidebar";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-start w-full lg:flex-nowrap">
      <div className="order-2 w-full pt-10 lg:order-1 lg:w-72">
        <Sidebar />
      </div>
      <div className="self-stretch lg:order-2">
        <hr className="lg:block hidden w-[1px] h-full bg-primary/10 ml-4 mr-11" />
      </div>
      <div className="flex-grow order-1 w-full pt-4 mx-auto xl:pt-10 sm:pt-6 lg:pt-8 lg:order-3">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
