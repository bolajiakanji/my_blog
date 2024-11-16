'use client'


import React from "react";
import Slider from 'react-slick';
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import { truncatePropDef } from "@radix-ui/themes/src/props/truncate.prop.js";
import { CldImage } from 'next-cloudinary'
import { Badge, Box } from "@radix-ui/themes";








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

export default function SimpleSlider({ tools }: {tools: string[]}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 1,
    prevArrow: <Prev />,
    swipeToSlide: true,
    pauseOnHover: true,
    focusOnSelect: false,
    arrows: false
  
      
      
    
  };
  console.log(tools)
  return (
    <Slider {...settings} className="  relative ">
      {tools.map((tool) => (
        <Box key={tool}  className=" text-center ">
          <span className="inline-block w-2 h-2 me-2 bg-blue-800 " style={{borderRadius: '50%'}}></span>
          <Badge >{tool}</Badge>
        </Box>
      ))} 
         </Slider>
  );
}