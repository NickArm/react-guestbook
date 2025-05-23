import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { FaWifi, FaKey } from "react-icons/fa6";


export default function WifiPage() {
  const { slug } = useParams();
  const property = useProperty();

    if (!property) {
      return <p className="text-center text-gray-500 mt-10">Loading Wi-Fi info...</p>;
    }

    return (
    <div className="wifipage px-4 py-6">
      {/* WiFi Info Section */}
      <div className="text-center">
        <FaWifi className="text-5xl text-gray-800 mx-auto" />
        <h2 className="font-bold text-lg mt-2">NETWORK</h2>
        <p className="text-gray-500">{property.wifi.network}</p>

        <FaKey className="text-4xl text-gray-800 mt-6 mx-auto" />
        <h2 className="font-bold text-lg mt-2">PASSWORD</h2>
        <p className="text-gray-500">{property.wifi.password}</p>

        <p className="mt-6 text-gray-600">Please enjoy our superfast free Wi-Fi</p>
      </div>

      {/* Image Section */}
      <div>
        <img src="/assets/images/laptop.jpg" alt="Laptop" className="w-full" />
      </div>
    </div>
  );
}
