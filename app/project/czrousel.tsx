'use client'


import React from "react";
import Slider from 'react-slick';
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import { truncatePropDef } from "@radix-ui/themes/src/props/truncate.prop.js";
import { CldImage } from 'next-cloudinary'
import { Box } from "@radix-ui/themes";








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


export default function SimpleSlider({ tools }: {tools: string[]}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
      slidesToScroll: 1,
      
      waitForAnimate: true,
      useTransform: true,
      fade: true,
      autoplay: true
      
      
    
  };
  return (
    <Slider {...settings} className="h-72 w-full ">
      {tools.map((tool) => (
        <Box className="w-full" >
          <span className="h-2 w-2 " style={{borderRadius: '50%'}}></span>
          <span>{tool}</span>
        </Box>
      ))}
         </Slider>
  );
}