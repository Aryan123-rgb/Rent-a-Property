import React from 'react'
import { Box, Flex, Input , Text} from '@chakra-ui/react';

function SearchBar() {
  return (
    <Box p={4} mt={'4rem'}>
      <Flex alignItems="center">
        <Box  ml="10rem">
          <Text fontSize={'5xl'} fontWeight={'bold'}>
            Search properties to rent
          </Text>
        </Box>
        <Box flex="1" ml={'40rem'}>
          <Input
            type="text"
            placeholder="Search with search Bar"
            borderRadius="0.25rem"
            border="1px solid gray"
            p="0.5rem"
            w={'15rem'}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default SearchBar