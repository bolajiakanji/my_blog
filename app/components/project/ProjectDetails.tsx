import { Badge, Box, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import ExpandableText from './ExpandableText'
import { Project } from './project'
import { Overlay } from '.';

interface Props {
    project: Project;
    setOverlay: (overlay: Overlay) => void
    setOverlayOpen: (isOverlayOpen: boolean) => void
}

const ProjectDetails = ({ project, setOverlay, setOverlayOpen }: Props) => {

    const handleTextClick = (project: Project) => {
        setOverlay([project, "autoplay"]), setOverlayOpen(true);
      };
    
  return (
    <Box className="mt-7 mx-5 ">
                      <Heading
                        as="h3"
                        className="my-2 text-black dark:text-white "
                      >
                        {project.title}
                      </Heading>
                      <ExpandableText
                        description={project.description}
                        limit={40}
                      ></ExpandableText>
                      <Text as="p" onClick={() => handleTextClick(project)}>
                        {project.no}
                      </Text>
                      <Box className="mt-7">
                        {project.tools?.map((tool) => (
                          <Badge key={tool} className="me-2">
                            {" "}
                            {tool}
                          </Badge>
                        ))}
          </Box>
          </Box>
          
  )
}

export default ProjectDetails