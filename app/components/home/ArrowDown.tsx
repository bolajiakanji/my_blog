"use client";

import { Box } from "@radix-ui/themes";
import React, { useEffect, useRef, useState } from "react";

const ArrowDown = () => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [ini, setini] = useState(0);

  const [showArrow, setShowArrow] = useState(true);
  const ref = useRef(null);

  let initialbounding: number;

  // useEffect(() => {
  //     setElement(ref.current);
  //     setini(element?.getBoundingClientRect().top!)

  // })

  useEffect(() => {
    setElement(ref.current);
      const bounding = element?.getBoundingClientRect().top;
      console.log('herr')

      document.addEventListener("scroll", () => {
        handleScroll(bounding)
    });

    return () => document.removeEventListener("scroll", () => handleScroll(bounding))
  });

    const handleScroll = (bounding:number | undefined) => {
        console.log('there')

          if (bounding) {
            console.log('enter')
              console.log(bounding + 'oknow')
              console.log(element?.getBoundingClientRect().top + 'ok2')
              const innerbound = element?.getBoundingClientRect().top
              
            if ( innerbound &&  bounding && (bounding + 200) > (-1 * innerbound )) {
                console.log('metop')
                setShowArrow(false)
            } else { 
                console.log('youtop')

             setShowArrow(true)
        };
      }}
    ;
  return (
    <Box
      ref={ref}
      className={`justify-center mt-7 md:mt-20 animate-bounce h-8 md:h-10 ${
        showArrow ? "flex md:landscape:flex" : "hidden md:landscape:hidden"
      } landscape:hidden  `}
    >
      <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
      <Box className="h-1 w-4   -rotate-45 bg-purple-600 "></Box>
    </Box>
  );
};

export default ArrowDown;
