import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PropertyLayout from "./layouts/PropertyLayout.jsx";
import PropertyHome from "./pages/PropertyHome.jsx";
import WifiPage from "./pages/WifiPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EmergencyPage from "./pages/EmergencyPage.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/:slug" element={<PropertyLayout />}>
          <Route index element={<PropertyHome />} />
          <Route path="wifi" element={<WifiPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="emergency" element={<EmergencyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
