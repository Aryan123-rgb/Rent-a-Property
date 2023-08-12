import React, { createContext, useContext, useEffect, useState } from "react";
import properties from "../data/property.json";

export const PropertyContext = createContext({});

export const PropertyProvider = ({ children }) => {
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const [propertyType, setPropertyType] = useState();
  const [moveInDate, setMoveInDate] = useState();
  const [propertyArray, setPropertyArray] = useState(properties);

  const filterPropertyArray = () => {
    const filtered = properties.filter((property) => {
      const priceInRange =
        !price?.value ||
        price?.value === "All" ||
        (property.price >= parseInt(price?.value.split("-")[0]) &&
          property.price <= parseInt(price?.value.split("-")[1]));

      const locationMatches =
        !location?.value ||
        location?.value === "All" ||
        property?.location.includes(location.value);

      const propertyTypeMatches =
        !propertyType?.value ||
        propertyType?.value === "All" ||
        property?.type === propertyType?.value;

      const selectedDateTimestamp = moveInDate
        ? new Date(moveInDate).getTime()
        : 0;
      const propertyDateTimestamp = new Date(property?.moveInDate).getTime();
      const moveInDateMatches =
        !moveInDate || propertyDateTimestamp <= selectedDateTimestamp;

      return (
        priceInRange &&
        locationMatches &&
        propertyTypeMatches &&
        moveInDateMatches
      );
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
        filterPropertyArray,
        moveInDate,
        setMoveInDate,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
