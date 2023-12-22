"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Bulb from "../../../public/images/icons/bulb.svg";
import Cancel from "../../../public/images/icons/close.svg";
import { CiLock } from "react-icons/ci";

const Assistant = () => {
  return (
    <Box>
      {/*  */}
      <Box
        position="fixed"
        bottom="0"
        width="13rem"
        right="0"
        zIndex="50"
        color="White"
        marginY={"20px"}
        textAlign={"center"}
        bg={"#4545FE"}
        marginRight={"5"}
        height={"2.7rem"}
        alignItems={"center"}
        rounded={"full"}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          margin={"auto"}
          justifyItems={"center"}
          paddingX={"3"}
          paddingY={"2.5"}
        >
          <Box>
            <Image src={Bulb} alt="bulb" />
          </Box>
          <Text cursor={"pointer"}>Veerge Assistant</Text>
          <Image src={Cancel} alt="cancel" />
        </Flex>
      </Box>

      <Flex
        textAlign={"center"}
        marginY={"20px"}
        align={"center"}
        color={"gray.400"}
        justify={"center"}
        fontSize={"16px"}
      >
        <Icon as={CiLock} cursor={"pointer"} />
        End-to-end-encryption
      </Flex>
    </Box>
  );
};

export default Assistant;
