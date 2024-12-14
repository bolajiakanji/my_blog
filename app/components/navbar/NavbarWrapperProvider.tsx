'use client'

import React, { PropsWithChildren, useState } from 'react'
import NavbarWrapper from '@/app/context/navbarWrapper'

const NavbarWrapperProvider = ({ children }: PropsWithChildren) => {
    const [element, setElement] = useState<HTMLDivElement | null>(null)
    const [display, setDisplay] = useState('hidden')
    
  return (
      <NavbarWrapper.Provider value={{ element, setElement, display, setDisplay }}>
          {children}
      </NavbarWrapper.Provider>
  )
}

export default NavbarWrapperProvider