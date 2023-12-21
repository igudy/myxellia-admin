import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface OverViewProps {
  price: string;
  tag: string;
  imageProp: any;
  percentage: string;
  color: string;
}

const OverViewProps = ({
  price,
  tag,
  imageProp,
  percentage,
  color,
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
      </Text>
      <Flex fontSize="">
        <Text fontSize="12px" fontWeight="semibold" mr="20p x">
          {tag}
        </Text>

        <Flex align="center">
          <Image src={imageProp} alt={tag} width={20} height={20} />
          <Text fontSize="12px" ml="4px">
            {percentage}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OverViewProps;
