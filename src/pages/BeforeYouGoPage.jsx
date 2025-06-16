import { useProperty } from "../context/PropertyContext";
import { FaCheck } from "react-icons/fa";

export default function BeforeYouGoPage() {
  const property = useProperty();

  if (!property?.before_you_go || property.before_you_go.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="before-page mt-6 px-4 text-gray-800 space-y-3">
      {property.before_you_go.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 rounded-lg p-3 flex justify-between items-center"
        >
          <p className="text-sm">{item.content}</p>
          <FaCheck className="text-xl text-gray-700" />
        </div>
      ))}
    </div>
  );
}
