"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { Box, IconButton, Link, Text } from "@radix-ui/themes";
import imageUrl from "../../public/images/IMG-20241024-WA0019.jpg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@radix-ui/react-icons";

interface Props {
  tools: string[];
  sNumber: number;
}

export default function MobileAppCarousel({ tools, sNumber }: Props) {
  const [count, setCount] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const tot = tools.length + 1;

  const settings = {
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
      <Box
        className="flex p-0 w-auto my-auto -bottom-1 left-1/2"
      >
        <ul
          className="m-0 p-0 relative -left-1/2"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        as="span"
        className={`inline-block rounded-50% w-2 h-2 mx-0 px-0 ${i + 1 === count ? "bg-accentColor" : "bg-black"}`}
      ></Box>
    ),
    beforeChange: (c: number, n: number) => {
      setCount(n + 1);
    },
  };

  return (
    <div className="relative  ">
      <Slider ref={sliderRef} {...settings} className="h-44  ">
        <div className="h-44 ">
          <Link href={`/project/${sNumber}`}>
            <Image
              src={imageUrl}
              alt="project image"
              width={300}
              height={170}
              className="object-cover overflow-hidden w-full"
            />
          </Link>
        </div>

        {tools.map((tool) => (
          <div key={tool} className="  h-44 w-full ">
            <Link href={`/project/${sNumber}`}>
              <CldImage
                src={tool}
                alt="project image"
                fill={true}
                className="m-0 p-0 object-cover overflow-hidden"
              ></CldImage>
            </Link>
          </div>
        ))}
      </Slider>
      <Text
        as="span"
        className=" text-xs scale-75 absolute text-white bg-black p-1 top-2 right-2 rounded-50%"
      >
        {count}/{tot}
      </Text>
<Box className="absolute top-1/2 left-1/2">
        <IconButton
          variant="classic"
          size="3"
          className="opacity-75 relative top-1/2 -left-1/2  rounded-full "
        >
          <Link href={`/project/${sNumber}/dont`}>
            <PlayIcon
              width="22"
              height="22"
              className="text-white opacity-100 "
            />
          </Link>
        </IconButton>
      </Box>
      <IconButton
        size="1"
        className="absolute scale-75 top-1/2 left-1 bg-gray-600 rounded-full hover:scale-90 "
        onClick={(e) => {
          next();
          e.stopPropagation();
        }}
      >
        <ChevronLeftIcon width="22" height="22" className="text-white " />
      </IconButton>
      <IconButton
        size="1"
        className="absolute scale-75 top-1/2 right-1  bg-gray-600 rounded-full hover:scale-90"
        onClick={(e) => {
          previous();
          e.stopPropagation();
        }}
      >
        <ChevronRightIcon width="22" height="22" className="text-white" />
      </IconButton>
    </div>
  );
}
