import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-6xl mb-4 block">🇰🇷</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            K-Food Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-open-sans">
            Откройте для себя удивительный мир корейской кухни — от острого
            кимчи до нежного булгоги
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            🍜 Начать путешествие
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3"
          >
            📖 Узнать больше
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
