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
      className="pt-20 md:pt-20 fixed w-full pb-2 md:mt-2 inline-block ms-2 md:ms-8 max-mmd:dark:bg-bg_color max-mmd:bg-white"
    >
      
        <ArrowLeftIcon width={40} height={30} className="text-accentColor"/>
      
    </Box>
  );
};
export default RemoveOverlay;
