import { NavLink } from "react-router-dom";

export default function BottomNavBar() {
  const navItems = [
    { label: "Home", iconClass: "fa-solid fa-house", to: `/` },
    { label: "Contact", iconClass: "fa-solid fa-phone", to: `/contact` },
  ];

  const mapsUrl =
    "https://www.google.com/maps/dir//Lia's+Aparment,+Ελεούσης,+Ποταμός+491+00/@39.6232189,19.8783041,870m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x135b5d90cfb8b84b:0x7f2ed670efd7e6b4!2m2!1d19.880879!2d39.6232148!3e0?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D";

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

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-white/70 hover:opacity-100 transition-all duration-200"
      >
        <i className="fa-solid fa-location-dot text-lg" />
      </a>
    </nav>
  );
}
