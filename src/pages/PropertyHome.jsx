import { getSubdomain } from "../utils/getSubdomain";
import { useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";
import "@fortawesome/fontawesome-free/css/all.min.css";

const requiredPages = ["welcome", "check-in-out", "location"];

export default function PropertyHome() {
  const slug = getSubdomain();
  const property = useProperty();
  console.log("PropertyHome - property:", property);
  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  const enabledPages = [...new Set([...(property.enabled_pages || []), ...requiredPages])];
  const menuItems = getEnabledMenuItems(enabledPages);

  return (
    <div className="home-page px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="home-page-header grid grid-cols-3 gap-4 items-center mb-6">
        <div className="flex justify-center">
          <img src="/assets/images/lias_logo.png" alt="Logo" className="h-26" />
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-[#55818e] text-xl font-light">WELCOME</h2>
          <p className="text-gray-500 text-sm">
            {property.name}<br />
            {property.location_area}, {property.location_country}
          </p>
        </div>
      </div>

      {/* Menu */}
      <div
        id="homegrid"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6"
      >
        {menuItems.map(({ icon, label, path }) => (
          <div key={path} className="flex flex-col items-center text-gray-700 text-xs">
            <a
              href={`/${path}`}
              className="bg-[#dce6e8] flex items-center justify-center w-16 h-16 rounded-lg"
            >
              <i className={`fa-solid ${icon} text-[#55818e] text-2xl`}></i>
            </a>
            <p className="text-[13px] text-center mt-2">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
