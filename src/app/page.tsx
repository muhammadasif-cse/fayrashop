import Categories from "@/components/pages/categories";
import Category from "@/components/pages/category";
import Hero from "@/components/pages/hero/hero";
import BestSales from "@/components/pages/products/best-sales";
import FlashSales from "@/components/pages/products/flash-sales";
import OurProducts from "@/components/pages/products/our-products";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <FlashSales />
      <hr className="container mx-auto" />
      <Categories />
      <hr className="container mx-auto" />
      <BestSales />
      <Category />
      <OurProducts />
    </div>
  );
}
