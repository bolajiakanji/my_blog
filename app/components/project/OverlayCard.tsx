import { Box, Card } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const OverlayCard = ({ children }: PropsWithChildren) => {
  return (
    <Box className="w-full mx-auto md:w-65%">
      <Card className="p-0 mx-auto mt-3 " style={{ maxWidth: "420px" }}>
        {children}
      </Card>
    </Box>
  );
};

export default OverlayCard;
