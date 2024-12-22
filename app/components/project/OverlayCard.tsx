import { Box, Card } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const OverlayCard = ({ children }: PropsWithChildren) => {
  return (
    <Box className="w-full mx-auto ">
      <Box className="p-0 mx-auto  md:mt-3 ">
        {children}
      </Box>
    </Box>
  );
};

export default OverlayCard;
