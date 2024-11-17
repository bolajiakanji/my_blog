import { Button } from "@radix-ui/themes";
import React from "react";

interface Props {
  handleOnclick: (category: string | "") => void;
    render: string;
    count: number
}

const FilteringButtons = ({ handleOnclick, render, count }: Props) => {
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
          variant={obj.value === render ? "solid" : "surface"}
              onClick={() => handleOnclick(obj.value)}
              className="mb-2"
        >
              {`${obj.label} ${obj.value === render ? `(${count})` : ''}`}
        </Button>
      ))}
    </>
  );
};

export default FilteringButtons;
