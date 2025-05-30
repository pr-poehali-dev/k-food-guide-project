import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const geographyFeatures = [
    {
      emoji: "🏔️",
      title: "Горные регионы",
      description:
        "70% территории Кореи занимают горы, что влияет на местную кухню: грибы, дикие травы, горный женьшень.",
    },
    {
      emoji: "🌊",
      title: "Три моря",
      description:
        "Корея омывается тремя морями, поэтому морепродукты — основа корейской кухни.",
    },
    {
      emoji: "🌡️",
      title: "Муссонный климат",
      description:
        "Жаркое влажное лето и холодная зима требуют разной пищи: острое летом, согревающее зимой.",
    },
    {
      emoji: "🌾",
      title: "Плодородные равнины",
      description:
        "Рисовые поля на юге страны обеспечивают основной продукт корейского стола.",
    },
  ];

  const culturalReasons = [
    "Острая пища помогает потеть в жаркую погоду",
    "Специи обладают антибактериальными свойствами",
    "Традиция ферментации для сохранения овощей",
    "Влияние буддизма на вегетарианские блюда",
    "Конфуцианские традиции совместных трапез",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Знакомство с Кореей
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-open-sans">
            География, климат и культура: почему корейцы так любят острое?
          </p>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-gray-800">
            География влияет на вкусы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {geographyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.emoji}</div>
                  <CardTitle className="text-lg font-montserrat">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Spicy Food */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center font-montserrat text-gray-800">
              🌶️ Почему корейцы любят острое?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 font-montserrat">
                  Климатические причины:
                </h4>
                <ul className="space-y-3 font-open-sans">
                  {culturalReasons.slice(0, 3).map((reason, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 font-montserrat">
                  Культурные причины:
                </h4>
                <ul className="space-y-3 font-open-sans">
                  {culturalReasons.slice(3).map((reason, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat text-gray-800">
            🗺️ Карта вкусов Кореи
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-open-sans">
            Каждый регион Кореи имеет свои гастрономические особенности,
            сформированные географией и историей.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">
                  Север (Сеул)
                </h3>
                <p className="text-gray-600 font-open-sans">
                  Императорская кухня, рафинированные блюда
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">
                  Юг (Пусан)
                </h3>
                <p className="text-gray-600 font-open-sans">
                  Морепродукты, острые супы
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏝️</div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">
                  Чеджу
                </h3>
                <p className="text-gray-600 font-open-sans">
                  Уникальные деликатесы острова
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
