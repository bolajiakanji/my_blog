"use client";

import { Box, Text, Flex, Button } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import MyName from "./components/MyName";
import Image from "next/image";
import background from "./public/images/IMG_20241025_084608_312-removebg-preview_5-removebg-preview (2).png";
import ExpandableText from "./components/ExpandableText";

const skills: string[] = [
  "MERN FULLSTACK DEVELOPER",
  "NEXT.JS DEVELOPER",
  "MOBILE APP DEVELOPER",
];

const description = `I'm skilled in buiding fast, scalable, and
optimised full-fledged web applications with an advanced
        seamless functionalities. I also develop super-fast
        and search engine friendly application
        with NEXT.js like web application you're on.`

export default function Home() {
  const { wordletters, wordy } = useAnimatingWords(skills);

  const color: { [key: number]: string }[] = [
    { 0: "#e93d82", 1: "#3DD68C", 2: "#0090FF" },
  ];
  const colors = color[0][wordy];
  console.log(colors);

  return (
    <Box className="mt-5  z-50 absolute  w-full left-0"  style={{ zIndex: "15",  }}>
      <Box className="md:flex  md:justify-center mx-3   ">
        <Box className="  ">
          <MyImage />
          </Box>
        <Box className="   " >
          <MyDescription colors={colors} wordletters={wordletters} />
        </Box>
    </Box>
      <Box className="  md:absolute top-40 md:w-5/12  left-1/2  " style={{ marginTop: '5rem'}}>
        <DescriptionDetails />
        
        </Box>
        </Box>
  );
}
const MyImage = () => {
  return (
    <div style={{   }} className="mx-auto   z-50 w-width_image md:w-full ">
      <Image
        src={background}
        alt=""
        //height={50}
        
        
        
        style={{
          borderRadius: "50%",
          
          width: '100%',
          marginTop: "40px",
          
          
          
          
        }}
        className="object-cover  border-b-8    border-purple-800 "
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
        style={{ zIndex: "50", top: '36vh',  }}
        className="dark:bg-id_bg  h-20 mt-0 md:mt-32 md-mx-0
    absolute md:static left-0 w-full z-50 dark:shadow-bs bg-id_bgw shadow-whi md:w-full   "
      >
        
          <Text
            className=" md:text-xl text-justify mx-2"
            style={{
              textAlign: "center",
              display: "block",
              verticalAlign: "",
            }}
          >
            Hello! my name is
            <Text
              color="crimson"
              style={{ fontWeight: "bolder" }}
              className="ms-2 text-lg md:text-2xl "
            >
               ABD'GOFFAR BOLAJI LUKMAN
            </Text>
          </Text>
        

        <Text as="p" className="mx-2 text-center mt-1 md:my-3  md:text-lg"> A proffesional</Text> 
        <Text
          as="p"
          style={{
            color: colors,
            fontWeight: "bold",

            textAlign: "center",

            whiteSpace: "normal",
            height: "25px",
            
          }}
          className="text-lg md:text-2xl lg:text-3xl  transition-all duration-1000"
          dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
        ></Text>
        <Text as="p" className="text-center mt-0 md:mt-3 ">
          Based in Nigeria
      </Text>
      
      </Box>
      
    
  );
};
const DescriptionDetails = () => {
  return (
    <>
    <Text as="p" className="mx-5 "><ExpandableText description={description}></ExpandableText></Text>
      
      <Box className="flex justify-start my-2 gap-5 mx-5"> 
        <Button variant='solid'className="">View my project</Button>
        <Button variant='surface' color="purple">View tools </Button>

      </Box>
      <Box className=" my-3 w-full flex justify-center">
        
        <Button color="green" variant="outline">Hire me </Button>
        </Box>
        <Box className="flex justify-center mt-5 animate-bounce h-5 ">
        <Box className="h-1 w-4  rotate-45 translate-x-2" style={{ backgroundColor: 'crimson'}}></Box>
        <Box className="h-1 w-4  -rotate-45 bg-green-600 "></Box>
</Box>

      </>
   )
}
 
