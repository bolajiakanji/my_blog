"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ClientBounding from "../../context/clientBounding";
import useProjectWrapper from "@/app/hooks/projectWrapper";

const ProjectPageWrapper = ({ children }: PropsWithChildren) => {
  const { isOverlayOpen } = useProjectWrapper();
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const { setCurrentBoundingClient } = useContext(ClientBounding);

  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setElement(ref.current);
  //   console.log(ref.current + "number");
  //   if (isOverlayOpen) {
  //     element?.addEventListener("scroll", handleEvent);
  //     element?.addEventListener("wheel", handleEvent);
  //     element?.addEventListener("touchmove", handleEvent);
  //     element?.addEventListener("scroll", handleScroll);
  //   } else {
  //     remove();
  //   }
  //   return remove;
  // }, [isOverlayOpen]);
  useEffect(() => {
    setElement(ref.current);

    document.addEventListener("scroll", handleBoundingScroll);

    return () => document.removeEventListener("scroll", handleBoundingScroll);
  });
  const handleBoundingScroll = () => {
    const bounding = element?.getBoundingClientRect().top;

    if (bounding && bounding < 200) {
      setCurrentBoundingClient("project");
    }
  };

  const handleScroll = () => {
    element?.scrollTo(0, 0);
  };

  const handleEvent = (e: Event) => {
    e.preventDefault();
  };
  const remove = () => {
    element?.removeEventListener("scroll", handleScroll);
    element?.removeEventListener("scroll", handleEvent);
    element?.removeEventListener("wheel", handleEvent);
    element?.removeEventListener("touchmove", handleEvent);
  };

  return (
    <div
      ref={ref}
      id="project"
      className={`z-30 w-full mt-20 relative ${isOverlayOpen ? "w-full overflow-hidden " : "overflow-auto "
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectPageWrapper;
