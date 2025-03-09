import Categories from "@/components/pages/categories";
import Hero from "@/components/pages/hero/hero";
import FlashSales from "@/components/pages/products/flash-sales";

export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
    </div>
  );
}
