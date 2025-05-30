import { useParams } from "react-router-dom";
import { FaCircleCheck, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useProperty } from "../context/PropertyContext";
import { getSubdomain } from "../utils/getSubdomain";

export default function CheckInPage() {
  const { slug } = getSubdomain();
  const property = useProperty();

 return (
    <div className="check-in-page">
      {/* Check-in Section */}
      <div className="mt-6 bg-gray-100 rounded-lg p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-in</p>
          <p className="font-bold text-gray-800">{property.checkin}</p>
          <p className="text-sm text-gray-700 mt-2">
            {property.checkin_instructions}
          </p>
        </div>
        <FaCircleCheck className="w-12 h-12 text-[#55818e]" />
      </div>

      {/* Check-out Section */}
      <div className="mt-4 bg-gray-100 rounded-lg p-4 flex items-center gap-4 flex-row-reverse">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-out</p>
          <p className="font-bold text-gray-800">{property.checkout}</p>
          <p className="text-sm text-gray-700 mt-2">
           {property.checkout_instructions}
          </p>
        </div>
        <FaPersonWalkingArrowRight className="w-12 h-12 text-[#55818e]" />
      </div>
    </div>
  );
}
