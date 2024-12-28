"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ClientBounding from "../../context/clientBounding";
import DescriptionProvider from "./DescriptionProvider";
import useDescription from "@/app/hooks/myDescription";

const HomeWrapper = ({ children }: PropsWithChildren) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const { isDescriptionFull } = useDescription();
  const { setCurrentBoundingClient } = useContext(ClientBounding);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setElement(ref.current);

    document.addEventListener("scroll", handleBoundingScroll);

    return () => document.removeEventListener("scroll", handleBoundingScroll);
  });
  const handleBoundingScroll = () => {
    const bounding = element?.getBoundingClientRect().top;

    if (bounding && bounding < 30 && bounding > -500) {
      
      setCurrentBoundingClient("home");
    }
  };
isDescriptionFull ? console.log('you'): console.log('me')
  return (
    <div
      ref={ref}
      id="home"
      className={`mt-5 z-20 relative ${isDescriptionFull ? "portrait:h-full" : "portrait:h-screen"
      } max-mmd:landscape:h-full h-screen `}
    >
      {children}
    </div>
  );
};

export default HomeWrapper;
