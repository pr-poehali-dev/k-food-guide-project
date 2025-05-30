import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutKoreanCuisine = () => {
  const features = [
    {
      emoji: "🌶️",
      title: "Острота и специи",
      description:
        "Корейская кухня славится использованием кочудян — острой пасты из красного перца, которая придает блюдам характерный вкус.",
    },
    {
      emoji: "🥗",
      title: "Ферментация",
      description:
        "Традиция ферментации овощей создает уникальные вкусы и делает блюда полезными для пищеварения.",
    },
    {
      emoji: "🍚",
      title: "Рис — основа",
      description:
        "Рис является основой корейского стола, подается практически с каждым приемом пищи в различных формах.",
    },
    {
      emoji: "🥢",
      title: "Банчан культура",
      description:
        "Традиция подавать множество маленьких закусок (банчан) создает разнообразие вкусов в каждом приеме пищи.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat text-gray-800">
            О корейской кухне
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
            Корейская кухня — это гармония вкусов, традиций и здоровых
            ингредиентов, которая формировалась тысячелетиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow"
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

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
            🏆 Корейская кухня в мире
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto font-open-sans leading-relaxed">
            Благодаря Халлю (Корейской волне) корейская кухня стала популярной
            по всему миру. От K-pop до K-food — корейская культура завоевывает
            сердца людей через желудок. Сегодня корейские рестораны можно найти
            в любом крупном городе мира.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutKoreanCuisine;
