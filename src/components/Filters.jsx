import React from 'react';
import { Box, Button, Select, Flex, DatePicker } from '@chakra-ui/react';

function Filters() {
  return (
    <Box p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box w="25%">
          <Select placeholder="Location">
            {/* Options for location filter */}
          </Select>
        </Box>
        <Box w="25%">
          {/* <DatePicker placeholderText="Move-in Date" /> */}
        </Box>
        <Box w="25%">
          <Select placeholder="Price">
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="2000-2500">$2000 - $2500</option>
          </Select>
        </Box>
        <Box w="25%">
          <Select placeholder="Property Type">
            <option value="apartments">Apartments</option>
            <option value="flats">Flats</option>
            <option value="houses">Houses</option>
          </Select>
        </Box>
        <Button colorScheme="purple">Search</Button>
      </Flex>
    </Box>
  );
}

export default Filters;
