"use client"

import React, { SetStateAction } from "react"

interface MenuTogglingType {
    isOpen: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

const MenuToggling = React.createContext<MenuTogglingType>({} as MenuTogglingType )

export default MenuToggling
