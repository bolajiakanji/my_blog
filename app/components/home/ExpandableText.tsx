"use client";

import useDescription from "@/app/hooks/myDescription";
import { Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { setDescriptionFull } = useDescription();

  if (!description) return null;

  const limit = 125;

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
          onClick={() => {
            setExpanded(!expanded);
            if (expanded) return setDescriptionFull(true);
            return setDescriptionFull(false);
          }}
          size="1"
          color="gray"
        >
          {btn}
        </Text>
      )}
    </>
  );
};

export default ExpandableText;
