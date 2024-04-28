import React, { forwardRef } from "react";

import { css } from "@/styles/system";
import { Text } from "@/components/primitives/text";
import { Div } from "@/components/primitives/div";

import {
  directionSpacingVariants,
  fieldSizes,
  fieldsCommonStyles,
} from "@/components/primitives/common";

export const TextArea = ({
  value,
  onChange,
  css,
  placeholder,
  size,
  rows,
  resizeDirection = "all",
  error,
  label,
  hasWhiteLabel,
  onKeyUp,
  onScroll,
  isDisabled,
  hasSpaceBottom,
  hasSpaceTop,
  hasSpaceRight,
  hasSpaceLeft,
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
      <Div isFlex css={{ width: "100%", position: "relative" }}>
        <textarea
          role="textarea"
          onKeyUp={onKeyUp}
          onScroll={onScroll}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={isDisabled}
          className={styles({
            resizeDirection,
            hasError: !!error,
            size,
            hasSpaceBottom,
            hasSpaceTop,
            hasSpaceRight,
            hasSpaceLeft,
            css,
          })}
        />
      </Div>
    </div>
  );
};

const styles = css({
  ...fieldsCommonStyles,
  maxWidth: "100%",
  maxHeight: "100%",
  "&:focus-visible": {
    border: "1px solid $blue1",
    outline: "none",
  },
  variants: {
    ...directionSpacingVariants,
    resizeDirection: {
      all: {
        resize: "both",
      },
      vertical: {
        resize: "vertical",
      },
      horizontal: {
        resize: "horizontal",
      },
      none: {
        resize: "none",
      },
    },
    size: fieldSizes,
  },
});
