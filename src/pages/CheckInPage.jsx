import { FaCircleCheck, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useProperty } from "../context/PropertyContext";
import { useNavigate } from "react-router-dom";

export default function CheckInPage() {
  const property = useProperty();
   const navigate = useNavigate();

  return (
    <div className="check-in-page">

      {/* Directions Button */}
      {property?.property_directions && (
        <div className="mt-6 flex justify-center">
          <a
            href={property.property_directions}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-4 py-2 rounded font-medium text-sm hover:bg-primary hover:text-white transition"
          >
            Get Directions to the Property
          </a>
        </div>
      )}

      {/* Check-in Section */}
      <div className="mt-6 bg-gray-100 p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-in</p>
          <p className="font-bold text-gray-800">{property.checkin}</p>
          <p className="text-sm text-gray-700 mt-2">
            {property.checkin_instructions}
          </p>
        </div>
        <FaCircleCheck className="w-12 h-12 text-primary" />
      </div>

      {/* Check-out Section */}
      <div className="mt-4 bg-gray-100 p-4 flex items-center gap-4 flex-row-reverse">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-out</p>
          <p className="font-bold text-gray-800">{property.checkout}</p>
          <p className="text-sm text-gray-700 mt-2">
            {property.checkout_instructions}
          </p>
        </div>
        <FaPersonWalkingArrowRight className="w-12 h-12 text-primary" />
      </div>

      {/* Check-in Video */}
      {property.checkin_video && (
        <div className="mt-4 bg-gray-100 p-4 flex items-center gap-4 flex-row-reverse">
          <div className="flex-1">
            <div>
              <h3 className="italic text-gray-600">Check-in Instructions</h3>
              <div className="w-full h-64 rounded">
                <iframe
                  className="w-full h-full rounded"
                  src={property.checkin_video.replace("watch?v=", "embed/")}
                  title="Check-in Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Check-out Video */}
      {property.checkout_video && (
        <div className="mt-4 bg-gray-100 p-4 flex items-center gap-4 flex-row-reverse">
          <div className="flex-1">
            <div className="mt-6">
              <h3 className="italic text-gray-600">Check-out Instructions</h3>
              <div className="w-full h-64 rounded">
                <iframe
                  className="w-full h-full rounded"
                  src={property.checkout_video.replace("watch?v=", "embed/")}
                  title="Check-out Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
