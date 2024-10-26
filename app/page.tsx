"use client";

import { Box, Text, Flex } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import MyName from "./components/MyName";
import Image from "next/image";
import background from "./public/images/IMG_20241025_084608_312-removebg-preview_5-removebg-preview (2).png";

const skills: string[] = [
  "A MERN fullstack developer",
  "Next.js developer",
  "Mobile app developer",
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
        
        
        
        className="object-contain ms-0 "
        style={{
          borderRadius: "50%",
          marginTop: "60px",
          borderBottom: "6px solid crimson",
          margin: '30px auto',
          height: '35vh',
          width: '80%'

        }}
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
        style={{ zIndex: "50" }}
        className="bg-id_bg md:bg-inherit h-32 mt-20 md:mt-24 
    md:absolute md:top-44 md:left-0 w-full z-50"
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
              BOLAJI
            </Text>
          </Text>
        </Box>

        <Text
          as="p"
          style={{
            color: colors,
            fontWeight: "bold",

            textAlign: "center",

            whiteSpace: "normal",
            height: "30px",
          }}
          className="text-xl md:text-3xl my-1"
          dangerouslySetInnerHTML={{ __html: `${wordletters.join("")}` }}
        ></Text>
        <Text as="p" className="text-center md:mt-2">
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
      <div>jskjfhgvsgieieooro</div>
    
    </>
   )
 }