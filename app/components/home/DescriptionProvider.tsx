'use client'

import MYDescription from "@/app/context/myDescription";
import useDescription from "@/app/hooks/myDescription";
import React, { PropsWithChildren, useState } from "react";

const DescriptionProvider = ({ children }: PropsWithChildren) => {
  const [ isDescriptionFull, setDescriptionFull ] = useState(false)
  return (
    <MYDescription.Provider value={{ isDescriptionFull, setDescriptionFull }}>
      {children}
    </MYDescription.Provider>
  );
};

export default DescriptionProvider;
