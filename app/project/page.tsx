"use client";

import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import React, { useContext, useState } from "react";
import pro, { Project } from "./projects";
import { CldImage } from "next-cloudinary";
import ExpandableText from "./ExpandableText";
import "next-cloudinary/dist/cld-video-player.css";

import SimpleSlider from "./czrousel";
import Link from "next/link";
import FilteringButtons from "./FilteringButtons";
import ProjectOverlay from "./ProjectOverlay";
import ProjectPageWrapper from "./ProjectPageWrapper";
import ProjectWrapper from "../context/projectWrapper";



// interface Modal extends Project {
//   visible: boolean;
// }
export type Overlay = [Project, string?] | []

const MyProject = () => {
  const [projects, setProject] = useState<Project[]>(pro);
  const [render, setRender] = useState('');
  const [overlay, setOverlay] = useState<Overlay>([]);
  const {setOverlayOpen } = useContext(ProjectWrapper)

  

  const handleOnclick = (category: string | '') => {
    setProject(() => {
      setRender(category)
      if (!category) return pro
     return pro.filter((epre) => epre.category.includes(category))
    });
  };

  return (
    <ProjectPageWrapper>
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
          {projects.map((project) => {
            if (project.category === "mobile-app") {
              return (
                
                  <Card
                    className={`p-0 mx-3 sm:max-w-96  md:max-w-80 md:mx-0 lg:max-w-96` }
                    style={{width:'100%' }}
                    key={project.no}

                >
                  
                    <div className="ralative " style={{ width: "100%" }}>
                      <SimpleSlider tools={project.imageUrls} sNumber={project.no} />
                    </div>
                    
<Box className="mt-7 mx-5 ">
                    <Heading as="h3" className="my-2 text-black dark:text-white " >
                      {project.title}
                    </Heading>
                    <ExpandableText
                      description={project.description}
                      limit={40}
                    ></ExpandableText>
                    <Text onClick={() => { setOverlay([project, 'autoplay']), setOverlayOpen(true) }} >ok</Text>
                        <Box className="mt-7">
                    {project.tools?.map((tool) => (
                        <Badge key={tool}  className="me-2"> {tool}</Badge>
                      ))}
                      </Box>
                    <Flex>
                      <Box></Box>
                      <Box></Box>
                    </Flex>
                    </Box>
                  </Card>
                
              );
            }

            return (
              
                <Card
                  className={`p-0 mx-3 sm:max-w-96 md:max-w-80 md:mx-0 lg:max-w-96 ` }
                style={{  width:'100%' }}
                key={project.no}
              >
                <Link
                href={`/project/${project.no}`}
                
                
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
                      height: "180px",
                    }}
                  ></CldImage>
                  </Link>

                  <Heading as="h3" size="6">
                    {project.title}
                  </Heading>
                  {project.tools?.map((tool) => (
                    <Badge key={tool} className="me-2"> {tool}</Badge>
                  ))}
                <Text onClick={() => { setOverlay([project]), setOverlayOpen(true) }}>{project.no }</Text>
                    

                <ExpandableText 
                  limit={20}
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
      </Box >
      <Box >
        <ProjectOverlay overlayProject={overlay} setOverlay={setOverlay} />
        </Box>
    </ProjectPageWrapper>
  );
};

export default MyProject;
