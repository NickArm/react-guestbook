import { useProperty } from "../context/PropertyContext";

export default function AmenitiesPage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading amenities...</p>;
  }

  return (
    <div className="mt-6 text-left px-6 text-gray-800">
     <div className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: property.amenities_description }}
      />
    
    
      <div className="mt-6">
          <img src="/assets/images/default-image.jpg" className="w-full" alt="Living room" />
      </div>
    </div>
)};
