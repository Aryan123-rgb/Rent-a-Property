import React, { useContext } from "react";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { PropertyContext } from "../Context/PropertyProvider";

function CardLayout() {
  const {
    price,
    setPrice,
    location,
    setLocation,
    propertyType,
    setPropertyType,
    propertyArray
  } = useContext(PropertyContext);



  return (
    <Center>
      <Box p={8}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
          {propertyArray.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
}

export default CardLayout;
