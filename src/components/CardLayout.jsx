import React from "react";
import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard"; // Import the PropertyCard component

const properties = [
    {
      id: 1,
      title: "Palm Harbor",
      price: 2095,
      location: "2699 Green Valley, Highland Lake,FL",
      type: "Apartment",
      image: "url-to-your-image1.jpg",
      specifications: ["3 bedrooms", "2 bathrooms", "1 kitchen"],
    },
    {
      id: 2,
      title: "Spacious House 1",
      price: 2500,
      location: "Suburb Area",
      type: "House",
      image: "url-to-your-image2.jpg",
      specifications: ["4 bedrooms", "3 bathrooms", "2 kitchens"],
    },
    {
      id: 3,
      title: "Cozy Studio",
      price: 800,
      location: "City Center",
      type: "Studio",
      image: "url-to-your-image3.jpg",
      specifications: ["1 bedroom", "1 bathroom", "Small kitchenette"],
    },
    {
      id: 4,
      title: "Luxury Villa",
      price: 5000,
      location: "Seaside",
      type: "Villa",
      image: "url-to-your-image4.jpg",
      specifications: ["5 bedrooms", "5 bathrooms", "Swimming pool"],
    },
    {
      id: 5,
      title: "Rustic Cabin",
      price: 1200,
      location: "Mountain Area",
      type: "Cabin",
      image: "url-to-your-image5.jpg",
      specifications: ["2 bedrooms", "1 bathroom", "Fireplace"],
    },
    {
      id: 6,
      title: "Urban Loft",
      price: 1800,
      location: "Industrial District",
      type: "Loft",
      image: "url-to-your-image6.jpg",
      specifications: ["Open layout", "High ceilings", "Exposed brick"],
    },
    // Add more properties as needed
  ];
  

function CardLayout() {
  return (
    <Center>
      <Box p={8}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
}

export default CardLayout;
