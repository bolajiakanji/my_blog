"use client"

import React, { SetStateAction } from "react"

interface Wrap {
    isOpen: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>
}


const MenuToggle = React.createContext<Wrap>({} as Wrap )

export default MenuToggle
