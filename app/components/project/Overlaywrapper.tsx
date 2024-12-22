import { Box } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const Overlaywrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box className="fixed w-full left-0 top-1  dark:bg-bg_color bg-white bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md z-50 h-full ">
          <Box
        className="mx-auto md:mt-20 bg-bg_color w-full md:w-80% overflow-hidden md:overflow-auto h-screen"
          >
              {children}
          </Box>
    </Box>
  );
};

export default Overlaywrapper;
