"use client";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import BlankImage from "../../../public/images/icons/blankImage.svg";
import Bookmark from "../../../public/images/icons/bookmark.svg";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";

const ListingOverview = () => {
  return (
    <Flex gap={"5"} marginY={"10"}>
      <Box
        padding="4"
        width="450px"
        bg={"white"}
        rounded={"lg"}
        boxShadow={"xl"}
      >
        <Text fontSize={""} fontWeight={"fontbold"}>
          Listing Overview
        </Text>

        {/* Top */}
        <Flex>
          <Flex direction={"column"}>
            <Text>Most Viewed</Text>
            <Box w={"1"} h={"1"}></Box>
            <Flex align="center" gap="3">
              <Flex
                align={"center"}
                justify={"center"}
                bg={"gray.100"}
                w={"100px"}
                h={"100px"}
                rounded={"lg"}
                border={"1px"}
                borderColor={"green"}
              >
                <Image
                  src={BlankImage}
                  width={"50"}
                  height={"50"}
                  alt="empty"
                />
              </Flex>
              <Text fontWeight={"bold"} mb={"10"}>
                None
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"}>
            Most shared
            <Box w={"1"} h={"1"}></Box>
            <Flex align="center" gap="3">
              <Flex
                align={"center"}
                justify={"center"}
                bg={"gray.100"}
                w={"100px"}
                h={"100px"}
                rounded={"lg"}
                border={"1px"}
                borderColor={"purple"}
              >
                <Image
                  src={BlankImage}
                  width={"50"}
                  height={"50"}
                  alt="empty"
                />
              </Flex>
              <Text fontWeight={"bold"} mb={"10"}>
                None
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Bottom */}
        <Box bg={"gray.300"} rounded={"lg"} p={"2"} mt={"3"}>
          <Flex mt={"5"}>
            <Flex direction={"column"}>
              <Text fontSize={"13px"}>Most watchlisted</Text>
              <Box w={"1"} h={"1"}></Box>
              <Flex align="center" gap="3">
                <Flex
                  align={"center"}
                  justify={"center"}
                  bg={"gray.100"}
                  w={"100px"}
                  h={"100px"}
                  rounded={"lg"}
                  border={"1px"}
                  borderColor={"red"}
                >
                  <Image
                    src={BlankImage}
                    width={"50"}
                    height={"50"}
                    alt="empty"
                  />
                </Flex>
                <Text fontWeight={"bold"} mb={"10"}>
                  None
                </Text>
              </Flex>
            </Flex>
            <Box
              border={"1px"}
              bg={"white"}
              h={"7rem"}
              borderColor={"gray.500"}
              rounded={"lg"}
              p={"3"}
            >
              <Flex direction={"column"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"30px"} fontWeight={"bold"}>
                    0
                  </Text>
                  <Image src={Bookmark} alt="bookmark" />
                </Flex>
                <Text fontSize={"14px"}>Number of watchlists</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Top Outstanding Balance */}
      <Box
        padding="4"
        width="350px"
        bg={"white"}
        rounded={"lg"}
        boxShadow={"xl"}
      >
        <Flex>
          <Text>
            N0<Text as="span">.00</Text>
          </Text>
          <Flex justify={"space-between"}>
            <Text color={"bg.300"}>View all</Text>
            <Icon as={FaGreaterThan} w={8} h={8} color="red.500" />
          </Flex>
        </Flex>
        <Text>N0.00</Text>
      </Box>

      {/* Top Selling */}
      <Box
        padding="4"
        width="350px"
        bg={"white"}
        rounded={"lg"}
        boxShadow={"xl"}
      >
        <Text>Top Selling</Text>
      </Box>
    </Flex>
  );
};

export default ListingOverview;
