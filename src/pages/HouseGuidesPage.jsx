// src/pages/HouseGuidesPage.jsx
import { useNavigate } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { FaChevronRight } from "react-icons/fa";

export default function HouseGuidesPage() {
  const property = useProperty();
  const navigate = useNavigate();

  if (!property?.appliances?.length) {
    return <p className="text-center mt-10">No appliance guides available.</p>;
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">House Guides</h1>
      <div className="space-y-3">
        {property.appliances.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(`/appliances/${item.id}`)}
            className="w-full flex justify-between items-center px-4 py-2 border border-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white transition text-sm"
          >
            {item.title}
            <FaChevronRight className="text-[var(--primary-color)] group-hover:text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}
