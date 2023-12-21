"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";
import RightArrow from "../../../public/images/icons/rightGraph.svg";
import LeftArrow from "../../../public/images/icons/leftGraph.svg";

const data = [
  {
    name: "Jan",
  },
  {
    name: "Feb",
  },
  {
    name: "Mar",
  },
  {
    name: "Apr",
  },
  {
    name: "May",
  },
  {
    name: "Jun",
  },
  {
    name: "Jul",
  },
  {
    name: "Aug",
  },
  {
    name: "Sep",
  },
];

const LineChartComponent = () => {
  return (
    <Box mt="4">
      <Flex align="center">
        <Flex
          bg="gray.200"
          justifyContent={"center"}
          rounded="full"
          w="20px"
          h="20px"
        >
          <Image src={LeftArrow} alt="leftArrow" width="10" height="10" />
        </Flex>
        <Box>
          <LineChart
            width={350}
            height={250}
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
          </LineChart>
        </Box>
        <Flex
          bg="gray.200"
          justifyContent={"center"}
          rounded="full"
          w="20px"
          h="20px"
        >
          <Image src={RightArrow} alt="rightArrow" width="10" height="10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LineChartComponent;
