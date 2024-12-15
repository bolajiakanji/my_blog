import { Box } from "@radix-ui/themes";
import React from "react";

const AppBackground = () => {
  return (
    <Box className="relative left-0 top-0 w-full h-screen">
      <Box className=" dark:bg-bg_color w-full fixed h-screen">
        <Box className="dark:bg-black fixed w-full rounded-b-50% h-20vh z-1 "></Box>
        <Box className="dark:bg-black fixed w-full bottom-0 left-0 h-25vh z-2"></Box>
<Box className="dark:bg-bg_color fixed  w-52% mmd:w-1/2 rounded-b-50% z-4 h-40vh mt-45vh"></Box>
        <Box className="dark:bg-black fixed bottom-0 right-0 rounded-t-50% z-5 w-55% h-44 mmd:h-35vh "></Box>
      </Box>
    </Box>
  );
};

export default AppBackground;
