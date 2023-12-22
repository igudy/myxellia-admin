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
} from "@chakra-ui/react";
import CalendarComponent from "./CalendarComponent";

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
          <DrawerCloseButton />
          <DrawerHeader>Calendar</DrawerHeader>

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
