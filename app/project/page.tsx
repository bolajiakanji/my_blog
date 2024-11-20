"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
} from "@radix-ui/themes";
import React, { useState } from "react";
import pro, { Project } from "./projects";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import ExpandableText from "./ExpandableText";
import "next-cloudinary/dist/cld-video-player.css";
import Image from "next/image";

import SimpleSlider from "./czrousel";
import Link from "next/link";
import sty from "../public/images/IMG-20241024-WA0019.jpg";
import FilteringButtons from "./FilteringButtons";


interface Modal extends Project {
  visible: boolean;
}

const MyProject = () => {
  const [projects, setProject] = useState<Project[]>(pro);
  const [render, setRender] = useState('');

  const handleOnclick = (category: string | '') => {
    setProject(() => {
      setRender(category)
      if (!category) return pro
     return pro.filter((epre) => epre.category.includes(category))
    });
  };

  return (
    <Box className="mt-20   z-50 absolute left-0 w-full">
      <Box className="flex  gap-2 overflow-x-auto  mx-3">
        <FilteringButtons handleOnclick={handleOnclick} render={render} count={projects.length} />
        </Box>

      <Box className="relative">
        <Flex
          //columns={{ initial: "1", sm: "2", md: "3" }}
          
          gap="7"
          justify="center"
          className="   flex-wrap  "
          
        >
          {projects.map((project, index) => {
            if (project.category === "mobile-app") {
              return (
                
                  <Card
                    className={`p-0 sm:max-w-96  md:max-w-80 md:mx-0 lg:max-w-96` }
                    style={{width:'100%' }}
                    key={project.no}

                >
                  <Link
                  href={`/project/${index + 1}`}
                  
                >
                    <div className="ralative " style={{ width: "100%" }}>
                      <SimpleSlider tools={project.imageUrls} />
                    </div>
                    </Link>

                    <Heading as="h3" size="6">
                      {project.title}
                    </Heading>
                    {project.tools?.map((tool) => (
                      <Badge className="me-2"> {tool}</Badge>
                    ))}

                    <ExpandableText
                      description={project.description}
                    ></ExpandableText>
                    <Flex>
                      <Box></Box>
                      <Box></Box>
                    </Flex>
                  </Card>
                
              );
            }

            return (
              
                <Card
                  className={`p-0 sm:max-w-96 md:max-w-80 md:mx-0 lg:max-w-96 ` }
                style={{  width:'100%' }}
                key={project.no}
              >
                <Link
                href={`/project/${index + 1}`}
                
                
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
                      height: "170px",
                    }}
                  ></CldImage>
                  </Link>

                  <Heading as="h3" size="6">
                    {project.title}
                  </Heading>
                  {project.tools?.map((tool) => (
                    <Badge className="me-2"> {tool}</Badge>
                  ))}

                  <ExpandableText
                    description={project.description}
                  ></ExpandableText>
                  <Flex>
                    <Box></Box>
                    <Box></Box>
                  </Flex>
                </Card>
              
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default MyProject;
