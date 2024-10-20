"use client";

import { Box, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Link } from "./components";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const ref = useRef<HTMLDivElement>(null);
  const element = ref.current;
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createCanvas(canvas.current);
  }, []);

  return (
    <Flex justify='between' className="fixed w-full bg-rd-400 py-5 sm:px-5 px-3  z-40 mb-3 overflow-hidden ">
        <Box className="relative">
            <MyName ref={canvas} />
        </Box>
        <NavLink display={display} ref={ref} />
          <Flex className="gap-2  md:gap-10 relative">
            <ThemeToggle />
            <Menu display={display} setDisplay={setDisplay} element={element} />
          </Flex>
        </Flex>
       );
};

interface Display {
  display: string;
}

const MyNameForwardRef: ForwardRefRenderFunction<HTMLCanvasElement> = (
  {},
  ref
) => {
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

const ListItem = ({ children }: PropsWithChildren) => {
  return (
    <li>
      <Link href="#">{children}</Link>
    </li>
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
        className={`fixed bg-black md:bg-inherit flex mx-auto gap-y-5 flex-col top-20 left-0 w-full text-center    ${display} md:flex md:flex-row md:gap-14 lg:gap-20 md:static`}
      >
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Contact</ListItem>
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
  const close_1 = display === 'flex' ? { translate: '-0px 8px'} : {}
  const close_3 = display === 'flex' ? { translate: "1px -7px"} : {}
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
    <Button
      variant="outline"
      
      onClick={(e) => handleOnclick(e)}
      className="   md:hidden flex flex-col gap-1 p-1 "
    >
      
      <Box as="span" style={close_1}
        className={`w-7 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && "-rotate-45 "} `}
      ></Box>
      <Box as="span"
        className={`w-7 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && "opacity-0"
        } `}
      ></Box>
      <Box as="span" style={close_3}
        className={`w-7 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${
          display === "flex" && " rotate-45 "
        } `}
        >
          </Box>
      
    </Button>
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
