import HeroSection from "@/components/HeroSection";
import PopularDishes from "@/components/PopularDishes";
import AboutKoreanCuisine from "@/components/AboutKoreanCuisine";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularDishes />
      <AboutKoreanCuisine />
    </div>
  );
};

export default Index;
