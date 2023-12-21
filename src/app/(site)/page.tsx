import Overview from "@/components/dashboard/Overview";
import Welcome from "@/components/dashboard/Welcome";
import HomeLayout from "@/components/layouts/HomeLayout";
import Navbar from "@/components/navbar/Navbar";
import SecondNavbar from "@/components/navbar/SecondNavbar";
import { Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <HomeLayout>
        <Welcome />
        <Overview />
      </HomeLayout>
    </>
  );
};

export default page;
