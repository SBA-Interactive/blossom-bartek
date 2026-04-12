import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Newsletter } from "@/components/Newsletter";
import AboutPage from "./About";
import { SectionWrapper } from "@/components/section-wrapper";
import { useAsyncDataWithRetry } from "@/components/use-async-data";
import { products } from "@/constants/products";

const Home = () => {
  const { data: featuredProducts, loading: loadingFeatured, error: errorFeatured, refetch: refetchFeatured } = useAsyncDataWithRetry({
    fetchFn: () => products.slice(0, 4),
    deps: [],
  });

  return (
    <main>
      <SectionWrapper loading={false} error={null}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper loading={false} error={null}>
        <Features />
      </SectionWrapper>

      <SectionWrapper 
        loading={loadingFeatured} 
        error={errorFeatured} 
        onRetry={refetchFeatured}
        loadingType="grid"
        loadingCount={4}
      >
        <ProductShowcase />
      </SectionWrapper>

      <AboutPage showHero={false} />
    </main>
  );
};

export default Home;