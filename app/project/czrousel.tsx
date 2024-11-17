'use client'


import React, { useState } from "react";
import Slider from 'react-slick';
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import { truncatePropDef } from "@radix-ui/themes/src/props/truncate.prop.js";
import { CldImage } from 'next-cloudinary'
import { Badge, Box } from "@radix-ui/themes";
import int from '../public/images/IMG-20241024-WA0019.jpg'








type ImageCarouselProps = {
  images: StaticImageData[];
};


// const ImageCarousel = ({ images }: ImageCarouselProps) => {
//     return (
      
//         <>
//     <Carousel
//       infiniteLoop
//       showThumbs={false}
//       showStatus={false}
//           className="image-carousel"
//           autoPlay={true}
//     >
//       {images.map((image, i) => (
//         <div
//           className="image-carousel__image-container w-full h-52 "
//           key={`carousel-img-${i}`}
//         >
//           <Image
//             src={image}
//             alt={`carousel image ${i}`}
        
            
//             style={{
//                 objectFit: "cover",
//                 width: '300px',
//                 height: 'auto'
                
//             }}
//           />
//         </div>
//       ))}
//             </Carousel>

            


//             </>
//   );
// };
      
// export default ImageCarousel


// export default function SimpleSlider({ images }: ImageCarouselProps) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 200,
//     slidesToShow: 1,
//       slidesToScroll: 1,
      
//       waitForAnimate: true,
//       useTransform: true,
//       fade: true,
//       autoplay: true
      
      
    
//   };
//   return (
//     <Slider {...settings} className="h-72  ">
//       <div className="bg-yellow-500 ">
//       <Image
//                   src={ images[0]}
//        alt='jh'
        
            
//           style={{
//              objectFit: "cover",
//                 width: '100%',
//                 height: '18rem'
                
//              }}
//            />
//       </div>
//       <div>
//         <h3 className="text-center bg-lime-700 h-72">2</h3>
//       </div>
//       <div>
//       <Image
//                   src={ images[1]}
//        alt='ju'
        
            
//           style={{
//              objectFit: "cover",
//                 width: '100%',
//                 height:'18rem'
                
//              }}
//            />

//       </div>
//       <div>
//       <CldImage
//      width="960"
//      height="600"
//      src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
//      sizes="100vw"
//                   alt="Description of my image"
//                   style={{
//                     objectFit: "cover",
//                        width: '100%',
//                        height:'18rem'
                       
//                     }}
       
//          ></CldImage>
//       </div>
//       <div>
//       <CldImage
//      width="960"
//      height="300"
//      src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347045/IMG-20241030-WA0193_xxdout.jpg"
//      sizes="100vw"
//                   alt="Description of my image"
//                   style={{
//                     objectFit: "cover",
//                        width: '100%',
//                        height:'18rem'
                       
//                     }}
       
//          ></CldImage>
//       </div>
//       <div>
//         <h3 className="text-center">6</h3>
//       </div>
//     </Slider>
//   );
// }

function Prev(props: React.ComponentProps<'div'>) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} dark:bg-green-600`}
      style={{ ...style, display: 'block',backgroundColor:'red' }}
      onClick={onClick}
    >
bo
    </div>
  )
}

export default function SimpleSlider({ tools }: { tools: string[] }) {
  const [count, setCount] = useState(0)
  
  const tot = tools.length + 1
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    
    
    swipeToSlide: true,
    pauseOnHover: true,
    
    beforeChange: (c: number, n: number) => {
      setCount(n + 1)
    }
    
  
      
      
    
  }
  console.log(tools)
  return (
    <div className="relative ">
      
      <Slider {...settings} className="  relative overflow-hidden h-28 " >
      <div className=" ">
      <Image
     
     src={int}
     
                      alt="Description of my "
                      width={300}
                  height={170}
                  style={{
                    objectFit: "cover",
                       
                      
                      overflow: 'hidden',
                      

                    width: '100%',
                    
                    
                    
                    
                    
                      
                       
                       
            }}
            className="h-28"
       
          ></Image>
          </div>
        

        {tools.map((tool) => (
          <div className="  h-28 w-full ">
            <CldImage
     
          src={tool}
        
                         alt="Loading other images ..."
             // width='500'
              //height='500'   
              fill={true} 
          className=""    
                     style={{
                       
                          
                         
                         overflow: 'hidden',
                         borderRadius: '10px',
   
                       
                       objectFit: 'cover',
                       marginBottom: '0px',
                       paddingBottom: '0px'
                       
                       
                       
                       
                       
                         
                          
                          
                       }}
          
                   ></CldImage>
            </div>

      ))} 
    </Slider>
      <div className="bg-red-700">{count}/{tot}</div>
    </div>

  );
}