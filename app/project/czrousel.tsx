"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { Box, IconButton, Link, Text } from "@radix-ui/themes";
import int from "../public/images/IMG-20241024-WA0019.jpg";

import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "@radix-ui/react-icons";

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
interface Props {
  tools: string[];
  sNumber: number
}

export default function SimpleSlider({ tools, sNumber }: Props) {
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
        <ul style={{ margin: "0px", padding: "0px", position: 'relative', left: '-50%' }}
          onClick={(e) => { e.stopPropagation() }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <span
        className={`${
          i + 1 === count ? "bg-accentColor" : "bg-black"
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
        <Link href={`/project/${sNumber}`}>

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
            
            />
            </Link>
        </div>

        {tools.map((tool) => (

          <div className="  h-44 w-full ">
            <Link href={`/project/${sNumber}`}>
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
              </Link>
          </div>
        ))}
      </Slider>
      <Text
        as="span"
        style={{ borderRadius: '50%' }}
        className=" text-xs scale-75 absolute text-white bg-black p-1   top-2 right-2"
      >
        {count}/{tot}
      </Text>
      
      <Box className="absolute top-1/2 left-1/2">
        <IconButton variant='classic' size='3' className="opacity-75 relative top-1/2 -left-1/2  rounded-full " > 
      <Link href={`/project/${sNumber}/dont`}>
          <PlayIcon width='22' height='22' className="text-white opacity-100 "/>
        </Link>
        </IconButton> 
        </Box>
      <IconButton
        size='1'
        className="absolute scale-75 top-1/2 left-1 bg-gray-600 rounded-full hover:scale-90 "
        onClick={(e) => { next(); e.stopPropagation() }}
      >
        <ChevronLeftIcon width='22' height='22' className="text-white " />
      </IconButton>
      <IconButton
        size='1'
        className="absolute scale-75 top-1/2 right-1  bg-gray-600 rounded-full hover:scale-90"
        onClick={(e) => { previous(); e.stopPropagation() }}>
        <ChevronRightIcon width='22' height='22' className="text-white" />
      </IconButton>
    </div>
  );
}
