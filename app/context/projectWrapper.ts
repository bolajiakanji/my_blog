"use client"

import React, { SetStateAction } from "react"

interface Wrap {
    isOverlayOpen: boolean;
    setOverlayOpen: React.Dispatch<SetStateAction<boolean>>
}

const ProjectWrapper = React.createContext<Wrap>({} as Wrap )

export default ProjectWrapper
