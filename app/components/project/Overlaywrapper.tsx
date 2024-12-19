import { Box } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const Overlaywrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box className="fixed w-full left-0 top-3 dark:bg-bg_color bg-white bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md z-50 h-full ">
      <Box className="relative">{children}</Box>
    </Box>
  );
};

export default Overlaywrapper;
