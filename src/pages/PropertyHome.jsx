import { useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext"; 
import { getEnabledMenuItems } from "../config/menuConfig";
import "@fortawesome/fontawesome-free/css/all.min.css";

const requiredPages = ["welcome", "check-in-out", "location"];

export default function PropertyHome() {
  const { slug } = useParams();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  const menuItems = getEnabledMenuItems([
    ...new Set([...(property.enabled_pages || []), ...requiredPages]),
  ]);

  const enabled = [...new Set([...(property.enabled_pages || []), ...requiredPages])];

  return (
    <div className="px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 items-center mb-6">
        <div className="flex justify-center">
          <img src="/assets/images/lias_logo.png" alt="Logo" className="mainlogo h-16" />
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-[#55818e] text-xl font-light">WELCOME</h2>
          <p className="text-gray-500 text-sm">
            Lia's Apartment<br />
            Potamos, Corfu, 49100
          </p>
        </div>
      </div>

      {/* Menu */}
      <div id="homegrid" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {menuItems
          .filter(({ path }) => enabled.includes(path))
          .map(({ icon, label, path }) => (
            <div
              key={path}
              className="flex flex-col items-center text-gray-700 text-xs"
            >
              <a
                href={`/${slug}/${path}`}
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
