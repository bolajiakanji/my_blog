import { Box } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const Overlaywrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box className="fixed w-full left-0 top-0 dark:bg-bg_color bg-white bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md z-40 h-full overflow-hidden">
          <Box
        className="mx-auto  bg-bg_color w-full md:w-80% overflow-x-hidden h-screen"
          >
              {children}
          </Box>
    </Box>
  );
};

export default Overlaywrapper;
