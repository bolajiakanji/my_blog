'use client'
import React, { useEffect, useRef } from 'react'
import { Box } from '@radix-ui/themes';

const MyCurve = () => {
    const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createCanvas(ref.current);
  
  }, []);

    return (
      <Box>
        <canvas
          ref={ref}
          width="1000"
                height="60"
                
          style={{display:'block', background: 'orange',width: '100%',overflowX:'hidden', border: "2px solid  red", zIndex: 30 }}
        />
      </Box>
    );
};
  


const createCanvas = (element: HTMLCanvasElement | null) => {
    const ctx = element?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.bezierCurveTo(300, 120, 600,0,  1000,0 );
    ctx.lineWidth=2
    
    ctx.strokeStyle = 'crimson'
    ctx.clip()
    ctx.stroke()
    ctx.restore()
    
  };
  
  
export default MyCurve