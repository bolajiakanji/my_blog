"use client";

import React, { SetStateAction } from "react";
import { Overlay } from "../../project/MyProject";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import ProjectDetails from "./ProjectDetails";
import RemoveOverlay from "./RemoveOverlay";
import Overlaywrapper from "./Overlaywrapper";
import OverlayCard from "./OverlayCard";
import OverlayDetails from "./OverlayDetails";
import { Box } from "@radix-ui/themes";

export interface SetOverlay {
  setOverlay: React.Dispatch<SetStateAction<Overlay>>;
}

interface Props extends SetOverlay {
  overlayProject: Overlay;
}

const ProjectOverlay = ({ overlayProject, setOverlay }: Props) => {
  if (!overlayProject.length) return null;

  if (overlayProject[0]?.category === "mobile-app") {
    return (
      <Overlaywrapper>
        <RemoveOverlay setOverlay={setOverlay} />
        <OverlayCard>
          <CldVideoPlayer
            width="1620"
            height="1080"
            src="https://res.cloudinary.com/dlutiw9i4/video/upload/v1731143057/VID-20241103-WA0066_k4pxhx.mp4"
            autoplay={!overlayProject[1] ? true : false}
          ></CldVideoPlayer>
          <OverlayDetails project={overlayProject[0]} />
        </OverlayCard>
      </Overlaywrapper>
    );
  } else {
    return (
      <Overlaywrapper>
        <RemoveOverlay setOverlay={setOverlay} />
        <OverlayCard>
          <Box className="px-3">
          <CldImage
            src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
            alt="Description of my image"
            width="300"
            height="400"
            style={{ maxWidth: '420px', }}
            className="object-cover overflow-hidden w-full rounded-t-xl mx-auto md:rounded-t-xl h-44 md:h-48"
            ></CldImage>
            </Box>
          <OverlayDetails project={overlayProject[0]} />
        </OverlayCard>
      </Overlaywrapper>
    );
  }
};

export default ProjectOverlay;
