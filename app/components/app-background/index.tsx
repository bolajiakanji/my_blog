import { Box } from "@radix-ui/themes";
import React from "react";

const AppBackground = () => {
  return (
    <Box className="relative left-0 top-0 w-full h-screen">
      <Box className=" dark:bg-bg_color w-full fixed h-screen">
        <Box className="dark:bg-black fixed w-full rounded-b-50% h-20vh z-1 "></Box>
        <Box className="dark:bg-black fixed w-full bottom-0 left-0 h-20 z-2"></Box>
<Box className="dark:bg-bg_color fixed bottom-10 w-52% h-44 rounded-b-50% z-4 "></Box>
        <Box className="dark:bg-black fixed bottom-10 right-0 rounded-t-50% z-5 w-1/2 h-20  "></Box>
      </Box>
    </Box>
  );
};

 export default AppBackground;
