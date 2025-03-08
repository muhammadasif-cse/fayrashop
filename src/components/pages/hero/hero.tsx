import Sidebar from "./sidebar";
import Slider from "./slider";

const Hero = () => {
  return (
    <div className="flex items-center h-full">
      <div className="pt-10">
        <Sidebar />
      </div>
      <div className="self-stretch">
        <hr className="w-[1px] h-full bg-primary/10 ml-4 mr-11" />
      </div>
      <div className="pt-10">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
