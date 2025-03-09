import { SmartphoneIcon } from "lucide-react";

const CategoryCard = () => {
  return (
    <div className="w-44 h-36 border rounded flex justify-center items-center hover:bg-[var(--color-danger)] group transition-all ease-in-out duration-500">
      <div>
        <SmartphoneIcon
          className="group-hover:text-white transition-all ease-in-out duration-500"
          strokeWidth={1}
          size={56}
        />
        <p className="text-base font-regular pt-4 group-hover:text-white transition-all ease-in-out duration-500">
          Phones
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
