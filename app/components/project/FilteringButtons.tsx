import { Button } from "@radix-ui/themes";
import React from "react";

interface Props {
  handleOnclick: (category: string | "") => void;
  projectToRender: string;
  count: number;
}

const FilteringButtons = ({ handleOnclick, projectToRender, count }: Props) => {
  const objs = [
    { label: "All", value: "" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Mobile-App", value: "mobile-app" },
    { label: "Next.js", value: "nextjs" },
  ];
  return (
    <>
      {objs.map((obj) => (
        <Button
          key={obj.label}
          variant={obj.value === projectToRender ? "solid" : "surface"}
          onClick={() => handleOnclick(obj.value)}
          className="mb-2 rounded-full"
        >
          {`${obj.label} ${obj.value === projectToRender ? `(${count})` : ""}`}
        </Button>
      ))}
    </>
  );
};

export default FilteringButtons;
