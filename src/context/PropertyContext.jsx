import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyContext = createContext();

export const useProperty = () => useContext(PropertyContext);

export function PropertyProvider({ children }) {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);

useEffect(() => {
  fetch(`http://localhost:3001/properties?slug=${slug}`)
    .then(res => res.json())
    .then(data => setProperty(data[0]))
    .catch(console.error);
}, [slug]);

  return (
    <PropertyContext.Provider value={property}>
      {children}
    </PropertyContext.Provider>
  );
}
