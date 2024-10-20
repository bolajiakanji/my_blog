'use client'


import { Box } from "@radix-ui/themes";
import useAnimatingWords from "./hooks/useAnimatingWords";

const skills: string[] = ['MERN fullstack develeper', 'Next.js developer', 'Mobile app developer with react native']

export default function Home() {
  const { wordletters, letterCount, wordy } = useAnimatingWords(skills)

  const color: {[key: number]: string}[] = [
    { 0: '#E93D82',
     1: 'cyan',
     2: '#0090FF'}
  
  ]
  const colors = color[0][wordy]
 console.log(colors)
  
  
    return (
    <>
    <div>hello world. my name is bolaji.not showing pageok r</div>
        <div className="relative  w-40 h-32 bg-cyan-900 px-3">
          
          <div className="left-0 text-center  absolute w-full bg-yellow-400">nna</div></div>
        {wordletters.map((s, a) => <span  style={{color: colors, fontWeight: 'bolder', fontSize: '2.5rem'}} key={a} className={` font-boldbg-${colors}-300`}>{s}</span>)}
        
  </>
  
  );
}




