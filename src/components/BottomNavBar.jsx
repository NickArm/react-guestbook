import { NavLink, useParams } from "react-router-dom";
import { Home, Phone, AlertCircle } from "lucide-react";

export default function BottomNavBar() {
  const { slug } = useParams();

  const navItems = [
    { label: "Home", icon: <Home size={20} />, to: `/${slug}` },
    { label: "Contact", icon: <Phone size={20} />, to: `/${slug}/contact` },
    { label: "Emergency", icon: <AlertCircle size={20} />, to: `/${slug}/emergency` },
  ];

  return (
    <nav className="bottom-0 bg-[#55818e] text-white shadow z-50 flex justify-around py-2 sm:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-sky-600" : "text-gray-500"
            }`
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}


