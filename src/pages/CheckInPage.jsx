import { useParams } from "react-router-dom";
import { FaCircleCheck, FaPersonWalkingArrowRight } from "react-icons/fa6";

export default function CheckInPage() {
  const { slug } = useParams();

 return (
    <div className="check-in-page">
      {/* Check-in Section */}
      <div className="rules bg-[#f3f4f6] p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-in</p>
          <p className="time">3:00 PM</p>
          <p className="text-sm">
            You will receive a code for the front door on the day of your arrival.
            Please contact me when you arrive so I can answer any questions about the property.
          </p>
        </div>
        <FaCircleCheck className="w-36 h-36 text-[#55818e]" />
      </div>

      {/* Check-out Section */}
      <div className="rules bg-[#f3f4f6] rounded-lg p-14 flex items-center gap-4 flex-row-reverse">
        <div className="flex-1">
          <p className="italic text-gray-600">Check-out</p>
          <p className="time">11:00 AM</p>
          <p className="text-sm">
            If you'd like to request a late check-out, please contact me. 
            However, please be informed that we may not be able to grant your request if we have a same-day check-in.
          </p>
        </div>
        <FaPersonWalkingArrowRight className="w-12 h-12 text-[#55818e]" />
      </div>
    </div>
  );
}
