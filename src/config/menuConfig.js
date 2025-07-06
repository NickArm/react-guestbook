import { getSubdomain } from "../utils/getSubdomain";

export const allMenuItems = [
  { label: "Welcome", path: "welcome", icon: "fa-house" },
  { label: "Arrival Information", path: "checkin", icon: "fa-house-circle-check" },
  { label: "WiFi", path: "wifi", icon: "fa-wifi" },
  { label: "Amenities & Appliances", path: "amenities", icon: "fa-couch" },
  { label: "House Guides", path: "house-guides", icon: "fa-book" },
  { label: "Location", path: "location", icon: "fa-location-dot" },
  { label: "Transport", path: "transportation", icon: "fa-bus" },
  { label: "Infos", path: "informations", icon: "fa-circle-info" },
  { label: "Things to do", path: "blog", icon: "fa-map" },
  { label: "Recommendations", path: "recommendations", icon: "fa-star"},
  { label: "Places to eat", path: "places-to-eat", icon: "fa-utensils" },
  { label: "Rules", path: "rules", icon: "fa-rectangle-list" },
  { label: "FAQ", path: "faq", icon: "fa-circle-question" },
  { label: "Emergency", path: "emergency", icon: "fa-triangle-exclamation" },
  { label: "Before you go", path: "before-you-go", icon: "fa-suitcase-rolling" },
  { label: "Review Us", path: "review", icon: "fa-star"},
  { label: "The Host", path: "contact", icon: "fa-user" },

];

export function getEnabledMenuItems(enabledPages = [], property = {}) {
  const slug = getSubdomain();
  const requiredPages = ["welcome", "contact", "emergency"];

  if (property.appliances && property.appliances.length > 0) {
    enabledPages.push("house-guides");
  }

  const finalPages = [...new Set([...enabledPages, ...requiredPages])];

  return allMenuItems
    .filter((item) => finalPages.includes(item.path))
    .map((item) => ({
      ...item,
      to: `/${slug}/${item.path}`,
    }));
}
