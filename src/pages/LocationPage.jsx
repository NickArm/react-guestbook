import { useProperty } from "../context/PropertyContext";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationPage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading location info...</p>;
  }

  return (
    <div className="location-page">
      {/* Address Section */}
      <div className="text-center">
        <FaLocationDot className="text-3xl text-gray-800 mx-auto" />
        <h2 className="font-bold text-lg mt-2">{property.location_area}</h2>
        <p className="text-gray-500">{property.location_country}</p>
      </div>

      {/* Google Map Embed */}
      <div className="mt-4">
        <iframe
          src={property.google_map_url}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      {/* Description */}
      <div className="mt-6 bg-gray-100 rounded-lg p-4">
        <h3 className="text-xl font-semibold font-serif italic text-center">
          getting around
        </h3>
        <p className="mt-2 text-sm">{property.location_description}</p>
      </div>
    </div>
  );
}
