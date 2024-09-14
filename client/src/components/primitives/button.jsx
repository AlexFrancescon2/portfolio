import { css } from "@/styles/system";
import { directionSpacingVariants } from "@/components/primitives/common";

export const Button = ({
  type = "button",
  onClick,
  variant,
  color,
  isInline,
  isError,
  isDisabled,
  hasSpaceRight,
  hasSpaceTop,
  hasSpaceLeft,
  hasSpaceBottom,
  isAuthorized = true,
  isAlignedRight,
  children,
  css,
  role,
  isFullWidth,
  dataIntercomTarget,
}) => {
  return (
    <div className={wrapper({ isFullWidth, isAlignedRight })}>
      <button
        data-intercom-target={dataIntercomTarget}
        type={type}
        role={role}
        onClick={onClick}
        className={styles({
          variant,
          color,
          isInline,
          isError,
          isDisabled,
          hasSpaceRight,
          hasSpaceTop,
          hasSpaceLeft,
          hasSpaceBottom,
          isAuthorized,
          isFullWidth,
          css,
        })}
        disabled={isDisabled || !isAuthorized}
      >
        {children}
      </button>
    </div>
  );
};

const wrapper = css({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  variants: {
    isAlignedRight: {
      true: {
        justifyContent: "flex-end",
      },
    },
    isFullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

const styles = css({
  display: "inline-flex",
  alignItems: "center",
  padding: "$8 $16 $8 $16",
  height: "$14",
  borderRadius: "$4",
  fontFamily: "$normal",
  fontSize: "$3",
  border: "none",
  color: "white",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
  },
  "&:focus": {
    outline: "none",
  },
  variants: {
    variant: {
      square: {
        marginLeft: "$1",
        padding: "0 $12 0 $12",
        background: "white",
        border: "1px solid $grey5",
        color: "$grey7",
        "&:hover": {
          background: "$grey9",
        },
      },
      outline: {
        border: "1px solid $grey4",
        background: "white",
        color: "$grey7",
        "&:hover": {
          background: "$grey9",
        },
      },
    },
    color: {
      blue: {
        background: "$blue1",
        border: "1px solid $blue1",
        "&:hover": {
          background: "$blue2",
          border: "1px solid $blue2",
        },
      },
      white: {
        background: "$white1",
        color: "black",
        border: "1px solid $grey4",
        "&:hover": {
          background: "$grey2",
        },
      },
      transparent: {
        background: "transparent",
      },
    },
    ...directionSpacingVariants,
    isInline: {
      true: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    isAuthorized: {
      false: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    isError: {
      true: {
        border: "1px solid $red1",
        background: "$red1",
        opacity: 1,
        color: "$white1",
        "&:hover": {
          border: "1px solid $red1",
          backgroundColor: "$red1 !important",
        },
      },
    },
    isFullWidth: {
      true: {
        width: "100%",
        justifyContent: "center",
      },
    },
  },
});
