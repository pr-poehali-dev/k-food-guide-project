import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Markets = () => {
  const markets = [
    {
      name: "Рынок Мёндон",
      city: "Сеул",
      type: "Уличная еда",
      emoji: "🏪",
      time: "10:00 - 23:00",
      specialty: "Хотток, тток-покки, корн-дог",
      description: "Самый туристический рынок уличной еды в центре Сеула",
      priceRange: "₩ 2,000 - 8,000",
    },
    {
      name: "Рынок Кванджан",
      city: "Сеул",
      type: "Традиционный",
      emoji: "🏮",
      time: "06:00 - 18:00",
      specialty: "Пинде-тток, маяк кимбаб, сундэ",
      description: "Старейший рынок Сеула с аутентичной атмосферой",
      priceRange: "₩ 3,000 - 12,000",
    },
    {
      name: "Чагальчи",
      city: "Пусан",
      type: "Рыбный",
      emoji: "🐟",
      time: "05:00 - 22:00",
      specialty: "Свежая рыба, морепродукты, хве",
      description: "Крупнейший рыбный рынок Кореи с живыми морепродуктами",
      priceRange: "₩ 10,000 - 50,000",
    },
    {
      name: "Сомун",
      city: "Чеджу",
      type: "Ночной",
      emoji: "🌙",
      time: "18:00 - 02:00",
      specialty: "Черная свинина, морепродукты Чеджу",
      description: "Ночной рынок с уникальными деликатесами острова",
      priceRange: "₩ 5,000 - 25,000",
    },
  ];

  const tips = [
    {
      icon: "💰",
      title: "Наличные обязательны",
      tip: "Большинство торговцев принимают только наличные",
    },
    {
      icon: "🍽️",
      title: "Пробуйте смело",
      tip: "Не бойтесь незнакомых блюд — это лучший способ открыть новое",
    },
    {
      icon: "🕐",
      title: "Приходите голодными",
      tip: "Порции небольшие, можно попробовать много разного",
    },
    {
      icon: "📱",
      title: "Переводчик в помощь",
      tip: "Установите приложение-переводчик с корейского",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Рынки Кореи
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-open-sans">
            От рассвета до полуночи — где едят настоящие корейцы
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-gray-800">
            Лучшие рынки для гурманов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {markets.map((market, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-montserrat flex items-center">
                        <span className="text-3xl mr-3">{market.emoji}</span>
                        {market.name}
                      </CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white"
                        >
                          {market.city}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white"
                        >
                          {market.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 font-open-sans">
                    {market.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">🕐 Время работы:</span>
                      <span>{market.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">💰 Цены:</span>
                      <span>{market.priceRange}</span>
                    </div>
                    <div>
                      <span className="font-semibold">🍽️ Специалитеты:</span>
                      <p className="text-gray-600 mt-1">{market.specialty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-gray-800">
            💡 Лайфхаки для посещения рынков
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{tip.icon}</div>
                  <CardTitle className="text-lg font-montserrat">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Schedule */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 font-montserrat text-gray-800">
            📅 Идеальный день на рынках
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  06:00
                </div>
                <div>
                  <h3 className="font-semibold font-montserrat">
                    Завтрак на рынке Кванджан
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Пинде-тток и традиционный корейский чай
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                  12:00
                </div>
                <div>
                  <h3 className="font-semibold font-montserrat">
                    Обед в Мёндоне
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Тток-покки и хотток на перекус
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                  19:00
                </div>
                <div>
                  <h3 className="font-semibold font-montserrat">
                    Ужин на ночном рынке
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    Барбекю и свежие морепродукты
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;
