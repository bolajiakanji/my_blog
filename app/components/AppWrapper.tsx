"use client";
import React, { PropsWithChildren, useContext, useEffect, useRef, } from "react";
import MenuToggle from "../context/Wrapper";




const AppWrapper = ({ children }: PropsWithChildren) => {
    const { isOpen } = useContext(MenuToggle);
    const ref = useRef<HTMLDivElement>(null)
    const element = ref.current
    
    useEffect(() => {
        if (isOpen) {
//element?.addEventListener('scroll', handleScroll  )
element?.addEventListener('scroll',handleEvent )
element?.addEventListener('wheel',handleEvent  )
element?.addEventListener('touchmove',handleEvent  )
        } else {
      remove()  

        }
        return remove
    }, [isOpen])

    // const handleScroll = () => {
    //     element?.scrollTo(0, 0)
    // }
    const handleEvent = ( e: Event)=> {
        e.preventDefault()
        e.stopPropagation()
    }
    const remove = () => {
        //element?.removeEventListener('scroll', handleScroll  )
        element?.removeEventListener('scroll',handleEvent )
        element?.removeEventListener('wheel',handleEvent)
        element?.removeEventListener('touchmove',handleEvent  ) 
  }

    return (
      <div ref={ref} className="relative"  >
    <div
      style={{  }}
      className={` z-50 w-full ${
        isOpen ? "  " : " "
      }`}
    >
      {children}
            </div>
            </div>
  );
};

export default AppWrapper;
