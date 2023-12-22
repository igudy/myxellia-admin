"use client";
import React from "react";
import { Box, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import CustomDrawer from "../dashboard/Drawer";

import MainStone from "../../../public/images/icons/mainstone.svg";
import Veerge from "../../../public/images/icons/veerge.svg";
import Calendar from "../../../public/images/icons/nav-calendar.svg";
import Dropdown from "../../../public/images/icons/dropdown.svg";
import Notification from "../../../public/images/icons/notification.svg";
import Plus from "../../../public/images/icons/plus.svg";
import User from "../../../public/images/icons/user.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="black" color="white" paddingX="10" paddingY="5">
      <Flex justify="space-between" align="center">
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
                onClick={onOpen}
                className="cusor-pointer"
              />
              <Image
                src={Notification}
                width={25}
                height={25}
                alt="notification"
                className="cusor-pointer"
              />
            </HStack>
            <HStack spacing={2}>
              <Box marginLeft={"6"}>
                <Image
                  src={User}
                  width={25}
                  height={25}
                  alt="user"
                  className="cusor-pointer"
                />
              </Box>
              <Text>Ahmed Ali</Text>
              <Image
                src={Dropdown}
                width={20}
                height={20}
                alt="dropdown"
                className="cusor-pointer"
              />
            </HStack>
          </Flex>
        </Box>
      </Flex>

      <CustomDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  );
};

export default Navbar;
