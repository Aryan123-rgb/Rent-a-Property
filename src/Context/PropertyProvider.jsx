import React, { createContext, useContext, useEffect, useState } from "react";
import properties from "../data/property.json"

export const PropertyContext = createContext({});

export const PropertyProvider = ({ children }) => {
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const [propertyType, setPropertyType] = useState();
  const [propertyArray,setPropertyArray] = useState(properties);

  const filterPropertyArray = () => {
    const filtered = properties.filter(property => {
      const priceInRange = !price?.value || price?.value === "All" ||
        (property.price >= parseInt(price?.value.split("-")[0]) &&
          property.price <= parseInt(price?.value.split("-")[1]));
  
      const locationMatches = !location?.value || location?.value === "All" ||
        property?.location.includes(location.value);

      const propertyTypeMatches = !propertyType?.label || propertyType?.label === "All" ||
        property?.type === propertyType?.label;
  
      return priceInRange && locationMatches && propertyTypeMatches;
    });
  
    setPropertyArray(filtered);
  };


  return (
    <PropertyContext.Provider
      value={{
        price,
        setPrice,
        location,
        setLocation,
        propertyType,
        setPropertyType,
        propertyArray,
        filterPropertyArray
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
