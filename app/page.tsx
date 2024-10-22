'use client'


import { Box, Text } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";
import MyName from "./components/MyName";

const skills: string[] = ['A MERN fullstack developer', 'Next.js developer', 'Mobile app developer']

export default function Home() {
  const { wordletters, wordy } = useAnimatingWords(skills)

  const color: {[key: number]: string}[] = [
    { 0: 'yellow',
     1: '#3DD68C',
     2: '#0090FF'}
  
  ]
  const colors = color[0][wordy]
 console.log(colors)
  
  
  return (
      
      <Box style={{ zIndex: '1000' }} className="mt-20 md:mt-24">
        <Box className="flex gap-2 ">
          <Text style={{fontSize:'18px'}}>Hello! my name is</Text> 
          <Text color="yellow" style={{fontSize:'18px', fontWeight: 'bolder'}}>BOLAJI</Text>
      </Box>
      <Box className="h-14 mt-2">
    
        {wordletters.map((letter, a) =>
          <Text style={{
            color: colors, fontWeight: 'bold', fontSize: '2rem', textAlign: 'center',
            
          }} key={a} className=' leading-9 '>{letter}</Text>)}
        </Box>
      <Text as='p' className="mt-5 md:mt-0">Based in Nigeria</Text>
        
  </Box>
  
  );
}




