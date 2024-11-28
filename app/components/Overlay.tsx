"use client";

import React, { useContext } from "react";
import MenuToggle from "../context/Wrapper";

const Overlay = () => {
  const { isOpen } = useContext(MenuToggle);

  if (isOpen) {
    return (
      <div
        style={{ backdropFilter: "blur(8px)" }}
        className="  top-0 left-0 w-full h-screen bg-green-800  "
      ></div>
    );
  }
  return null;
};

export default Overlay;
