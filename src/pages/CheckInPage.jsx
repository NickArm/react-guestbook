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
      <div className="rules bg-[#f3f4f6] p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-in</p>
          <p className="time">{property.checkin}</p>
          <p className="text-sm">
            {property.checkin_instructions}
          </p>
        </div>
        <FaCircleCheck className="w-36 h-36 text-[#55818e]" />
      </div>

      {/* Check-out Section */}
      <div className="rules bg-[#f3f4f6] rounded-lg p-14 flex items-center gap-4 flex-row-reverse">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-out</p>
          <p className="time">{property.checkout}</p>
          <p className="text-sm">
           {property.checkout_instructions}
          </p>
        </div>
        <FaPersonWalkingArrowRight className="w-12 h-12 text-[#55818e]" />
      </div>
    </div>
  );
}
