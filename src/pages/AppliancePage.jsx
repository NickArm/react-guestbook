import { useParams, useNavigate } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";

export default function AppliancePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = useProperty();
  const appliance = property?.appliances?.find((a) => a.id === id);

  if (!appliance) return <p className="mt-10 text-center">Loading appliance...</p>;

  const otherAppliances = property?.appliances?.filter((a) => a.id !== id);

  return (
    <div className="px-4 py-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/amenities")}
        className="flex items-center text-sm text-primary mb-4 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Amenities
      </button>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
        <h1 className="text-xl font-bold mb-2 text-gray-800">{appliance.title}</h1>
        <p className="text-sm text-gray-700 mb-4">{appliance.description}</p>

        {/* Images */}
        {appliance.images?.length > 0 && (
          <div className="grid grid-cols-1 gap-4 mb-6">
            {appliance.images.map((img, i) => (
              <img
                key={i}
                src={img.replace("/upload/", "/upload/w_900/")}
                alt={`Appliance ${i}`}
                className="w-full rounded-lg shadow"
              />
            ))}
          </div>
        )}

        {/* Video */}
        {appliance.video_url && (
          <div className="aspect-video w-full max-w-2xl mx-auto">
            <iframe
              src={appliance.video_url.replace("watch?v=", "embed/")}
              title="Appliance Video"
              allowFullScreen
              className="w-full h-full rounded-lg border"
            ></iframe>
          </div>
        )}
      </div>

        {/* More Appliances Section */}
      {otherAppliances?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">More Appliances</h2>
          <div className="space-y-3">
            {otherAppliances.map((item) => (
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
      )}
    </div>
  );
}
