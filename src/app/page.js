import Hero from "@/components/hero/Hero";
import ProductsWrapper from "@/components/products-wrapper/ProductsWrapper";

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-6">
      <Hero />
      <ProductsWrapper title="Products" />
    </section>
  );
}
