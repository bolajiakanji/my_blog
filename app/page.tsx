'use client'

import useAnimatingWords from "./hooks/useAnimatingWords";

const skills: string[] = ['1bkmfgfdvdgvgvdcdgdvg', '2jdhdgfgd df d ddgddg', '3uygfdd  fdsdfsdsfssf']

export default function Home() {
  const { wordletters } = useAnimatingWords(skills)
  
  
    return (
    <>
    <div>hello world. my name is bolaji.not showing pageok r</div>
        <div className="relative  w-40 h-32 bg-cyan-900 px-3">
          
          <div className="left-0 text-center  absolute w-full bg-yellow-400">nna</div></div>
        {wordletters.map((s) => <span>{s}</span>)}
        
  </>
  
  );
}
