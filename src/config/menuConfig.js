import { getSubdomain } from "../utils/getSubdomain";

export const allMenuItems = [
  { label: "Welcome", path: "welcome", icon: "fa-house" },
  { label: "Arrival Information", path: "check-in-out", icon: "fa-house-circle-check" },
  { label: "WiFi", path: "wifi", icon: "fa-wifi" },
  { label: "Amenities & Appliances", path: "amenities", icon: "fa-couch" },
  { label: "Location", path: "location", icon: "fa-location-dot" },
  { label: "Transport", path: "transportation", icon: "fa-bus" },
  { label: "Infos", path: "informations", icon: "fa-circle-info" },
  { label: "Things to do", path: "blog", icon: "fa-map" },
  { label: "Recommendations", path: "recommendations", icon: "fa-star"},
  { label: "Places to eat", path: "places-to-eat", icon: "fa-utensils" },
  { label: "Rules", path: "rules", icon: "fa-book" },
  { label: "FAQ", path: "faq", icon: "fa-circle-question" },
  { label: "Emergency", path: "emergency", icon: "fa-triangle-exclamation" },
  { label: "Before you go", path: "before-you-go", icon: "fa-suitcase-rolling" },
  { label: "The Host", path: "contact", icon: "fa-user" },

];

export function getEnabledMenuItems(enabledPages = []) {
  const slug = getSubdomain();
  const requiredPages = ["welcome", "check-in-out", "location", "blog", "contact", "emergency",];
  const finalPages = [...new Set([...enabledPages, ...requiredPages])];

  return allMenuItems
    .filter((item) => finalPages.includes(item.path))
    .map((item) => ({
      ...item,
      to: `/${slug}/${item.path}`,
    }));
}
