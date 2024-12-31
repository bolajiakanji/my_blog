"use client";

import useMenuToggling from "@/app/hooks/menuToggling";
import useNavbarWrapper from "@/app/hooks/navbarWrapper";
import useProjectWrapper from "@/app/hooks/projectWrapper";
import { Box, Button } from "@radix-ui/themes";

const Menu = () => {
  const { display, setDisplay, element } = useNavbarWrapper();
    const { setOpen } = useMenuToggling();
    const { setOverlayOpen } = useProjectWrapper()

  const close_1 = display === "flex" ? { translate: "-0px 8px" } : {};
  const close_3 = display === "flex" ? { translate: "1px -7px" } : {};

  const handleEvent = (e: MouseEvent) => {
    if (!element) return;
    const node = e.target as Node;
    if (!element.contains(node)) {
      setDisplay("hidden");
      setOpen(false);
    }
    document.removeEventListener("click", handleEvent);
  };

  const handleOnclick = () => {
    if (display === "hidden") {
      setDisplay("flex");
      setOpen(true);
      return document.addEventListener("click", handleEvent);
    } else {
      setDisplay("hidden");
        setOpen(false);
        setOverlayOpen(false)
    }
  };

  return (
    <Button
      variant="outline"
      radius="medium"
      onClick={() => handleOnclick()}
      className="md:hidden flex flex-col gap-1 p-1 "
    >
      <Box
        as="span"
        style={close_1}
        className={tailwindStyle(display, "-rotate-45")}
      ></Box>
      <Box as="span" className={tailwindStyle(display, "opacity-0")}></Box>
      <Box
        as="span"
        style={close_3}
        className={tailwindStyle(display, "rotate-45")}
      ></Box>
    </Button>
  );
};

type DisplayStyle = string | undefined;

const tailwindStyle = (display: DisplayStyle, style: string) =>
  `w-7 h-1 dark:bg-white bg-black light:bg-black cursor-pointer transition-all duration-500
 ${display === "flex" && style}`;

export default Menu;
