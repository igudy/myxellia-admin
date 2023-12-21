import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import LineChartComponent from "./LineChart";

interface OverviewProps {}

const Overview = ({}: OverviewProps) => {
  return (
    <Box margin="6" padding="5" paddingY="10" bg="white" rounded="full">
      {/* Sales Overview */}
      <Flex>
        <Box padding="4" width="800px">
          <Flex justify="space-between">
            <Box>
              <Text fontWeight="bold">Sales Overview</Text>
              <Text>Showing overview Jan 21022 - Sep 2022</Text>
            </Box>
            <Box>
              <Input
                placeholder="View Transactions"
                size="lg"
                paddingRight="3.5rem"
              />
            </Box>
          </Flex>
          <Box color="gray.600" marginY="2" fontSize="sm">
            <Flex justifyContent="flex-end" textAlign="right" ml="auto">
              <Stack direction="row" spacing="5" alignItems="center">
                <Text>1 Week</Text>
                <Text>1 Month</Text>
                <Text bg="gray.300" paddingY="1" paddingX="5" rounded="full">
                  1 Year
                </Text>
              </Stack>
            </Flex>
          </Box>

          <Box width="full" height="2px" opacity="50" bg="gray.100"></Box>

          {/* Line Chart */}
          <LineChartComponent />
        </Box>

        {/* Property Overview */}
        <Box>
          <Flex direction={"column"}>
            <Box>
              <Text>Property Overview</Text>
            </Box>
            <Box>
              <Text>Customers Overview</Text>
            </Box>
          </Flex>
        </Box>

        {/* Customers Overview */}
      </Flex>
    </Box>
  );
};

export default Overview;
