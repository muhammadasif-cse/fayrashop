import { EyeIcon, HeartIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const ProductCard = ({
  data,
  actions,
}: {
  data: number;
  actions?: {
    discount_btn?: boolean;
    discount_price?: boolean;
    heart_btn?: boolean;
    eye_btn?: boolean;
    cart_btn?: boolean;
    trash_btn?: boolean;
    has_new?: boolean;
    has_color?: boolean;
  };
}) => {
  return (
    <div className="bg-accent/30 w-[270px] group">
      <div className="relative rounded-sm bg-accent">
        <Image
          src={`/images/fayrashop-products-${data + 1}.svg`}
          alt="product"
          width={270}
          height={250}
          className="h-[250px] w-[270px] px-14 py-10"
        />
        {actions?.has_new ? (
          <div className="absolute px-2 py-1 text-xs text-primary rounded-sm top-3 left-3 bg-success">
            New
          </div>
        ) : null}
        {actions?.discount_btn ? (
          <div className="absolute px-2 py-1 text-xs text-white rounded-sm top-3 left-3 bg-danger">
            {data * 13}% OFF
          </div>
        ) : null}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {actions?.trash_btn ? (
            <button
              onClick={() => alert("Successfully add your favorite products")}
              className="cursor-pointer bg-danger text-white rounded-full w-9 h-9 p-1.5"
            >
              <Trash2Icon size={24} />
            </button>
          ) : null}
          {actions?.heart_btn ? (
            <button
              onClick={() => alert("Successfully add your favorite products")}
              className="cursor-pointer bg-white rounded-full w-9 h-9 p-1.5"
            >
              <HeartIcon size={24} />
            </button>
          ) : null}
          {actions?.eye_btn ? (
            <button
              onClick={() => alert("Navigating to view")}
              className="bg-white rounded-full w-9 h-9 p-1.5 cursor-pointer"
            >
              <EyeIcon size={24} />
            </button>
          ) : null}
        </div>
        {actions?.cart_btn ? (
          <button
            onClick={() => alert("Successfully added to cart")}
            className="absolute bottom-0 w-full h-0 p-2 text-base font-medium text-center text-white transition-all duration-300 bg-black rounded-b-sm opacity-0 cursor-pointer group-hover:h-10 group-hover:opacity-100"
          >
            Add To Cart
          </button>
        ) : null}
      </div>
      <div className="pt-4 px-1 space-y-2">
        <h4 className="text-base font-medium">HAVIT HV-G92 Gamepad</h4>
        {actions?.discount_price ? (
          <div className="space-y-2">
            <p className="space-x-3 text-base font-medium">
              <span className="text-danger">$ 120</span>
              <span className="line-through text-muted-foreground">$ 160</span>
            </p>
            <div className="flex items-start font-semibold text-muted-foreground">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Image
                  key={index}
                  src={"/images/fayrashop-star.svg"}
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
              <p className="ml-2">(88)</p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-2 font-semibold text-muted-foreground">
            <p className="text-danger">$ 120</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Image
                  key={index}
                  src={"/images/fayrashop-star.svg"}
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p>(88)</p>
          </div>
        )}
        <div className="!overflow-hidden">
          {actions?.has_color ? (
            <RadioGroup defaultValue="indigo" className="overflow-hidden flex">
              <RadioGroupItem
                value="green"
                id="color-green"
                className="text-[var(--color-success)] border-[var(--color-success)] [&_svg]:fill-[var(--color-success)] overflow-hidden"
              />
              <RadioGroupItem
                value="indigo"
                id="color-indigo"
                className="text-black border-black [&_svg]:fill-black overflow-hidden"
              />
              <RadioGroupItem
                value="rose"
                id="color-rose"
                className="text-[var(--color-danger)] border-[var(--color-danger)] [&_svg]:fill-[var(--color-danger)] overflow-hidden"
              />
            </RadioGroup>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
