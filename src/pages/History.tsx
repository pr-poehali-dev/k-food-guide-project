import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const History = () => {
  const periods = [
    {
      period: "Древние времена",
      years: "До VII века",
      emoji: "🏺",
      description: "Основа корейской кухни: рис, соевые бобы, ферментация",
      dishes: ["Рис", "Соевая паста", "Первые ферментированные овощи"],
    },
    {
      period: "Период трех королевств",
      years: "VII-X века",
      emoji: "👑",
      description: "Развитие буддийской кухни, овощные блюда",
      dishes: [
        "Буддийские постные блюда",
        "Развитие техник приготовления",
        "Чайная церемония",
      ],
    },
    {
      period: "Династия Корё",
      years: "918-1392",
      emoji: "🏛️",
      description: "Формирование аристократической кухни",
      dishes: ["Изысканные банкеты", "Сложные рецепты", "Императорская кухня"],
    },
    {
      period: "Династия Чосон",
      years: "1392-1910",
      emoji: "🌶️",
      description: "Появление красного перца, современная корейская кухня",
      dishes: [
        "Кимчи с красным перцем",
        "Кочудян",
        "Современные корейские блюда",
      ],
    },
    {
      period: "Современность",
      years: "XX-XXI века",
      emoji: "🌍",
      description: "Глобализация корейской кухни, K-Food волна",
      dishes: ["Фьюжн кухня", "Уличная еда", "Международное признание"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            История корейской кухни
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-open-sans">
            От кимчи до пибимпаба: путешествие через века кулинарных традиций
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-gray-800">
            Кулинарная история Кореи
          </h2>

          <div className="space-y-8">
            {periods.map((period, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 md:w-1/3">
                    <div className="text-6xl mb-4 text-center">
                      {period.emoji}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-montserrat text-center">
                      {period.period}
                    </h3>
                    <p className="text-center text-red-100 font-semibold">
                      {period.years}
                    </p>
                  </div>

                  <div className="flex-1 p-6">
                    <p className="text-lg mb-4 font-open-sans text-gray-700">
                      {period.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800 font-montserrat">
                        Ключевые блюда и нововведения:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {period.dishes.map((dish, dishIndex) => (
                          <span
                            key={dishIndex}
                            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-open-sans"
                          >
                            {dish}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients Evolution */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-gray-800">
            🌶️ Эволюция ключевых ингредиентов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🍚</div>
                <CardTitle className="font-montserrat">Рис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Основа корейского стола с древних времен. Более 2000 лет
                  культивирования.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🫘</div>
                <CardTitle className="font-montserrat">Соя</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Соевый соус, паста и тофу — основа белкового питания корейцев.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🌶️</div>
                <CardTitle className="font-montserrat">Красный перец</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Революция XVI века. Принес португальцами, изменил корейскую
                  кухню навсегда.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">🥬</div>
                <CardTitle className="font-montserrat">Капуста</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Основа для кимчи. Китайская капуста появилась в Корее в XVIII
                  веке.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
