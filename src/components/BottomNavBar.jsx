import { NavLink } from "react-router-dom";

export default function BottomNavBar() {
  const navItems = [
    { label: "Home", iconClass: "fa-solid fa-house", to: `/` },
    { label: "Contact", iconClass: "fa-solid fa-phone", to: `/contact` },
    { label: "Emergency", iconClass: "fa-solid fa-triangle-exclamation", to: `/emergency` },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#55818e] z-50 flex justify-around items-center h-14 shadow-md sm:hidden">
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
    </nav>
  );
}
