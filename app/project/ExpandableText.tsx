"use client";
import { Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  description: string;
  limit: number;
}

const ExpandableText = ({ description, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;

  let renderText =
    description.length <= limit
      ? description
      : !expanded
      ? description.slice(0, limit) + " ..."
      : `${description} `;

  let btn = !expanded ? "Read more" : "Show less";

  return (
    <>
      <Text as="span" size="3" color="gray" style={{ whiteSpace: "pre-wrap" }}>
        {renderText}
      </Text>
      {description.length >= limit && (
        <Text
          as="span"
          size="1"
          onClick={() => setExpanded(!expanded)}
          className="text-accentColor"
        >
          {btn}
        </Text>
      )}
    </>
  );
};

export default ExpandableText;
