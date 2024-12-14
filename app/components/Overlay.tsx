"use client";

import React, { useContext } from "react";
import MenuToggle from "../context/Wrapper";

const Overlay = () => {
  const { isOpen } = useContext(MenuToggle);

  if (isOpen) {
    return (
      <div
        style={{ backdropFilter: "blur(7px)" }}
        className="absolute z-40 bg-green-700 top-0 left-0 w-full h-full bg-transparent  "
      ></div>
    );
  }
  return null;
};

export default Overlay;
