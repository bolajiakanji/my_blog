import useProjectWrapper from '@/app/hooks/projectWrapper';
import { Box } from '@radix-ui/themes';
import React from 'react';
import { Overlay } from '.';

interface Props {
    setOverlay: ( overlay: Overlay) => void
}
const RemoveOverlay = ({ setOverlay }: Props) => {
    const { setOverlayOpen } = useProjectWrapper()
        
    return (
    <Box
        as='span'
        onClick={() => {
            setOverlay([]); setOverlayOpen(false);
        } }
        className="mt-10 inline-block z-50 text-xl text-white p-3 rounded-full bg-black"
    >
        <Box className="w-3 h-1"></Box>
        <Box className="w-3 h-1"></Box>
        <Box className="w-3 h-1"></Box>
    </Box>

)
}
export default RemoveOverlay