import { useParams } from "react-router-dom";
import {
  Home,
  CheckCircle,
  Wifi,
  Sofa,
  MapPin,
  Bus,
  Info,
  Map,
  Utensils,
  Book,
  HelpCircle,
  AlertTriangle,
  Briefcase,
  Star,
  Phone,
} from "lucide-react";

const menuItems = [
  { label: "Welcome", icon: <Home />, path: "welcome" },
  { label: "Check-in/out", icon: <CheckCircle />, path: "check-in-out" },
  { label: "WiFi", icon: <Wifi />, path: "wifi" },
  { label: "Amenities", icon: <Sofa />, path: "amenities" },
  { label: "Location", icon: <MapPin />, path: "location" },
  { label: "Transport", icon: <Bus />, path: "transportation" },
  { label: "Infos", icon: <Info />, path: "informations" },
  { label: "Things to do", icon: <Map />, path: "things-to-do" },
  { label: "Places to eat", icon: <Utensils />, path: "places-to-eat" },
  { label: "Rules", icon: <Book />, path: "rules" },
  { label: "FAQ", icon: <HelpCircle />, path: "faq" },
  { label: "Emergency", icon: <AlertTriangle />, path: "emergency" },
  { label: "Before you go", icon: <Briefcase />, path: "before-you-go" },
  { label: "Review", icon: <Star />, path: "review" },
  { label: "Contact", icon: <Phone />, path: "contact" },
];

export default function PropertyHome() {
  const { slug } = useParams();

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="grid grid-cols-3 gap-4 items-center mb-6">
        <div className="flex justify-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-16" />
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-[#55818e] text-xl font-light">WELCOME</h2>
          <p className="text-gray-500 text-sm">
            Lia's Apartment<br />
            Potamos, Corfu, 49100
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-6">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={`/${slug}/${item.path}`}
            className="flex flex-col items-center text-gray-700 text-xs"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#dce6e8] transition">
              <div className="text-[#55818e] text-3xl">{item.icon}</div>
            </div>
            <p className="mt-2 text-[13px] text-center">{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}