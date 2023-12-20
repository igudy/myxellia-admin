import { Box, Container, Flex, Grid, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import MainStone from "../../../public/icons/mainstone.svg";
import Veerge from "../../../public/icons/veerge.svg";
import Calendar from "../../../public/icons/calendar.svg";
import Dropdown from "../../../public/icons/dropdown.svg";
import Notification from "../../../public/icons/notification.svg";
import Plus from "../../../public/icons/plus.svg";
import User from "../../../public/icons/user.svg";

const Navbar = () => {
  return (
    <Box bg="black" color="white" paddingX="10" paddingY="3">
      <Flex justify="space-between">
        <Box>
          <Flex direction="column">
            <Image src={Veerge} alt="veerge_logo" />
            <Image src={MainStone} alt="mainstone" />
          </Flex>
        </Box>

        <Box>
          <Flex>
            <HStack spacing={4}>
              <Image src={Plus} alt="plus" />
              <Image src={Calendar} alt="calendar" />
              <Image src={Notification} alt="notification" />
              <Image src={User} alt="user" />
              <Image src={Dropdown} alt="dropdown" />
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
