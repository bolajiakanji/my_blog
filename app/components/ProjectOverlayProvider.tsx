"use client";
import React, { PropsWithChildren, useState } from "react";

import ProjectWrapper from "../context/projectWrapper";

const ProjectWrapperProvider = ({ children }: PropsWithChildren) => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  return (
    <ProjectWrapper.Provider value={{isOverlayOpen, setOverlayOpen }}>
      {children}
    </ProjectWrapper.Provider>
  );
};

export default ProjectWrapperProvider;
