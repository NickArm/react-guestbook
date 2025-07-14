import { getSubdomain } from "../utils/getSubdomain";
import { useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";
import PropertyHeaderSection from "../components/HomeHeader";
import "@fortawesome/fontawesome-free/css/all.min.css";

const requiredPages = ["welcome", "check-in-out", "location"];

export default function PropertyHome() {
  const slug = getSubdomain();
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  const enabledPages = [...new Set([...(property.enabled_pages || []), ...requiredPages])];
  const menuItems = getEnabledMenuItems(property?.enabled_pages, property);

  const primaryItems = menuItems.filter(item => item.group === "primary");
  const secondaryItems = menuItems.filter(item => item.group === "secondary");


  return (
<div className="home-page">
  <PropertyHeaderSection />
  
<div className="mb-8">
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-start">
    {primaryItems.map(({ icon, label, path }) => (
      <div key={path} className="flex flex-col items-center text-gray-700 text-xs">
        <a href={`/${path}`} className="bg-[#dce6e8] flex items-center justify-center w-16 h-16 rounded-lg">
          <i className={`fa-solid ${icon} text-primary text-2xl`}></i>
        </a>
        <p className="text-[13px] text-center mt-2">{label}</p>
      </div>
    ))}
  </div>
</div>

{/* Secondary Section */}
{secondaryItems.length > 0 && (
  <div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-start">
      <h2 className="text-primary text-center text-l font-light col-span-full">Useful Information</h2>
      {secondaryItems.map(({ icon, label, path }) => (
        <div key={path} className="flex flex-col items-center text-gray-700 text-xs">
          <a href={`/${path}`} className="bg-[#dce6e8] flex items-center justify-center w-16 h-16 rounded-lg">
            <i className={`fa-solid ${icon} text-primary text-2xl`}></i>
          </a>
          <p className="text-[13px] text-center mt-2">{label}</p>
        </div>
      ))}
    </div>
  </div>
)}

</div>

  );
}
