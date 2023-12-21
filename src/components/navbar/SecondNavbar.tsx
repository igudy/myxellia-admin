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
    <Box bg="white" boxShadow="lg" color="black" paddingX="10" paddingY="4">
      <Flex justify="space-evenly">
        {secondNavItems.map((item: SecondNavItem) => (
          <Box key={item.id}>
            <Flex align={"center"}>
              <Image src={item.image} width={20} height={20} alt={item.name} />
              <Box paddingLeft={"1"}>{item.name}</Box>
            </Flex>
          </Box>
        ))}
        <Stack spacing={3} divider={<StackDivider borderColor="gray.200" />}>
          <InputGroup>
            <Input
              placeholder="Search... properties, customers here"
              size="md"
              paddingRight="3.5rem"
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
