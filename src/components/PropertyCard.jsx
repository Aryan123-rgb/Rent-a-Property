import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Divider,
  Badge,
  Button
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function PropertyCard({ property }) {
  const { image, price, title, location, specifications } = property;
  const [heart, setHeart] = useState(true);

  const BedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#7d5fff"
    >
      <rect x="2" y="7" width="16" height="8" />
      <path d="M1 10h18v4h-2v3h-3v-3H6v3H3v-3H1z" />
      <path fill="none" d="M0 0h20v20H0z" />
    </svg>
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      width={"500px"}
    >
      <Image
        src={
          "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
        }
        alt={title}
        objectFit="cover"
      />

      <Box p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg">
            <span
              style={{
                fontSize: "2.2rem",
                color: "#7d5fff",
                fontWeight: "600",
              }}
            >{`$${price}`}</span>
            <span style={{ opacity: 0.4 }}>/month</span>
          </Text>
          <Button
            variant="ghost"
            size={'lg'}
            color={heart ? "#7d5fff" : "transparent"} // Change color based on heart state
            onClick={()=>setHeart(!heart)}
            aria-label="Toggle Heart"
            borderWidth={3}
            borderRadius={'full'}
          >
            {heart ? <FaHeart /> : <FaRegHeart />}
          </Button>
        </Flex>

        <Text fontSize="3xl" fontWeight="semibold">
          {title}
        </Text>
        <Text color="gray.600" opacity={0.6}>
          {location}
        </Text>

        <Divider my={4} />
        {/* {BedIcon} */}
        <Flex justifyContent="space-between">
          {specifications.map((spec, index) => (
            <Text key={index} color={"#7d5fff"} mx={1}>
              {spec}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default PropertyCard;
