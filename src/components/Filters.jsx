import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function Filters() {
  const [moveInDate, setMoveInDate] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("Price");

  const priceOptions = [
    { value: "All", label: "All" },
    { value: "500-1000", label: "$500 - $1000" },
    { value: "1000-1500", label: "$1000 - $1500" },
    { value: "1500-2000", label: "$1500 - $2000" },
    { value: "2000-2500", label: "$2000 - $2500" },
    { value: "2500-3000", label: "$2500 - $3000" },
    { value: "3000-3500", label: "$3000 - $3500" },
  ];

  const propertyTypeOptions = [
    { value: "All", label: "All" },
    { value: "apartments", label: "Apartments" },
    { value: "flats", label: "Flats" },
    { value: "houses", label: "Houses" },
  ];

  const handlePriceChange = (selectedOption) => {
    console.log(selectedOption);
  };

  const datePickerInputStyles = {
    input: (provided) => ({
      ...provided,
      border: "1px solid #ccc", // Add a border to the input
      borderRadius: "4px", // Optional: Add border radius for a rounded appearance
      padding: "8px", // Optional: Add some padding for spacing
      fontSize: "16px", // Optional: Adjust the font size as needed
    }),
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
              <Select placeholder="Location" />
            </Box>
            <Box flex="1" pr={0} pt={1} pl={3}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Move-in Date
              </Text>
              <DatePicker
                selected={moveInDate}
                onChange={(date) => setMoveInDate(date)}
                placeholderText="Move-in Date"
              />
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
