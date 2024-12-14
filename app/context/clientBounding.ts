"use client"

import React, { SetStateAction } from "react"

interface Wrap {
    currentBoundingClient: string;
    setCurrentBoundingClient: React.Dispatch<SetStateAction<string>>
}

const ClientBounding = React.createContext<Wrap>({} as Wrap)

export default ClientBounding
