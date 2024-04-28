import React, { useState } from "react";
import { CollapsibleItem } from "@/components/primitives/accordion/collapsable-item";
import { Text } from "@/components/primitives/text";

import { css } from "@/styles/system";
import { Icon } from "@/components/primitives/icon";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export const Collapsible = ({
  title,
  children,
  css,
  isDefaultOpen = false,
  rowCss,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  return (
    <div className={wrapperStyles({ css })}>
      <div
        className={contentStyles({ isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Icon render={FaChevronDown} hasSpaceRight />
        ) : (
          <Icon render={FaChevronRight} hasSpaceRight />
        )}
        <Text size="xlarge">{title}</Text>
      </div>
      {isOpen && <CollapsibleItem>{children}</CollapsibleItem>}
    </div>
  );
};

Collapsible.Item = CollapsibleItem;

const wrapperStyles = css({
  width: "100%",
  marginBottom: "$20",
});

const contentStyles = css({
  backgroundColor: "$primary",
  border: "1px solid $primary",
  borderRadius: "$4",
  cursor: "pointer",
  padding: "$4 $8",
  variants: {
    isOpen: {
      true: {
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      },
    },
  },
});
