"use client";

import useDescription from "@/app/hooks/myDescription";
import { Box } from "@radix-ui/themes";
import React, { useEffect, useRef, useState } from "react";

const ArrowDown = () => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [showArrow, setShowArrow] = useState(true);
  const ref = useRef(null);
  const { isDescriptionFull } = useDescription();

  useEffect(() => {
    setElement(ref.current);
    const prevscroll = window.scrollY;
    if (!isDescriptionFull) {
      window.onscroll = () => {
        const currentscroll = window.scrollY;
        if (prevscroll + 100 < currentscroll) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      };
    }
  }, []);
  if (isDescriptionFull)
    return (
      <Box
        ref={ref}
        className={`justify-center mt-7 md:mt-20 animate-bounce h-24 md:h-28 ${
          showArrow ? "hidden lg:flex" : "hidden"
        }   `}
      >
        <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
        <Box className="h-1 w-4   -rotate-45 bg-purple-600 "></Box>
      </Box>
    );

  return (
    <Box
      ref={ref}
      className={`justify-center mt-12 md:mt-20 animate-bounce h-24 md:h-28 ${
        showArrow
          ? `${
              window.innerHeight < 610
                ? "hidden md:landscape:flex"
                : "flex md:landscape:flex"
            }`
          : "hidden md:landscape:hidden"
      } landscape:hidden  `}
    >
      <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
      <Box className="h-1 w-4   -rotate-45 bg-purple-600 "></Box>
    </Box>
  );
};

export default ArrowDown;
