import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function FaqPage() {
  const { slug } = useParams();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading FAQ...</p>;
  }

  return (
    <div>
      {/* Intro text */}
      <div className="mt-6 text-center px-6 text-gray-800 text-xs italic">
        <p>
          In case you had concerns, here are some frequently asked questions and
          answers to clear things up.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-6 space-y-4 px-4 text-gray-800">
          {property.faq?.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold">{item.question}</h3>
              <p className="text-sm mt-1">{item.answer}</p>
            </div>
          ))}  
      </div>
    </div>
  );
}
