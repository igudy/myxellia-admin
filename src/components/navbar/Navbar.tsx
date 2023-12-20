import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import MainStone from "../../../public/icons/mainstone.svg";
import Veerge from "../../../public/icons/veerge.svg";
import Calendar from "../../../public/icons/nav-calendar.svg";
import Dropdown from "../../../public/icons/dropdown.svg";
import Notification from "../../../public/icons/notification.svg";
import Plus from "../../../public/icons/plus.svg";
import User from "../../../public/icons/user.svg";

const Navbar = () => {
  return (
    <Box bg="black" color="white" paddingX="10" paddingY="5">
      <Flex justify="space-between" align={"center "}>
        <Box>
          <Flex direction="column">
            <Image src={Veerge} sizes="50px" alt="veerge_logo" />
            <Image src={MainStone} alt="mainstone" />
          </Flex>
        </Box>

        <Box>
          <Flex>
            <HStack spacing={7}>
              <Image
                src={Plus}
                width={25}
                height={25}
                alt="plus"
                className="cusor-pointer"
              />
              <Image
                src={Calendar}
                width={25}
                height={25}
                alt="calendar"
                className="cusor-pointer"
              />
              <Image
                src={Notification}
                width={25}
                height={25}
                alt="notification"
              />
            </HStack>
            <HStack spacing={2}>
              <Box marginLeft={"6"}>
                <Image src={User} width={25} height={25} alt="user" />
              </Box>
              <Text>Ahmed Ali</Text>
              <Image src={Dropdown} width={20} height={20} alt="dropdown" />
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
