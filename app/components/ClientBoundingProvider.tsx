"use client";
import React, { PropsWithChildren, useState } from "react";
import MenuToggle from "../context/menuWrapper";
import ClientBounding from "../context/clientBounding";
import { Box } from "@radix-ui/themes";

const ClientboundingProvider = ({ children }: PropsWithChildren) => {
  const [currentBoundingClient, setCurrentBoundingClient] = useState("home");
  return (
    <ClientBounding.Provider
      value={{ currentBoundingClient, setCurrentBoundingClient }}
    >
      {children}
    </ClientBounding.Provider>
  );
};

export default ClientboundingProvider;
