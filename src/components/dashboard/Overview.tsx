"use client";
import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
  Stack,
  border,
} from "@chakra-ui/react";
import React from "react";
import LineChartComponent from "./LineChart";
import OverViewProps from "../ui/OverViewProps";
import upGreen from "../../../public/images/icons/upGreen.svg";
import upRed from "../../../public/images/icons/upRed.svg";
import House from "../../../public/images/icons/house.svg";
import Profile from "../../../public/images/icons/profileP.svg";
import BlankImage from "../../../public/images/icons/blankImage.svg";
import Bookmark from "../../../public/images/icons/bookmark.svg";
import { PropertyCard } from "../ui/Card";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ListingOverview from "./ListingOverview";

interface OverviewProps {}

const Overview = ({}: OverviewProps) => {
  return (
    <Box padding="5" marginTop="2" marginX={"8"}>
      {/* Sales Overview */}
      <Flex justify={"space-between"}>
        <Box
          padding="4"
          width="850px"
          bg={"white"}
          rounded={"lg"}
          boxShadow={"xl"}
        >
          <Flex justify="space-between">
            <Box>
              <Text fontWeight="bold">Sales Overview</Text>
              <Text color={"#606060"} fontSize={"12px"}>
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </Box>
            <Flex
              align={"center"}
              justify={"center"}
              textAlign={"center"}
              border={"1px"}
              borderColor={"#CBCBCB"}
              borderRadius={"xl"}
              w={"170px"}
              marginBottom={"3"}
            >
              <Text color={"#CBCBCB"} p="4" fontSize={"12px"}>
                View Transactions
              </Text>
            </Flex>
          </Flex>
          <Box color="gray.600" marginY="2" fontSize="sm">
            <Flex justifyContent="flex-end" textAlign="right" ml="auto">
              <Stack direction="row" spacing="5" alignItems="center">
                <Text color={"#3D3D3D"} fontSize={"14px"}>
                  1 Week
                </Text>
                <Text color={"#3D3D3D"} fontSize={"14px"}>
                  1 Month
                </Text>
                <Text
                  color={"#3D3D3D"}
                  fontSize={"14px"}
                  bg="#F5F5F5 "
                  paddingY="1"
                  paddingX="5"
                  rounded="full"
                >
                  1 Year
                </Text>
              </Stack>
            </Flex>
          </Box>

          <Box width="full" height="2px" opacity="50" bg="gray.100"></Box>

          {/* Line Chart */}
          <Flex align="center" gap={"2"}>
            <LineChartComponent />
            <Box>
              <Flex marginTop={"7"}>
                <Box>
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Balance"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"#4545FE"}
                    subPrice={""}
                    subColor={""}
                  />
                </Box>
                <Box>
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Deposit"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"#12D8A0"}
                    subPrice={""}
                    subColor={""}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box>
                  {" "}
                  <OverViewProps
                    price={"₦ 0"}
                    tag={"Purchase"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"#191919"}
                    subPrice={".00"}
                    subColor={"#CBCBCB"}
                  />
                </Box>
                <Box>
                  {" "}
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Withdrawal"}
                    imageProp={upRed}
                    percentage={"0%"}
                    color={"#FF6A6A"}
                    subPrice={""}
                    subColor={""}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Property Overview */}
        <Box>
          <Flex direction={"column"} gap="10" justify={"space-between"}>
            <Box
              width={"520px"}
              minW={"520px"}
              bg="white"
              p="5"
              rounded={"lg"}
              boxShadow="lg"
            >
              <Flex justify={"space-between"}>
                <Flex
                  marginBottom={"5"}
                  fontWeight={"bold"}
                  fontSize={"14px"}
                  gap="2"
                >
                  <Image src={House} alt="house" />
                  <Text>Property Overview</Text>
                </Flex>
                <Box>
                  <Flex align={"center"} color={"#CBCBCB"} fontSize={"12px"}>
                    <Text fontSize={"sm"} cursor={"pointer"}>
                      View all
                    </Text>
                    <ChevronRightIcon boxSize={5} color="gray.300" />
                  </Flex>
                </Box>
              </Flex>
              <Box>
                <Flex>
                  <PropertyCard value={"0"} avaliability="Total" />
                  <PropertyCard value={"0"} avaliability="Availiable" />
                  <PropertyCard value={"0"} avaliability="Sold Out" />
                </Flex>
              </Box>
            </Box>

            {/* Customers Overview */}
            <Box
              width={"520"}
              minW={"520"}
              bg="white"
              p="5"
              rounded={"lg"}
              boxShadow="lg"
            >
              <Flex justify={"space-between"}>
                <Flex
                  marginBottom={"5"}
                  fontWeight={"bold"}
                  fontSize={"14px"}
                  gap="2"
                >
                  <Image src={Profile} alt="house" />
                  <Text>Customers Overview</Text>
                </Flex>
                <Box>
                  <Flex align={"center"} color={"#CBCBCB"} fontSize={"12px"}>
                    <Text fontSize={"sm"} cursor={"pointer"}>
                      View all
                    </Text>
                    <ChevronRightIcon boxSize={5} color="gray.300" />
                  </Flex>
                </Box>
              </Flex>
              <Box>
                <Flex>
                  <PropertyCard value={"0"} avaliability="Total" />
                  <PropertyCard value={"0"} avaliability="New" />
                  <PropertyCard value={"0"} avaliability="Active" />
                  <PropertyCard value={"0"} avaliability="Inactive" />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Lisiting Overview */}
      <ListingOverview />
    </Box>
  );
};

export default Overview;
