import { boxShadows } from "@/styles/tokens";

export const fieldSizes = {
  xs: {
    width: "60px",
  },
  small: {
    width: "200px",
  },
  medium: {
    width: "300px",
  },
  large: {
    width: "400px",
  },
  xl: {
    width: "800px",
  },
  full: {
    width: "100%",
  },
};

export const directionSpacingVariants = {
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
};

export const fieldsCommonStyles = {
  padding: "$4 $8",
  minHeight: "$28",
  background: "$white",
  border: "0px",
  backgroundColor: "$secondary2",
  // border: "1px solid $grey4",
  borderRadius: "$8",
  fontFamily: "$normal",
  color: "$black",
  boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
  "&::placeholder": {
    color: "$grey3",
  },
  "&:focus": {
    // borderColor: "$primary",
    boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.2)",
  },
  "&:disabled": {
    border: "1px solid $grey4",
    background: "$grey2",
    cursor: "not-allowed !important",
  },
  "&:focus-visible": {
    // border: "1px solid $primary",
    border: "0px",
    boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.4)",
    outline: "none",
  },
};
