import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function PropertyCard({ property }) {
  const { image, price, title, location, specifications } = property;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" width={'500px'}>
      <Image src={'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg'} alt={title}  objectFit="cover" />

      <Box p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            <span style={{fontSize:"2rem", color:"#"}}>{`$${price}`}</span>/month
          </Text>
          <IconButton
            aria-label="Add to favorites"
            icon={<FaHeart />}
            colorScheme="red"
            variant="ghost"
          />
        </Flex>

        <Text mt={2} fontSize="lg" fontWeight="semibold">
          {title}
        </Text>
        <Text color="gray.600">{location}</Text>

        <Divider my={4} />

        <Flex justifyContent="space-between">
          {specifications.map((spec, index) => (
            <Badge key={index} colorScheme="purple" mx={1}>
              {spec}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default PropertyCard;
