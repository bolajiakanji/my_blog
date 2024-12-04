'use client'
import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import ProjectWrapper from '../context/projectWrapper'
import ClientBounding from '../context/clientBounding'

const ProjectPageWrapper = ({ children }: PropsWithChildren) => {
  const { isOverlayOpen } = useContext(ProjectWrapper)
  const  [element, setElement] = useState<HTMLDivElement | null>(null)
  const {currentBoundingClient, setCurrentBoundingClient  } = useContext(ClientBounding)
  

    const ref = useRef<HTMLDivElement>(null)
    
    
    useEffect(() => {
      setElement(ref.current)
      console.log(ref.current + 'number')
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
  useEffect(() => {
    
    setElement(ref.current)


    document.addEventListener('scroll', handleBoundingScroll)
    
    // return () => {
    //   document.removeEventListener('scroll', handleBoundingScroll)
  })
  const handleBoundingScroll = () => {
    

    const bounding = element?.getBoundingClientRect().top
    
    if (bounding && !(bounding <= 30)) {
      
        console.log(bounding + 'mybond')
        setCurrentBoundingClient('project')
      } 
      
    else {
      console.log(bounding + 'unde')
      }
  }


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