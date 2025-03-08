import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-3 text-sm font-normal text-center text-white bg-primary">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <Link href="/products" className="font-semibold underline">
        Shop Now
      </Link>
    </div>
  );
};

export default Header;
