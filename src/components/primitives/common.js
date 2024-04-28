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
  border: "1px solid $grey4",
  borderRadius: "$4",
  fontFamily: "$normal",
  color: "$black",
  "&::placeholder": {
    color: "$grey1",
  },
};
