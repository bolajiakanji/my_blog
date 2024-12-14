"use client"

import React, { SetStateAction } from "react"

type Element = HTMLDivElement | null
 
interface Wrapper {
    element: Element;
    setElement: React.Dispatch<SetStateAction<Element>>;
    display: string;
    setDisplay: React.Dispatch<SetStateAction<string>> 

}

const NavbarWrapper = React.createContext<Wrapper>({} as Wrapper )

export default NavbarWrapper
