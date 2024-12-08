"use client";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ClientBounding from "../context/clientBounding";

const AboutMeWrapper = ({ children }: PropsWithChildren) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const { setCurrentBoundingClient } = useContext(ClientBounding);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setElement(ref.current);

    document.addEventListener("scroll", handleBoundingScroll);

    return () => document.removeEventListener("scroll", handleBoundingScroll);
  });
  const handleBoundingScroll = () => {
    const bounding = element?.getBoundingClientRect().top;

    if (bounding && (bounding < -10)) {
      console.log('about-me')
      setCurrentBoundingClient("about-me");
    }
  };

  return (
    <div ref={ref} id="about-me" className="h-screen bg-slate-700">
      {children}
    </div>
  );
};

export default AboutMeWrapper;
