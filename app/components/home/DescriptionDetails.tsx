import { Box, Button, Text } from "@radix-ui/themes";
import ExpandableText from "./ExpandableText";

const description = `I'm skilled in buiding fast, scalable, and optimised full-fledged web applications with an advancedseamless functionalities.

I also develop super-fastand search engine friendly application with NEXT.js like web application you're on.`;

const DescriptionDetails = () => {
  return (
    <>
      <Box className="mx-5 mb-3 md:mb-6 ">
        <Text
          as="p"
          className="hidden sm:block md:hidden whitespace-pre-wrap lg:block "
        >
          {description}
        </Text>
        <Box className="sm:hidden md:block lg:hidden">
          <ExpandableText description={description}></ExpandableText>
        </Box>
      </Box>
      <div className=" w-76 overflow-hidden mx-auto">
        <Box className="   flex justify-between ">
          <Box className=" ms-5 ">
            <Button variant="outline">View my project</Button>
          </Box>
          <Box className="me-14">
            <Button variant="surface" color="purple">
              Hire me
            </Button>
          </Box>
        </Box>
      </div>
      <Box className="flex justify-center mt-7 md:mt-20 animate-bounce h-5 md:h-9 ">
        <Box className="h-1 w-4  rotate-45 translate-x-2 bg-accentColor"></Box>
        <Box className="h-1 w-4 -rotate-45 bg-purple-600 "></Box>
      </Box>
    </>
  );
};

export default DescriptionDetails;
