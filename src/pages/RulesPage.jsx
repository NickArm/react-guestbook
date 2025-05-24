import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function RulesPage() {
  const { slug } = useParams();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading rules...</p>;
  }

  return (
    <div className="rules-page mt-6 space-y-4 px-4 text-gray-800">
      {property.rules?.map((rule, index) => (
        <div
          key={index}
          className="rules-item p-2 flex items-center gap-4"
        >
          <div className="rule-counter flex items-center justify-center">
            {index + 1}
          </div>
          <div>
            <h3 className="rule-title">{rule.title}</h3>
            <p className="rule-description">{rule.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
