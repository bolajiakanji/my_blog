"use client";

import { Box, Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState } from "react";
import AllProjects, { Project } from "./project";
import MobileAppCarousel from "./MobileAppCarousel";
import ProjectOverlay from "./ProjectOverlay";
import ProjectPageWrapper from "./ProjectPageWrapper";
import FilteringButtons from "./FilteringButtons";
import useProjectWrapper from "@/app/hooks/projectWrapper";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "./ProjectCard";

export type Overlay = [Project, string?] | [];

const index = () => {
  const [projects, setProject] = useState<Project[]>(AllProjects);
  const [projectToRender, setProjectToRender] = useState("");
  const [overlay, setOverlay] = useState<Overlay>([]);
  const { setOverlayOpen } = useProjectWrapper();

  const handleOnclick = (category: string | "") => {
    setProject(() => {
      setProjectToRender(category);
      if (!category) return AllProjects;
      return AllProjects.filter((project) =>
        project.category.includes(category)
      );
    });
  };

  return (
    <>
      <ProjectPageWrapper>
        <Box className="flex gap-2 overflow-x-auto  mx-3">
          <FilteringButtons
            handleOnclick={handleOnclick}
            projectToRender={projectToRender}
            count={projects.length}
          />
        </Box>
        <Box className="relative mt-4">
          <Flex gap="7" justify="center" className="flex-wrap">
            {projects.map((project) => {
              if (project.category === "mobile-app") {
                return (
                  <ProjectCard project={project}>
                    <Box className="ralative w-full ">
                      <MobileAppCarousel
                        tools={project.imageUrls}
                        sNumber={project.no}
                      />
                    </Box>
                    <ProjectDetails
                      project={project}
                      setOverlay={setOverlay}
                      setOverlayOpen={setOverlayOpen}
                    />
                  </ProjectCard>
                );
              }

              return (
                <ProjectCard project={project}>
                  <Link href={`/project/${project.no}`}>
                    <CldImage
                      src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
                      alt="Description of my image"
                      width="300"
                      height="400"
                      className="object-cover overflow-hidden w-full h-180"
                    ></CldImage>
                  </Link>
                  <ProjectDetails
                    project={project}
                    setOverlay={setOverlay}
                    setOverlayOpen={setOverlayOpen}
                  />
                </ProjectCard>
              );
            })}
          </Flex>
        </Box>
      </ProjectPageWrapper>
      <Box>
        <ProjectOverlay overlayProject={overlay} setOverlay={setOverlay} />
      </Box>
    </>
  );
};

export default index;
