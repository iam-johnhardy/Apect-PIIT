import { useState } from "react";
import { FaArrowLeft, FaPlay, FaStar, FaRegStar } from "react-icons/fa";

import { movie } from "../data/movie";
import EpisodeCard from "./EpisodeCard";
import Rating from "./Rating";

export default function Hero() {
  const [activeSeason, setActiveSeason] = useState(1);

 const renderStars = () => {


    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= movie.rating) {
        stars.push(
          <FaStar
            key={i}
            className="text-yellow-400 text-xl"
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className="text-gray-500 text-xl"
          />
        );
      }
    }

    return stars;
  };


  return (
    <main
      className="relative  flex-1 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        //backgroundImage: "assets/img1.webp",
         backgroundImage: `url(${movie.image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-12">
        {/* Header */}
        <div className="flex items-center gap-3 text-white mb-10">
          <FaArrowLeft />

          <span className="text-lg font-light">
            Browse
          </span>
        </div>

        {/* Hero Information */}
        <div className="max-w-2xl space-y-8">
          <h1 className="
       text-6xl font-black text-white leading-tight uppercase">
            {movie.title}
          </h1>

          <p className="text-gray-300 leading-8 text-lg">
            {movie.description}
          </p>

          {/* Rating */}
          <div className="space-y-3">
    <div className="flex gap-2">
        {renderStars()}
    </div>

    <p className="text-white text-lg font-semibold">
        {movie.rating}/5 Stars Rating
    </p>
</div> 
          

          {/* Buttons */}
          <div className="flex gap-5">
            <button
              className="
                flex
                items-center
                gap-3
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-300
                px-8
                py-4
                rounded-lg
                text-white
                font-bold
                hover:scale-105
              "
            >
              <div className="bg-white rounded-full p-2">
                <FaPlay className="text-red-600 text-sm" />
              </div>

              PLAY NOW
            </button>

            <button
              className="
                bg-gray-600
                hover:bg-gray-700
                transition
                duration-300
                px-8
                py-4
                rounded-lg
                text-white
                font-semibold
                hover:scale-105
              "
            >
              TRAILER
            </button>
          </div>
        </div>

        {/* Seasons */}
        <div className="mt-14">
          <div className="flex gap-10 mb-8">
            {movie.seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`
                  text-lg
                  transition
                  duration-300
                  ${
                    activeSeason === season.id
                      ? "text-red-500 font-bold"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {season.name}
              </button>
            ))}
          </div>

          {/* Episodes Row */}
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {movie.episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
              />
            ))}
          </div>
                    </div>

          {/* More Like This */}
          <div className="flex justify-end mt-8">
            <button
              className="
                flex
                items-center
                gap-2
                text-white
                text-xl
                hover:text-red-500
                transition-all
                duration-300
              "
            >
              More like this

              <span className="text-2xl">
                →
              </span>
            </button>
          </div>
        </div>
      {/* </div> */}
    </main>
  );
}