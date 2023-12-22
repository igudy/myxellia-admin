"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import BlankImage from "../../../public/images/icons/blankImage.svg";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import RightArrow from "../../../public/images/icons/rightGraph.svg";
import LeftArrow from "../../../public/images/icons/leftGraph.svg";

const TopSelling = () => {
  return (
    <Box padding="4" width="350px" bg={"white"} rounded={"lg"} boxShadow={"xl"}>
      <Flex>
        <Text>
          N0<Text as="span">.00</Text>
        </Text>
        <Flex justify={"space-between"}>
          <Text color={"bg.300"}>View all</Text>
          <Icon as={FaGreaterThan} w={8} h={8} color="red.500" />
        </Flex>
      </Flex>
      <Text>Total Outstanding Balance</Text>
      <Flex>
        <Box>
          {" "}
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
            <Image src={BlankImage} width={"50"} height={"50"} alt="empty" />
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"}>
            <Text fontWeight={"fontBold"}>None</Text>
            <Text fontWeight={"fontBold"} color={"red"}>
              N0.00
            </Text>
            <Text fontWeight={"fontBold"}>Outstanding Balance</Text>
            <Box marginTop={"10"}>
              <Flex direction={"row"} gap={"3"}>
                <Box color={"gray.300"}>1/5 </Box>
                <Box>
                  <Flex
                    bg="gray.200"
                    justifyContent={"center"}
                    rounded="full"
                    w="20px"
                    h="20px"
                  >
                    <Image
                      src={LeftArrow}
                      alt="leftArrow"
                      width="10"
                      height="10"
                    />
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
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopSelling;
