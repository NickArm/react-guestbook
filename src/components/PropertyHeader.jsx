import { Menu } from "lucide-react";
import { NavLink, useLocation, useParams } from "react-router-dom";

export default function PropertyHeader({ menuOpen, setMenuOpen, navItems }) {
  const { slug } = useParams();
  const location = useLocation();

  const currentLabel = navItems.find((item) => location.pathname === item.to)?.label || slug;

  return (
    <>
      <header className="bg-[#55818e] text-white flex justify-between items-center shadow px-4 py-2">
        <button className="sm:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-semibold">{currentLabel}</h1>
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
                  isActive ? "text-sky-600 font-medium" : "text-gray-600"
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
