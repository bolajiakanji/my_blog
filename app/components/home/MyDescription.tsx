import useAnimatingWords from "@/app/hooks/useAnimatingWords";
import { Box, Text } from "@radix-ui/themes";

const skills: string[] = [
  "MERN FULLSTACK DEVELOPER",
  "NEXT.JS DEVELOPER",
  "MOBILE APP DEVELOPER",
];

const color: { [key: number]: string }[] = [
  { 0: "#e93d82", 1: "#3DD68C", 2: "#0090FF" },
];

const MyDescription = () => {
  const { wordletters, wordy } = useAnimatingWords(skills);

  const colors = color[0][wordy];

  return (
    <Box className="mt-4 md:mt-32 lg:mt-36 w-full md:w-full">
      
      <Text as="span" className=" md:text-xl text-center block mx-4 md:mx-0">
        Hi! My name is
        <Text color="gray" className="ms-2 text-lg md:text-2xl">
          ABD-GOFFAR BOLAJI LUKMAN
        </Text>
      </Text>
      <Text as="p" className="mx-2 text-center mt-1 md:mt-4 md:text-lg">
        {" "}
        A proffesional
      </Text>
      <Text
        as="p"
        style={{color: colors}}
        className={`text-xl h-10 md:text-2xl text-center ${`text-${colors}`} whitespace-normal transition-all duration-1000`}
        dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
      ></Text>
    </Box>
  );
};

export default MyDescription;
