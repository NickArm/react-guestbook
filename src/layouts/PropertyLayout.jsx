import { useState, useMemo, useEffect } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { PropertyProvider, useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";
import { AnimatePresence, motion } from "framer-motion";
import PropertyHeader from "../components/PropertyHeader";
import BottomNavBar from "../components/BottomNavBar";
import TopIconMenu from "../components/TopIconMenu";

function LayoutContent({ menuOpen, setMenuOpen }) {
  const { slug } = useParams();
  const location = useLocation();
  const property = useProperty();

  const isHome = location.pathname === `/${slug}` || location.pathname === `/${slug}/`;

  useEffect(() => {
    if (property?.name) {
      document.title = property.name;
    }
  }, [property]);

  const filteredNavItems = useMemo(() => {
    if (!property?.enabled_pages) return [];
    return getEnabledMenuItems(property.enabled_pages).map((item) => ({
      to: `/${slug}/${item.path}`,
      label: item.label,
      icon: item.icon,
    }));
  }, [property, slug]);

  return (
    <div className="min-h-screen flex flex-col pb-14">
     {!isHome && (
        <>
          <PropertyHeader
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            navItems={filteredNavItems}
          />
          <TopIconMenu />
        </>
      )}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <BottomNavBar />
    </div>
  );
}

export default function PropertyLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PropertyProvider>
      <LayoutContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </PropertyProvider>
  );
}
