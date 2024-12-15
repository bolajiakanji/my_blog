"use client";

import { Box } from "@radix-ui/themes";
import ListItems from "./ListItems";
import { useEffect, useRef } from "react";
import React from "react";
import useNavbarWrapper from "@/app/hooks/navbarWrapper";

const NavLink = () => {
  const { display, setDisplay, setElement } = useNavbarWrapper();
  const ref = useRef(null);

  useEffect(() => {
    setElement(ref.current);
  });

  return (
    <Box ref={ref}>
      <ul className={navLinkStyle(display)}>
        <ListItems setDisplay={setDisplay} />
      </ul>
    </Box>
  );
};

const navLinkStyle = (display: string) => {
  return `fixed transition-all duration-1000 pe-5 md:me-0 bg-gray-300 dark:bg-black md:bg-inherit
    flex mx-auto gap-y-3 flex-col top-16 px-4 left-0 w-full text-center
    ${display} md:flex md:flex-row md:gap-0 lg:gap-10 md:static`;
};

export default NavLink;

// comment out for future purpose as it contain forwardref typescript syntax
// const NavLinkForwardRef: ForwardRefRenderFunction<HTMLDivElement, Display> = (
//     { display, setDisplay },

//   ) => {
//       const ref = useRef(null)
//       const { setElement } = useContext(NavbarWrapper)
//       useEffect(() => {
//           setElement(ref.current)
//       })

//     return (
//       <Box ref={ref}>
//         <ul
//           className={`fixed transition-all duration-1000 pe-5 md:me-0 bg-gray-300 dark:bg-black
//               md:bg-inherit  flex mx-auto gap-y-3 flex-col top-16 px-4 left-0 w-full text-center
//               ${display} md:flex md:flex-row md:gap-0 lg:gap-10 md:static`}
//         >
//           <ListItems setDisplay={setDisplay} />
//         </ul>
//       </Box>
//     );
//   };

//   const NavLink = React.forwardRef(NavLinkForwardRef);

//   export default NavLink;
