import { Box } from "@radix-ui/themes";
import MyImage from "./MyImage";
import MyDescription from "./MyDescription";
import DescriptionDetails from "./DescriptionDetails";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  return (
    <HomeWrapper>
      <Box className="flex  flex-col md:flex-row justify-center md:mx-12 md:gap-8  ">
        <Box className="md:w-md_w lg:w-2/5  ">
          <MyImage />
        </Box>
        <Box className="md:w-l_w lg:w-3/5    ">
          <Box className="md:mb-20">
            <MyDescription />
          </Box>
          <Box className="md:mt-28 lg:mt-10 mt-4.5rem sm:mt-28  ">
            <DescriptionDetails />
          </Box>
        </Box>
      </Box>
    </HomeWrapper>
  );
}

export default Home
