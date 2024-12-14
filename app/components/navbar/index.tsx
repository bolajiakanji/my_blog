import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import MyNameLogo from "./MyNameLogo";
import NavLink from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";
import NavbarWrapperProvider from "./NavbarWrapperProvider";

const Navbar = () => {
  return (
    <NavbarWrapperProvider>
      <Flex
        justify="between"
        className="fixed w-full py-3 z-50 sm:px-5 px-3 mb-4 overflow-hidden bg-white dark:bg-black"
      >
        <Box className="relative">
          <MyNameLogo />
        </Box>
        <NavLink />
        <Flex className="gap-2 md:gap-10 relative">
          <ThemeToggle />
          <Menu />
        </Flex>
      </Flex>
    </NavbarWrapperProvider>
  );
};

export default Navbar;
