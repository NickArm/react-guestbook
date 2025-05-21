import { useState } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import BottomNavBar from "../components/BottomNavBar";

export default function PropertyLayout() {
  const { slug } = useParams();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === `/${slug}` || location.pathname === `/${slug}/`;

  const navItems = [
    { label: "WiFi", to: `/${slug}/wifi` },
    { label: "Contact", to: `/${slug}/contact` },
    { label: "Emergency", to: `/${slug}/emergency` },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-14">
      {/* Header */}
      {!isHome && (
      <header className="bg-sky-700 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-lg font-semibold">Welcome to {slug}</h1>
        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>
      </header>
      )}

      {/* Mobile Menu Dropdown */}
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

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <BottomNavBar />

      {/* Footer */}
      {/* <footer className="bg-gray-100 text-center text-sm p-4 text-gray-600">
        &copy; {new Date().getFullYear()} MyGuide App – {slug}
      </footer> */}


    </div>
  );
}
