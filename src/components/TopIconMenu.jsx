import { NavLink, useParams } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";

export default function TopIconMenu() {
  const property = useProperty();

  if (!property?.enabled_pages) return null;

  const menuItems = getEnabledMenuItems(property.enabled_pages);

  return (
    <div className="top-bar-menu flex flex-wrap justify-center gap-3">
      {menuItems.map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={`/${path}`}
          className={({ isActive }) =>
            `nav-item flex items-center justify-center rounded-lg text-[#55818e] ${
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
