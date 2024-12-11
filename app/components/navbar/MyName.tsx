'use client'
import React, { useEffect, useRef } from 'react'
import { Box } from '@radix-ui/themes';

const MyName = () => {
    const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    createCanvas(ref.current);
  
  }, []);

    return (
      <Box>
        <canvas
          ref={ref}
          width="100%"
          height="40"
          style={{ border: "none", zIndex: 30 }}
        />
      </Box>
    );
};
  


const createCanvas = (element: HTMLCanvasElement | null) => {
    const ctx = element?.getContext("2d");
    if (!ctx) return;
    const grd = ctx.createLinearGradient(0, 0, 100, 0);
    grd.addColorStop(0, "#e93d82");
    grd.addColorStop(0.5, "#3DD68C");
    grd.addColorStop(1, "#0090FF");
    ctx.font = "  2.5rem Arials";
    ctx.strokeStyle = grd;
    ctx.strokeText("Bolaji", 0, 30);
  };
  
  
export default MyName