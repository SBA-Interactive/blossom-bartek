import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Newsletter } from "@/components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <ProductShowcase />
    </main>
  );
};

export default Home;
