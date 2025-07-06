import { useState, useMemo, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { PropertyProvider, useProperty } from "../context/PropertyContext";
import { getEnabledMenuItems } from "../config/menuConfig";
import { AnimatePresence, motion } from "framer-motion";
import PropertyHeader from "../components/PropertyHeader";
import BottomNavBar from "../components/BottomNavBar";
import TopIconMenu from "../components/TopIconMenu";
import { usePwaPrompt } from "../utils/usePwaPrompt"; 

function LayoutContent({ menuOpen, setMenuOpen }) {
  const { slug } = useParams();
  const location = useLocation();
  const property = useProperty();
  const { isPromptVisible, promptInstall } = usePwaPrompt();

  const isHome = location.pathname === `/${slug}` || location.pathname === `/${slug}/`;

  useEffect(() => {
  if (property?.name) {
    document.title = property.name;
  }

  if (property?.settings?.primary_color) {
    const primary = property.settings.primary_color;

    // Apply to CSS variable
    document.documentElement.style.setProperty('--primary-color', primary);

    // Update meta theme-color for mobile browser UI
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", primary);
    }
  }
}, [property]);


  const filteredNavItems = useMemo(() => {
    if (!property?.enabled_pages) return [];
    return getEnabledMenuItems(property.enabled_pages, property).map((item) => ({
      to: `/${item.path}`,
      label: item.label,
      icon: item.icon,
    }));
  }, [property, slug]);

  return (
    <div className="min-h-screen flex flex-col pb-20">
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
          initial={{ opacity: 0 }}          
          animate={{ opacity: 1 }}          
          transition={{ 
            duration: 0.4,                   
            ease: "easeOut"                  
          }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <BottomNavBar />

      {/* ✅ PWA Prompt */}
      {isPromptVisible && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-lg px-4 py-3 rounded-lg z-50 max-w-[260px]">
          <p className="text-sm text-gray-800">
            Do you want to install the app to your device?
          </p>
          <button
            onClick={promptInstall}
            className="mt-2 px-3 py-1 bg-primary text-white text-sm rounded w-full"
          >
            Install
          </button>
        </div>
      )}
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
