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
    <Flex gap={"4"} w={"full"} border={"1"} borderColor={"gray.200"}>
      <Flex direction="column" align={"center"} justify="center">
        <Text fontSize="20px" fontWeight="bold">
          {value}
        </Text>
        <Text>{avaliability}</Text>
      </Flex>
    </Flex>
  );
};
