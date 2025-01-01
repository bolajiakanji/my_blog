import { Box } from "@radix-ui/themes";
import MyImage from "./MyImage";
import MyDescription from "./MyDescription";
import DescriptionDetails from "./DescriptionDetails";
import dynamic from "next/dynamic";



const HomeWrapper = dynamic(
  () => import('./HomeWrapper'),
  { ssr: false }
)


const Home = () => {
  return (
    <HomeWrapper>
      <Box className="flex flex-col md:flex-row justify-center md:ms-5 md:me-2 lg:mx-10 md:gap-2 lg:gap-8">
        <Box className="md:w-46% lg:w-2/5 mt-3">
          <MyImage />
        </Box>
        <Box className="md:w-54% lg:w-3/5">
          <Box className="md:mb-3">
            <MyDescription />
          </Box>
          <Box className=" ">
            <DescriptionDetails />
          </Box>
        </Box>
      </Box>
    </HomeWrapper>
  );
}

export default Home
