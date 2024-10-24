"use client";

import { Box, Text } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import MyName from "./components/MyName";
import Image from "next/image";
import background  from './public/images/IMG_20241023_104616_860_2-removebg-preview.png'

const skills: string[] = [
  "A MERN fullstack developer",
  "Next.js developer",
  "Mobile app developer",
];

export default function Home() {
  const { wordletters, wordy } = useAnimatingWords(skills);

  const color: { [key: number]: string }[] = [
    { 0: "crimson", 1: "#3DD68C", 2: "#0090FF" },
  ];
  const colors = color[0][wordy];
  console.log(colors);

  return (
    <>
      <Image
        src={background}
        alt=""
        className="object-contain"
style={{ borderRadius: '50%', marginTop: '30px', borderBottom: '6px solid crimson'}}
      
      />
    <Box style={{ zIndex: "1000",backgroundColor:'rgb(0, 0, 0), 1'}} className="mt-20 md:mt-24 absolute top-40 left-0 w-full z-50">
      <Box className="my-0 ">
        <Text className="text-l md:text-xl"  style={{  textAlign:'center', display:'block',verticalAlign: 'top' }}>Hello! my name is
        <Text
          color="crimson"
            style={{  fontWeight: "bolder" }}
            className="ms-2 text-xl"
        >
           BOLAJI
        </Text></Text>
      </Box>
      {/* <div style={{margin: '0 auto', display: 'block', textAlign:'center', wordWrap:"normal"}} className="h-14 mt-2  bg-zinc-900">
        {wordletters.map((letter, a) => (
          <Text
            style={{
              color: colors,
              fontWeight: "bold",
              fontSize: "2rem",
              textAlign: "center",
              display: "inline-block",
              margin: "0 auto",
            }}
            key={a}
            className=" leading-9 sm:text-center  "
            dangerouslySetInnerHTML={{__html: `${letter}`}}
          >
            
          </Text>
        ))}
      </div> */}
      <Text as="p" style={{
              color: colors,
              fontWeight: "bold",
              
        textAlign: "center",
        
        whiteSpace: 'normal',
        height:'30px'
        
        
              
              
            }} className="text-xl md:text-3xl my-1" dangerouslySetInnerHTML={{__html: `${wordletters.join('')}`}}></Text>
      <Text as="p" className="text-center md:mt-2">
        Based in Nigeria
      </Text>
      </Box>
      </>
  );
}
