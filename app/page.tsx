"use client";

import { Box, Text, Flex } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import MyName from "./components/MyName";
import Image from "next/image";
import background from "./public/images/IMG_20241025_084608_312-removebg-preview_5-removebg-preview (2).png";

const skills: string[] = [
  "MERN FULLSTACK DEVELOPER",
  "NEXT.JS DEVELOPER",
  "MOBILE APP DEVELOPER",
];

export default function Home() {
  const { wordletters, wordy } = useAnimatingWords(skills);

  const color: { [key: number]: string }[] = [
    { 0: "#e93d82", 1: "#3DD68C", 2: "#0090FF" },
  ];
  const colors = color[0][wordy];
  console.log(colors);

  return (
    <Box className="ms-0  z-50 absolute w-full left-0"  style={{ zIndex: "15",  }}>
      <Box className="md:flex ">
      <MyImage />
      <MyDescription colors={colors} wordletters={wordletters} />
      <Box>
        <DescriptionDetails />
        <ToolsInBag />
        </Box>
        </Box>
    </Box>
  );
}
const MyImage = () => {
  return (
    <div style={{}} className="   z-50">
      <Image
        src={background}
        alt=""
        //height={50}
        
        
        
        style={{
          borderRadius: "50%",
          
          margin: '0px auto',
          marginTop: "65px",
          height: '35vh',
          width: '80%'
          
        }}
        className="object-contain ms-0 border-b-8  border-purple-800 "
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
    <div>
      <Box
        style={{ zIndex: "50", top: '225px',  }}
        className="dark:bg-id_bg md:bg-inherit h-25 mt-0 md:mt-24 
    absolute  left-0 w-full z-50 dark:shadow-bs bg-id_bgw shadow-whi "
      >
        <Box className="my-0 ">
          <Text
            className="text-l md:text-xl"
            style={{
              textAlign: "center",
              display: "block",
              verticalAlign: "top",
            }}
          >
            Hello! my name is
            <Text
              color="crimson"
              style={{ fontWeight: "bolder" }}
              className="ms-2 text-xl"
            >
               ABD'GOFFAR BOLAJI LUKMAN
            </Text>
          </Text>
        </Box>

        <Text as="p" className="mx-2 text-center"> A proffesional</Text> 
        <Text
          as="p"
          style={{
            color: colors,
            fontWeight: "bold",

            textAlign: "center",

            whiteSpace: "normal",
            height: "30px",
            fontSize: '20px'
          }}
          className="text-2xl md:text-3xl  transition-all duration-1000"
          dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
        ></Text>
        <Text as="p" className="text-center md:mt-2 ">
          Based in Nigeria
        </Text>
      </Box>
      <div className="w-1/4"></div>
    </div>
  );
};
const DescriptionDetails = () => {
  return (
     <></>
   )
}
 
const ToolsInBag = () => {
  return (
    <>
      <div></div>
    
    </>
   )
 }