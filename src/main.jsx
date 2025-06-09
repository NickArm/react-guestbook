import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PropertyLayout from "./layouts/PropertyLayout.jsx";
import PropertyHome from "./pages/PropertyHome.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import WifiPage from "./pages/WifiPage.jsx";
import AmenitiesPage from "./pages/AmenitiesPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx"
import RulesPage from "./pages/RulesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BeforeYouGoPage from "./pages/BeforeYouGoPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";;
import EmergencyPage from "./pages/EmergencyPage.jsx";
import TransportationPage from "./pages/TransportationPage.jsx";
import CheckInPage from "./pages/CheckInPage.jsx";
import RecommendationsPage from "./pages/RecommendationsPage.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyLayout />}>
          <Route index element={<PropertyHome />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="check-in-out" element={<CheckInPage />} />
          <Route path="amenities" element={<AmenitiesPage />} />
          <Route path="wifi" element={<WifiPage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="before-you-go" element={<BeforeYouGoPage />} />
          <Route path="transportation" element={<TransportationPage />} />
          <Route path="emergency" element={<EmergencyPage />} />
          <Route path="recommendations" element={<RecommendationsPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
