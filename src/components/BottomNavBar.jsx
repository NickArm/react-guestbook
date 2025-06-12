import { NavLink } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";

export default function BottomNavBar() {
  const property = useProperty();

  const navItems = [
    { label: "Home", iconClass: "fa-solid fa-house", to: `/` },
    { label: "Contact", iconClass: "fa-solid fa-phone", to: `/contact` },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary z-50 flex justify-around items-center h-14 shadow-md">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center text-white text-sm transition-all duration-200 ${
              isActive ? "text-white opacity-100" : "text-white/70 hover:opacity-100"
            }`
          }
        >
          <i className={`${item.iconClass} text-lg`} />
        </NavLink>
      ))}

      {property?.property_directions && (
        <a
          href={property.property_directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-white/70 hover:opacity-100 transition-all duration-200"
        >
          <i className="fa-solid fa-location-dot text-lg" />
        </a>
      )}
    </nav>
  );
}
