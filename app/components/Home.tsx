"use client";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ClientBounding from "../context/clientBounding";

const HomeWrapper = ({ children }: PropsWithChildren) => {
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

      if (bounding && (bounding < 30 && bounding > -500)) {
        console.log(bounding)
      setCurrentBoundingClient("home");
    }
  };

  return (
    <div ref={ref} id="home"   
    style={{ zIndex: "15" }}>
      {children}
    </div>
  );
};

export default HomeWrapper;
