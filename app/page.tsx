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
    <Box className="mt-5  z-50 absolute  w-full left-0"  style={{ zIndex: "15",  }}>
      <Box className="md:flex  md:justify-center mx-3   ">
        <Box className="  ">
          <MyImage />
          </Box>
        <Box className="   " >
          <MyDescription colors={colors} wordletters={wordletters} />
        </Box>
    </Box>
      <Box className=" ">
        <DescriptionDetails />
        <ToolsInBag />
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
          marginTop: "50px",
          
          
          
          
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
        style={{ zIndex: "50", top: '39vh',  }}
        className="dark:bg-id_bg  h-25 mt-0 md:mt-32 md-mx-0
    absolute md:static left-0 w-full z-50 dark:shadow-bs bg-id_bgw shadow-whi md:w-full   "
      >
        
          <Text
            className="text-l md:text-xl text-justify"
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
              className="ms-2 text-xl md:text-2xl "
            >
               ABD'GOFFAR BOLAJI LUKMAN
            </Text>
          </Text>
        

        <Text as="p" className="mx-2 text-center md:my-3"> A proffesional</Text> 
        <Text
          as="p"
          style={{
            color: colors,
            fontWeight: "bold",

            textAlign: "center",

            whiteSpace: "normal",
            height: "30px",
            
          }}
          className="text-xl md:text-2xl lg:text-3xl  transition-all duration-1000"
          dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
        ></Text>
        <Text as="p" className="text-center md:mt-3 ">
          Based in Nigeria
        </Text>
      </Box>
      
    
  );
};
const DescriptionDetails = () => {
  return (
     <>dfghgdfjhgfdfgjjhtd</>
   )
}
 
const ToolsInBag = () => {
  return (
    <>
      <div>fhgjfgjhjkffghgjkjhfggjhk</div>
    
    </>
   )
 }