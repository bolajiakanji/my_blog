"use client";

import { Box, Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { SunIcon, MoonIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { ThemePanel } from "@radix-ui/themes";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { setTheme, resolvedTheme, theme, themes } = useTheme();
  const ref = useRef<HTMLCanvasElement>(null);
  const [display, setDisplay] = useState("hidden");
  const ok = useRef<HTMLDivElement>(null)

  const [isMounted, setIsMounted] = useState(false);

  console.log(themes);

  useEffect(() => {
    setIsMounted(true);

    var s = ref.current!;

    var ctx = s.getContext("2d");
    var grd = ctx!.createLinearGradient(0, 0, 100, 0);
    grd.addColorStop(0, "#E93D82");
    grd.addColorStop(0.5, "#3DD68C");
    grd.addColorStop(1, "#0090FF");
    //ctx!.fillStyle = grd;````````
    //ctx!.fillRect(10, 10, 150, 80);

    ctx!.font = "  2.5rem Arials";
    ctx!.strokeStyle = grd;

    ctx!.strokeText("Bolaji", 0, 30);
    setIsMounted(true);
  }, []);
  const eventHandler = (e: MouseEvent) => {
    let d = ok?.current
    console.log('get here')
    console.log(e.currentTarget)
    console.log(ok.current)
    const y= e.target as Node
    if (d?.contains(y)) null
    else{
    setDisplay("hidden");
  }
    document.removeEventListener("click", eventHandler);
  };

  const handleOnclick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void => {
    e.stopPropagation();

    if (display === "hidden") {
      setDisplay("flex");

      return document.addEventListener("click", eventHandler);
    }

    return setDisplay("hidden");
  };

  return (
    <>
      <Box className="relative bg-rd-400 py-5 sm:px-5 px-3 flex z-20 justify-between h-24">
        

        <Box className="flex gap-32 ">
          
          
          <Box ref={ok}>
          

          
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

        
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="z-40">
            <Button variant="solid">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
          <Box  onClick={e => handleOnclick(e)} className="  p-2 md:hidden flex flex-col gap-1  ">
            
          <Box className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${display === 'flex' && ' origin-right -rotate-45 '} `} ></Box>
          <Box className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${display === 'flex' && 'opacity-0' } `}></Box>
          <Box className={`w-6 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500 ${display === 'flex' && 'origin-right  rotate-45 '} `}></Box>

        </Box>

        </Box>

      </Box>
    </>
  );
};


const MyName = () => {
  return (
    <Box>
          <canvas
            ref={ref}
            className="z-50"
            id="myCanvas"
            width="100%"
            height="40"
            style={{ border: "none", zIndex: 30 }}
          />
    </Box>
  )
    
  
}

export default Navbar;

