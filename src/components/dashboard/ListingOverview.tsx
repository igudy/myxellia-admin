"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import BlankImage from "../../../public/images/icons/blankImage.svg";
import Bookmark from "../../../public/images/icons/bookmark.svg";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import RightArrow from "../../../public/images/icons/rightGraph.svg";
import LeftArrow from "../../../public/images/icons/leftGraph.svg";
import TopSelling from "./TopSelling";

const ListingOverview = () => {
  return (
    <Flex marginTop={"10"} justify={"space-between"}>
      <Box
        paddingX="4"
        paddingY={"1"}
        width="450px"
        bg={"white"}
        rounded={"2xl"}
        boxShadow={"xl"}
      >
        <Text fontSize={""} fontWeight={"bold"}>
          Listing Overview
        </Text>

        {/* Top */}
        <Flex justify={"space-between"} paddingX={"1"}>
          <Flex direction={"column"} marginTop={"2px"}>
            <Text fontSize={"10px"} color={"#191919"} marginLeft={"2px"}>
              Most Viewed
            </Text>
            <Box bg={"#E4E4E4"} w={"full"} h={"1px"} mb={"1"}></Box>
            <Flex align="center" gap="2">
              <Flex
                align={"center"}
                justify={"center"}
                bg={"#F5F5F5"}
                w={"50px"}
                h={"50px"}
                rounded={"lg"}
                border={"1px"}
                borderColor={"#12D8A0"}
              >
                <Image
                  src={BlankImage}
                  width={"50"}
                  height={"50"}
                  alt="empty"
                />
              </Flex>
              <Text fontWeight={"bold"} mb={"6"}>
                None
              </Text>
            </Flex>
          </Flex>

          <Flex direction={"column"} marginTop={"2px"}>
            <Text fontSize={"10px"} color={"#191919"}>
              Most Shared
            </Text>
            <Box bg={"#E4E4E4"} w={"full"} h={"1px"} mb={"1"}></Box>
            <Flex align="center" gap="2">
              <Flex
                align={"center"}
                justify={"center"}
                bg={"#F5F5F5"}
                w={"50px"}
                h={"50px"}
                rounded={"lg"}
                border={"1px"}
                borderColor={"#4545FE"}
              >
                <Image
                  src={BlankImage}
                  width={"50"}
                  height={"50"}
                  alt="empty"
                />
              </Flex>
              <Text fontWeight={"bold"} mb={"6"}>
                None
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Bottom */}
        <Box
          bg={"#F5F5F5"}
          rounded={"lg"}
          paddingLeft={"1"}
          paddingY={"3"}
          marginTop={"4"}
        >
          <Flex justify={"space-between"} align={"center"} paddingX={"2"}>
            <Flex direction={"column"}>
              <Text fontSize={"10px"} color={"#191919"} marginLeft={"2px"}>
                Most watchlisted
              </Text>
              <Flex align="center" gap="2">
                <Flex
                  align={"center"}
                  justify={"center"}
                  bg={"#F5F5F5"}
                  w={"50px"}
                  h={"50px"}
                  rounded={"lg"}
                  border={"1px"}
                  borderColor={"#FF9103"}
                >
                  <Image
                    src={BlankImage}
                    width={"50"}
                    height={"50"}
                    alt="empty"
                  />
                </Flex>
                <Text fontWeight={"bold"} mb={"7"}>
                  None
                </Text>
              </Flex>
            </Flex>

            <Box
              border={"1px"}
              bg={"white"}
              h={"4rem"}
              w={"10rem"}
              borderColor={"gray.500"}
              rounded={"lg"}
              p={"1"}
            >
              <Flex direction={"column"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"24px"} fontWeight={""}>
                    0
                  </Text>
                  <Image
                    src={Bookmark}
                    width={"20"}
                    height={"20"}
                    alt="bookmark"
                  />
                </Flex>
                <Text fontSize={"9px"} color={"#3D3D3D"}>
                  Number of watchlists
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Top Outstanding Balance */}
      <Box
        padding="4"
        width="400px"
        bg={"white"}
        rounded={"2xl"}
        boxShadow={"xl"}
      >
        <Flex justify={"space-between"}>
          <Text fontWeight={"bold"} fontSize={"20px"}>
            N0
            <Text as="span" color={"gray.400"}>
              .00
            </Text>
          </Text>
          <Flex align={"center"} color={"#CBCBCB"} fontSize={"12px"}>
            <Text color={"bg.300"}>View all</Text>
            <Icon as={FaGreaterThan} marginX={"1"} w={2} h={2} />
          </Flex>
        </Flex>
        <Text fontSize={"small"}>Total Outstanding Balance</Text>
        <Flex>
          <Box>
            <Flex
              align={"center"}
              justify={"center"}
              bg={"gray.100"}
              w={"100px"}
              h={"100px"}
              rounded={"lg"}
              marginRight={"3"}
              marginTop={"5"}
            >
              <Image src={BlankImage} width={"50"} height={"50"} alt="empty" />
            </Flex>
          </Box>
          <Box>
            <Flex direction={"column"}>
              <Text fontWeight={"bold"} fontSize={"20px"} marginTop={"4"}>
                None
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize={"14px"}
                marginTop={"5"}
                color={"#FF6A6A"}
              >
                N0.00
              </Text>
              <Text fontSize={"12px"} color={"#606060"}>
                Outstanding Balance
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex marginTop={"-4"} justifyContent={"flex-end"}>
          <Flex direction={"row"} gap={"3"}>
            <Box color={"#606060"} fontSize={"12px"}>
              1/5{" "}
            </Box>
            <Box>
              <Flex
                bg="gray.200"
                justifyContent={"center"}
                rounded="full"
                w="20px"
                h="20px"
              >
                <Image src={LeftArrow} alt="leftArrow" width="10" height="10" />
              </Flex>
            </Box>
            <Box>
              <Flex
                bg="gray.200"
                justifyContent={"center"}
                rounded="full"
                w="20px"
                h="20px"
              >
                <Image
                  src={RightArrow}
                  alt="rightArrow"
                  width="10"
                  height="10"
                />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Top Selling */}
      <TopSelling />
    </Flex>
  );
};

export default ListingOverview;
