import { getSubdomain } from "../utils/getSubdomain";


export const allMenuItems = [
  { label: "Welcome", path: "welcome", icon: "fa-house", group: "primary" },
  { label: "Arrival Information", path: "checkin", icon: "fa-house-circle-check", group: "primary" },
  { label: "WiFi", path: "wifi", icon: "fa-wifi", group: "primary" },
  { label: "Amenities", path: "amenities", icon: "fa-couch", group: "primary" },
  { label: "Services & Supplies", path: "services", icon: "fa-bell-concierge", group: "primary" },
  { label: "House Instructions", path: "house-guides", icon: "fa-book", group: "primary" },
  { label: "Location", path: "location", icon: "fa-location-dot", group: "secondary" },
  { label: "Transport", path: "transportation", icon: "fa-bus", group: "secondary" },
  { label: "Infos", path: "informations", icon: "fa-circle-info", group: "secondary" },
  { label: "Things to do", path: "blog", icon: "fa-map", group: "secondary" },
  { label: "Recommendations", path: "recommendations", icon: "fa-star", group: "secondary" },
  { label: "Places to eat", path: "places-to-eat", icon: "fa-utensils", group: "secondary" },
  { label: "Rules", path: "rules", icon: "fa-rectangle-list", group: "primary" },
  { label: "FAQ", path: "faq", icon: "fa-circle-question", group: "primary" },
  { label: "Emergency Contacts", path: "emergency", icon: "fa-truck-medical", group: "secondary" },
  { label: "Before you go", path: "before-you-go", icon: "fa-suitcase-rolling", group: "primary" },
  { label: "Review Us", path: "review", icon: "fa-star", group: "secondary" },
  { label: "The Host", path: "contact", icon: "fa-user", group: "secondary" },
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
