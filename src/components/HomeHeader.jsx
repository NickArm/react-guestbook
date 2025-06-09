import { useProperty } from "../context/PropertyContext";

export default function PropertyHeaderSection() {
  const property = useProperty();

  if (!property) return null;

  const hasLogo = !!property.logo_url;

  return hasLogo ? (
    <div className="home-page-header grid grid-cols-3 gap-4 items-center mb-6">
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
  ) : (
    <div className="bg-primary text-white rounded-lg px-4 py-3 mb-6 text-center">
      <h2 className="text-lg font-semibold">Welcome to {property.name}</h2>
      <p className="text-sm mt-1 text-white/90">
        {property.location_area}, {property.location_country}
      </p>
    </div>
  );
}
