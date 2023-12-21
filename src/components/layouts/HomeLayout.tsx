import { Box } from "@chakra-ui/react";
import React from "react";

interface HomeLayoutProps {
  children: any;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Box bg="#FBFCFC">{children}</Box>;
};

export default HomeLayout;
