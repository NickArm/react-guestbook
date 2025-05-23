import { useProperty } from "../context/PropertyContext";

export default function AmenitiesPage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading amenities...</p>;
  }

  return (
    <div className="px-6 text-gray-800 mt-6">
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: property.amenities_description }}
      />

      <div className="mt-6">
        <img src="/assets/images/living.jpeg" className="w-full" alt="Living room" />
      </div>
    </div>
  );
}
