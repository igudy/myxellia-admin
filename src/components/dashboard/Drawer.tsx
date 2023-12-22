"use client";
import React from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Text,
  Box,
  Icon,
  Flex,
} from "@chakra-ui/react";
import CalendarComponent from "./CalendarComponent";
import { CiLock } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface CustomDrawerProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  onOpen,
  onClose,
  isOpen,
}) => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            width="full"
            bg={"#171717"}
            justify={"space-between"}
            alignItems={"center"}
            color="white"
            shadow={"lg"}
          >
            <Text p={"3"} fontWeight={"bold"}>
              Calendar
            </Text>
            <Icon
              as={IoMdClose}
              boxSize={"10"}
              onClick={onClose}
              cursor={"pointer"}
            />
          </Flex>

          <DrawerBody>
            <CalendarComponent />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default CustomDrawer;
