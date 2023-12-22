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
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default CustomDrawer;
