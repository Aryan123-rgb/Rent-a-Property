import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isActive, setIsActive] = useState("signup");
  return (
    <Flex p={6} align="center" justify="space-between" boxShadow={"sm"}>
      <Box>
        <Flex align="center">
        <svg
            width="25"
            height="25"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="#7d5fff"
            style={{marginLeft:"2.4rem"}}
          >
            {/* Your pentagon SVG path */}
            <polygon points="10,90 90,90 95,50 50,5 5,50" />
          </svg>
          <Box fontWeight="bold" fontSize="2xl" mr={20} ml={'0.8rem'}>
            Estatery
          </Box>
        </Flex>
      </Box>
      <Box fontWeight={"medium"}>
        <Box
          as="span"
          mr={20}
          color={"#7d5fff"}
          bg={"gray.100"}
          p="1rem"
          borderRadius={"md"}
        >
          Rent
        </Box>
        <Box as="span" mr={20}>
          Buy
        </Box>
        <Box as="span" mr={20}>
          Sell
        </Box>
        <Menu>
          <MenuButton mr={20}>
            <Box as="span" cursor="pointer">
              Manage Property <ChevronDownIcon />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>Rental Properties</MenuItem>
            <MenuItem>Selling Properties</MenuItem>
            <MenuItem>Property Management</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton mr={20}>
            <Box as="span" cursor="pointer">
              Resources <ChevronDownIcon />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>Guides</MenuItem>
            <MenuItem>FAQs</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box mr={5}>
        <Button
          mr={"1.5rem"}
          bg={isActive === "login" ? "#7d5fff" : "white"}
          color={isActive === "login" ? "white" : "#7d5fff"}
          onClick={() => setIsActive("login")}
          size={"lg"}
          variant={"outline"}
          _hover={{
            background: `${isActive === "login"} ? "#7d5fff" : "white"`,
          }}
        >
          Login
        </Button>
        <Button
          bg={isActive === "signup" ? "#7d5fff" : "white"}
          color={isActive === "signup" ? "white" : "#7d5fff"}
          onClick={() => setIsActive("signup")}
          size={"lg"}
          variant={"outline"}
          _hover={{
            background: `${isActive === "signup"} ? "#7d5fff" : "white"`,
          }}
        >
          Signup
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
