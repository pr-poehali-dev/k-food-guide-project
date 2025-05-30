import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🇰🇷</span>
              <span className="text-xl font-bold font-montserrat">
                K-Food Guide
              </span>
            </div>
            <p className="text-gray-300 font-open-sans">
              Авторский путеводитель по корейской гастрономии от Полины
              Матвеевой. Откройте для себя удивительный мир корейских вкусов!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Разделы
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>🗺️ География и культура</li>
              <li>📚 История кухни</li>
              <li>🍽️ Гастрономические туры</li>
              <li>🏪 Корейские рынки</li>
              <li>🎊 Фестивали</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Автор
            </h3>
            <div className="text-gray-300 font-open-sans">
              <p className="mb-2">Полина Матвеева</p>
              <p className="text-sm">
                Студентка 4 курса направления «Туризм» ЯрГУ им. П.Г. Демидова
              </p>
              <div className="flex space-x-3 mt-4">
                <Icon name="Mail" size={20} className="text-gray-400" />
                <Icon name="Instagram" size={20} className="text-gray-400" />
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 K-Food Guide. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
