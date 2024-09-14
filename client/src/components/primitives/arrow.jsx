import { css } from "@/styles/system";
import { FaChevronRight } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { Icon } from "@/components/primitives/icon";

export const Arrow = ({ isActive, children }) => {
  return (
    <div className={wrapperStyle()}>
      <div className={arrow({ isActive })}>
        <div>
          <Icon
            render={isActive ? FaChevronRight : GoChevronRight}
            css={arrowStyle}
            color={isActive ? "secondary" : "white"}
          />
        </div>
        {children && (
          <span className={childrenStyle({ isActive })}>{children}</span>
        )}
      </div>
    </div>
  );
};

const wrapperStyle = css({
  marginBottom: "$8",
});

const arrow = css({
  display: "flex",
  position: "relative",
  "> div": {
    "&::before": {
      position: "relative",
      top: "-4px",
      width: "40px",
      height: "0.5px",
      background: "$white",
      content: "",
      display: "inline-block",
      verticalAlign: "middle",
      transition: "width 0.3s ease",
    },
  },
  "&:hover": {
    "> div": {
      "&::before": {
        width: "60px",
      },
    },
  },
  variants: {
    isActive: {
      true: {
        "> div": {
          "&::before": {
            width: "60px",
            height: "2px",
            background: "$secondary",
          },
        },
      },
    },
  },
});

const arrowStyle = {
  marginLeft: "-9px",
};

const childrenStyle = css({
  position: "absolute",
  left: "75px",
  top: "-1px",
  variants: {
    isActive: {
      true: {
        color: "$secondary",
      },
    },
  },
});
