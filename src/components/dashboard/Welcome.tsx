import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Hand from "../../../public/icons/hand.svg";

interface WelcomeProps {}

const Welcome = ({}: WelcomeProps) => {
  return (
    <Box m="8">
      <Flex align="center">
        <Image src={Hand} sizes="50px" alt="hand_logo" />
        <Text fontWeight="bold">Hi Ahmed</Text>
      </Flex>
      <Text fontSize="sm" marginY="1" color="gray.7 00">
        Welcome to your Dashboard
      </Text>
    </Box>
  );
};

export default Welcome;
