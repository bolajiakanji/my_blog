"use client";

import React, { useEffect, useState } from "react";
import pro, { Project } from "../projects";

import { Card, Heading, Badge } from "@radix-ui/themes";

import { CldImage, CldVideoPlayer } from "next-cloudinary";
import ExpandableText from "../ExpandableText";
import "next-cloudinary/dist/cld-video-player.css";

interface Props {
  params: { no: string[] };
}

const page = ({ params: { no} }: Props) => {
  const [modal, setModal] = useState({} as Project);
  useEffect(() => {
    for (const x of pro) {
      if (x.no === parseInt(no[0])) {
        setModal(x);
      }
    }
  }, []);

  if (no[0] === '1')
    return (
      <div className="mt-20 px-3  z-50 absolute left-0 w-full">
        <Card
          className="p-0 mx-auto "
          style={{ width: "100%", maxWidth: "420px" }}
        >
          <CldVideoPlayer
            width="1620"
                    height="1080"
                    
                
            src="https://res.cloudinary.com/dlutiw9i4/video/upload/v1731143057/VID-20241103-WA0066_k4pxhx.mp4"
          autoplay={!no[1] ? true : false }
                ></CldVideoPlayer>

          <Heading>{modal.title} </Heading>
          {modal.tools?.map((tool) => (
            <Badge className="me-2"> {tool}</Badge>
          ))}

          <ExpandableText description={modal.description} limit={20}></ExpandableText>
        </Card>
      </div>
    );

  return (
    <div className="mt-20 px-3  z-50 absolute left-0 w-full">
      <Card
        className="p-0 mx-auto "
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <CldImage
          src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
          alt="Description of my image"
          width="300"
          height="400"
          style={{
            objectFit: "cover",

            overflow: "hidden",

            width: "100%",
            height: "150px",
          }}
        ></CldImage>

        <Heading>{modal.title} </Heading>
        {modal.tools?.map((tool) => (
          <Badge className="me-2"> {tool}</Badge>
        ))}

        <ExpandableText description={modal.description} limit={20}></ExpandableText>
      </Card>
    </div>
  );
};

export default page;
