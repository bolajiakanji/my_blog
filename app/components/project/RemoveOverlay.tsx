import useProjectWrapper from "@/app/hooks/projectWrapper";
import { Box, IconButton } from "@radix-ui/themes";
import React from "react";
import { Overlay } from ".";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

interface Props {
  setOverlay: (overlay: Overlay) => void;
}
const RemoveOverlay = ({ setOverlay }: Props) => {
  const { setOverlayOpen } = useProjectWrapper();

  return (
    <Box
      as="span"
      onClick={() => {
        setOverlay([]);
        setOverlayOpen(false);
      }}
      className="mt-16 pt-2 mb-3 md:mt-24 inline-block ms-5 rounded-full  md:ms-20% "
    >
      <IconButton size="2" variant="classic">
        <ArrowLeftIcon width={25} height={25} />
      </IconButton>
    </Box>
  );
};
export default RemoveOverlay;
