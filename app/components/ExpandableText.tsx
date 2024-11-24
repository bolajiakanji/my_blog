'use client'
import { Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;

  let limit = 60;

  let renderText =
    description.length <= limit
      ? description
      : !expanded
      ? description.slice(0, 83) + " ..."
      : description;

  let btn = !expanded ? "Read more" : "Show less";

  return (
    <>
      <Text as='span' style={{ whiteSpace: 'pre-wrap'}}>{renderText}</Text>
      {description.length >= limit && (
        <Text
          onClick={() => setExpanded(!expanded)}
          color="yellow"
          
          
        >
          {btn}
        </Text>
      )}
    </>
  );
};

export default ExpandableText;
