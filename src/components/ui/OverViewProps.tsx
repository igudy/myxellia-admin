import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface OverViewProps {
  price: string;
  tag: string;
  imageProp: any;
  percentage: string;
  color: string;
  subPrice: string;
  subColor: string;
}

const OverViewProps = ({
  price,
  tag,
  imageProp,
  percentage,
  color,
  subPrice,
  subColor,
}: OverViewProps) => {
  return (
    <Box
      w="185px"
      h="90px"
      p="10px"
      border="1px"
      borderColor="gray.300"
      m="10px"
      rounded="lg"
      pt="17px"
    >
      <Text mb="10px" color={`${color}`} fontWeight="bold" fontSize="lg">
        {price}
        <Text as={"span"} color={`${subColor}`}>
          {subPrice}
        </Text>
      </Text>
      <Flex fontSize="">
        <Text fontSize="12px" fontWeight="semibold" mr="10px">
          {tag}
        </Text>

        <Flex align="center">
          <Image src={imageProp} alt={tag} width={17} height={17} />
          <Text fontSize="12px" ml="4px">
            {percentage}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OverViewProps;
