import { Project } from "./project";
import { Card } from "@radix-ui/themes";

interface Props {
  children: React.ReactNode;
  project: Project;
}

const ProjectCard = ({ children, project }: Props) => {
  return (
    <Card
      className="p-0 mx-3 sm:max-w-96  md:max-w-80 md:mx-0 lg:max-w-96 w-full"
      key={project.no}
    >
      {children}
    </Card>
  );
};

export default ProjectCard;
