import React, { createContext, useContext, useEffect, useState } from "react";
import { getSubdomain } from "../utils/getSubdomain";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = getSubdomain();
    if (!slug) {
      setLoading(false);
      setProperty(null);
      return;
    }

    fetch(`https://app.welcomy.net/api/property/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.property);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load property data", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-2xl font-bold text-primary mb-2">Oops!</h1>
        <p className="text-gray-600 mb-4">
          Δεν εντοπίστηκε κάποιο κατάλυμα. Παρακαλώ ελέγξτε το URL (π.χ. <code>lias-apartment.welcomy.net</code>).
        </p>
      </div>
    );
  }

return (
  <PropertyContext.Provider value={property}>
    {children}
  </PropertyContext.Provider>
);


}

export function useProperty() {
  return useContext(PropertyContext);
}
