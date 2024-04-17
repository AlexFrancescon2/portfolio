import React, { forwardRef } from "react";

import { css } from "@/styles/system";
import { Text } from "@/components/primitives/text";
import { Div } from "@/components/primitives/div";

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
  fontFamily: "$normal",
  padding: "$4 $4",
  border: "1px solid $grey4",
  borderRadius: "$4",
  maxWidth: "100%",
  maxHeight: "100%",
  color: "$black",
  background: "$white",
  "&:focus-visible": {
    border: "1px solid $blue1",
    outline: "none",
  },
  variants: {
    hasSpaceBottom: {
      true: {
        marginBottom: "$8",
      },
    },
    hasSpaceTop: {
      true: {
        marginTop: "$8",
      },
    },
    hasSpaceLeft: {
      true: {
        marginLeft: "$8",
      },
    },
    hasSpaceRight: {
      true: {
        marginRight: "$8",
      },
    },
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
    size: {
      small: {
        width: "200px",
      },
      medium: {
        width: "300px",
      },
      large: {
        width: "400px",
      },
      full: {
        width: "100%",
      },
    },
    hasError: {
      true: {
        border: "1px solid $red1",
      },
    },
  },
});
