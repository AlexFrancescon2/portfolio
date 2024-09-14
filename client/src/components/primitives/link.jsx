import { css } from "@/styles/system";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, variant, size, color, to, css }) => {
  return (
    <>
      <span
        className={styles({
          variant,
          size,
          color,
          css,
        })}
      >
        <RouterLink to={to}>{children}</RouterLink>
      </span>
    </>
  );
};

const styles = css({
  variants: {
    color: {
      grey: { color: "$grey6" },
      lightGrey: { color: "$grey5" },
      blue: { color: "$blue1" },
      red: { color: "$red1" },
      white: { color: "$white" },
    },
    size: {
      xsmall: {
        fontSize: "$12",
      },
      small: {
        fontSize: "$14",
      },
      medium: {
        fontSize: "$16",
      },
      large: {
        fontSize: "$18",
      },
      xlarge: {
        fontSize: "$45",
        fontWeight: "bold",
      },
    },
  },
  "> a": {
    fontFamily: "$normal",
    color: "inherit",
    fontSize: "inherit",
  },
});
