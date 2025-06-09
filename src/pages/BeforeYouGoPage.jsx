import { useProperty } from "../context/PropertyContext";
import { FaLock } from "react-icons/fa";

export default function BeforeYouGoPage() {
  const property = useProperty();

  if (!property?.before_you_go) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  return (
    <div className="before-page mt-6 px-4 text-gray-800">
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: property.before_you_go }}
      />
    </div>
  );
}
