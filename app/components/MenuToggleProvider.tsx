"use client";
import React, { PropsWithChildren, useState } from "react";
import MenuToggle from "../context/menuWrapper";

const MenuToggleProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <MenuToggle.Provider value={{ isOpen, setOpen }}>
      {children}
    </MenuToggle.Provider>
  );
};

export default MenuToggleProvider;
