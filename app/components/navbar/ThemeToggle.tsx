'use client'

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { setTheme } = useTheme();
  
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="z-40">
          <Button variant="solid" radius="medium">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="">
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
  
export default ThemeToggle
  