import { useEffect, useState } from "react";
import { useProperty } from "../context/PropertyContext";

export default function ServicesPage() {
  const property = useProperty();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (property?.services) {
      setServices(property.services);
    }
  }, [property]);

  if (!property || !property.enabled_pages?.includes("services")) return null;

  return (
    <div className="p-4">

      {services.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          No services available at the moment.
        </p>
      ) : (
        <div className="grid gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {service.description}
                  </p>

                  {service.url && (
                    <div className="mt-3">
                    <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("click_service_link", "Services", service.title)}
                        className="inline-block mt-3 bg-primary text-white text-xs px-3 py-1.5 rounded-md shadow hover:bg-primary-dark transition"
                        >
                        Learn More
                    </a>

                    </div>
                  )}
                </div>

                {/* Optional Icon Placeholder */}
                <div className="ml-4 text-primary text-xl">
                  <i className="ki-outline ki-spark"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
