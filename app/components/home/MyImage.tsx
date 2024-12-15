import React from 'react'
import Image from 'next/image'
import imageUrl from "../../public/images/IMG_20241025_084608_312.png";
import { Box } from '@radix-ui/themes';


const MyImage = () => {
  return (
    <Box className="mx-auto z-20 w-width_image md:w-full">
      <Image
        src={imageUrl}
        alt=""
        className="object-cover w-full mt-11 border-b-8 rounded-50% border-purple-800 md:lg:h-he md:h-96"
      />
    </Box>
  )
}

export default MyImage