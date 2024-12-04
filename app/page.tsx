"use client";

import { Box, Text, Button } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import Image from "next/image";
import background from "./public/images/IMG_20241025_084608_312-removebg-preview_5-removebg-preview (2).png";
import ExpandableText from "./components/ExpandableText";
import MyProject from "./project/MyProject";
import AboutMe from "./components/AboutMe";

const skills: string[] = [
  "MERN FULLSTACK DEVELOPER",
  "NEXT.JS DEVELOPER",
  "MOBILE APP DEVELOPER",
];

const description = `I'm skilled in buid

ing fast, scalable, and
optimised full-fledged web applications with an advancedseamless functionalities. I also develop super-fastand search engine friendly application with NEXT.js like web application you're on.`;

// const kb = 'jfjd\nhdjksyujksshdks'

export default function Home() {
  const { wordletters, wordy } = useAnimatingWords(skills);

  const color: { [key: number]: string }[] = [
    { 0: "#e93d82", 1: "#3DD68C", 2: "#0090FF" },
  ];
  const colors = color[0][wordy];
  

  return (
    <Box
      className="mt-5  "
      style={{ zIndex: "15" }}
    >
      <Box className="flex  flex-col md:flex-row  justify-center   md:mx-12 md:gap-8  ">
        <Box className="md:w-md_w  lg:w-2/5  ">
          <MyImage />
        </Box>
        <Box className="md:w-l_w lg:w-3/5    ">
          <Box className="md:mb-20">
            <MyDescription colors={colors} wordletters={wordletters} />
          </Box>

          <Box className="md:mt-28 lg:mt-10 mt-4.5rem sm:mt-28  " >
            <DescriptionDetails />
          </Box>
        </Box>
      </Box>
      <AboutMe />
      <MyProject />
    </Box>
  );
}
const MyImage = () => {
  return (
    <div style={{}} className="mx-auto   z-50 w-width_image md:w-full ">
      <Image
        src={background}
        alt=""
        //height={50}

        style={{
          borderRadius: "50%",

          width: "100%",
          marginTop: "40px",
        }}
        className="object-cover  border-b-8    border-purple-800 md: lg:h-he md:h-96 "
      />
    </div>
  );
};

const MyDescription = ({
  colors,
  wordletters,
}: {
  colors: string;
  wordletters: string[];
}) => {
  return (
    <Box
      style={{ zIndex: "50", top: "36vh" }}
      className="dark:bg-id_bg  h-12 sm:mt-6   md:mt-24 lg:mt-36 md-mx-0 
    absolute md:static left-0 w-full z-50 dark:shadow-bs bg-id_bgw shadow-whi md:w-full    "
    >
      <Text
        className=" md:text-xl text-justify mx-4 md:mx-0"
        style={{
          textAlign: "center",
          display: "block",
          
        }}
      >
        Hello! my name is
        <Text
          color="crimson"
          style={{ fontWeight: "bolder" }}
          className="ms-2 text-lg md:text-2xl "
        >
          ABD-GOFFAR BOLAJI LUKMAN
        </Text>
      </Text>

      <Text as="p" className="mx-2 text-center mt-1 md:mt-4  md:text-lg">
        {" "}
        A proffesional
      </Text>
      <Text
        as="p"
        style={{
          color: colors,
          fontWeight: "bold",

          textAlign: "center",

          whiteSpace: "normal",
          height: "25px",
        }}
        className="text-xl md:text-2xl   transition-all duration-1000"
        dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
      ></Text>
    </Box>
  );
};
const DescriptionDetails = () => {
  return (
    <>
      <Box className="mx-5 mb-3 md:mb-6 " style={{ }}>
        <Text as="p" style={{ whiteSpace: 'pre-wrap'}} className="hidden sm:block md:hidden lg:block lg:leading-8 space-x-3 lg:tracking-widest ">{description}</Text>
        <Box className="sm:hidden md:block lg:hidden">
          <ExpandableText description={description}></ExpandableText>
          </Box>
      </Box>

      <div className=" w-76 overflow-hidden mx-auto">
        <Box className="   flex justify-between ">
          <Box className=" ms-5 ">
            <Button variant="outline" className="">
              View my project
            </Button>
          </Box>
          <Box className="me-14">
            <Button variant="surface" color="purple">
              View tools{" "}
            </Button>
          </Box>
        </Box>
      </div>

      <Box className=" my-3 md:my:5 flex justify-center">
        <Button color="green" variant="solid">
          Hire me{" "}
        </Button>
      </Box>
      <Box className="flex justify-center mt-7 md:mt-96 animate-bounce h-5 md:h-9 ">
        <Box
          className="h-1 w-4  rotate-45 translate-x-2"
          style={{ backgroundColor: "crimson" }}
        ></Box>
        <Box className="h-1 w-4  -rotate-45 bg-green-600 "></Box>
      </Box>
    </>
  );
};

