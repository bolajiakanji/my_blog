"use client";
import React, { PropsWithChildren, useState } from "react";
import ClientBounding from "../context/clientBounding";

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
