import { FaStar, FaRegStar } from "react-icons/fa";

export default function Rating({
  rating,
  maxRating = 5,
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: maxRating }, (_, index) =>
        index < rating ? (
          <FaStar
            key={index}
            className="text-yellow-400 text-xl"
          />
        ) : (
          <FaRegStar
            key={index}
            className="text-gray-500 text-xl"
          />
        )
      )}

      <span className="text-white ml-3 font-semibold">
        {rating}/{maxRating}
      </span>
    </div>
  );
}