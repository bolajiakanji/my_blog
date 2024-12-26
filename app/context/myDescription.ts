"use client"

import React, { SetStateAction } from "react"

interface MYDescriptionType {
    isDescriptionFull: boolean;
    setDescriptionFull: React.Dispatch<SetStateAction<boolean>>
}

const MYDescriptionType = React.createContext<MYDescriptionType>({} as MYDescriptionType )

export default MYDescriptionType
