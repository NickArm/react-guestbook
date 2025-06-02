import { useProperty } from "../context/PropertyContext";
import { FaCheck, FaLock } from "react-icons/fa";

export default function BeforeYouGoPage() {
  const property = useProperty();

  if (!property?.before_you_go) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="before-page mt-6 px-4 text-gray-800">
        {property.before_you_go_note && (
        <p
            className="text-center text-sm"
            dangerouslySetInnerHTML={{ __html: property.before_you_go_note }}
        />
        )}

      <div className="mt-6 space-y-4">
        {property.before_you_go.map((item, index) => (
          <div key={index} className="before-item flex justify-between items-center">
            <div className={`text-sm ${item.bold ? "font-bold uppercase" : ""}`}>{item.title}</div>
            <FaCheck className="text-gray-500" />
          </div>
        ))}
      </div>

        <button className="w-full bg-primary-color text-[#fff] font-semibold text-sm flex items-center justify-between">
          NEED LUGGAGE STORAGE?
          <FaLock />
        </button>
    </div>
  );
}
