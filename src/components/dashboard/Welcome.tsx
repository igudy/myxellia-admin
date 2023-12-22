import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Hand from "../../../public/images/icons/hand.svg";

interface WelcomeProps {}

const Welcome = ({}: WelcomeProps) => {
  return (
    <Box marginTop={"8px"} marginX={"60px"} paddingTop={"2px"}>
      <Flex align="center">
        <Image src={Hand} sizes="50px" alt="hand_logo" />
        <Text fontWeight="bold" fontSize={"20px"}>
          Hi Ahmed
        </Text>
      </Flex>
      <Text fontSize="12px" marginY="1" color="#3D3D3D">
        Welcome to your Dashboard
      </Text>
    </Box>
  );
};

export default Welcome;
