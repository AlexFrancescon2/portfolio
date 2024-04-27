import React from "react";
// import { FaSort } from "@react-icons/all-files/fa/FaSort";

import { css } from "@/styles/system";
import { SelectOption } from "@/components/primitives/select/option";
import { Text } from "@/components/primitives/text";

import {
  directionSpacingVariants,
  fieldSizes,
} from "@/components/primitives/common";

export const Select = ({
  children,
  onChange,
  onClick,
  onMouseDown,
  onBlur,
  id,
  name,
  value,
  label,
  isDisabled,
  hasSpaceBottom,
  hasSpaceTop,
  hasSpaceLeft,
  hasSpaceRight,
  size,
  role,
  hasEllipsis,
  css,
  hasWhiteLabel,
}) => {
  return (
    <div>
      {label && (
        <Text
          css={{
            whiteSpace: "nowrap",
            color: hasWhiteLabel ? "$white" : "$black",
          }}
        >
          {label}
        </Text>
      )}
      <div
        className={flexWrapper({
          hasSpaceBottom,
          hasSpaceTop,
          hasSpaceLeft,
          hasSpaceRight,
        })}
      >
        <div className={wrapper()({ size })}>
          <select
            className={styles({
              hasEllipsis,
              css,
            })}
            id={id}
            name={name}
            onChange={onChange}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onBlur={onBlur}
            disabled={isDisabled}
            value={value}
            role={role}
          >
            {children}
          </select>
          {/* <Icon render={FaSort} hasFloatRight /> */}
        </div>
      </div>
    </div>
  );
};

Select.Option = SelectOption;

const flexWrapper = css({
  display: "flex",
  alignItems: "center",
  variants: {
    ...directionSpacingVariants,
  },
});

const wrapper = () =>
  css({
    color: "$black",
    position: "relative",
    display: "flex",
    width: "100%",
    variants: {
      size: fieldSizes,
    },
  });

const styles = css({
  appearance: "none",
  padding: "$12 $12",
  background: "white",
  border: "1px solid $grey4",
  borderRadius: "$1",
  fontSize: "$3",
  outline: "none",
  fontFamily: "$normal",
  color: "$grey6",
  width: "100%",
  position: "relative",
  display: "flex",
  transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
  backgroundImage: "none !important",
  cursor: "pointer",
  "&:focus": {
    borderColor: "$blue1",
  },
  "&:disabled": {
    border: "1px solid $grey4",
    background: "$grey2",
  },
  variants: {
    hasEllipsis: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  },
});
