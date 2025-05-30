import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GastroTour = () => {
  const cities = [
    {
      name: "Сеул",
      subtitle: "Столица food-трендов",
      emoji: "🏙️",
      description: "Современная гастрономия встречается с традициями",
      districts: [
        { name: "Мёндон", specialty: "Уличная еда и десерты" },
        { name: "Хондэ", specialty: "Молодежная кухня и кафе" },
        { name: "Итэвон", specialty: "Международная кухня" },
        { name: "Инсадон", specialty: "Традиционные чайные" },
      ],
      mustTry: ["Корейское барбекю", "Хотток", "Банпо", "Тток-покки"],
    },
    {
      name: "Пусан",
      subtitle: "Морские деликатесы",
      emoji: "🌊",
      description: "Свежайшие морепродукты и прибрежные вкусы",
      districts: [
        { name: "Чагальчи", specialty: "Рыбный рынок" },
        { name: "Хэундэ", specialty: "Пляжные кафе" },
        { name: "Намподон", specialty: "Уличная еда" },
        { name: "Сомён", specialty: "Современные рестораны" },
      ],
      mustTry: ["Хве (сашими)", "Милмён", "Ссиат хотток", "Морской еж"],
    },
    {
      name: "Чеджу",
      subtitle: "Райский остров для гурманов",
      emoji: "🏝️",
      description: "Уникальные деликатесы вулканического острова",
      districts: [
        { name: "Чеджу-си", specialty: "Центральные рестораны" },
        { name: "Согвипхо", specialty: "Морепродукты юга" },
        { name: "Восточное побережье", specialty: "Хэнё кухня" },
        { name: "Западное побережье", specialty: "Фермерские продукты" },
      ],
      mustTry: ["Черная свинина", "Омары", "Мандарины", "Абалон"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Гастротур по Корее
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-open-sans">
            Лучшие блюда и места, где их попробовать
          </p>
        </div>
      </section>

      {/* Cities Tour */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {cities.map((city, index) => (
            <Card key={index} className="overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl mr-4">{city.emoji}</span>
                  <div className="text-center">
                    <h2 className="text-4xl font-bold font-montserrat">
                      {city.name}
                    </h2>
                    <p className="text-xl text-red-100">{city.subtitle}</p>
                  </div>
                </div>
                <p className="text-center text-lg font-open-sans max-w-2xl mx-auto">
                  {city.description}
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Districts */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 font-montserrat text-gray-800">
                      🗺️ Районы для гурманов
                    </h3>
                    <div className="space-y-4">
                      {city.districts.map((district, districtIndex) => (
                        <div
                          key={districtIndex}
                          className="border-l-4 border-red-500 pl-4"
                        >
                          <h4 className="font-semibold text-lg font-montserrat">
                            {district.name}
                          </h4>
                          <p className="text-gray-600 font-open-sans">
                            {district.specialty}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Must Try */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 font-montserrat text-gray-800">
                      🍽️ Обязательно попробовать
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {city.mustTry.map((dish, dishIndex) => (
                        <Badge
                          key={dishIndex}
                          variant="secondary"
                          className="text-lg px-4 py-2 bg-orange-100 text-orange-800 hover:bg-orange-200"
                        >
                          {dish}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800 font-montserrat">
                        💡 Совет путешественнику
                      </h4>
                      <p className="text-yellow-700 font-open-sans">
                        {index === 0 &&
                          "В Сеуле лучшие рестораны часто находятся в подвалах. Ищите очереди — это верный признак вкусной еды!"}
                        {index === 1 &&
                          "В Пусане обязательно попробуйте морепродукты на рыбном рынке Чагальчи — свежее не найдете нигде!"}
                        {index === 2 &&
                          "На Чеджу заказывайте черную свинину только в проверенных местах — это визитная карточка острова!"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GastroTour;
