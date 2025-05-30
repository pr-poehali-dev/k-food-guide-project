import FoodCard from "./FoodCard";

const PopularDishes = () => {
  const dishes = [
    {
      name: "Кимчи",
      description:
        "Традиционная корейская квашеная капуста с острыми специями. Основа корейской кухни, богатая пробиотиками.",
      category: "Закуска",
      spiceLevel: 3,
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
      emoji: "🥬",
    },
    {
      name: "Булгоги",
      description:
        "Нежная маринованная говядина, приготовленная на гриле. Сладковатый вкус с легкими нотками кунжута.",
      category: "Основное блюдо",
      spiceLevel: 1,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      emoji: "🥩",
    },
    {
      name: "Тток-покки",
      description:
        "Рисовые лепешки в остром сладком соусе кочудян. Популярная корейская уличная еда.",
      category: "Снэк",
      spiceLevel: 3,
      image: "https://images.unsplash.com/photo-1553978297-833d09932d51?w=500",
      emoji: "🍲",
    },
    {
      name: "Пибимпап",
      description:
        "Рис с овощами, мясом и яйцом, смешанный с острым соусом. Гармоничное сочетание вкусов и текстур.",
      category: "Основное блюдо",
      spiceLevel: 2,
      image:
        "https://images.unsplash.com/photo-1590841609987-4ac211afddf1?w=500",
      emoji: "🍱",
    },
    {
      name: "Корейский чай",
      description:
        "Традиционные корейские чаи из женьшеня, ячменя и трав. Полезные напитки для здоровья.",
      category: "Напиток",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      emoji: "🍵",
    },
    {
      name: "Хотток",
      description:
        "Сладкие корейские блинчики с начинкой из коричневого сахара, орехов и корицы.",
      category: "Десерт",
      spiceLevel: 0,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      emoji: "🥞",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-gray-800">
            Популярные блюда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Начните знакомство с этими культовыми блюдами корейской кухни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <FoodCard key={index} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
