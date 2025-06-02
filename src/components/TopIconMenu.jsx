import { NavLink, useLocation } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";

export default function TopIconMenu() {
  const property = useProperty();
  const location = useLocation();

  // Απόκρυψη αν είμαστε στο root (π.χ. / σε κάθε subdomain)
  if (location.pathname === "/" || !property?.enabled_pages) return null;

  const menuItems = getEnabledMenuItems(property.enabled_pages);

  return (
    <div className="mt-2 mb-2  flex flex-wrap justify-center gap-2">
      {menuItems.map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={`/${path}`}
          className={({ isActive }) =>
            `nav-item flex items-center justify-center rounded-lg text-primary bg-[#dce6e8] w-8 h-8 rounded-lg${
              isActive ? "bg-[#dce6e8]" : ""
            }`
          }
        >
          <i className={`fa-solid ${icon}`} title={label}></i>
        </NavLink>
      ))}
    </div>
  );
}
