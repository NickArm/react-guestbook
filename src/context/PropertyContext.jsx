import React, { createContext, useContext, useEffect, useState } from "react";
import { getSubdomain } from "../utils/getSubdomain";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = getSubdomain();
    if (!slug) return;

    fetch(`http://app.welcomy.net/api/property/${slug}`)
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

  return (
    <PropertyContext.Provider value={property}>
      {!loading ? children : <p className="text-center mt-10">Loading...</p>}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  return useContext(PropertyContext);
}
