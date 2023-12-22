import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  width: any;
}

// export const Card = ({ children, width }: CardProps) => {
//   return (
//     <Box bg="white" p="5" rounded={"lg"} boxShadow="lg" w={`${width}`}>
//       {children}
//     </Box>
//   );
// };

interface PropertyCardProps {
  value: String;
  avaliability: string;
}

export const PropertyCard = ({ value, avaliability }: PropertyCardProps) => {
  return (
    <Flex
      gap={"6"}
      w={"full"}
      marginX={"4"}
      paddingY="20px"
      border={"1px"}
      borderRadius={"xl"}
      alignItems={"center"}
      justify={"center"}
      borderColor={"gray.200"}
    >
      <Flex direction="column" align={"center"} justify="center">
        <Text fontSize="24px" fontWeight="bold">
          {value}
        </Text>
        <Text color={"#606060"} fontSize={"14px"}>
          {avaliability}
        </Text>
      </Flex>
    </Flex>
  );
};
