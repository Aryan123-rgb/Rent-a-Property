import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function Filters() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("Price");

  const priceOptions = [
    { value: "All", label: "All" },
    { value: "500-1500", label: "$500 - $1500" },
    { value: "1500-2500", label: "$1500 - $2500" },
    { value: "2500-3500", label: "$2500 - $3500" },
    { value: "3500-4500", label: "$3500 - $4500" },
  ];

  const propertyTypeOptions = [
    { value: "All", label: "All" },
    { value: "apartments", label: "Apartments" },
    { value: "flats", label: "Flats" },
    { value: "houses", label: "Houses" },
  ];

  const locationOptions = [
    { value: "All", label: "All" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
  ];
  

  const handlePriceChange = (selectedOption) => {
    console.log(selectedOption);
  };

  return (
    <Box p={4}>
      <Flex justifyContent="center">
        <Box w="85%" p={4} bg={"white"} borderWidth="1px" borderRadius="md">
          <Flex justifyContent="space-between">
            <Box flex="1" pr={2}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Location
              </Text>
              <Select placeholder="Location" options={locationOptions}/>
            </Box>
            <Box flex="1" pr={0} pt={1} pl={3}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Move-in Date
              </Text>
              {/* <FirstComponent/> */}
            </Box>
            <Box flex="1" pr={2}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Price
              </Text>
              <Select
                options={priceOptions}
                placeholder={selectedPrice}
                onChange={handlePriceChange}
              />
            </Box>
            <Box flex="1" pr={2}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Property Type
              </Text>
              <Select
                options={propertyTypeOptions}
                placeholder="Property Type"
              />
            </Box>
            <Box p={2} my={"auto"}>
              <Button colorScheme="purple" size={"lg"}>
                Search
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Filters;
