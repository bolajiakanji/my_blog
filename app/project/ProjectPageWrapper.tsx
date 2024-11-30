'use client'
import React, { PropsWithChildren, useContext, useEffect, useRef } from 'react'
import ProjectWrapper from '../context/projectWrapper'

const ProjectPageWrapper = ({ children }: PropsWithChildren) => {
   const {isOverlayOpen } = useContext(ProjectWrapper)

    const ref = useRef<HTMLDivElement>(null)
    const element = ref.current
    
    useEffect(() => {
        if (isOverlayOpen) {
          element?.addEventListener('scroll',handleEvent )
          element?.addEventListener('wheel',handleEvent  )
          element?.addEventListener('touchmove',handleEvent  )
          element?.addEventListener('scroll', handleScroll  )
        } else {
      remove()  

        }
        return remove
    }, [isOverlayOpen])

     const handleScroll = () => {
         element?.scrollTo(0, 0)
     }
    const handleEvent = ( e: Event)=> {
        e.preventDefault()
        
    }
    const remove = () => {
        element?.removeEventListener('scroll', handleScroll  )
        element?.removeEventListener('scroll',handleEvent )
        element?.removeEventListener('wheel',handleEvent)
        element?.removeEventListener('touchmove',handleEvent  ) 
  }

  return (
    <div ref={ref} className={` z-50 w-full  mt-20 relative  ${isOverlayOpen ? "w-full overflow-hidden  " : "overflow-auto "
      }`}
>{children}</div>
  )
}

export default ProjectPageWrapper