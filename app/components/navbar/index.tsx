"use client";

import { Box, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import MyName from "./components/MyName";
import NextLink from "next/link";
import MenuToggle from "./context/Wrapper";
import ClientBounding from "./context/clientBounding";
import Link from "next/link";

const nav_links: { label: string; value: string }[] = [
  { label: "home", value: "Home" },
  { label: "about-me", value: "About Me" },
  { label: "project", value: "Project" },
  { label: "certification", value: "Certification" },
  { label: "contact", value: "Contact" },
  
];

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const ref = useRef<HTMLDivElement>(null);
  
  const { currentBoundingClient } = useContext(ClientBounding);
  

  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setElement(ref.current);
  });

  return (
    <Flex
      justify="between"
      className="fixed  w-full py-3 sm:px-5 px-3 mb-4 overflow-hidden bg-white dark:bg-black "
      style={{ zIndex: "500" }}
    >
      <Box className="relative">
        <MyName />
      </Box>
      <NavLink display={display} ref={ref} setDisplay={setDisplay} />
      <Flex className="gap-2  md:gap-10 relative">
        <ThemeToggle />
        <Menu display={display} setDisplay={setDisplay} element={element} />
      </Flex>
    </Flex>
  );
};
