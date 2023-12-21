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
    <Box padding="5" paddingY="10" m="10">
      {/* Sales Overview */}
      <Flex gap={"3"}>
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
              <Text>Showing overview Jan 21022 - Sep 2022</Text>
            </Box>
            <Box>
              <Input
                placeholder="View Transactions"
                size="lg"
                paddingRight="3.5rem"
              />
            </Box>
          </Flex>
          <Box color="gray.600" marginY="2" fontSize="sm">
            <Flex justifyContent="flex-end" textAlign="right" ml="auto">
              <Stack direction="row" spacing="5" alignItems="center">
                <Text>1 Week</Text>
                <Text>1 Month</Text>
                <Text bg="gray.300" paddingY="1" paddingX="5" rounded="full">
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
              <Flex>
                <Box>
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Balance"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"purple"}
                  />
                </Box>
                <Box>
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Deposit"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"green"}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box>
                  {" "}
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Purchase"}
                    imageProp={upGreen}
                    percentage={"0%"}
                    color={"black"}
                  />
                </Box>
                <Box>
                  {" "}
                  <OverViewProps
                    price={"₦ 0.00"}
                    tag={"Withdrawal"}
                    imageProp={upRed}
                    percentage={"0%"}
                    color={"red"}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Property Overview */}
        <Box>
          <Flex direction={"column"} gap={"10"}>
            <Box
              width={"400"}
              minW={"400"}
              bg="white"
              p="5"
              rounded={"lg"}
              boxShadow="lg"
            >
              <Flex justify={"space-between"}>
                <Flex marginY={"3"} fontWeight={"bold"} gap="2 ">
                  <Image src={House} alt="house" />
                  <Text>Property Overview</Text>
                </Flex>
                <Box>
                  <Flex align={"center"}>
                    <Text fontSize={"sm"}>View all</Text>
                    <ChevronRightIcon boxSize={6} color="gray.300" />
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
            <Box>
              <Box
                width={"400"}
                minW={"400"}
                bg="white"
                p="5"
                rounded={"lg"}
                boxShadow="lg"
              >
                <Flex justify={"spac e-between"}>
                  <Flex marginY={"3"} fontWeight={"bold"} gap="2 ">
                    <Image src={Profile} alt="house" />
                    <Text>Customers Overview</Text>
                  </Flex>
                  <Box>
                    <Flex align={"center"}>
                      <Text fontSize={"sm"}>View all</Text>
                      <ChevronRightIcon boxSize={6} color="gray.300" />
                    </Flex>
                  </Box>
                </Flex>
                <Box>
                  <Flex>
                    <PropertyCard value={"0"} avaliability="Total" />
                    <PropertyCard value={"0"} avaliability="New" />
                    <PropertyCard value={"0"} avaliability="A ctive" />
                    <PropertyCard value={"0"} avaliability="Inactive" />
                  </Flex>
                </Box>
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
