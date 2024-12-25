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
          document.querySelector('body')!.style.overflow='inherit'
    document.querySelector('body')!.style.height='100%'
      }}
      className="mt-16 pt-1 mb-1 md:mt-2 inline-block ms-2 md:ms-8 rounded-full "
    >
      
        <ArrowLeftIcon width={40} height={30} className="text-accentColor"/>
      
    </Box>
  );
};
export default RemoveOverlay;
