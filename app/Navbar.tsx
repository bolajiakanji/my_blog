"use client";

import { Box, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React, {
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const ref = useRef<HTMLDivElement>(null);
  const element = ref.current;
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createCanvas(canvas.current);
  }, []);

  return (
    <>
      <Box className="relative bg-rd-400 py-5 sm:px-5 px-3 flex z-20 justify-between h-24">
        <Box className="flex gap-32 ">
          <Box>
            <MyName ref={canvas} />
          </Box>
          <Box>
            <ThemeToggle />
            <Menu display={display} setDisplay={setDisplay} element={element} />
            <NavLink display={display} ref={ref} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

interface Display {
  display: string;
}

const MyNameForwardRef: ForwardRefRenderFunction<HTMLCanvasElement> = ({}, ref) => {

  return (
    <Box>
      <canvas
        ref={ref}
        width="100%"
        height="40"
        style={{ border: "none", zIndex: 30 }}
      />
    </Box>
  );
};

const MyName = React.forwardRef(MyNameForwardRef);

const NavLinkForwardRef: ForwardRefRenderFunction<HTMLDivElement, Display> = (
  { display },
  ref
) => {
  return (
    <Box ref={ref}>
      <ul
        className={`absolute bg-black md:bg-inherit flex mx-auto gap-y-5 flex-col top-16 left-0 w-full   ${display} lg:flex lg:flex-row lg:gap-20 lg:static`}
      >
        <li>
          <a href="#" className="active mx-">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="align">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-center">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="">
            Contact
          </a>
        </li>
      </ul>
    </Box>
  );
};

const NavLink = React.forwardRef(NavLinkForwardRef);

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="z-40">
        <Button variant="solid">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

interface MenuProps extends Display {
  setDisplay: (display: string) => void;
  element: HTMLDivElement | null;
}

const Menu = ({ display, setDisplay, element }: MenuProps) => {
  element;
  const eventHandler = (e: MouseEvent) => {
    if (!element) return;
    const node = e.target as Node;
    if (element.contains(node)) null;
    else {
      setDisplay("hidden");
    }
    document.removeEventListener("click", eventHandler);
  };

  const handleOnclick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();

    if (display === "hidden") {
      setDisplay("flex");
      return document.addEventListener("click", eventHandler);
    }
    return setDisplay("hidden");
  };

  return (
    <Box
      onClick={(e) => handleOnclick(e)}
      className="  p-2 md:hidden flex flex-col gap-1  "
    >
      <Box
        className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && " origin-right -rotate-45 "
        } `}
      ></Box>
      <Box
        className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && "opacity-0"
        } `}
      ></Box>
      <Box
        className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && "origin-right  rotate-45 "
        } `}
      ></Box>
    </Box>
  );
};

const createCanvas = (element: HTMLCanvasElement | null) => {
  const ctx = element?.getContext("2d");
  if (!ctx) return;
  var grd = ctx.createLinearGradient(0, 0, 100, 0);
  grd.addColorStop(0, "#E93D82");
  grd.addColorStop(0.5, "#3DD68C");
  grd.addColorStop(1, "#0090FF");
  ctx.font = "  2.5rem Arials";
  ctx.strokeStyle = grd;
  ctx.strokeText("Bolaji", 0, 30);
};

export default Navbar;
