'use client'

import { Box } from '@radix-ui/themes'
import React, { useEffect, useRef, useState } from 'react'

const ArrowDown = () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [ini, setini] = useState(0);

    const [showArrow, setShowArrow] = useState(true)
    const ref = useRef(null)

    let initialbounding: number 

    
    // useEffect(() => {
    //     setElement(ref.current);
    //     setini(element?.getBoundingClientRect().top!)
  
    // })

    useEffect(() => {
setElement(ref.current)
const bounding = element?.getBoundingClientRect().top;
        element?.addEventListener("scroll", () => {
            if (((bounding!) + 80) < (element?.scrollTop)!) return setShowArrow(true)
                return setShowArrow(false)
    
        });

    //return () => document.removeEventListener("scroll", handleScroll)
        
        
        
    })

    const handleScroll = () => {
        //console.log(bounding + 'bounding')
        
    
        if ( (20)< (element?.scrollTop)!) return setShowArrow(true)
            return setShowArrow(false)
          
          
        
      };
  return (
      <Box
         ref={ref} 
          className={`justify-center mt-7 md:mt-20 animate-bounce h-8 md:h-10 ${showArrow ? 'flex md:landscape:flex' : 'hidden md:landscape:hidden'} landscape:hidden  `}>
        <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
        <Box className="h-1 w-4   -rotate-45 bg-purple-600 "></Box>
      </Box>
  )
}

export default ArrowDown