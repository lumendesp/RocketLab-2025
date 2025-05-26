import { FaUserCircle } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  text: string;
  score: number;
}

const renderStars = (score: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= score ? (
        <FaStar key={i} className="text-yellow-500" />
      ) : (
        <FaRegStar key={i} className="text-yellow-500" />
      )
    );
  }
  return stars;
};

const ReviewCard = ({ name, text, score }: ReviewCardProps) => {
  return (
    <div className="w-full flex flex-col items-start p-8 gap-5" style={{ boxShadow: "0 0 10px 1px #00000015" }}>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <FaUserCircle size={25} />
          <p>{name}</p>
        </div>
        <div className="flex gap-1">{renderStars(score)}</div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
