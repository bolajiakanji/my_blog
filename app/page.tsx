'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";


  
const array: string[] = ['1bkmfgfdvdgvgvdcdgdvg', '2jdhdgfgd df d ddgddg', '3uygfdd  fdsdfsdsfssf']


export default function Home() {

  const pro = useRef(0)
  
  const [me, setme] = useState<string>(array[pro.current])
  const [you, setyou] = useState < string[]>([]) 
  const [yo, setyo] = useState < string[]>([]) 
  const [cot, setcot] = useState <number>(1) 
 
  useEffect(()=>{
    let reset: NodeJS.Timeout
    const rem = setInterval(() => {
      if (cot > me.split('').length) {
        clearInterval(rem)
        pro.current++
        if (pro.current >= array.length) pro.current=0
        pro.current = pro.current
        console.log(pro.current)
       reset = setTimeout(() => {
          setme(array[pro.current])
          setyou([])
          setcot(1)
          
        }, 2000);
    return 
    
    
      }
    if (reset)  clearTimeout(reset)

   me.split('').forEach((a, b, c) => {
      if ((b + 1) !== cot) return
      
      setyou((meyou) => {
        let newarray = [...meyou]
        newarray.push(a)
          
        return newarray
      })
        
    
         

        
      })
      
    setcot(cot + 1)

  
}, 50)
    return () => {
      clearInterval(rem);
      clearTimeout(reset)
    }
  }, [cot, me]) ;
  
    return (
    <>
    <div>hello world. my name is bolaji.not showing pageok r</div>
        <div className="relative  w-40 h-32 bg-cyan-900 px-3">
          
          <div className="left-0 text-center  absolute w-full bg-yellow-400">nna</div></div>
        {you.map((s) => <span>{s}</span>)}
        
  </>
  
  );
}
