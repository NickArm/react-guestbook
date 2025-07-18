import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { getSubdomain } from "../utils/getSubdomain";
import { useProperty } from "../context/PropertyContext";
import { allMenuItems } from "../config/menuConfig";
import useAddToHomeScreenPrompt from "../hooks/useAddToHomeScreenPrompt";
import { Download } from "lucide-react";


export default function PropertyHeader({ menuOpen, setMenuOpen, navItems }) {
  const slug = getSubdomain();
  const location = useLocation();
  const property = useProperty();
  const [deferredPrompt, promptToInstall] = useAddToHomeScreenPrompt();
  const currentPath = location.pathname.replace(`/${slug}`, "") || "/";
  const currentLabel = currentPath === "/"
    ? `Welcome to ${property?.name || ""}`
    : allMenuItems.find((item) => `/${item.path}` === currentPath)?.label || "";
  return (
    <>
      <header className="relative bg-primary text-white flex justify-between items-center shadow px-4 py-2 z-50">
        <button className="bg-primary mobile-menu-button" onClick={() => setMenuOpen((prev) => !prev)}>
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-light text-center flex-1">{currentLabel}</h1>
        
        <div className="w-6 flex justify-end">
          {deferredPrompt && (
          <button
            onClick={promptToInstall}
            className="text-white hover:text-gray-200"
            title="Add to Home Screen"
          >
            <Download size={20} />
          </button>
          )}
        </div>
      </header>

      {menuOpen && (
        <div className="absolute top-[48px] left-0 right-0 bg-white border-b shadow-md z-50 sm:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                  isActive ? "text-primary font-medium" : "text-gray-700"
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
