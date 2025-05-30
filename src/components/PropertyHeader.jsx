import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { getSubdomain } from "../utils/getSubdomain";
import { useProperty } from "../context/PropertyContext";
import { allMenuItems } from "../config/menuConfig";

export default function PropertyHeader({ menuOpen, setMenuOpen, navItems }) {
  const slug = getSubdomain();
  const location = useLocation();
  const property = useProperty();

  const currentPath = location.pathname.replace(`/${slug}`, "") || "/";
  const currentLabel = currentPath === "/"
    ? `Welcome to ${property?.name || ""}`
    : allMenuItems.find((item) => `/${item.path}` === currentPath)?.label || "";

  return (
    <>
      <header className="bg-[#55818e] text-white flex justify-between items-center shadow px-4 py-2">
        <button className="mobile-menu-button" onClick={() => setMenuOpen((prev) => !prev)}>
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-light text-center flex-1">{currentLabel}</h1>
        <div className="w-6" /> {/* κενό για ισορροπία */}
      </header>

      {menuOpen && (
        <div className="bg-white border-b shadow-sm sm:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                  isActive ? "text-sky-600 font-light" : "text-gray-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
