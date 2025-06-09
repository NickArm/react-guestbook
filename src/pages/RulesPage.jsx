import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function RulesPage() {
  const { slug } = useParams();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading rules...</p>;
  }

  return (
    <div className="mt-6 space-y-4 px-4 text-gray-800">
      {property.rules?.map((rule, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg p-2 flex items-center gap-4"
        >
          <div className="min-w-[48px] min-h-[48px] bg-gray-800 text-white flex items-center justify-center rounded-full text-lg font-bold">
            {index + 1}
          </div>

          <div>
            <h2 className="font-bold">{rule.title}</h2>
            <p className="text-sm">{rule.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
