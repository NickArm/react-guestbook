import { NavLink, useParams } from "react-router-dom";

export default function BottomNavBar() {
  const { slug } = useParams();

  const navItems = [
    { label: "Home", iconClass: "fa-solid fa-house", to: `/${slug}` },
    { label: "Contact", iconClass: "fa-solid fa-phone", to: `/${slug}/contact` },
    { label: "Emergency", iconClass: "fa-solid fa-triangle-exclamation", to: `/${slug}/emergency` },
  ];

  return (
    <nav className=" bottom-0 left-0 right-0 bg-[#55818e] z-50 flex justify-around py-2 sm:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="flex flex-col items-center text-xs no-underline"
        >
          <i className={`${item.iconClass}`}></i>
          {/* <span className="mt-1">{item.label}</span> */}
        </NavLink>
      ))}
    </nav>
  );
}
