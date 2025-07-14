import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PropertyLayout from "./layouts/PropertyLayout.jsx";
import { registerSW } from 'virtual:pwa-register';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Register service worker
registerSW({ immediate: true });

// Loader fallback
const Loading = () => <div className="p-8 text-center text-gray-500">Loading...</div>;

// Lazy-loaded pages
const PropertyHome = lazy(() => import("./pages/PropertyHome.jsx"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.jsx"));
const CheckInPage = lazy(() => import("./pages/CheckInPage.jsx"));
const AmenitiesPage = lazy(() => import("./pages/AmenitiesPage.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const WifiPage = lazy(() => import("./pages/WifiPage.jsx"));
const LocationPage = lazy(() => import("./pages/LocationPage.jsx"));
const RulesPage = lazy(() => import("./pages/RulesPage.jsx"));
const FaqPage = lazy(() => import("./pages/FaqPage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const BeforeYouGoPage = lazy(() => import("./pages/BeforeYouGoPage.jsx"));
const TransportationPage = lazy(() => import("./pages/TransportationPage.jsx"));
const EmergencyPage = lazy(() => import("./pages/EmergencyPage.jsx"));
const ReviewPage = lazy(() => import("./pages/ReviewPage.jsx"));
const RecommendationsPage = lazy(() => import("./pages/RecommendationsPage.jsx"));
const HouseGuidesPage = lazy(() => import("./pages/HouseGuidesPage.jsx"));
const AppliancePage = lazy(() => import("./pages/AppliancePage.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PropertyLayout />}>
            <Route index element={<PropertyHome />} />
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="checkin" element={<CheckInPage />} />
            <Route path="amenities" element={<AmenitiesPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="wifi" element={<WifiPage />} />
            <Route path="location" element={<LocationPage />} />
            <Route path="rules" element={<RulesPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="before-you-go" element={<BeforeYouGoPage />} />
            <Route path="transportation" element={<TransportationPage />} />
            <Route path="emergency" element={<EmergencyPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="recommendations" element={<RecommendationsPage />} />
            <Route path="house-guides" element={<HouseGuidesPage />} />
            <Route path="appliances/:id" element={<AppliancePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// Optional native service worker registration fallback
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
