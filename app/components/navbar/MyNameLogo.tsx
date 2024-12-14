"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@radix-ui/themes";

const MyNameLogo = () => {
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
        className="border-none z-30"
      />
    </Box>
  );
};

const createCanvas = (element: HTMLCanvasElement | null) => {
  const ctx = element?.getContext("2d");
  if (!ctx) return;
  const drawCanvas = ctx.createLinearGradient(0, 0, 100, 0);
  drawCanvas.addColorStop(0, "#e93d82");
  drawCanvas.addColorStop(0.5, "#3DD68C");
  drawCanvas.addColorStop(1, "#0090FF");
  ctx.font = "  2.5rem Arials";
  ctx.strokeStyle = drawCanvas;
  ctx.strokeText("Bolaji", 0, 30);
};

export default MyNameLogo;
