import { useProperty } from "../context/PropertyContext";
import { Star, ExternalLink, Heart } from "lucide-react";

export default function ReviewPage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading review info...</p>;
  }

  if (!property.review) {
    return (
      <p className="text-center text-gray-500 py-6">
        No review information available.
      </p>
    );
  }

  const handleReviewClick = () => {
    window.open(property.review.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="review-page px-6 py-6 text-gray-800">
      {/* Intro text */}
      <div className="text-center px-2 text-gray-800 text-xs italic mb-8">
        <p>
          Your feedback helps us improve and helps future guests discover our property.
        </p>
      </div>

      {/* Main review card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        {/* Header with stars */}
        <div className="text-center mb-6">
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={24} 
                className="text-yellow-400 fill-current" 
              />
            ))}
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How was your stay?
          </h2>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-center text-gray-600 leading-relaxed">
            {property.review.description}
          </p>
        </div>

        {/* Review button */}
        <div className="text-center">
          <button
            onClick={handleReviewClick}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#436b74] transition-colors shadow-sm"
          >
            <Star size={18} />
            <span>Leave a Review</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      {/* Thank you message */}
      <div className="bg-gray-50 border-l-4 border-primary rounded-r-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <Heart size={20} className="text-primary" />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">Thank You!</h3>
            <p className="text-sm text-gray-600 mt-1">
              We hope you had a wonderful experience with us.
            </p>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          Your review will be visible to future guests and helps us maintain our quality standards.
          <br />
          Thank you for choosing {property.name}!
        </p>
      </div>
    </div>
  );
}