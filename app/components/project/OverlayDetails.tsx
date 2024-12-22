import { Badge, Box, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ExpandableText from "./ExpandableText";
import { Project } from "./project";
import { Overlay } from ".";

interface Props {
  project: Project;
  setOverlay?: (overlay: Overlay) => void;
  setOverlayOpen?: (isOverlayOpen: boolean) => void;
}

const OverlayDetails = ({ project, setOverlay, setOverlayOpen }: Props) => {
  const handleTextClick = (project: Project) => {
    if (setOverlay && setOverlayOpen) {
      setOverlay([project, "autoplay"]);
      setOverlayOpen(true);
    }
  };

  return (
    <Box className="mt-7 mx-4 ">
      <Heading as="h3" className="my-2 text-black dark:text-white ">
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
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem id amet repellendus, velit, asperiores labore non beatae modi soluta praesentium, recusandae tenetur aut sequi. Corrupti similique ab eveniet, mollitia rerum quasi voluptates aliquam. Quam, temporibus! Sed consequatur quod consectetur. Voluptate vitae cupiditate neque tempora quasi assumenda. Praesentium totam deleniti eos repellat. Eveniet error numquam delectus praesentium inventore aut quam, fuga vero pariatur tempore unde quasi officia illum? Ducimus, quis accusamus corrupti itaque vel esse eligendi aspernatur autem fugiat suscipit voluptates aliquam rem commodi necessitatibus dignissimos facere, obcaecati quisquam possimus quaerat architecto magnam? Sunt sit dignissimos exercitationem iste dolore odio.</p>      </Box>
    </Box>
  );
};

export default OverlayDetails;
