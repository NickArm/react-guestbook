import { useProperty } from "../context/PropertyContext";
import { MapPin } from "lucide-react";

export default function PropertyHeaderSection() {
  const property = useProperty();

  if (!property) return null;

  const hasLogo = !!property.logo_url;
  const hasGallery = property.gallery && property.gallery.length > 0;
  const fallbackInitial = property.name?.charAt(0)?.toUpperCase() || 'W';

  // Case 1: Logo exists
  if (hasLogo) {
    return (
      <div className="home-page-header grid grid-cols-3 gap-4 items-center mb-6 mt-6">
        <div className="flex justify-center">
          <img
            src={property.logo_url}
            alt={`${property.name} Logo`}
            className="h-20 object-contain max-w-full"
          />
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-primary text-xl font-light">WELCOME</h2>
          <p className="text-gray-500 text-sm">
            {property.name}<br />
            {property.location_area}, {property.location_country}
          </p>
        </div>
      </div>
    );
  }

  // Case 2: Gallery exists but no logo
  if (hasGallery) {
    return (
      <div className="relative w-full mb-6 overflow-hidden shadow">
        <img
          src={property.gallery[0]}
          alt={`${property.name} Preview`}
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white px-4 py-2">
          <h2 className="text-lg font-semibold">{property.name}</h2>
          <p className="text-sm">
            {property.location_area}, {property.location_country}
          </p>
        </div>
      </div>
    );
  }

  // Case 3: Fallback - No logo, no gallery
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl p-4 mb-6 mb-6 shadow-sm">
      <div className="absolute top-3 right-3 flex gap-1 opacity-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        ))}
      </div>

      <div className="relative pr-12">
        <div className="absolute top-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
          {fallbackInitial}
        </div>

        <div className="pr-2">
          <h2 className="text-gray-800 text-lg font-semibold mb-1.5 leading-tight">
            {property.name}
          </h2>

          <div className="flex items-center gap-1.5 text-gray-600">
            <MapPin size={14} />
            <span className="text-sm">
              {property.location_area}, {property.location_country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
