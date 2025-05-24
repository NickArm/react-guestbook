import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function FaqPage() {
  const { slug } = useParams();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading FAQ...</p>;
  }

  return (
    <div className="faq-page mt-6 text-gray-800 px-4">
      {/* Intro text */}
      <div className="text-center text-xs italic px-2 mb-6">
        <p>
          In case you had concerns, here are some frequently asked questions and
          answers to clear things up.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {property.faq?.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question font-bold">{item.question}</h3>
            <p className="faq-answer text-sm mt-1">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
