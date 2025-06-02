import { useProperty } from "../context/PropertyContext";

export default function TransportationPage() {
  const property = useProperty();

  if (!property?.transportation || property.transportation.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No transportation information available.
      </p>
    );
  }

  return (
    <div className="transportation-page px-6 text-gray-800">
      {/* Dynamic Transportation Modes */}
      {property.transportation.map((item, idx) => (
        <div key={idx} className="mt-6 text-center">
          <h2 className="font-bold text-lg">{item.title}</h2>
          <p className="text-sm mt-1">{item.description}</p>
        </div>
      ))}

      {/* Static Private Transfer Section */}
      <div className="mt-6 text-center">
        <h2 className="font-bold text-lg mt-6">PRIVATE TRANSFER</h2>
        <p className="text-sm mt-1">
          Do you need transportation to/from the airport or would you like a private tour of the island of Corfu?
          <br />
          <a
            target="_blank"
            href="https://vantasticorfu.gr/"
            className="block w-full bg-[#55818e] text-white py-1 rounded-lg text-l shadow-md hover:bg-[#436b74] transition mt-2"
          >
            Contact our transfer partner
          </a>
        </p>
      </div>

      {/* Airport Info */}
      <div className="mt-6 bg-gray-100 rounded-lg p-4 text-gray-800">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-plane text-3xl"></i>
          <h3 className="font-bold">Ioannis Kapodistrias International Airport</h3>
        </div>
        <p className="text-sm mt-2">10 min by car or taxi</p>
      </div>
    </div>
  );
}
