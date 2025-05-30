import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FoodCardProps {
  name: string;
  description: string;
  category: string;
  spiceLevel: number;
  image: string;
  emoji: string;
}

const FoodCard = ({
  name,
  description,
  category,
  spiceLevel,
  image,
  emoji,
}: FoodCardProps) => {
  const getSpiceColor = (level: number) => {
    if (level <= 1) return "bg-green-100 text-green-800";
    if (level <= 2) return "bg-yellow-100 text-yellow-800";
    if (level <= 3) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  const getSpiceText = (level: number) => {
    if (level === 0) return "Без остроты";
    if (level === 1) return "Легкая острота";
    if (level === 2) return "Средняя острота";
    if (level === 3) return "Острое";
    return "Очень острое";
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span className="text-3xl">{emoji}</span>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white text-gray-800">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-montserrat">{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4 font-open-sans leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <Badge className={getSpiceColor(spiceLevel)}>
            {"🌶️".repeat(Math.max(1, spiceLevel))} {getSpiceText(spiceLevel)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
