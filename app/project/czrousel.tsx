"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import { truncatePropDef } from "@radix-ui/themes/src/props/truncate.prop.js";
import { CldImage } from "next-cloudinary";
import { Badge, Box, Button, IconButton, Text } from "@radix-ui/themes";
import int from "../public/images/IMG-20241024-WA0019.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Prev(props: React.ComponentProps<"div">) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} dark:bg-green-600`}
      style={{ ...style, display: "block", backgroundColor: "red" }}
      onClick={onClick}
    >
      bo
    </div>
  );
}
interface Ok {
  sliderRef: Slider | null;
}

export default function SimpleSlider({ tools }: { tools: string[] }) {
  const [count, setCount] = useState(1);
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const tot = tools.length + 1;
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,

    fade: true,

    swipeToSlide: true,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          padding: "0px",
          display: "flex",
          
          // position: 'absolute',
          bottom: '-3px',
          width:'auto',
          margin: "0px auto",
          
        
          left: '50%',
          
          

        }}
        
      >
        <ul style={{ margin: "0px", padding: "0px", position: 'relative', left: '-50%' }} onClick={(e)=>{e.stopPropagation()}}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <span
        className={`${
          i + 1 === count ? "bg-yellow-500" : "bg-gray-600"
        } mx-0 px-0`}
        style={{
          display: "inline-block",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
        }}
      ></span>
    ),
    beforeChange: (c: number, n: number) => {
      setCount(n + 1);
    },
  };
  console.log(tools);
  return (
    <div className="relative  ">
      <Slider ref={sliderRef} {...settings} className="   h-44  ">
        <div className="h-44 ">
          <Image
            src={int}
            alt="Description of my "
            width={300}
            height={170}
            style={{
              objectFit: "cover",

              overflow: "hidden",

              width: "100%",
            }}
            
          ></Image>
        </div>

        {tools.map((tool) => (
          <div className="  h-44 w-full ">
            <CldImage
              src={tool}
              alt="Loading other images ..."
              // width='500'
              //height='500'
              fill={true}
              className="m-0 p-0"
              style={{
                overflow: "hidden",
                

                objectFit: "cover",
                
              }}
            ></CldImage>
          </div>
        ))}
      </Slider>
      <Text
        as="span"
        style={{ borderRadius: '50%' }}
        className=" text-xs absolute text-white bg-gray-600 p-1   top-2 right-2"
      >
        {count}/{tot}
      </Text>
      <Box className="absolute top-1/2 left-1/2">
        <IconButton className="relative  -left-1/2 -top-1/2 " />
        </Box>
      <Box className="absolute top-1/2 left-1   bg-gray-600 text-center rounded-full" onClick={(e) => { next(); e.stopPropagation()}}>
        <ChevronLeft className="text-white  text-center" /></Box>
      <Box className="absolute top-1/2 right-1  bg-gray-600 rounded-full" onClick={(e) => { previous(); e.stopPropagation() }}>
        <ChevronRight className="text-white" /></Box>
    </div>
  );
}
