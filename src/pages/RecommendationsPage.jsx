import { useState } from "react";
import { useProperty } from "../context/PropertyContext";
import {
  FaUtensils,
  FaCocktail,
  FaUmbrellaBeach,
  FaLandmark,
  FaIcons,
} from "react-icons/fa";

const categoryIcons = {
  food: <FaUtensils className="inline mr-1" />,
  drink: <FaCocktail className="inline mr-1" />,
  beaches: <FaUmbrellaBeach className="inline mr-1" />,
  venues: <FaLandmark className="inline mr-1" />,
};

export default function RecommendationsPage() {
  const property = useProperty();
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!property?.recommendations) return <p className="text-center mt-6">Loading...</p>;

  const categories = Array.from(new Set(property.recommendations.map((rec) => rec.category)));
  const filtered =
    selectedCategory === "all"
      ? property.recommendations
      : property.recommendations.filter((rec) => rec.category === selectedCategory);

  return (
    <div className="px-4 py-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded-full text-sm ${
            selectedCategory === "all" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full text-sm capitalize flex items-center gap-1 ${
              selectedCategory === cat ? "bg-primary text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {categoryIcons[cat] || <FaIcons className="inline mr-1" />} {cat}
          </button>
        ))}
      </div>

      {/* Recommendations List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((rec) => (
          <div key={rec.id} className="border border-[var(--primary-color)] rounded-lg shadow p-4">
            <img
              src={rec.image_url}
              alt={rec.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">{rec.title}</h3>
            {rec.description && <p className="text-sm text-gray-600 mb-2">{rec.description}</p>}
            <div className="flex gap-2 mt-2">
              {rec.website_url && (
              <a
                href={rec.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
              >
                Website
              </a>
              )}
              {rec.directions_url && (
                <a
                href={rec.directions_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-sm bg-[var(--primary-color)] text-white hover:opacity-90 transition"
              >
                Directions
              </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
