import { EyeIcon, HeartIcon } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white w-[270px] group">
      <div className="relative rounded-sm bg-accent">
        <Image
          src={`/images/fayrashop-products-${data + 1}.svg`}
          alt="product"
          width={270}
          height={250}
          className="h-[250px] w-[270px] px-14 py-10"
        />
        <div className="absolute px-2 py-1 text-xs text-white rounded-sm top-3 left-3 bg-danger">
          {data * 13}% OFF
        </div>
        <div>
          <button
            onClick={() => alert("Successfully add your favorite products")}
            className="absolute top-3 right-3 cursor-pointer bg-white rounded-full w-9 h-9 p-1.5"
          >
            <HeartIcon size={24} />
          </button>
          <button
            onClick={() => alert("Navigating to view")}
            className="absolute top-14 right-3 bg-white rounded-full w-9 h-9 p-1.5 cursor-pointer"
          >
            <EyeIcon size={24} />
          </button>
        </div>
        <button
          onClick={() => alert("Successfully added to cart")}
          className="absolute bottom-0 w-full h-0 p-2 text-base font-medium text-center text-white transition-all duration-300 bg-black rounded-b-sm opacity-0 cursor-pointer group-hover:h-10 group-hover:opacity-100"
        >
          Add To Cart
        </button>
      </div>
      <div className="pt-4 space-y-2">
        <h4 className="text-base font-medium">HAVIT HV-G92 Gamepad</h4>
        <p className="space-x-3 text-base font-medium">
          <span className="text-danger">$ 120</span>
          <span className="line-through text-muted-foreground">$ 160</span>
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Image
              key={index}
              src={"/images/fayrashop-star.svg"}
              alt="star"
              width={20}
              height={20}
            />
          ))}
          <p>(88)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
