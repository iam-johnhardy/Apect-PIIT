export default function EpisodeCard({ episode }) {
  return (
    <div
      className="
        min-w-[250px]
        rounded-2xl
        overflow-hidden
        bg-[#111827]
        shadow-lg
        hover:shadow-red-500/30
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
        group
      "
    >
      {/* Episode Image */}
      <div className="overflow-hidden">
        <img
          src={episode.image}
          alt={episode.title}
          className="
            w-full
            h-40
            object-cover
            group-hover:scale-110
            transition-transform
            duration-500
          "
        />
      </div>

      {/* Episode Content */}
      <div className="p-4">
        <h3
          className="
            text-white
            font-semibold
            text-lg
            line-clamp-2
          "
        >
          {episode.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Episode {episode.id}
        </p>
      </div>
    </div>
  );
}