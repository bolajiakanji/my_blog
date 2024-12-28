import { Box } from '@radix-ui/themes'
import React, { useEffect, useRef, useState } from 'react'

const ArrowDown = () => {
    const [showArrow, setShowArrow] = useState(false)
    const ref = useRef(null)
    useEffect(() => {

        document.addEventListener('scroll', () => {
            const element = document.querySelector('body');
            console.log((element?.scrollTop) + 'top')
            console.log(screen.height + 'screen')
        if (screen.height < -(element?.scrollTop)!) return setShowArrow(false)
        return setShowArrow(true)
        })
    })
  return (
      <Box
         ref={ref} 
          className={`flex justify-center mt-7 md:mt-20 animate-bounce h-8 md:h-10 ${showArrow ? 'hidden' : 'block'} max-mmd:landscape:hidden `}>
        <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
        <Box className="h-1 w-4 -rotate-45 bg-purple-600 "></Box>
      </Box>
  )
}

export default ArrowDown