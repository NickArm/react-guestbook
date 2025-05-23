import { useProperty } from "../context/PropertyContext";

export default function WelcomePage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading welcome info...</p>;
  }

  const owner = property.owner?.[0];

  return (
    <div className="welcome-page px-4 py-6 text-gray-700 text-sm">
      {/* Hero Image */}
      <div className="mt-4">
        <img src="/assets/images/living.jpeg" alt="Living room" className="w-full rounded-lg" />
      </div>

      {/* Welcome Section */}
      <div className="mt-4 max-w-md mx-auto">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">
            { property.welcome_title }
          </p>
          {owner?.photo && (
            <img
              src={owner.photo}
              alt={owner.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
          )}
        </div>
         <p className="mt-2" dangerouslySetInnerHTML={{ __html: property.welcome_message }}></p>
      </div>
    </div>
  );
}
