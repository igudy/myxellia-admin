"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import BlankImage from "../../../public/images/icons/blankImage.svg";
import Image from "next/image";

const TopSelling = () => {
  return (
    <Box
      padding="4"
      width="400px"
      bg={"white"}
      rounded={"2xl"}
      boxShadow={"xl"}
    >
      <Text fontWeight={"bold"} color={"#12D8A0"}>
        Total Selling
      </Text>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        N0
        <Text as="span" color={"gray.400"}>
          .00
        </Text>
      </Text>
      <Text fontSize={"small"}>Total Sold</Text>
      <Flex>
        <Box>
          <Flex
            align={"center"}
            justify={"center"}
            bg={"#F5F5F5"}
            w={"100px"}
            h={"100px"}
            marginRight={"3"}
            rounded={"lg"}
            marginTop={"2"}
          >
            <Image src={BlankImage} width={"60"} height={"60"} alt="empty" />
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"}>
            <Text fontWeight={"bold"} fontSize={"20px"}>
              None
            </Text>
            <Text color={"gray.500"} marginTop={"20px"}>
              0
            </Text>
            <Text fontSize={"12px"}>Whole units sold</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopSelling;
