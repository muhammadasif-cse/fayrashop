import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-3 text-xs font-normal text-center text-white sm:gap-3 sm:text-sm bg-primary">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <Link href="/products" className="font-semibold underline">
        Shop Now
      </Link>
    </div>
  );
};

export default Header;
