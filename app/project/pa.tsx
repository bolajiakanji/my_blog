'use client'

import SimpleSlider  from "./czrousel"
import image_1 from '../public/images/IMG-20241024-WA0019.jpg'
import image_2 from '../public/images/IMG-20241024-WA0029 (1).jpg'
import image_3 from '../public/images/web_srcimg_loginbg.png'



// import { CldImage } from 'next-cloudinary'
// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <div>
//         <CldImage
//     width="960"
//     height="600"
//     src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
//     sizes="100vw"
//     alt="Description of my image"
//         ></CldImage> </div>
      
const images = [
  image_1,
  image_2,
  image_3
]
export default function () {
  return (
    <>
      <div className="mt-20  z-50 absolute  left-0 w-full  "
      style={{ zIndex: "15" }}
      >
        <div className="relative w-5/6 mx-auto h-72 mb-20 pb-20">
          <SimpleSlider images={ images} />
          </div>
          <div>where is my div</div>
      </div>

    </>
  )
}
