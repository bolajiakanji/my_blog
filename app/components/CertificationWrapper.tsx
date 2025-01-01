"use client";
import React, {
  
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ClientBounding from "../context/clientBounding";

const CertificatitionWrapper = ({ children }: PropsWithChildren) => {
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

    if (bounding && (bounding < 200)) {
      console.log('certification')
      setCurrentBoundingClient("certification");
    }
  };

  return (
    <div ref={ref} id="certification" className=" ">
      {children}
    </div>
  );
};

export default CertificatitionWrapper;
