"use client";

import { Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;

  const limit = 80;

  const renderText =
    description.length <= limit
      ? description
      : !expanded
      ? description.slice(0, limit) + " ..."
      : description;

  const btn = !expanded ? "Read more" : " Show less";

  return (
    <>
      <Text as="span" className="whitespace-pre-wrap">
        {renderText}
      </Text>
      {description.length >= limit && (
        <Text
          onClick={() => setExpanded(!expanded)}
          size='1'
          color="gray"
        >
          {btn}
        </Text>
      )}
    </>
  );
};

export default ExpandableText;
