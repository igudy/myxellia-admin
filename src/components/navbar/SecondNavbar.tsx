"use client";
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { secondNav } from "../data";
import Image from "next/image";
import { SearchIcon } from "@chakra-ui/icons";

interface SecondNavItem {
  id: string;
  name: string;
  image?: any;
}

const SecondNavbar = () => {
  const secondNavItems: SecondNavItem[] = secondNav();

  return (
    <Box
      bg="white"
      boxShadow="md"
      color="black"
      paddingX="10"
      paddingY="3"
      paddingBottom={"3"}
    >
      <Flex justify="space-between" paddingX={"5"} align={"center "}>
        {secondNavItems.map((item: SecondNavItem) => (
          <Box key={item.id}>
            <Flex align={"center"}>
              {item.name === "Dashboard" && (
                <>
                  <Flex
                    paddingY={"2"}
                    paddingX={"4"}
                    rounded={"xl"}
                    align={"center"}
                    gap={"2"}
                    bg={"gray.100"}
                  >
                    <Image
                      src={item.image}
                      width={20}
                      height={20}
                      alt={item.name}
                    />
                    <Text fontWeight={"bold"}>Dashboard</Text>
                  </Flex>
                </>
              )}
              {item.name !== "Dashboard" && (
                <>
                  <Image
                    src={item.image}
                    width={20}
                    height={20}
                    alt={item.name}
                  />
                  <Box paddingLeft={"1"}>{item.name}</Box>
                </>
              )}
            </Flex>
          </Box>
        ))}
        <Stack spacing={3} divider={<StackDivider borderColor="gray.200" />}>
          <InputGroup>
            <Input
              placeholder="Search... properties, customers here"
              size="md"
              color={"#919191"}
              fontSize={"12px"}
              paddingRight="3.5rem"
              width={"300px"}
            />
            <InputRightElement>
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SecondNavbar;
