import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center p-3 text-xs font-normal text-white sm:text-sm bg-black">
      <p className="flex-grow text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        &nbsp;
        <Link href="/products" className="font-semibold underline text-nowrap">
          Shop Now
        </Link>
      </p>
    </div>
  );
};

export default Header;
